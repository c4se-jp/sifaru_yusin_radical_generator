// Generated from src/DekuRule.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
  ATN,
  ATNDeserializer,
  CharStream,
  DecisionState,
  DFA,
  Lexer,
  LexerATNSimulator,
  RuleContext,
  PredictionContextCache,
  Token,
} from "antlr4";
export default class DekuRuleLexer extends Lexer {
  public static readonly CloseArguments = 1;
  public static readonly CloseParenthesis = 2;
  public static readonly DefineOperator = 3;
  public static readonly DefinitionTerminator = 4;
  public static readonly DifferenceOperator = 5;
  public static readonly OpenArguments = 6;
  public static readonly OpenParenthesis = 7;
  public static readonly OrOperator = 8;
  public static readonly PositiveInteger = 9;
  public static readonly ReferenceCall = 10;
  public static readonly String = 11;
  public static readonly WhiteSpace = 12;
  public static readonly WordName = 13;
  public static readonly EOF = Token.EOF;

  public static readonly channelNames: string[] = [
    "DEFAULT_TOKEN_CHANNEL",
    "HIDDEN",
  ];
  public static readonly literalNames: (string | null)[] = [
    null,
    "')'",
    "'}'",
    "'='",
    "';'",
    "'-'",
    "'('",
    "'{'",
    "'|'",
    null,
    "'ref'",
  ];
  public static readonly symbolicNames: (string | null)[] = [
    null,
    "CloseArguments",
    "CloseParenthesis",
    "DefineOperator",
    "DefinitionTerminator",
    "DifferenceOperator",
    "OpenArguments",
    "OpenParenthesis",
    "OrOperator",
    "PositiveInteger",
    "ReferenceCall",
    "String",
    "WhiteSpace",
    "WordName",
  ];
  public static readonly modeNames: string[] = ["DEFAULT_MODE"];

  public static readonly ruleNames: string[] = [
    "CloseArguments",
    "CloseParenthesis",
    "DefineOperator",
    "DefinitionTerminator",
    "DifferenceOperator",
    "OpenArguments",
    "OpenParenthesis",
    "OrOperator",
    "PositiveInteger",
    "ReferenceCall",
    "String",
    "WhiteSpace",
    "WordName",
  ];

  constructor(input: CharStream) {
    super(input);
    this._interp = new LexerATNSimulator(
      this,
      DekuRuleLexer._ATN,
      DekuRuleLexer.DecisionsToDFA,
      new PredictionContextCache(),
    );
  }

  public get grammarFileName(): string {
    return "DekuRule.g4";
  }

  public get literalNames(): (string | null)[] {
    return DekuRuleLexer.literalNames;
  }
  public get symbolicNames(): (string | null)[] {
    return DekuRuleLexer.symbolicNames;
  }
  public get ruleNames(): string[] {
    return DekuRuleLexer.ruleNames;
  }

  public get serializedATN(): number[] {
    return DekuRuleLexer._serializedATN;
  }

  public get channelNames(): string[] {
    return DekuRuleLexer.channelNames;
  }

  public get modeNames(): string[] {
    return DekuRuleLexer.modeNames;
  }

