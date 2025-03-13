//TUPLES:

/*
    Tuple is a type that represents an array with a fixed number of elements, where each element can have a different type. The order of the types in the tuple definition corresponds to the order of the values in the actual array. Tuples are similar to arrays, but they have a specific structure and can be used to model finite sequences with known lengths.
*/

let myTuple: [string, number, boolean] = ["danish",20,true];
console.log(myTuple);
//works exactly like array
console.log("First element: "+ myTuple[0]);
console.log("Second element: "+ myTuple[1]);
console.log("Third element: "+ myTuple[2]);

for(let i=0; i<myTuple.length; i++){
    console.log(myTuple[i]);
}