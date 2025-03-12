//TYPE ALIASES
var printDetails = function (details) {
    console.log("Type: ".concat(details.type, ", Brand: ").concat(details.brand, ", Sales: ").concat(details.sales, ", Price: ").concat(details.price, ", Availability: ").concat(details.is_Available));
};
var myDetails = { type: "Car", brand: "Honda", sales: 42501, price: 1000000, is_Available: true };
printDetails(myDetails);
