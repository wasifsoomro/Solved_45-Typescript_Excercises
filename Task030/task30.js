//Task30
// creating array 
let hello_Admin = ["Admin", "Wasif", "Majeed", "Rehman", "Imran"];
//using loop to iterate every element and print a message with every element
for (let h = 0; h < hello_Admin.length; h++) {
    if (hello_Admin[h] === "Admin") {
        console.log("Hello Admin, Would you like to see a status report");
    }
    else {
        console.log(`Hello ${hello_Admin[h]} Tankyou for logging in again `);
    }
}
export { hello_Admin };
