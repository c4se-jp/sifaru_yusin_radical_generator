grammar DekuRule;

root
    : wordDefinition *
    ;

choiceWord
    : (sequenceWord PositiveInteger OrOperator) + sequenceWord PositiveInteger
    ;

differenceLhs
    : OpenParenthesis choiceWord CloseParenthesis
    | WordName
    ;

differenceRhs
    : String
    | WordName
    | referenceWord
    ;

differenceWord
    : differenceLhs DifferenceOperator differenceRhs
    ;

elementWord
    : OpenParenthesis word CloseParenthesis
    | WordName
    | String
    | referenceWord
    ;

referenceWord
    : ReferenceCall OpenArguments WordName PositiveInteger CloseArguments
    ;

sequenceWord
    : elementWord +
    ;

word
    : choiceWord
    | differenceWord
    | elementWord
    | sequenceWord
    ;

wordDefinition
    : WordName DefineOperator word DefinitionTerminator
    ;

CloseArguments : ')' ;
CloseParenthesis : '}' ;
DefineOperator : '=' ;
DefinitionTerminator : ';' ;
DifferenceOperator : '-' ;
OpenArguments : '(' ;
OpenParenthesis : '{' ;
OrOperator : '|' ;
PositiveInteger : ('0' | [1-9][0-9]*) ;
ReferenceCall : 'ref' ;
String : '"' ('\\"'|~'"')* '"' ;
WhiteSpace : [ \t\r\n]+ -> skip ;
WordName : [A-Z][0-9A-Za-z]* ;
