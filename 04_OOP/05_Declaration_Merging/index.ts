//DECLARATION MERGING

/*
    Once a interface is declared, it cannot be directly modified. However, TypeScript allows what is informally referred to as "declaration merging" or "interface extension", which is often misconstrued as "Re-opening".

    Declaration merging in TypeScript refers to the ability to extend or augment an existing declaration, including interfaces. This can be useful when you want to add new properties or methods to an existing interface without modifying the original declaration.
*/ 

//original interface
interface Car{
    brand: string;
    start(): void;
}


//Declaration mergin (interface extension)
interface Car{
    model: string;
    stop(): void;
}

const myCar: Car = {
    brand: 'Audi',
    model: "M3",
    start(){
        console.log("Start");
    },
    stop(){
        console.log("Stop");
    }
}
console.log(myCar.brand);
console.log(myCar.model)
myCar.start()
myCar.stop()