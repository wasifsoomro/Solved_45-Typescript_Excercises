"use strict";
//Task30
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello_Admin = void 0;
// creating array 
var hello_Admin = ["Admin", "Wasif", "Majeed", "Rehman", "Imran"];
exports.hello_Admin = hello_Admin;
for (var h = 0; h < hello_Admin.length; h++) {
    if (hello_Admin[h] === "Admin") {
        console.log("Hello Admin, Would you like to see a status report");
    }
    else {
        console.log("Hello ".concat(hello_Admin[h], " Tankyou for logging in again "));
    }
}
