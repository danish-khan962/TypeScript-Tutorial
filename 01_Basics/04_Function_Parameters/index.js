//FUNCTION PARAMETERS:
/*
    Function parameter annotations in TypeScript are used to specify the expected types of the parameters that a function takes.
*/
//Normal regular function
function addNumber(num) {
    return num + 1;
}
;
var result1 = addNumber(5);
console.log("Result1: " + result1);
//Arrow function 
var product = function (x, y) {
    return x * y;
};
var result2 = product(5, 5);
console.log("Result2: " + result2);
//Default Params Values
var greet = function (name) {
    if (name === void 0) { name = "Danish"; }
    console.log("Hello ".concat(name));
};
greet();
