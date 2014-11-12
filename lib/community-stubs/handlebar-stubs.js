var emptyFn = function () {};
var emptyStringFn = function () { return "" };
var UI = {
    registerHelper: emptyFn
};
var Helpers = {
    setLanguage: emptyFn,
    language: emptyStringFn,
    getText: emptyStringFn,
    addScope: emptyFn,
    removeScope: emptyFn
};
Helpers.superScope = {};