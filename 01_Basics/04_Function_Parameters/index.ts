//FUNCTION PARAMETERS:

/* 
    Function parameter annotations in TypeScript are used to specify the expected types of the parameters that a function takes.
*/

//Normal regular function
function addNumber(num: number){
    return num + 1;
};

const result1 = addNumber(5);
console.log("Result1: " + result1);


//Arrow function 
const product = ( x:number, y:number )=>{
    return x * y;
}
const result2 = product(5,5);
console.log("Result2: " + result2);


//Default Params Values
const greet = (name:string = "Danish") =>{
    console.log(`Hello ${name}`);
}
greet();