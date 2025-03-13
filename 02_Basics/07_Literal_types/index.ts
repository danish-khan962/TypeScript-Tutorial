//LITERAL TYPES

/*
    Literal types allo you to specify a value that can only be one specific literal value. This means that a varaible with a literal type can only have one specific value and no other.
*/

//string literals
let character: "rukia" | "fuko" | "nanano";
character = "rukia";  //valid
// character = "nemu"; // invalid
console.log(character);


//number literal
let num: 6 | 8 | 20;
num = 20; //valid;
// num = 38; //invalid
console.log(num); 