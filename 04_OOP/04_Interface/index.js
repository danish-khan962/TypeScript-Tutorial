//INTERFACE
var s1 = {
    name: "Danish",
    age: 20,
    id: 5263,
    status: "passed",
};
console.log(s1);
var addValue = function (a, b) {
    return a + b;
};
var res1 = addValue(5, 2);
console.log("Addition: " + res1);
var multiplyValue = function (a, b) {
    return a * b;
};
var res2 = multiplyValue(5, 2);
console.log("Multiplication: " + res2);
;
function greet(person) {
    console.log("Hello, ".concat(person.firstName, " ").concat(person.lastName));
    person.sayHello();
}
var danish = {
    firstName: "Danish",
    lastName: "Khan",
    age: 20,
    sayHello: function () {
        console.log("Hi ".concat(danish.firstName));
    }
};
greet(danish);
var movie1 = {
    name: "Life of Pi",
    genre: "Biography",
    rating: 9.8,
    printMovieInfo: function (name, price, rating) {
        return "Movie name: ".concat(name, " Price: ").concat(price, " Ratings: ").concat(rating);
    }
};
var response = movie1.printMovieInfo("Spiderman 3", 500, 8.2);
console.log(response);
;
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.start = function () {
        console.log("Truck started..");
    };
    Truck.prototype.stop = function () {
        console.log("Truck stopped..");
    };
    return Truck;
}());
var truck1 = new Truck();
truck1.start();
truck1.stop();
