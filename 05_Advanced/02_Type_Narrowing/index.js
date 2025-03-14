//TYPE NARROWING
var example = function (value) {
    //type guard using typeof
    if (typeof value === "string") {
        //within this block, TS knows that 'valuel is a string
        console.log(value.toUpperCase());
    }
    else {
        //within this block, TS knows 'value' is number
        console.log(value.toFixed(2));
    }
};
example("danish");
example(34);
/*
    2️⃣instanceof operator
    The instanceof operator is another type guard in TypeScript that allows you to check whether an object is an instance os a particular class or constructor function.
*/
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.bark = function () {
        console.log("BARK BARK!!");
    };
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.meow = function () {
        console.log("MEOW MEOW!!");
    };
    return Cat;
}());
var animalSound = function (animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    else {
        animal.meow();
    }
};
var animal1 = new Dog();
var animal2 = new Cat();
console.log(animal1);
console.log(animal2);
animalSound(animal1);
animalSound(animal2);
var staff = {
    name: "Jhon Doe",
    id: 250,
    department: "Finance",
    role: "HR",
};
console.log(staff.name);
console.log(staff.id);
console.log(staff.department);
console.log(staff.role);
