// Generated from DekuRule.g4 by ANTLR 4.9
// jshint ignore: start
import antlr4 from 'antlr4';
import DekuRuleListener from './DekuRuleListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u000fW\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003\u0002",
    "\u0007\u0002\u0018\n\u0002\f\u0002\u000e\u0002\u001b\u000b\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0006\u0003!\n\u0003\r\u0003",
    "\u000e\u0003\"\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004-\n\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0005\u00052\n\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007?\n\u0007\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0006\tH\n\t\r\t",
    "\u000e\tI\u0003\n\u0003\n\u0003\n\u0003\n\u0005\nP\n\n\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0002\u0002\f",
    "\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0002\u0002\u0002X",
    "\u0002\u0019\u0003\u0002\u0002\u0002\u0004 \u0003\u0002\u0002\u0002",
    "\u0006,\u0003\u0002\u0002\u0002\b1\u0003\u0002\u0002\u0002\n3\u0003",
    "\u0002\u0002\u0002\f>\u0003\u0002\u0002\u0002\u000e@\u0003\u0002\u0002",
    "\u0002\u0010G\u0003\u0002\u0002\u0002\u0012O\u0003\u0002\u0002\u0002",
    "\u0014Q\u0003\u0002\u0002\u0002\u0016\u0018\u0005\u0014\u000b\u0002",
    "\u0017\u0016\u0003\u0002\u0002\u0002\u0018\u001b\u0003\u0002\u0002\u0002",
    "\u0019\u0017\u0003\u0002\u0002\u0002\u0019\u001a\u0003\u0002\u0002\u0002",
    "\u001a\u0003\u0003\u0002\u0002\u0002\u001b\u0019\u0003\u0002\u0002\u0002",
    "\u001c\u001d\u0005\u0010\t\u0002\u001d\u001e\u0007\u000b\u0002\u0002",
    "\u001e\u001f\u0007\n\u0002\u0002\u001f!\u0003\u0002\u0002\u0002 \u001c",
    "\u0003\u0002\u0002\u0002!\"\u0003\u0002\u0002\u0002\" \u0003\u0002\u0002",
    "\u0002\"#\u0003\u0002\u0002\u0002#$\u0003\u0002\u0002\u0002$%\u0005",
    "\u0010\t\u0002%&\u0007\u000b\u0002\u0002&\u0005\u0003\u0002\u0002\u0002",
    "\'(\u0007\t\u0002\u0002()\u0005\u0004\u0003\u0002)*\u0007\u0004\u0002",
    "\u0002*-\u0003\u0002\u0002\u0002+-\u0007\u000f\u0002\u0002,\'\u0003",
    "\u0002\u0002\u0002,+\u0003\u0002\u0002\u0002-\u0007\u0003\u0002\u0002",
    "\u0002.2\u0007\r\u0002\u0002/2\u0007\u000f\u0002\u000202\u0005\u000e",
    "\b\u00021.\u0003\u0002\u0002\u00021/\u0003\u0002\u0002\u000210\u0003",
    "\u0002\u0002\u00022\t\u0003\u0002\u0002\u000234\u0005\u0006\u0004\u0002",
    "45\u0007\u0007\u0002\u000256\u0005\b\u0005\u00026\u000b\u0003\u0002",
    "\u0002\u000278\u0007\t\u0002\u000289\u0005\u0012\n\u00029:\u0007\u0004",
    "\u0002\u0002:?\u0003\u0002\u0002\u0002;?\u0007\u000f\u0002\u0002<?\u0007",
    "\r\u0002\u0002=?\u0005\u000e\b\u0002>7\u0003\u0002\u0002\u0002>;\u0003",
    "\u0002\u0002\u0002><\u0003\u0002\u0002\u0002>=\u0003\u0002\u0002\u0002",
    "?\r\u0003\u0002\u0002\u0002@A\u0007\f\u0002\u0002AB\u0007\b\u0002\u0002",
    "BC\u0007\u000f\u0002\u0002CD\u0007\u000b\u0002\u0002DE\u0007\u0003\u0002",
    "\u0002E\u000f\u0003\u0002\u0002\u0002FH\u0005\f\u0007\u0002GF\u0003",
    "\u0002\u0002\u0002HI\u0003\u0002\u0002\u0002IG\u0003\u0002\u0002\u0002",
    "IJ\u0003\u0002\u0002\u0002J\u0011\u0003\u0002\u0002\u0002KP\u0005\u0004",
    "\u0003\u0002LP\u0005\n\u0006\u0002MP\u0005\f\u0007\u0002NP\u0005\u0010",
    "\t\u0002OK\u0003\u0002\u0002\u0002OL\u0003\u0002\u0002\u0002OM\u0003",
    "\u0002\u0002\u0002ON\u0003\u0002\u0002\u0002P\u0013\u0003\u0002\u0002",
    "\u0002QR\u0007\u000f\u0002\u0002RS\u0007\u0005\u0002\u0002ST\u0005\u0012",
    "\n\u0002TU\u0007\u0006\u0002\u0002U\u0015\u0003\u0002\u0002\u0002\t",
    "\u0019\",1>IO"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class DekuRuleParser extends antlr4.Parser {

    static grammarFileName = "DekuRule.g4";
    static literalNames = [ null, "')'", "'}'", "'='", "';'", "'-'", "'('", 
                            "'{'", "'|'", null, "'ref'" ];
    static symbolicNames = [ null, "CloseArguments", "CloseParenthesis", 
                             "DefineOperator", "DefinitionTerminator", "DifferenceOperator", 
                             "OpenArguments", "OpenParenthesis", "OrOperator", 
                             "PositiveInteger", "ReferenceCall", "String", 
                             "WhiteSpace", "WordName" ];
    static ruleNames = [ "root", "choiceWord", "differenceLhs", "differenceRhs", 
                         "differenceWord", "elementWord", "referenceWord", 
                         "sequenceWord", "word", "wordDefinition" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = DekuRuleParser.ruleNames;
        this.literalNames = DekuRuleParser.literalNames;
        this.symbolicNames = DekuRuleParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	root() {
	    let localctx = new RootContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, DekuRuleParser.RULE_root);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===DekuRuleParser.WordName) {
	            this.state = 20;
	            this.wordDefinition();
	            this.state = 25;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	choiceWord() {
	    let localctx = new ChoiceWordContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, DekuRuleParser.RULE_choiceWord);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30; 
	        this._errHandler.sync(this);
	        let _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 26;
	        		this.sequenceWord();
	        		this.state = 27;
	        		this.match(DekuRuleParser.PositiveInteger);
	        		this.state = 28;
	        		this.match(DekuRuleParser.OrOperator);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 32; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,1, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 34;
	        this.sequenceWord();
	        this.state = 35;
	        this.match(DekuRuleParser.PositiveInteger);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	differenceLhs() {
	    let localctx = new DifferenceLhsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, DekuRuleParser.RULE_differenceLhs);
	    try {
	        this.state = 42;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case DekuRuleParser.OpenParenthesis:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 37;
	            this.match(DekuRuleParser.OpenParenthesis);
	            this.state = 38;
	            this.choiceWord();
	            this.state = 39;
	            this.match(DekuRuleParser.CloseParenthesis);
	            break;
	        case DekuRuleParser.WordName:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 41;
	            this.match(DekuRuleParser.WordName);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	differenceRhs() {
	    let localctx = new DifferenceRhsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, DekuRuleParser.RULE_differenceRhs);
	    try {
	        this.state = 47;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case DekuRuleParser.String:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 44;
	            this.match(DekuRuleParser.String);
	            break;
	        case DekuRuleParser.WordName:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 45;
	            this.match(DekuRuleParser.WordName);
	            break;
	        case DekuRuleParser.ReferenceCall:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 46;
	            this.referenceWord();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	differenceWord() {
	    let localctx = new DifferenceWordContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, DekuRuleParser.RULE_differenceWord);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.differenceLhs();
	        this.state = 50;
	        this.match(DekuRuleParser.DifferenceOperator);
	        this.state = 51;
	        this.differenceRhs();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elementWord() {
	    let localctx = new ElementWordContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, DekuRuleParser.RULE_elementWord);
	    try {
	        this.state = 60;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case DekuRuleParser.OpenParenthesis:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 53;
	            this.match(DekuRuleParser.OpenParenthesis);
	            this.state = 54;
	            this.word();
	            this.state = 55;
	            this.match(DekuRuleParser.CloseParenthesis);
	            break;
	        case DekuRuleParser.WordName:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 57;
	            this.match(DekuRuleParser.WordName);
	            break;
	        case DekuRuleParser.String:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 58;
	            this.match(DekuRuleParser.String);
	            break;
	        case DekuRuleParser.ReferenceCall:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 59;
	            this.referenceWord();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	referenceWord() {
	    let localctx = new ReferenceWordContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, DekuRuleParser.RULE_referenceWord);
	    try {
	        this.enterOuterAlt(localctx, 1);
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
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sequenceWord() {
	    let localctx = new SequenceWordContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, DekuRuleParser.RULE_sequenceWord);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 68;
	            this.elementWord();
	            this.state = 71; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << DekuRuleParser.OpenParenthesis) | (1 << DekuRuleParser.ReferenceCall) | (1 << DekuRuleParser.String) | (1 << DekuRuleParser.WordName))) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	word() {
	    let localctx = new WordContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, DekuRuleParser.RULE_word);
	    try {
	        this.state = 77;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 73;
	            this.choiceWord();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 74;
	            this.differenceWord();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 75;
	            this.elementWord();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 76;
	            this.sequenceWord();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	wordDefinition() {
	    let localctx = new WordDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, DekuRuleParser.RULE_wordDefinition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        this.match(DekuRuleParser.WordName);
	        this.state = 80;
	        this.match(DekuRuleParser.DefineOperator);
	        this.state = 81;
	        this.word();
	        this.state = 82;
	        this.match(DekuRuleParser.DefinitionTerminator);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

DekuRuleParser.EOF = antlr4.Token.EOF;
DekuRuleParser.CloseArguments = 1;
DekuRuleParser.CloseParenthesis = 2;
DekuRuleParser.DefineOperator = 3;
DekuRuleParser.DefinitionTerminator = 4;
DekuRuleParser.DifferenceOperator = 5;
DekuRuleParser.OpenArguments = 6;
DekuRuleParser.OpenParenthesis = 7;
DekuRuleParser.OrOperator = 8;
DekuRuleParser.PositiveInteger = 9;
DekuRuleParser.ReferenceCall = 10;
DekuRuleParser.String = 11;
DekuRuleParser.WhiteSpace = 12;
DekuRuleParser.WordName = 13;

DekuRuleParser.RULE_root = 0;
DekuRuleParser.RULE_choiceWord = 1;
DekuRuleParser.RULE_differenceLhs = 2;
DekuRuleParser.RULE_differenceRhs = 3;
DekuRuleParser.RULE_differenceWord = 4;
DekuRuleParser.RULE_elementWord = 5;
DekuRuleParser.RULE_referenceWord = 6;
DekuRuleParser.RULE_sequenceWord = 7;
DekuRuleParser.RULE_word = 8;
DekuRuleParser.RULE_wordDefinition = 9;

class RootContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DekuRuleParser.RULE_root;
    }

	wordDefinition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WordDefinitionContext);
	    } else {
	        return this.getTypedRuleContext(WordDefinitionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DekuRuleListener ) {
	        listener.enterRoot(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DekuRuleListener ) {
	        listener.exitRoot(this);
		}
	}


}



class ChoiceWordContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DekuRuleParser.RULE_choiceWord;
    }

	sequenceWord = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SequenceWordContext);
	    } else {
	        return this.getTypedRuleContext(SequenceWordContext,i);
	    }
	};

	PositiveInteger = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DekuRuleParser.PositiveInteger);
	    } else {
	        return this.getToken(DekuRuleParser.PositiveInteger, i);
	    }
	};


	OrOperator = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DekuRuleParser.OrOperator);
	    } else {
	        return this.getToken(DekuRuleParser.OrOperator, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof DekuRuleListener ) {
	        listener.enterChoiceWord(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DekuRuleListener ) {
	        listener.exitChoiceWord(this);
		}
	}


}



class DifferenceLhsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DekuRuleParser.RULE_differenceLhs;
    }

	OpenParenthesis() {
	    return this.getToken(DekuRuleParser.OpenParenthesis, 0);
	};

	choiceWord() {
	    return this.getTypedRuleContext(ChoiceWordContext,0);
	};

	CloseParenthesis() {
	    return this.getToken(DekuRuleParser.CloseParenthesis, 0);
	};

	WordName() {
	    return this.getToken(DekuRuleParser.WordName, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DekuRuleListener ) {
	        listener.enterDifferenceLhs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DekuRuleListener ) {
	        listener.exitDifferenceLhs(this);
		}
	}


}



class DifferenceRhsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DekuRuleParser.RULE_differenceRhs;
    }

	String() {
	    return this.getToken(DekuRuleParser.String, 0);
	};

	WordName() {
	    return this.getToken(DekuRuleParser.WordName, 0);
	};

	referenceWord() {
	    return this.getTypedRuleContext(ReferenceWordContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DekuRuleListener ) {
	        listener.enterDifferenceRhs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DekuRuleListener ) {
	        listener.exitDifferenceRhs(this);
		}
	}


}



class DifferenceWordContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DekuRuleParser.RULE_differenceWord;
    }

	differenceLhs() {
	    return this.getTypedRuleContext(DifferenceLhsContext,0);
	};

	DifferenceOperator() {
	    return this.getToken(DekuRuleParser.DifferenceOperator, 0);
	};

	differenceRhs() {
	    return this.getTypedRuleContext(DifferenceRhsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DekuRuleListener ) {
	        listener.enterDifferenceWord(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DekuRuleListener ) {
	        listener.exitDifferenceWord(this);
		}
	}


}



class ElementWordContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DekuRuleParser.RULE_elementWord;
    }

	OpenParenthesis() {
	    return this.getToken(DekuRuleParser.OpenParenthesis, 0);
	};

	word() {
	    return this.getTypedRuleContext(WordContext,0);
	};

	CloseParenthesis() {
	    return this.getToken(DekuRuleParser.CloseParenthesis, 0);
	};

	WordName() {
	    return this.getToken(DekuRuleParser.WordName, 0);
	};

	String() {
	    return this.getToken(DekuRuleParser.String, 0);
	};

	referenceWord() {
	    return this.getTypedRuleContext(ReferenceWordContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DekuRuleListener ) {
	        listener.enterElementWord(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DekuRuleListener ) {
	        listener.exitElementWord(this);
		}
	}


}



class ReferenceWordContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DekuRuleParser.RULE_referenceWord;
    }

	ReferenceCall() {
	    return this.getToken(DekuRuleParser.ReferenceCall, 0);
	};

	OpenArguments() {
	    return this.getToken(DekuRuleParser.OpenArguments, 0);
	};

	WordName() {
	    return this.getToken(DekuRuleParser.WordName, 0);
	};

	PositiveInteger() {
	    return this.getToken(DekuRuleParser.PositiveInteger, 0);
	};

	CloseArguments() {
	    return this.getToken(DekuRuleParser.CloseArguments, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DekuRuleListener ) {
	        listener.enterReferenceWord(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DekuRuleListener ) {
	        listener.exitReferenceWord(this);
		}
	}


}



class SequenceWordContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DekuRuleParser.RULE_sequenceWord;
    }

	elementWord = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ElementWordContext);
	    } else {
	        return this.getTypedRuleContext(ElementWordContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DekuRuleListener ) {
	        listener.enterSequenceWord(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DekuRuleListener ) {
	        listener.exitSequenceWord(this);
		}
	}


}



class WordContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DekuRuleParser.RULE_word;
    }

	choiceWord() {
	    return this.getTypedRuleContext(ChoiceWordContext,0);
	};

	differenceWord() {
	    return this.getTypedRuleContext(DifferenceWordContext,0);
	};

	elementWord() {
	    return this.getTypedRuleContext(ElementWordContext,0);
	};

	sequenceWord() {
	    return this.getTypedRuleContext(SequenceWordContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DekuRuleListener ) {
	        listener.enterWord(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DekuRuleListener ) {
	        listener.exitWord(this);
		}
	}


}



class WordDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DekuRuleParser.RULE_wordDefinition;
    }

	WordName() {
	    return this.getToken(DekuRuleParser.WordName, 0);
	};

	DefineOperator() {
	    return this.getToken(DekuRuleParser.DefineOperator, 0);
	};

	word() {
	    return this.getTypedRuleContext(WordContext,0);
	};

	DefinitionTerminator() {
	    return this.getToken(DekuRuleParser.DefinitionTerminator, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DekuRuleListener ) {
	        listener.enterWordDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DekuRuleListener ) {
	        listener.exitWordDefinition(this);
		}
	}


}




DekuRuleParser.RootContext = RootContext; 
DekuRuleParser.ChoiceWordContext = ChoiceWordContext; 
DekuRuleParser.DifferenceLhsContext = DifferenceLhsContext; 
DekuRuleParser.DifferenceRhsContext = DifferenceRhsContext; 
DekuRuleParser.DifferenceWordContext = DifferenceWordContext; 
DekuRuleParser.ElementWordContext = ElementWordContext; 
DekuRuleParser.ReferenceWordContext = ReferenceWordContext; 
DekuRuleParser.SequenceWordContext = SequenceWordContext; 
DekuRuleParser.WordContext = WordContext; 
DekuRuleParser.WordDefinitionContext = WordDefinitionContext; 
