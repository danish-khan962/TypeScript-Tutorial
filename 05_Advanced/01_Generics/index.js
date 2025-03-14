//GENERCIS
/*
    In TypeScript, generics allow you to create reusable components that can work with a variety of types. Generics make it possible for you to define functions, classes, and interfaces that can work with different data types without having to duplicate code.
*/
function genericFunc(x) {
    return [x];
}
var ans1 = genericFunc("Danish");
var ans2 = genericFunc(3);
var ans3 = genericFunc(true);
console.log("".concat(ans1, " ").concat(ans2, " ").concat(ans3));
//generic with interface
function uniqueData(item, defaultValue) {
    return [item, defaultValue];
}
var dog1 = uniqueData({ name: "Fluffy", breed: "corgi" }, { name: "Default", breed: "Unknown" });
console.log(dog1);
//getting random id with generic functions
function getRandomKeyValuePair(obj) {
    var keys = Object.keys(obj);
    var randomkeys = keys[Math.floor(Math.random() * keys.length)];
    return { key: randomkeys, value: obj[randomkeys] };
}
var stringObj = { a: "blue", b: "orange", c: "silver" };
var result = getRandomKeyValuePair(stringObj);
console.log(result);
//muliple types of parameters in generics
function reversePair(val1, val2) {
    return [val2, val1];
}
var reverseAns = reversePair("danish", 20);
console.log(reverseAns);
