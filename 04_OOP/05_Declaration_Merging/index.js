//DECLARATION MERGING
var myCar = {
    brand: 'Audi',
    model: "M3",
    start: function () {
        console.log("Start");
    },
    stop: function () {
        console.log("Stop");
    }
};
console.log(myCar.brand);
console.log(myCar.model);
myCar.start();
myCar.stop();
