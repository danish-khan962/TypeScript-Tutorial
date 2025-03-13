//CLASS PROPERTIES ANNOTATIONS

/*
    You can annotate class properties with a type. This allows you to define the data type of the property and esure that it always consistent.
*/

class Person{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}
const per = new Person("Danish",20);
console.log(per);