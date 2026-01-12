import type { Rule } from "./RuleDefinitions.js";
import { RuleDefinitions } from "./RuleDefinitions.js";

export class Kekuria {
  generated_words: string[];
  references: Array<[string, string]>;
  rule_definitions: RuleDefinitions;

  constructor(ruleDefinitions: RuleDefinitions) {
    this.generated_words = [];
    this.references = [];
    this.rule_definitions = ruleDefinitions;
  }

  get_reference(ruleName: string, position: number): string {
    return this.references.filter((reference) => reference[0] === ruleName)[
      position
    ][1];
  }

  get_rule(ruleName: string): Rule {
    return this.rule_definitions.definitions[ruleName];
  }

  kekure(ruleName: string): string {
    return this.rule_definitions.kekure(ruleName, this);
  }

  push_reference(ruleName: string, word: string): void {
    this.references.push([ruleName, word]);
  }
}
