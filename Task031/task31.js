"use strict";
//Task31
Object.defineProperty(exports, "__esModule", { value: true });
const task30_1 = require("../Task030/task30");
//using while loop
while (task30_1.hello_Admin.length) {
    //I removing all element from array
    let removing_Username = task30_1.hello_Admin.pop();
}
//Now i want to print message as per excercise using condition
if (task30_1.hello_Admin.length === 0) {
    console.log("We need to find some users");
}
