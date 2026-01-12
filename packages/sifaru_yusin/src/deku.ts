import * as antlr4 from "antlr4";
import DekuRuleLexer from "./DekuRuleLexer.js";
import DekuRuleParser, {
  ChoiceWordContext,
  DifferenceLhsContext,
  DifferenceRhsContext,
  DifferenceWordContext,
  ElementWordContext,
  ReferenceWordContext,
  RootContext,
  SequenceWordContext,
  WordContext,
  WordDefinitionContext,
} from "./DekuRuleParser.js";
import {
  ChoiceRule,
  ChoiceRuleItem,
  createWordNameRef,
  DifferenceRule,
  ReferenceRule,
  Rule,
  RuleDefinitions,
  SequenceRule,
  StringRule,
  type WordNameRef,
} from "./RuleDefinitions.js";
import { Kekuria } from "./Kekuria.js";

const parseStringLiteral = (value: string): string => {
  try {
    return JSON.parse(value) as string;
  } catch {
    return value.slice(1, -1);
  }
};

class Visitor {
  visit(node: unknown): unknown {
    if (node instanceof RootContext) return this.visitRoot(node);
    if (node instanceof ChoiceWordContext) return this.visitChoiceWord(node);
    if (node instanceof DifferenceLhsContext)
      return this.visitDifferenceLhs(node);
    if (node instanceof DifferenceRhsContext)
      return this.visitDifferenceRhs(node);
    if (node instanceof DifferenceWordContext)
      return this.visitDifferenceWord(node);
    if (node instanceof ElementWordContext) return this.visitElementWord(node);
    if (node instanceof ReferenceWordContext)
      return this.visitReferenceWord(node);
    if (node instanceof SequenceWordContext)
      return this.visitSequenceWord(node);
    if (node instanceof WordContext) return this.visitWord(node);
    if (node instanceof WordDefinitionContext)
      return this.visitWordDefinition(node);
    throw new Error("Unknown rule context.");
  }

  visitRoot(context: RootContext): RuleDefinitions {
    const ruleDefinitions = new RuleDefinitions();
    for (const child of context.wordDefinition_list()) {
      const wordDefinition = this.visitWordDefinition(child);
      ruleDefinitions.define(wordDefinition.word_name, wordDefinition.word);
    }
    return ruleDefinitions;
  }

  visitChoiceWord(context: ChoiceWordContext): ChoiceRule {
    const sequences = context.sequenceWord_list();
    const weights = context.PositiveInteger_list();
    if (sequences.length !== weights.length) {
      throw new Error("ChoiceWord sequences and weights mismatch.");
    }
    const items = sequences.map((sequence, index) => {
      const rule = this.visitSequenceWord(sequence);
      const weight = Number.parseInt(weights[index].getText(), 10);
      return new ChoiceRuleItem(rule, weight);
    });
    return new ChoiceRule(items);
  }

  visitDifferenceLhs(context: DifferenceLhsContext): Rule | WordNameRef {
    const choiceWord = context.choiceWord();
    if (choiceWord) {
      return this.visitChoiceWord(choiceWord);
    }
    const wordName = context.WordName();
    if (wordName) {
      return createWordNameRef(wordName.getText());
    }
    throw new Error("Invalid difference lhs.");
  }

  visitDifferenceRhs(context: DifferenceRhsContext): Rule | WordNameRef {
    const stringToken = context.String();
    if (stringToken) {
      return new StringRule(parseStringLiteral(stringToken.getText()));
    }
    const wordName = context.WordName();
    if (wordName) {
      return createWordNameRef(wordName.getText());
    }
    const referenceWord = context.referenceWord();
    if (referenceWord) {
      return this.visitReferenceWord(referenceWord);
    }
    throw new Error("Invalid difference rhs.");
  }

  visitDifferenceWord(context: DifferenceWordContext): DifferenceRule {
    const lhs = this.visitDifferenceLhs(context.differenceLhs());
    const rhs = this.visitDifferenceRhs(context.differenceRhs());
    return new DifferenceRule(lhs, rhs);
  }

