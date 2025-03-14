//GETTERS AND SETTERS
/*
    Getters and setters are used to access and modify class properties. Getters and setters allow you to define a property in a class that looks like a simple variable from the outside but internally has additional logic for getting and setting the value.
*/

class Details{
    private age: number = 0;

    get _age(): number{
        return this.age;
    }

    set _age(value: number){
        this.age = value;
    }
}

const instance = new Details()
console.log(`Current value: ${instance._age}`)
instance._age = 40;
console.log(`Current value: ${instance._age}`)