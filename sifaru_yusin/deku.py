"""kekurE dEku."""
from sifaru_yusin.Kekuria import Kekuria
from sifaru_yusin.RuleDefinitions import (
    RuleDefinitions,
    Rule,
    ChoiceRuleItem,
    ChoiceRule,
    DifferenceRule,
    ReferenceRule,
    SequenceRule,
    StringRule,
)
import typing as t

__pragma__(  # noqa: F821
    "js",
    "{}",
    """
    const antlr4 = require("antlr4").default;
    const DekuRuleLexer = require("../sifaru_yusin/DekuRuleLexer").default;
    const DekuRuleListener = require("../sifaru_yusin/DekuRuleListener").default;
    const DekuRuleParser = require("../sifaru_yusin/DekuRuleParser").default;
    """,
)

antlr4: t.Any = 0  # __:skip
DekuRuleLexer: t.Any = 0  # __:skip
DekuRuleListener: t.Any = 0  # __:skip
DekuRuleParser: t.Any = 0  # __:skip


class Visitor:
    """ANTLR4 custom tree visitor."""

    def visitChildren(self, context):
        """Handle a callback when the visitor visit a non terminal node."""
        rule_name = context.parser.ruleNames[context.ruleIndex]
        if rule_name == "root":
            return self.__visit_root(context)
        elif rule_name == "choiceWord":
            return self.__visit_choiceWord(context)
        elif rule_name == "differenceLhs":
            return self.__visit_differenceLhs(context)
        elif rule_name == "differenceRhs":
            return self.__visit_differenceRhs(context)
        elif rule_name == "differenceWord":
            return self.__visit_differenceWord(context)
        elif rule_name == "elementWord":
            return self.__visit_elementWord(context)
        elif rule_name == "referenceWord":
            return self.__visit_referenceWord(context)
        elif rule_name == "sequenceWord":
            return self.__visit_sequenceWord(context)
        elif rule_name == "word":
            return self.__visit_word(context)
        elif rule_name == "wordDefinition":
            return self.__visit_wordDefinition(context)
        else:
            raise Exception("Unknown rule: {}".format(rule_name))

    def visitTerminal(self, context):
        """Handle a callback when the visitor visit a terminal node."""
        symbolic_name = context.parentCtx.parser.symbolicNames[context.symbol["type"]]
        if symbolic_name == "CloseArguments":
            return None
        elif symbolic_name == "CloseParenthesis":
            return ("CloseParenthesis",)
        elif symbolic_name == "DefineOperator":
            return None
        elif symbolic_name == "DefinitionTerminator":
            return None
        elif symbolic_name == "DifferenceOperator":
            return None
        elif symbolic_name == "OpenArguments":
            return None
        elif symbolic_name == "OpenParenthesis":
            return ("OpenParenthesis",)
        elif symbolic_name == "OrOperator":
            return None
        elif symbolic_name == "PositiveInteger":
            return ("PositiveInteger", int(context.getText()))
        elif symbolic_name == "ReferenceCall":
            return None
        elif symbolic_name == "String":
            return StringRule(eval(context.getText()))
        elif symbolic_name == "WhiteSpace":
            raise Exception("WhiteSpace must skip by the parser.")
        elif symbolic_name == "WordName":
            return ("WordName", context.getText())
        else:
            raise Exception("Unknown symbol: {}".format(symbolic_name))

    def __visit_root(self, context):
        rule_definitions = RuleDefinitions()
        for child in context.children:
            word_definition = child.accept(self)
            rule_definitions.define(
                word_definition["word_name"], word_definition["word"]
            )
        return rule_definitions

    def __visit_choiceWord(self, context):
        rule = None
        choiceRuleItems = []
        for child in context.children:
            node = child.accept(self)
            if isinstance(node, Rule):
                rule = node
            elif isinstance(node, tuple) and node[0] == "PositiveInteger":
                if rule is None:
                    raise Exception(
                        "Choice probability must followed by a sequence rule."
                    )
                choiceRuleItems.append(ChoiceRuleItem(rule, node[1]))
                rule = None
            elif node is None:
                pass
            else:
                raise Exception("Unexpected node : {}".format(node))
        return ChoiceRule(choiceRuleItems)

    def __visit_differenceLhs(self, context):
        children = map(lambda child: child.accept(self), context.children)
        if len(children) == 3:
            return children[1]
        elif len(children) == 1:
            return children[0]
        else:
            raise Exception("Invalid difference lhs: {}".format(children))

    def __visit_differenceRhs(self, context):
        return context.children[0].accept(self)

    def __visit_differenceWord(self, context):
        [lhs, _, rhs] = map(lambda child: child.accept(self), context.children)
        return DifferenceRule(lhs, rhs)

    def __visit_elementWord(self, context):
        children = map(lambda child: child.accept(self), context.children)
        if len(children) == 3:
            return children[1]
        elif len(children) == 1:
            return children[0]
        else:
            raise Exception("Invalid element word: {}".format(children))

    def __visit_referenceWord(self, context):
        [_, _, word_name, position, _] = map(
            lambda child: child.accept(self), context.children
        )
        return ReferenceRule(word_name[1], position[1])

    def __visit_sequenceWord(self, context):
        children = map(lambda child: child.accept(self), context.children)
        if len(children) == 1:
            return children[0]
        return SequenceRule(children)

    def __visit_word(self, context):
        return context.children[0].accept(self)

    def __visit_wordDefinition(self, context):
        [word_name, _, word, _] = map(
            lambda child: child.accept(self), context.children
        )
        return {"word_name": word_name[1], "word": word}


