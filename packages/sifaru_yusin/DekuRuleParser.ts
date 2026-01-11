// Generated from DekuRule.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import DekuRuleListener from "./DekuRuleListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class DekuRuleParser extends Parser {
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
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_root = 0;
	public static readonly RULE_choiceWord = 1;
	public static readonly RULE_differenceLhs = 2;
	public static readonly RULE_differenceRhs = 3;
	public static readonly RULE_differenceWord = 4;
	public static readonly RULE_elementWord = 5;
	public static readonly RULE_referenceWord = 6;
	public static readonly RULE_sequenceWord = 7;
	public static readonly RULE_word = 8;
	public static readonly RULE_wordDefinition = 9;
	public static readonly literalNames: (string | null)[] = [ null, "')'", 
                                                            "'}'", "'='", 
                                                            "';'", "'-'", 
                                                            "'('", "'{'", 
                                                            "'|'", null, 
                                                            "'ref'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "CloseArguments", 
                                                             "CloseParenthesis", 
                                                             "DefineOperator", 
                                                             "DefinitionTerminator", 
                                                             "DifferenceOperator", 
                                                             "OpenArguments", 
                                                             "OpenParenthesis", 
                                                             "OrOperator", 
                                                             "PositiveInteger", 
                                                             "ReferenceCall", 
                                                             "String", "WhiteSpace", 
                                                             "WordName" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"root", "choiceWord", "differenceLhs", "differenceRhs", "differenceWord", 
		"elementWord", "referenceWord", "sequenceWord", "word", "wordDefinition",
	];
	public get grammarFileName(): string { return "DekuRule.g4"; }
	public get literalNames(): (string | null)[] { return DekuRuleParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return DekuRuleParser.symbolicNames; }
	public get ruleNames(): string[] { return DekuRuleParser.ruleNames; }
	public get serializedATN(): number[] { return DekuRuleParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, DekuRuleParser._ATN, DekuRuleParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public root(): RootContext {
		let localctx: RootContext = new RootContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, DekuRuleParser.RULE_root);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 23;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===13) {
				{
				{
				this.state = 20;
				this.wordDefinition();
				}
				}
				this.state = 25;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public choiceWord(): ChoiceWordContext {
		let localctx: ChoiceWordContext = new ChoiceWordContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, DekuRuleParser.RULE_choiceWord);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 30;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 26;
					this.sequenceWord();
					this.state = 27;
					this.match(DekuRuleParser.PositiveInteger);
					this.state = 28;
					this.match(DekuRuleParser.OrOperator);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 32;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 34;
			this.sequenceWord();
			this.state = 35;
			this.match(DekuRuleParser.PositiveInteger);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public differenceLhs(): DifferenceLhsContext {
		let localctx: DifferenceLhsContext = new DifferenceLhsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, DekuRuleParser.RULE_differenceLhs);
		try {
			this.state = 42;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 7:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 37;
				this.match(DekuRuleParser.OpenParenthesis);
				this.state = 38;
				this.choiceWord();
				this.state = 39;
				this.match(DekuRuleParser.CloseParenthesis);
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 41;
				this.match(DekuRuleParser.WordName);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public differenceRhs(): DifferenceRhsContext {
		let localctx: DifferenceRhsContext = new DifferenceRhsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, DekuRuleParser.RULE_differenceRhs);
		try {
			this.state = 47;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 11:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 44;
				this.match(DekuRuleParser.String);
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 45;
				this.match(DekuRuleParser.WordName);
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 46;
				this.referenceWord();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public differenceWord(): DifferenceWordContext {
		let localctx: DifferenceWordContext = new DifferenceWordContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, DekuRuleParser.RULE_differenceWord);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 49;
			this.differenceLhs();
			this.state = 50;
			this.match(DekuRuleParser.DifferenceOperator);
			this.state = 51;
			this.differenceRhs();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public elementWord(): ElementWordContext {
		let localctx: ElementWordContext = new ElementWordContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, DekuRuleParser.RULE_elementWord);
		try {
			this.state = 60;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 7:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 53;
				this.match(DekuRuleParser.OpenParenthesis);
				this.state = 54;
				this.word();
				this.state = 55;
				this.match(DekuRuleParser.CloseParenthesis);
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 57;
				this.match(DekuRuleParser.WordName);
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 58;
				this.match(DekuRuleParser.String);
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 59;
				this.referenceWord();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public referenceWord(): ReferenceWordContext {
		let localctx: ReferenceWordContext = new ReferenceWordContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, DekuRuleParser.RULE_referenceWord);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 62;
			this.match(DekuRuleParser.ReferenceCall);
			this.state = 63;
			this.match(DekuRuleParser.OpenArguments);
			this.state = 64;
			this.match(DekuRuleParser.WordName);
			this.state = 65;
			this.match(DekuRuleParser.PositiveInteger);
			this.state = 66;
			this.match(DekuRuleParser.CloseArguments);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sequenceWord(): SequenceWordContext {
		let localctx: SequenceWordContext = new SequenceWordContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, DekuRuleParser.RULE_sequenceWord);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 69;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 68;
				this.elementWord();
				}
				}
				this.state = 71;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 11392) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public word(): WordContext {
		let localctx: WordContext = new WordContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, DekuRuleParser.RULE_word);
		try {
			this.state = 77;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 73;
				this.choiceWord();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 74;
				this.differenceWord();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 75;
				this.elementWord();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 76;
				this.sequenceWord();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public wordDefinition(): WordDefinitionContext {
		let localctx: WordDefinitionContext = new WordDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, DekuRuleParser.RULE_wordDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 79;
			this.match(DekuRuleParser.WordName);
			this.state = 80;
			this.match(DekuRuleParser.DefineOperator);
			this.state = 81;
			this.word();
			this.state = 82;
			this.match(DekuRuleParser.DefinitionTerminator);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,13,85,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,
	0,5,0,22,8,0,10,0,12,0,25,9,0,1,1,1,1,1,1,1,1,4,1,31,8,1,11,1,12,1,32,1,
	1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,3,2,43,8,2,1,3,1,3,1,3,3,3,48,8,3,1,4,1,4,
	1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,61,8,5,1,6,1,6,1,6,1,6,1,6,1,6,
	1,7,4,7,70,8,7,11,7,12,7,71,1,8,1,8,1,8,1,8,3,8,78,8,8,1,9,1,9,1,9,1,9,
	1,9,1,9,0,0,10,0,2,4,6,8,10,12,14,16,18,0,0,86,0,23,1,0,0,0,2,30,1,0,0,
	0,4,42,1,0,0,0,6,47,1,0,0,0,8,49,1,0,0,0,10,60,1,0,0,0,12,62,1,0,0,0,14,
	69,1,0,0,0,16,77,1,0,0,0,18,79,1,0,0,0,20,22,3,18,9,0,21,20,1,0,0,0,22,
	25,1,0,0,0,23,21,1,0,0,0,23,24,1,0,0,0,24,1,1,0,0,0,25,23,1,0,0,0,26,27,
	3,14,7,0,27,28,5,9,0,0,28,29,5,8,0,0,29,31,1,0,0,0,30,26,1,0,0,0,31,32,
	1,0,0,0,32,30,1,0,0,0,32,33,1,0,0,0,33,34,1,0,0,0,34,35,3,14,7,0,35,36,
	5,9,0,0,36,3,1,0,0,0,37,38,5,7,0,0,38,39,3,2,1,0,39,40,5,2,0,0,40,43,1,
	0,0,0,41,43,5,13,0,0,42,37,1,0,0,0,42,41,1,0,0,0,43,5,1,0,0,0,44,48,5,11,
	0,0,45,48,5,13,0,0,46,48,3,12,6,0,47,44,1,0,0,0,47,45,1,0,0,0,47,46,1,0,
	0,0,48,7,1,0,0,0,49,50,3,4,2,0,50,51,5,5,0,0,51,52,3,6,3,0,52,9,1,0,0,0,
	53,54,5,7,0,0,54,55,3,16,8,0,55,56,5,2,0,0,56,61,1,0,0,0,57,61,5,13,0,0,
	58,61,5,11,0,0,59,61,3,12,6,0,60,53,1,0,0,0,60,57,1,0,0,0,60,58,1,0,0,0,
	60,59,1,0,0,0,61,11,1,0,0,0,62,63,5,10,0,0,63,64,5,6,0,0,64,65,5,13,0,0,
	65,66,5,9,0,0,66,67,5,1,0,0,67,13,1,0,0,0,68,70,3,10,5,0,69,68,1,0,0,0,
	70,71,1,0,0,0,71,69,1,0,0,0,71,72,1,0,0,0,72,15,1,0,0,0,73,78,3,2,1,0,74,
	78,3,8,4,0,75,78,3,10,5,0,76,78,3,14,7,0,77,73,1,0,0,0,77,74,1,0,0,0,77,
	75,1,0,0,0,77,76,1,0,0,0,78,17,1,0,0,0,79,80,5,13,0,0,80,81,5,3,0,0,81,
	82,3,16,8,0,82,83,5,4,0,0,83,19,1,0,0,0,7,23,32,42,47,60,71,77];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!DekuRuleParser.__ATN) {
			DekuRuleParser.__ATN = new ATNDeserializer().deserialize(DekuRuleParser._serializedATN);
		}

		return DekuRuleParser.__ATN;
	}


	static DecisionsToDFA = DekuRuleParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class RootContext extends ParserRuleContext {
	constructor(parser?: DekuRuleParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public wordDefinition_list(): WordDefinitionContext[] {
		return this.getTypedRuleContexts(WordDefinitionContext) as WordDefinitionContext[];
	}
	public wordDefinition(i: number): WordDefinitionContext {
		return this.getTypedRuleContext(WordDefinitionContext, i) as WordDefinitionContext;
	}
    public get ruleIndex(): number {
    	return DekuRuleParser.RULE_root;
	}
	public enterRule(listener: DekuRuleListener): void {
	    if(listener.enterRoot) {
	 		listener.enterRoot(this);
		}
	}
	public exitRule(listener: DekuRuleListener): void {
	    if(listener.exitRoot) {
	 		listener.exitRoot(this);
		}
	}
}


export class ChoiceWordContext extends ParserRuleContext {
	constructor(parser?: DekuRuleParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public sequenceWord_list(): SequenceWordContext[] {
		return this.getTypedRuleContexts(SequenceWordContext) as SequenceWordContext[];
	}
	public sequenceWord(i: number): SequenceWordContext {
		return this.getTypedRuleContext(SequenceWordContext, i) as SequenceWordContext;
	}
	public PositiveInteger_list(): TerminalNode[] {
	    	return this.getTokens(DekuRuleParser.PositiveInteger);
	}
	public PositiveInteger(i: number): TerminalNode {
		return this.getToken(DekuRuleParser.PositiveInteger, i);
	}
	public OrOperator_list(): TerminalNode[] {
	    	return this.getTokens(DekuRuleParser.OrOperator);
	}
	public OrOperator(i: number): TerminalNode {
		return this.getToken(DekuRuleParser.OrOperator, i);
	}
    public get ruleIndex(): number {
    	return DekuRuleParser.RULE_choiceWord;
	}
	public enterRule(listener: DekuRuleListener): void {
	    if(listener.enterChoiceWord) {
	 		listener.enterChoiceWord(this);
		}
	}
	public exitRule(listener: DekuRuleListener): void {
	    if(listener.exitChoiceWord) {
	 		listener.exitChoiceWord(this);
		}
	}
}


export class DifferenceLhsContext extends ParserRuleContext {
	constructor(parser?: DekuRuleParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OpenParenthesis(): TerminalNode {
		return this.getToken(DekuRuleParser.OpenParenthesis, 0);
	}
	public choiceWord(): ChoiceWordContext {
		return this.getTypedRuleContext(ChoiceWordContext, 0) as ChoiceWordContext;
	}
	public CloseParenthesis(): TerminalNode {
		return this.getToken(DekuRuleParser.CloseParenthesis, 0);
	}
	public WordName(): TerminalNode {
		return this.getToken(DekuRuleParser.WordName, 0);
	}
    public get ruleIndex(): number {
    	return DekuRuleParser.RULE_differenceLhs;
	}
	public enterRule(listener: DekuRuleListener): void {
	    if(listener.enterDifferenceLhs) {
	 		listener.enterDifferenceLhs(this);
		}
	}
	public exitRule(listener: DekuRuleListener): void {
	    if(listener.exitDifferenceLhs) {
	 		listener.exitDifferenceLhs(this);
		}
	}
}


export class DifferenceRhsContext extends ParserRuleContext {
	constructor(parser?: DekuRuleParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public String(): TerminalNode {
		return this.getToken(DekuRuleParser.String, 0);
	}
	public WordName(): TerminalNode {
		return this.getToken(DekuRuleParser.WordName, 0);
	}
	public referenceWord(): ReferenceWordContext {
		return this.getTypedRuleContext(ReferenceWordContext, 0) as ReferenceWordContext;
	}
    public get ruleIndex(): number {
    	return DekuRuleParser.RULE_differenceRhs;
	}
	public enterRule(listener: DekuRuleListener): void {
	    if(listener.enterDifferenceRhs) {
	 		listener.enterDifferenceRhs(this);
		}
	}
	public exitRule(listener: DekuRuleListener): void {
	    if(listener.exitDifferenceRhs) {
	 		listener.exitDifferenceRhs(this);
		}
	}
}


export class DifferenceWordContext extends ParserRuleContext {
	constructor(parser?: DekuRuleParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public differenceLhs(): DifferenceLhsContext {
		return this.getTypedRuleContext(DifferenceLhsContext, 0) as DifferenceLhsContext;
	}
	public DifferenceOperator(): TerminalNode {
		return this.getToken(DekuRuleParser.DifferenceOperator, 0);
	}
	public differenceRhs(): DifferenceRhsContext {
		return this.getTypedRuleContext(DifferenceRhsContext, 0) as DifferenceRhsContext;
	}
    public get ruleIndex(): number {
    	return DekuRuleParser.RULE_differenceWord;
	}
	public enterRule(listener: DekuRuleListener): void {
	    if(listener.enterDifferenceWord) {
	 		listener.enterDifferenceWord(this);
		}
	}
	public exitRule(listener: DekuRuleListener): void {
	    if(listener.exitDifferenceWord) {
	 		listener.exitDifferenceWord(this);
		}
	}
}


export class ElementWordContext extends ParserRuleContext {
	constructor(parser?: DekuRuleParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OpenParenthesis(): TerminalNode {
		return this.getToken(DekuRuleParser.OpenParenthesis, 0);
	}
	public word(): WordContext {
		return this.getTypedRuleContext(WordContext, 0) as WordContext;
	}
	public CloseParenthesis(): TerminalNode {
		return this.getToken(DekuRuleParser.CloseParenthesis, 0);
	}
	public WordName(): TerminalNode {
		return this.getToken(DekuRuleParser.WordName, 0);
	}
	public String(): TerminalNode {
		return this.getToken(DekuRuleParser.String, 0);
	}
	public referenceWord(): ReferenceWordContext {
		return this.getTypedRuleContext(ReferenceWordContext, 0) as ReferenceWordContext;
	}
    public get ruleIndex(): number {
    	return DekuRuleParser.RULE_elementWord;
	}
	public enterRule(listener: DekuRuleListener): void {
	    if(listener.enterElementWord) {
	 		listener.enterElementWord(this);
		}
	}
	public exitRule(listener: DekuRuleListener): void {
	    if(listener.exitElementWord) {
	 		listener.exitElementWord(this);
		}
	}
}


export class ReferenceWordContext extends ParserRuleContext {
	constructor(parser?: DekuRuleParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ReferenceCall(): TerminalNode {
		return this.getToken(DekuRuleParser.ReferenceCall, 0);
	}
	public OpenArguments(): TerminalNode {
		return this.getToken(DekuRuleParser.OpenArguments, 0);
	}
	public WordName(): TerminalNode {
		return this.getToken(DekuRuleParser.WordName, 0);
	}
	public PositiveInteger(): TerminalNode {
		return this.getToken(DekuRuleParser.PositiveInteger, 0);
	}
	public CloseArguments(): TerminalNode {
		return this.getToken(DekuRuleParser.CloseArguments, 0);
	}
    public get ruleIndex(): number {
    	return DekuRuleParser.RULE_referenceWord;
	}
	public enterRule(listener: DekuRuleListener): void {
	    if(listener.enterReferenceWord) {
	 		listener.enterReferenceWord(this);
		}
	}
	public exitRule(listener: DekuRuleListener): void {
	    if(listener.exitReferenceWord) {
	 		listener.exitReferenceWord(this);
		}
	}
}


export class SequenceWordContext extends ParserRuleContext {
	constructor(parser?: DekuRuleParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public elementWord_list(): ElementWordContext[] {
		return this.getTypedRuleContexts(ElementWordContext) as ElementWordContext[];
	}
	public elementWord(i: number): ElementWordContext {
		return this.getTypedRuleContext(ElementWordContext, i) as ElementWordContext;
	}
    public get ruleIndex(): number {
    	return DekuRuleParser.RULE_sequenceWord;
	}
	public enterRule(listener: DekuRuleListener): void {
	    if(listener.enterSequenceWord) {
	 		listener.enterSequenceWord(this);
		}
	}
	public exitRule(listener: DekuRuleListener): void {
	    if(listener.exitSequenceWord) {
	 		listener.exitSequenceWord(this);
		}
	}
}


export class WordContext extends ParserRuleContext {
	constructor(parser?: DekuRuleParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public choiceWord(): ChoiceWordContext {
		return this.getTypedRuleContext(ChoiceWordContext, 0) as ChoiceWordContext;
	}
	public differenceWord(): DifferenceWordContext {
		return this.getTypedRuleContext(DifferenceWordContext, 0) as DifferenceWordContext;
	}
	public elementWord(): ElementWordContext {
		return this.getTypedRuleContext(ElementWordContext, 0) as ElementWordContext;
	}
	public sequenceWord(): SequenceWordContext {
		return this.getTypedRuleContext(SequenceWordContext, 0) as SequenceWordContext;
	}
    public get ruleIndex(): number {
    	return DekuRuleParser.RULE_word;
	}
	public enterRule(listener: DekuRuleListener): void {
	    if(listener.enterWord) {
	 		listener.enterWord(this);
		}
	}
	public exitRule(listener: DekuRuleListener): void {
	    if(listener.exitWord) {
	 		listener.exitWord(this);
		}
	}
}


export class WordDefinitionContext extends ParserRuleContext {
	constructor(parser?: DekuRuleParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WordName(): TerminalNode {
		return this.getToken(DekuRuleParser.WordName, 0);
	}
	public DefineOperator(): TerminalNode {
		return this.getToken(DekuRuleParser.DefineOperator, 0);
	}
	public word(): WordContext {
		return this.getTypedRuleContext(WordContext, 0) as WordContext;
	}
	public DefinitionTerminator(): TerminalNode {
		return this.getToken(DekuRuleParser.DefinitionTerminator, 0);
	}
    public get ruleIndex(): number {
    	return DekuRuleParser.RULE_wordDefinition;
	}
	public enterRule(listener: DekuRuleListener): void {
	    if(listener.enterWordDefinition) {
	 		listener.enterWordDefinition(this);
		}
	}
	public exitRule(listener: DekuRuleListener): void {
	    if(listener.exitWordDefinition) {
	 		listener.exitWordDefinition(this);
		}
	}
}
