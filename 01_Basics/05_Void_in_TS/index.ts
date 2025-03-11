//VOID IN TypeScript

/* 
    Void is a type that represents the absence of any value. It is often used as the return type for functions that do not return a value.
*/

const greet = (name:string): void =>{
    console.log(`Name: ${name}`);

    //ERROR
    //return name;
}
greet("Danish");