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

class Person{
    private first: string;
    public last: string;

    constructor(first: string, last:string){
        this.first = first;
        this.last = last;
    }

    getName() : string{
        return `${this.first} ${this.last}`
    }
}

let p1 = new Person("Danish","Khan");
console.log(p1.getName()); //private variable only accessible by this

console.log(p1.last) //public can be accessed easily