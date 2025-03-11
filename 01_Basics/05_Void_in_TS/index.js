//VOID IN TypeScript
/*
    Void is a type that represents the absence of any value. It is often used as the return type for functions that do not return a value.
*/
var greet = function (name) {
    console.log("Name: ".concat(name));
    //ERROR
    //return message;
};
greet("Danish");
