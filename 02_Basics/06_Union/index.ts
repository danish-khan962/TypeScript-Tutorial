//UNION

/*
    Unions are used to declare a type that can have one of several possible types. Unions are useful when we want to allow a variable or parameterr to accept multiple types.

    The syntax for defining a union type in TypeScript uses the pipe symbol | .
*/

let password : string | number = 20;

type UserInfo = {
    first:string,
    last: string,
    age: number,
}
type accountDetails = {
    email: string,
    pass: string,
}

let user: UserInfo | accountDetails ={
    email: "danish@example.com",
    pass: "sjaks",
}
console.log(user)