//ARRAYS Types
/*
    Arrays are a type of object that can store multiple values of the same dasta type. Arrays in TypeScript are typed, which means you can specify the type of values that an array can hold.
*/
/*
    2 Types of Arrays 🐻‍❄️..
    (i) Using the squared bracket notation [] to indicate an array of a specific type
    (ii) Using the generic Array<type> notation to indicate an arary of a specific type
*/
var arr1 = [1, 2, 3, 4, 5, 6, 7];
for (var i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}
;
var arr2 = ["Danish", "Sam", "Bob"];
for (var i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}
;
var arr3 = [];
arr3.push(5);
arr3.push(7);
arr3.push(3);
console.log(arr3);
