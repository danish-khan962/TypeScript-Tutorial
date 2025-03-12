//OBJECTS
/*
    An object in TypeScript is a structured data type that represents a collection of properties, each with a key and an associated value. The properties of an object can have specific types, and the object itself can be annotated with a type, often defined using an interface or a type allias. TypeScript uses structural typing, meaning that the shape of an object (its structure or properties) is what matters for type compatibility.
*/
var user = {
    name: "Danish",
    isLoggedIn: true,
    age: 20,
};
console.log(user.name);
console.log(user.isLoggedIn);
console.log(user.age);
//Using object as function return value
function printUser() {
    return {
        name: "Scarlet",
        isLoggedIn: false,
        age: 18,
    };
}
var store = printUser();
console.log(store);
