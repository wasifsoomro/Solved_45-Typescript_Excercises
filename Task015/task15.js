"use strict";
//Task 15
//changing guest list
Object.defineProperty(exports, "__esModule", { value: true });
exports.guest_list2 = void 0;
const task14_1 = require("../Task014/task14");
// raplacing one guest with another guest
let guestUnableToAttend = task14_1.guest_list1.splice(1, 1, "Majeed");
console.log(`${guestUnableToAttend}, Unable to attend my dinner party`);
for (let m = 0; m < task14_1.guest_list1.length; m++) {
    console.log(`How are you ${task14_1.guest_list1[m]}, Today I arrange a dinner party so i invite you to attend a dinner party`);
}
// updating my guest list result and exporting it for use in other file 
let guest_list2 = task14_1.guest_list1;
exports.guest_list2 = guest_list2;
