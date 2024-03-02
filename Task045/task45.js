// Task45
//creating a function passing three parameter two have string data type and one have object data type
function carInformation(manufacturer, model, options) {
    ///creating object  
    let car = {
        manufacturer,
        model,
        ...options
    };
    return car;
}
//creating a varaible and passing a function with required information and two other name value pairs
const myCar = carInformation("Toyota", "4Runner", { year: 2023, color: "Black" });
console.log(myCar);
export {};
