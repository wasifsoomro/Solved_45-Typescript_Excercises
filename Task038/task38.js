//Task38
//creating a function with default value
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
describe_city("Karachi");
describe_city("NaushahroFeroze");
describe_city("Madina", "Saudi Arabia");
export {};
