var Validation;
(function (Validation) {
    var lettersRegexp = /^[A-Za-z]+$/;
    Validation.LettersValidator = function (value) {
        return lettersRegexp.test(value);
    };
})(Validation || (Validation = {}));
/// <reference path="./72-命名空间补充.ts" />
console.log(Validation.LettersValidator('abc')); // true
console.log(Validation.LettersValidator(123)); // false
