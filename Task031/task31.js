//Task31
import { hello_Admin } from "../Task030/task30.js";
//using while loop
while (hello_Admin.length) {
    //I removing all element from array
    let removing_Username = hello_Admin.pop();
}
//Now i want to print message as per excercise using condition
if (hello_Admin.length === 0) {
    console.log("We need to find some users");
}