  public static readonly _serializedATN: number[] = [
    4, 0, 13, 82, 6, -1, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4,
    7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7,
    10, 2, 11, 7, 11, 2, 12, 7, 12, 1, 0, 1, 0, 1, 1, 1, 1, 1, 2, 1, 2, 1, 3, 1,
    3, 1, 4, 1, 4, 1, 5, 1, 5, 1, 6, 1, 6, 1, 7, 1, 7, 1, 8, 1, 8, 1, 8, 5, 8,
    47, 8, 8, 10, 8, 12, 8, 50, 9, 8, 3, 8, 52, 8, 8, 1, 9, 1, 9, 1, 9, 1, 9, 1,
    10, 1, 10, 1, 10, 1, 10, 5, 10, 62, 8, 10, 10, 10, 12, 10, 65, 9, 10, 1, 10,
    1, 10, 1, 11, 4, 11, 70, 8, 11, 11, 11, 12, 11, 71, 1, 11, 1, 11, 1, 12, 1,
    12, 5, 12, 78, 8, 12, 10, 12, 12, 12, 81, 9, 12, 0, 0, 13, 1, 1, 3, 2, 5, 3,
    7, 4, 9, 5, 11, 6, 13, 7, 15, 8, 17, 9, 19, 10, 21, 11, 23, 12, 25, 13, 1,
    0, 6, 1, 0, 49, 57, 1, 0, 48, 57, 1, 0, 34, 34, 3, 0, 9, 10, 13, 13, 32, 32,
    1, 0, 65, 90, 3, 0, 48, 57, 65, 90, 97, 122, 87, 0, 1, 1, 0, 0, 0, 0, 3, 1,
    0, 0, 0, 0, 5, 1, 0, 0, 0, 0, 7, 1, 0, 0, 0, 0, 9, 1, 0, 0, 0, 0, 11, 1, 0,
    0, 0, 0, 13, 1, 0, 0, 0, 0, 15, 1, 0, 0, 0, 0, 17, 1, 0, 0, 0, 0, 19, 1, 0,
    0, 0, 0, 21, 1, 0, 0, 0, 0, 23, 1, 0, 0, 0, 0, 25, 1, 0, 0, 0, 1, 27, 1, 0,
    0, 0, 3, 29, 1, 0, 0, 0, 5, 31, 1, 0, 0, 0, 7, 33, 1, 0, 0, 0, 9, 35, 1, 0,
    0, 0, 11, 37, 1, 0, 0, 0, 13, 39, 1, 0, 0, 0, 15, 41, 1, 0, 0, 0, 17, 51, 1,
    0, 0, 0, 19, 53, 1, 0, 0, 0, 21, 57, 1, 0, 0, 0, 23, 69, 1, 0, 0, 0, 25, 75,
    1, 0, 0, 0, 27, 28, 5, 41, 0, 0, 28, 2, 1, 0, 0, 0, 29, 30, 5, 125, 0, 0,
    30, 4, 1, 0, 0, 0, 31, 32, 5, 61, 0, 0, 32, 6, 1, 0, 0, 0, 33, 34, 5, 59, 0,
    0, 34, 8, 1, 0, 0, 0, 35, 36, 5, 45, 0, 0, 36, 10, 1, 0, 0, 0, 37, 38, 5,
    40, 0, 0, 38, 12, 1, 0, 0, 0, 39, 40, 5, 123, 0, 0, 40, 14, 1, 0, 0, 0, 41,
    42, 5, 124, 0, 0, 42, 16, 1, 0, 0, 0, 43, 52, 5, 48, 0, 0, 44, 48, 7, 0, 0,
    0, 45, 47, 7, 1, 0, 0, 46, 45, 1, 0, 0, 0, 47, 50, 1, 0, 0, 0, 48, 46, 1, 0,
    0, 0, 48, 49, 1, 0, 0, 0, 49, 52, 1, 0, 0, 0, 50, 48, 1, 0, 0, 0, 51, 43, 1,
    0, 0, 0, 51, 44, 1, 0, 0, 0, 52, 18, 1, 0, 0, 0, 53, 54, 5, 114, 0, 0, 54,
    55, 5, 101, 0, 0, 55, 56, 5, 102, 0, 0, 56, 20, 1, 0, 0, 0, 57, 63, 5, 34,
    0, 0, 58, 59, 5, 92, 0, 0, 59, 62, 5, 34, 0, 0, 60, 62, 8, 2, 0, 0, 61, 58,
    1, 0, 0, 0, 61, 60, 1, 0, 0, 0, 62, 65, 1, 0, 0, 0, 63, 61, 1, 0, 0, 0, 63,
    64, 1, 0, 0, 0, 64, 66, 1, 0, 0, 0, 65, 63, 1, 0, 0, 0, 66, 67, 5, 34, 0, 0,
    67, 22, 1, 0, 0, 0, 68, 70, 7, 3, 0, 0, 69, 68, 1, 0, 0, 0, 70, 71, 1, 0, 0,
    0, 71, 69, 1, 0, 0, 0, 71, 72, 1, 0, 0, 0, 72, 73, 1, 0, 0, 0, 73, 74, 6,
    11, 0, 0, 74, 24, 1, 0, 0, 0, 75, 79, 7, 4, 0, 0, 76, 78, 7, 5, 0, 0, 77,
    76, 1, 0, 0, 0, 78, 81, 1, 0, 0, 0, 79, 77, 1, 0, 0, 0, 79, 80, 1, 0, 0, 0,
    80, 26, 1, 0, 0, 0, 81, 79, 1, 0, 0, 0, 7, 0, 48, 51, 61, 63, 71, 79, 1, 6,
    0, 0,
  ];

  private static __ATN: ATN;
  public static get _ATN(): ATN {
    if (!DekuRuleLexer.__ATN) {
      DekuRuleLexer.__ATN = new ATNDeserializer().deserialize(
        DekuRuleLexer._serializedATN,
      );
    }

    return DekuRuleLexer.__ATN;
  }

  static DecisionsToDFA = DekuRuleLexer._ATN.decisionToState.map(
    (ds: DecisionState, index: number) => new DFA(ds, index),
  );
}
