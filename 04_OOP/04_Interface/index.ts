//INTERFACE

/*
    Interface is a way to define a contract for the shape of an object. It specifies the properties and their types that an object must have. Interfaces are a powerful tool for enforcing a certain structure in your code.

    👾👾👾👾👾👾👾
    While interfaces are commonly used to define the structure of objects, they are not limited to just objects. Interfaces in TypeScript can also be used to descirbe the shape of functions and classes.
*/

//Basic syntax of interface
interface Student{
    name:string;
    age:number;
    id:number;
    status:string;
}
const s1: Student = {
    name:"Danish",
    age:20,
    id: 5263,
    status:"passed",
}
console.log(s1);



//Interface with functions
interface Arithmetic{
    (x:number, y:number): number;  //return type as number
}
const addValue: Arithmetic = (a,b) =>{
    return a+b;
}
const res1 = addValue(5,2);
console.log("Addition: "+res1);
const multiplyValue: Arithmetic = (a,b) =>{
    return a*b;
}
const res2 = multiplyValue(5,2);
console.log("Multiplication: "+res2);



//Interface with methods
interface Person{
    firstName: string;
    lastName: string;
    age: number;
    sayHello(): void;
};
function greet(person:Person){
    console.log(`Hello, ${person.firstName} ${person.lastName}`);
    person.sayHello();
}
const danish: Person = {
    firstName : "Danish",
    lastName : "Khan",
    age:20,
    sayHello(){
        console.log(`Hi ${danish.firstName}`)
    }
}
greet(danish);



//inheritance
interface MovieDetails{
    readonly name: string;
    rating: number;
    printMovieInfo(name:string, price:number, rating: number): string | number;
}
interface MovieGenre extends MovieDetails{
    genre: string;
}
const movie1: MovieGenre = {
    name: "Life of Pi",
    genre: "Biography",
    rating: 9.8,
    printMovieInfo(name: string, price:number, rating:number) : string | number{
        return `Movie name: ${name} Price: ${price} Ratings: ${rating}`;
    }
}
const response = movie1.printMovieInfo("Spiderman 3", 500, 8.2);
console.log(response);


//Interface with classes
interface Vehicle{
    start(): void;
    stop(): void;
};
class Truck implements Vehicle{
    start():void{
        console.log("Truck started..");
    }
    stop():void{
        console.log("Truck stopped..");
    }
}
const truck1 = new Truck();
truck1.start();
truck1.stop();