class DekuRuleListener_py:
    """ANTLR4 tree listener."""

    def __init__(self):
        """Initialize a listener."""
        self.original = __new__(DekuRuleListener())  # noqa: F821

    def visitTerminal(self, node):
        """Handle a callback when the listener traverse a terminal node."""
        return self.original.visitTerminal(node)

    def visitErrorNode(self, node):
        """Handle a callback when the listener traverse an error node."""
        return self.original.visitErrorNode(node)

    def enterEveryRule(self, node):
        """Handle a callback when the listener enter a non terminal rule."""
        return self.original.enterEveryRule(node)

    def exitEveryRule(self, node):
        """Handle a callback when the listener exit from a non terminal rule."""
        return self.original.exitEveryRule(node)


class DekuRulePrinter(DekuRuleListener_py):
    """ANTLR4 custom tree listener."""

    pass


def parse_deku_rule(deku_rule: str) -> RuleDefinitions:
    """Parse a given dEku rule."""
    chars = __new__(antlr4.InputStream(deku_rule))  # noqa: F821
    lexer = __new__(DekuRuleLexer(chars))  # noqa: F821
    tokens = __new__(antlr4.CommonTokenStream(lexer))  # noqa: F821
    parser = __new__(DekuRuleParser(tokens))  # noqa: F821
    parser.buildParseTrees = True
    tree = parser.root()
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(DekuRulePrinter(), tree)
    rule_definitions = tree.accept(Visitor())
    return rule_definitions


DEKU_RULES = """
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
""".strip()


class DekuRules(object):
    """Deku rules."""

    def __init__(self):
        """Init."""
        self.parsed_rules = parse_deku_rule(DEKU_RULES)
        self.rules = DEKU_RULES

    def kekure(self) -> str:
        """Kekure dEku."""
        return Kekuria(self.parsed_rules).kekure("DEKU")

    def reset_rules(self) -> None:
        """Reset dEku rules to default."""
        self.rules = DEKU_RULES

    def set_rules(self, rules: str) -> None:
        """Override dEku rules."""
        parsed_rules = parse_deku_rule(rules)
        self.parsed_rules = parsed_rules
        self.rules = rules