  visitElementWord(context: ElementWordContext): Rule | WordNameRef {
    const word = context.word();
    if (word) {
      return this.visitWord(word);
    }
    const wordName = context.WordName();
    if (wordName) {
      return createWordNameRef(wordName.getText());
    }
    const stringToken = context.String();
    if (stringToken) {
      return new StringRule(parseStringLiteral(stringToken.getText()));
    }
    const referenceWord = context.referenceWord();
    if (referenceWord) {
      return this.visitReferenceWord(referenceWord);
    }
    throw new Error("Invalid element word.");
  }

  visitReferenceWord(context: ReferenceWordContext): ReferenceRule {
    const wordName = context.WordName().getText();
    const position = Number.parseInt(context.PositiveInteger().getText(), 10);
    return new ReferenceRule(wordName, position);
  }

  visitSequenceWord(context: SequenceWordContext): Rule {
    const children = context.elementWord_list().map((child) => {
      return this.visitElementWord(child);
    });
    if (children.length === 1) {
      return children[0] as Rule;
    }
    return new SequenceRule(children);
  }

  visitWord(context: WordContext): Rule | WordNameRef {
    const choiceWord = context.choiceWord();
    if (choiceWord) return this.visitChoiceWord(choiceWord);
    const differenceWord = context.differenceWord();
    if (differenceWord) return this.visitDifferenceWord(differenceWord);
    const elementWord = context.elementWord();
    if (elementWord) return this.visitElementWord(elementWord);
    const sequenceWord = context.sequenceWord();
    if (sequenceWord) return this.visitSequenceWord(sequenceWord);
    throw new Error("Invalid word.");
  }

  visitWordDefinition(context: WordDefinitionContext): {
    word_name: string;
    word: Rule;
  } {
    const wordName = context.WordName().getText();
    const word = this.visitWord(context.word()) as Rule;
    return { word_name: wordName, word };
  }
}

export const parse_deku_rule = (dekuRule: string): RuleDefinitions => {
  const chars = new antlr4.InputStream(dekuRule);
  const lexer = new DekuRuleLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new DekuRuleParser(tokens);
  parser.buildParseTrees = true;
  const tree = parser.root();
  return new Visitor().visit(tree) as RuleDefinitions;
};

export const DEKU_RULES = `
V = "a" 1 | "i" 1 | "u" 1 ;

C = "F" 3 |
    "P" 1 |
    "B" 1 |
    "M" 3 |
    "S" 3 |
    "Z" 2 |
    "T" 3 |
    "D" 3 |
    "N" 5 |
    "X" 1 |
    "J" 1 |
    "C" 1 |
    "R" 5 |
    "K" 3 |
    "G" 2 |
    "H" 3 |
    "ʻ" 3 ;

DEKU =
    { C
      V
      { ref(V 0) 2 | { V - ref(V 0) } 1 }
      { ref(C 0) 1 | { C - ref(C 0) } 1 } } 2 |
    { C
      V
      { ref(C 0) 1 | { C - ref(C 0) } 1 }
      { ref(V 0) 2 | { V - ref(V 0) } 1 } } 2 |
    { V
      C
      { ref(V 0) 2 | { V - ref(V 0) } 1 }
      { ref(C 0) 1 | { C - ref(C 0) } 1 } } 2 |
    { V
      { C - "ʻ" }
      { ref(C 0) 1 | { C - ref(C 0) } 1 }
      { ref(V 0) 2 | { V - ref(V 0) } 1 } } 2 |
    { C V } 1 |
    { V C } 1 ;
`.trim();

export class DekuRules {
  parsed_rules: RuleDefinitions;
  rules: string;

  constructor() {
    this.parsed_rules = parse_deku_rule(DEKU_RULES);
    this.rules = DEKU_RULES;
  }

  kekure(): string {
    return new Kekuria(this.parsed_rules).kekure("DEKU");
  }

  reset_rules(): void {
    this.rules = DEKU_RULES;
  }

  set_rules(rules: string): void {
    const parsedRules = parse_deku_rule(rules);
    this.parsed_rules = parsedRules;
    this.rules = rules;
  }
}
