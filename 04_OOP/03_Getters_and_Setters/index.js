//GETTERS AND SETTERS
/*
    Getters and setters are used to access and modify class properties. Getters and setters allow you to define a property in a class that looks like a simple variable from the outside but internally has additional logic for getting and setting the value.
*/
var Details = /** @class */ (function () {
    function Details() {
        this.age = 0;
    }
    Object.defineProperty(Details.prototype, "_age", {
        get: function () {
            return this.age;
        },
        set: function (value) {
            this.age = value;
        },
        enumerable: false,
        configurable: true
    });
    return Details;
}());
var instance = new Details();
console.log("Current value: ".concat(instance._age));
instance._age = 40;
console.log("Current value: ".concat(instance._age));
