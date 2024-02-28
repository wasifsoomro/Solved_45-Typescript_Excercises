// Task45

//creating interface
interface Car {
    manufacturer :string;
    model: string;
    year?: number;
    color?: string 
  }
  //creating a function passing three parameter two have string data type and one have object data type
  function carInformation(manufacturer: string, model: string, options: {year : number,  color: string}): Car {
  ///creating object  
    let car: Car = {
      manufacturer,
      model,
      ...options
    }
    return car
  }

  //creating a varaible and passing a function with required information and two other name value pairs
  const myCar: Car= carInformation("Toyota", "4Runner", {year: 2023, color: "Black"})
  console.log(myCar)