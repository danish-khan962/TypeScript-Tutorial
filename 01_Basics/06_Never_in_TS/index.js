//NEVER IN TypeScript
/*
    The never keyword is used to indicate that a function will not return anything, or that a variable can never have a value. The never type is useful for indicating that certain values are impossible. It can help catch errors at compile-time instead of runtime.
*/
/*
    USE CASES for never 🐺:
    (i) A function that always throws an error.
    (ii) A function that has an infinite loop.
    (iii) A variable that can never have a value.
*/
function throwError(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) {
    }
}
var x;
function neverReturns() {
    while (true) {
    }
}
x = neverReturns();
