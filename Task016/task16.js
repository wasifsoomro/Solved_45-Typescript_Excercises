"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guest_list3 = void 0;
//task 16 start from task 15
const task15_1 = require("../Task015/task15");
console.log("I just found a bigger table");
// adding element in beginning
task15_1.guest_list2.unshift("Wahab");
//adding element in middle
task15_1.guest_list2.splice(2, 0, "Ahmed");
// adding element in end
task15_1.guest_list2.push("Ali");
for (let n = 0; n < task15_1.guest_list2.length; n++) {
    console.log(`How are you ${task15_1.guest_list2[n]}, Dear today i make a diner party for my freinds so invite you to attend my dinner party`);
}
// updating my guest list result and exporting it for use in other file 
let guest_list3 = task15_1.guest_list2;
exports.guest_list3 = guest_list3;
