//GENERCIS

/*
    In TypeScript, generics allow you to create reusable components that can work with a variety of types. Generics make it possible for you to define functions, classes, and interfaces that can work with different data types without having to duplicate code.
*/

function genericFunc<Type>(x: Type) : [Type]{
    return [x];
}
const ans1 = genericFunc<string>("Danish");
const ans2 = genericFunc<number>(3);
const ans3 = genericFunc<boolean>(true);
console.log(`${ans1} ${ans2} ${ans3}`);



//generic with interface
function uniqueData<T>(item: T, defaultValue: T): [T,T]{
    return [item, defaultValue];
}
interface Dog{
    name: string;
    breed: string;
}
const dog1 = uniqueData<Dog>({name:"Fluffy", breed:"corgi"}, {name:"Default", breed: "Unknown"});
console.log(dog1);



//getting random id with generic functions
function getRandomKeyValuePair<T>(obj: { [key: string] : T}) : {key: string, value: T}{
    const keys = Object.keys(obj);
    const randomkeys = keys[Math.floor(Math.random()*keys.length)];
    return{ key: randomkeys, value: obj[randomkeys]}
}
const stringObj = {a: "blue", b:"orange", c:"silver"};
const result = getRandomKeyValuePair<string>(stringObj);
console.log(result);


//muliple types of parameters in generics
function reversePair<T, U>(val1: T, val2: U): [U,T] {
    return [val2,val1];
}
const reverseAns = reversePair("danish",20);
console.log(reverseAns);