import type { Kekuria } from "./Kekuria.js";

export type WordNameRef = { kind: "WordName"; value: string };

const isWordNameRef = (value: unknown): value is WordNameRef => {
  return (
    typeof value === "object" &&
    value !== null &&
    (value as WordNameRef).kind === "WordName"
  );
};

export abstract class Rule {
  abstract kekure(kekuria: Kekuria): string;
}

export class RuleDefinitions {
  definitions: Record<string, Rule>;

  constructor() {
    this.definitions = {};
  }

  define(ruleName: string, rule: Rule): void {
    this.definitions[ruleName] = rule;
  }

  kekure(ruleName: string, kekuria: Kekuria): string {
    return this.definitions[ruleName].kekure(kekuria);
  }
}

export class ChoiceRuleItem {
  rule: Rule;
  weight: number;

  constructor(rule: Rule, weight: number) {
    this.rule = rule;
    this.weight = weight;
  }
}

export class ChoiceRule extends Rule {
  items: ChoiceRuleItem[];

  constructor(items: ChoiceRuleItem[]) {
    super();
    this.items = items;
  }

  kekure(kekuria: Kekuria): string {
    const gauge =
      this.items.reduce((sum, item) => sum + item.weight, 0) * Math.random();
    let meter = 0;
    for (const item of this.items) {
      meter += item.weight;
      if (meter > gauge) {
        return item.rule.kekure(kekuria);
      }
    }
    throw new Error("No choice selected.");
  }
}

export class DifferenceRule extends Rule {
  lhs: Rule | WordNameRef;
  rhs: Rule | WordNameRef;

  constructor(lhs: Rule | WordNameRef, rhs: Rule | WordNameRef) {
    super();
    this.lhs = lhs;
    this.rhs = rhs;
  }

  kekure(kekuria: Kekuria): string {
    const lhsRule = isWordNameRef(this.lhs)
      ? kekuria.get_rule(this.lhs.value)
      : this.lhs;

    if (!(lhsRule instanceof ChoiceRule)) {
      throw new Error("Can't get a difference except from a ChoiceRule.");
    }

    let rhsRule: Rule;
    if (isWordNameRef(this.rhs)) {
      rhsRule = kekuria.get_rule(this.rhs.value);
    } else if (this.rhs instanceof ReferenceRule) {
      rhsRule = new StringRule(this.rhs.kekure(kekuria));
    } else {
      rhsRule = this.rhs;
    }

    let rhsValues: string[] = [];
    if (rhsRule instanceof ChoiceRule) {
      rhsValues = rhsRule.items.map((item) => {
        if (!(item.rule instanceof StringRule)) {
          throw new Error(
            "Can't get a difference by a ChoiceRule of not StringRule-s.",
          );
        }
        return item.rule.value;
      });
    } else if (rhsRule instanceof StringRule) {
      rhsValues = [rhsRule.value];
    } else {
      throw new Error(
        "Can't get a difference except by a ChoiceRule or a StringRule.",
      );
    }

    const newItems: ChoiceRuleItem[] = [];
    for (const item of lhsRule.items) {
      if (!(item.rule instanceof StringRule)) {
        throw new Error(
          "Can't get a difference except from a ChoiceRule of StringRule-s.",
        );
      }
      if (!rhsValues.includes(item.rule.value)) {
        newItems.push(item);
      }
    }

    const word = new ChoiceRule(newItems).kekure(kekuria);
    if (isWordNameRef(this.lhs)) {
      kekuria.push_reference(this.lhs.value, word);
    }
    return word;
  }
}

export class ReferenceRule extends Rule {
  rule_name: string;
  position: number;

  constructor(ruleName: string, position: number) {
    super();
    this.rule_name = ruleName;
    this.position = position;
  }

  kekure(kekuria: Kekuria): string {
    return kekuria.get_reference(this.rule_name, this.position);
  }
}

export class SequenceRule extends Rule {
  children: Array<Rule | WordNameRef>;

  constructor(children: Array<Rule | WordNameRef>) {
    super();
    this.children = children;
  }

  kekure(kekuria: Kekuria): string {
    const words: string[] = [];
    for (const child of this.children) {
      if (child instanceof Rule) {
        words.push(child.kekure(kekuria));
      } else if (isWordNameRef(child)) {
        const ruleName = child.value;
        const word = kekuria.kekure(ruleName);
        kekuria.push_reference(ruleName, word);
        words.push(word);
      }
    }
    return words.join("");
  }
}

export class StringRule extends Rule {
  value: string;

  constructor(value: string) {
    super();
    this.value = value;
  }

  kekure(_kekuria: Kekuria): string {
    return this.value;
  }
}

export const createWordNameRef = (value: string): WordNameRef => ({
  kind: "WordName",
  value,
});

export const isWordNameReference = isWordNameRef;
