//TYPE NARROWING

/*
    Type narrowing is the process of refining a variable's type within a conditional block of code. This allows you to write more precise and type-safe codes.
*/
/*
    1️⃣Type guards:
    Type guards are mechanisms that help TypeScript understand and narrow down the types more precisely. One common type guard is the typeof operator.
*/
type mytype = string | number;
const example = (value: mytype): void =>{
    //type guard using typeof
    if(typeof value === "string"){
        //within this block, TS knows that 'valuel is a string
        console.log(value.toUpperCase());
    }else{
        //within this block, TS knows 'value' is number
        console.log(value.toFixed(2));
    }
}
example("danish");
example(34);


/*
    2️⃣instanceof operator
    The instanceof operator is another type guard in TypeScript that allows you to check whether an object is an instance os a particular class or constructor function.
*/
class Dog{
    bark(): void{
        console.log("BARK BARK!!");
    }
}
class Cat{
    meow(): void{
        console.log("MEOW MEOW!!");
    }
}
const animalSound = (animal: Dog | Cat): void =>{
    if(animal instanceof Dog){
        animal.bark();
    }else{
        animal.meow();
    }
}
const animal1 = new Dog();
const animal2 = new Cat();

console.log(animal1);
console.log(animal2);
animalSound(animal1)
animalSound(animal2)



/*
    3️⃣Intersection types:
    Intersection types in TypeScript allow you to combine multiple types into a single type. The resulting type will have all the properties of each individual type. You create intersection types using the & operator.
*/
type Employee = {
    name: string;
    id: number;
}
type Manager = {
    department: string;
    role: string;
}
type Intersection = Employee & Manager;
const staff: Intersection = {
    name: "Jhon Doe",
    id: 250,
    department: "Finance",
    role: "HR",
}
console.log(staff.name);
console.log(staff.id);
console.log(staff.department);
console.log(staff.role);