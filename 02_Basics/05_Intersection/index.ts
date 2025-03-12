//INTERSECTION TYPES:

/*
An intersction type is a way to combine multiple types into a single type that includes all the properties and methods of each constituent type. An intersection type is denoted by the & symbol.
*/

type Person  = {
    name: string,
     age: number,
};

type Employee= {
    id: number,
    department: string,
}

type joinType = Person & Employee;

const user1: joinType = {
    name: "Danish",
    age: 20,
    id: 21552033,
    department: "IT",
}
console.log(user1);