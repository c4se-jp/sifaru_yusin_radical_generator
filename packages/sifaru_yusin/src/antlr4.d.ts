declare module "antlr4" {
  export class CharStream {}

  export class Token {
    static EOF: number;
    type: number;
  }

  export class TokenStream {}

  export class RuleContext {
    constructor(parent?: RuleContext, invokingState?: number);
  }

  export class ParserRuleContext extends RuleContext {
    parser?: Parser;
    exception?: unknown;
    constructor(parent?: ParserRuleContext, invokingState?: number);
    getTypedRuleContext<T>(ctxType: { new (...args: any[]): T }, i: number): T;
    getTypedRuleContexts<T>(ctxType: { new (...args: any[]): T }): T[];
    getToken(tokenType: number, i: number): TerminalNode;
    getTokens(tokenType: number): TerminalNode[];
  }

  export class TerminalNode {
    getText(): string;
  }

  export class RuleNode {}

  export class ParseTreeListener {}

  export class ATN {
    static INVALID_ALT_NUMBER: number;
    decisionToState: DecisionState[];
  }

  export class DecisionState {}

  export class DFA {
    constructor(state: DecisionState, index: number);
  }

  export class ATNDeserializer {
    deserialize(data: number[]): ATN;
  }

  export class PredictionContextCache {}

  export class RecognitionException extends Error {}

  export class NoViableAltException extends Error {
    constructor(...args: any[]);
  }

  export class FailedPredicateException extends Error {
    constructor(...args: any[]);
  }

  export class BailErrorStrategy {}

  export class ParserATNSimulator {
    constructor(...args: any[]);
    adaptivePredict(...args: any[]): number;
  }

  export class LexerATNSimulator {
    constructor(...args: any[]);
  }

  export class Lexer {
    _interp: any;
    constructor(input: CharStream);
  }

  export class Parser {
    static EOF: number;
    _interp: any;
    buildParseTrees: boolean;
    _ctx: any;
    state: number;
    _errHandler: any;
    _input: any;
    constructor(input: TokenStream);
    enterRule(...args: any[]): void;
    enterOuterAlt(...args: any[]): void;
    match(...args: any[]): any;
    exitRule(): void;
    get grammarFileName(): string;
    get literalNames(): Array<string | null>;
    get symbolicNames(): Array<string | null>;
    get ruleNames(): string[];
    get serializedATN(): number[];
  }

  export class CommonTokenStream {
    constructor(lexer: Lexer);
  }

  export class InputStream {
    constructor(input: string);
  }

  export const Interval: any;
  export const IntervalSet: any;
  export const PredictionMode: any;
  export const tree: any;
}
