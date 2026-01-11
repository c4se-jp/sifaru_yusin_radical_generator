"""A set of dEku rule definitions."""
from sifaru_yusin.Kekuria import Kekuria
import random


class RuleDefinitions:
    """
    A set of dEku rule definitions.

    RuleDefinitions should not have state.
    """

    def __init__(self):
        """Initialieze an rule definition."""
        self.definitions = {}

    def define(self, rule_name, rule) -> None:
        """Add a rule definition."""
        self.definitions[rule_name] = rule

    def kekure(self, rule_name: str, kekuria: Kekuria) -> str:
        """Generate a word by a rule of the given name."""
        return self.definitions[rule_name].kekure(kekuria)


class Rule:
    """
    dEku Rule interface.

    Rule should not have state.
    """

    def kekure(self, kekuria: Kekuria) -> str:
        """Generate a word."""
        raise NotImplementedError("Rule#kekure should be implemented in the sub class.")


class ChoiceRuleItem:
    """An item of a ChoiceRule."""

    def __init__(self, rule: Rule, weight: int):
        """Initialieze a choice rule item."""
        self.rule = rule
        self.weight = weight


class ChoiceRule(Rule):
    """選択肢から重みに從って撰ぶ."""

    def __init__(self, items: [ChoiceRuleItem]):
        """Initialieze a choice rule."""
        self.items = items

    def kekure(self, kekuria: Kekuria) -> str:
        """Generate a word."""
        gauge = sum(map(lambda item: item.weight, self.items)) * random.random()
        meter = 0
        for item in self.items:
            meter = meter + item.weight
            if meter > gauge:
                return item.rule.kekure(kekuria)


class DifferenceRule(Rule):
    """左邊の選択肢から右邊の文字列を除いたものを返す."""

    def __init__(self, lhs: Rule, rhs: Rule):
        """Initialieze a difference rule."""
        self.lhs = lhs
        self.rhs = rhs

    def kekure(self, kekuria: Kekuria) -> str:
        """Generate a word."""
        if isinstance(self.lhs, tuple) and self.lhs[0] == "WordName":
            lhs = kekuria.get_rule(self.lhs[1])
        else:
            lhs = self.lhs
        if not isinstance(lhs, ChoiceRule):
            raise Exception("Can't get a difference except from a ChoiceRule.")
        if isinstance(self.rhs, tuple) and self.rhs[0] == "WordName":
            rhs = kekuria.get_rule(self.rhs[1])
        elif isinstance(self.rhs, ReferenceRule):
            rhs = StringRule(self.rhs.kekure(kekuria))
        else:
            rhs = self.rhs
        if isinstance(rhs, ChoiceRule):
            rhs_values = []
            for item in rhs.items:
                if not isinstance(item.rule, StringRule):
                    raise Exception(
                        "Can't get a difference by a ChoiceRule of not StringRule-s."
                    )
                rhs_values.append(item.rule.value)
        elif isinstance(rhs, StringRule):
            rhs_values = [rhs.value]
        else:
            raise Exception(
                "Can't get a difference except by a ChoiceRule or a StringRule."
            )
        new_items = []
        for item in lhs.items:
            if not isinstance(item.rule, StringRule):
                raise Exception(
                    "Can't get a difference except from a ChoiceRule of StringRule-s."
                )
            if item.rule.value not in rhs_values:
                new_items.append(item)
        word = ChoiceRule(new_items).kekure(kekuria)
        if isinstance(self.lhs, tuple) and self.lhs[0] == "WordName":
            kekuria.push_reference(self.lhs[1], word)
        return word


class ReferenceRule(Rule):
    """
    既に生成した文字列をrule名で參照する.

    Rule名を指定して生成したものか、Rule名から引き算して生成したものを參照出來る.
    """

    def __init__(self, rule_name: str, position: int):
        """Initialieze a reference rule."""
        self.rule_name = rule_name
        self.position = position

    def kekure(self, kekuria: Kekuria) -> str:
        """Generate a word."""
        return kekuria.get_reference(self.rule_name, self.position)


class SequenceRule(Rule):
    """文字列を竝べ繫げる."""

    def __init__(self, children: [Rule]):
        """Initialieze a sequence rule."""
        self.children = children

    def kekure(self, kekuria: Kekuria) -> str:
        """Generate a word."""
        words = []
        for child in self.children:
            if isinstance(child, Rule):
                words.append(child.kekure(kekuria))
            elif isinstance(child, tuple) and child[0] == "WordName":
                rule_name = child[1]
                word = kekuria.kekure(rule_name)
                kekuria.push_reference(rule_name, word)
                words.append(word)
        return "".join(words)


class StringRule(Rule):
    """指定した文字列を返す."""

    def __init__(self, value: str):
        """Initialieze a string rule."""
        self.value = value

    def kekure(self, kekuria: Kekuria) -> str:
        """Generate a word."""
        return self.value
