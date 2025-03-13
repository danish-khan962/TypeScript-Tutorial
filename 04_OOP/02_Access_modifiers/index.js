//ACCESS MODIFIERS
/*
    In TypeScript, you can use access modifiers to control the visibility of class members (properties and methods). Access modifiers determine the ways in which class members can be accessed from within and outside the class.
*/
/*
    1️⃣Public:
    Members marked as public can be accessed from anyhwere, both inside and outside the class.

    2️⃣Private:
    Members marked as private can only be accessed from within the vlass they are defined in.

    3️⃣Protected:
    Members marked as protected can be accessed from within the class they are defind in, as well as any subclasses that extends the class.
*/
var Person = /** @class */ (function () {
    function Person(first, last) {
        this.first = first;
        this.last = last;
    }
    Person.prototype.getName = function () {
        return "".concat(this.first, " ").concat(this.last);
    };
    return Person;
}());
var p1 = new Person("Danish", "Khan");
console.log(p1.getName()); //private variable only accessible by this
console.log(p1.last);
