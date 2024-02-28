"use strict";
function carInformation(manufacturer, model, options) {
    let car = Object.assign({ manufacturer,
        model }, options);
    return car;
}
const myCar = carInformation("Toyota", "4Runner", { year: 2023, color: "Black" });
console.log(myCar);
