//TYPE ALIASES

/*
    A type alias is a way to create a new name for an existing type. It allows you to define a custom type that refers to another type and give it a more meaningful or descriptive name.

    Type aloases are defined using the type keyword, followed by the name of the alias, an equal sign (=), and the type it refers to.
*/

type Automobile = {
    type:string,
    brand:string,
    sales:number,
    price:number,
    is_Available: boolean,
}

const printDetails= (details: Automobile) =>{
    console.log(`Type: ${details.type}, Brand: ${details.brand}, Sales: ${details.sales}, Price: ${details.price}, Availability: ${details.is_Available}`)
};

const myDetails: Automobile = {type:"Car", brand:"Honda", sales:42501, price:1000000, is_Available:true};
printDetails(myDetails)
