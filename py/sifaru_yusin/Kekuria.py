"""語根生成器。dEku kekurIa."""
from sifaru_yusin.RuleDefinitions import RuleDefinitions, Rule


class Kekuria:
    """語根生成器。dEku kekurIa."""

    def __init__(self, rule_definitions: RuleDefinitions):
        """Initialize kekuria."""
        self.generated_words = []
        self.references = []
        self.rule_definitions = rule_definitions

    def get_reference(self, rule_name: str, position: int) -> str:
        """Get a ref(WordName, PositiveInteger) call."""
        return filter(lambda reference: reference[0] == rule_name, self.references)[
            position
        ][1]

    def get_rule(self, rule_name: str) -> Rule:
        """Get a rule by the name."""
        return self.rule_definitions.definitions[rule_name]

    def kekure(self, rule_name: str) -> str:
        """Kekure a dEku."""
        word = self.rule_definitions.kekure(rule_name, self)
        # self.references.append((rule_name, word))
        return word

    def push_reference(self, rule_name: str, word: str) -> None:
        """Append for a ref(WOrdName, PosotoveInteger) call."""
        self.references.append((rule_name, word))
