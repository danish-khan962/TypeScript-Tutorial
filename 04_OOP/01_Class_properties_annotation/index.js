//CLASS PROPERTIES ANNOTATIONS
/*
    You can annotate class properties with a type. This allows you to define the data type of the property and esure that it always consistent.
*/
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var per = new Person("Danish", 20);
console.log(per);
