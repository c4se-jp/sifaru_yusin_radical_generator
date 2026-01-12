// Generated from src/DekuRule.g4 by ANTLR 4.13.2

import { ParseTreeListener } from "antlr4";

import { RootContext } from "./DekuRuleParser.js";
import { ChoiceWordContext } from "./DekuRuleParser.js";
import { DifferenceLhsContext } from "./DekuRuleParser.js";
import { DifferenceRhsContext } from "./DekuRuleParser.js";
import { DifferenceWordContext } from "./DekuRuleParser.js";
import { ElementWordContext } from "./DekuRuleParser.js";
import { ReferenceWordContext } from "./DekuRuleParser.js";
import { SequenceWordContext } from "./DekuRuleParser.js";
import { WordContext } from "./DekuRuleParser.js";
import { WordDefinitionContext } from "./DekuRuleParser.js";

/**
 * This interface defines a complete listener for a parse tree produced by
 * `DekuRuleParser`.
 */
export default class DekuRuleListener extends ParseTreeListener {
  /**
   * Enter a parse tree produced by `DekuRuleParser.root`.
   * @param ctx the parse tree
   */
  enterRoot?: (ctx: RootContext) => void;
  /**
   * Exit a parse tree produced by `DekuRuleParser.root`.
   * @param ctx the parse tree
   */
  exitRoot?: (ctx: RootContext) => void;
  /**
   * Enter a parse tree produced by `DekuRuleParser.choiceWord`.
   * @param ctx the parse tree
   */
  enterChoiceWord?: (ctx: ChoiceWordContext) => void;
  /**
   * Exit a parse tree produced by `DekuRuleParser.choiceWord`.
   * @param ctx the parse tree
   */
  exitChoiceWord?: (ctx: ChoiceWordContext) => void;
  /**
   * Enter a parse tree produced by `DekuRuleParser.differenceLhs`.
   * @param ctx the parse tree
   */
  enterDifferenceLhs?: (ctx: DifferenceLhsContext) => void;
  /**
   * Exit a parse tree produced by `DekuRuleParser.differenceLhs`.
   * @param ctx the parse tree
   */
  exitDifferenceLhs?: (ctx: DifferenceLhsContext) => void;
  /**
   * Enter a parse tree produced by `DekuRuleParser.differenceRhs`.
   * @param ctx the parse tree
   */
  enterDifferenceRhs?: (ctx: DifferenceRhsContext) => void;
  /**
   * Exit a parse tree produced by `DekuRuleParser.differenceRhs`.
   * @param ctx the parse tree
   */
  exitDifferenceRhs?: (ctx: DifferenceRhsContext) => void;
  /**
   * Enter a parse tree produced by `DekuRuleParser.differenceWord`.
   * @param ctx the parse tree
   */
  enterDifferenceWord?: (ctx: DifferenceWordContext) => void;
  /**
   * Exit a parse tree produced by `DekuRuleParser.differenceWord`.
   * @param ctx the parse tree
   */
  exitDifferenceWord?: (ctx: DifferenceWordContext) => void;
  /**
   * Enter a parse tree produced by `DekuRuleParser.elementWord`.
   * @param ctx the parse tree
   */
  enterElementWord?: (ctx: ElementWordContext) => void;
  /**
   * Exit a parse tree produced by `DekuRuleParser.elementWord`.
   * @param ctx the parse tree
   */
  exitElementWord?: (ctx: ElementWordContext) => void;
  /**
   * Enter a parse tree produced by `DekuRuleParser.referenceWord`.
   * @param ctx the parse tree
   */
  enterReferenceWord?: (ctx: ReferenceWordContext) => void;
  /**
   * Exit a parse tree produced by `DekuRuleParser.referenceWord`.
   * @param ctx the parse tree
   */
  exitReferenceWord?: (ctx: ReferenceWordContext) => void;
  /**
   * Enter a parse tree produced by `DekuRuleParser.sequenceWord`.
   * @param ctx the parse tree
   */
  enterSequenceWord?: (ctx: SequenceWordContext) => void;
  /**
   * Exit a parse tree produced by `DekuRuleParser.sequenceWord`.
   * @param ctx the parse tree
   */
  exitSequenceWord?: (ctx: SequenceWordContext) => void;
  /**
   * Enter a parse tree produced by `DekuRuleParser.word`.
   * @param ctx the parse tree
   */
  enterWord?: (ctx: WordContext) => void;
  /**
   * Exit a parse tree produced by `DekuRuleParser.word`.
   * @param ctx the parse tree
   */
  exitWord?: (ctx: WordContext) => void;
  /**
   * Enter a parse tree produced by `DekuRuleParser.wordDefinition`.
   * @param ctx the parse tree
   */
  enterWordDefinition?: (ctx: WordDefinitionContext) => void;
  /**
   * Exit a parse tree produced by `DekuRuleParser.wordDefinition`.
   * @param ctx the parse tree
   */
  exitWordDefinition?: (ctx: WordDefinitionContext) => void;
}
