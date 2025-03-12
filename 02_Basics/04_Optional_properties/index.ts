//OPTIONAL PROPERTIES:

/*
    You can make a ceatain property optional in an object type by adding a question mark (?) after the property name.

    For example, let's say you have an object type for a person with name,, age and email properties, but you want to make the email propert y optional. You can do this by adding a question mark after the email property name.
*/

type Person = {
    name: string,
    readonly age: number, //readonly is like constant
    email?: string;
}

const p1:Person = {
    name:"Danish",
    age:20,
    email:"danish@example.com",
}
console.log(p1);


//optional comes here
const p2: Person = {
    name: "Scarlet",
    age: 18,
}
console.log(p2);