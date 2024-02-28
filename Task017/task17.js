"use strict";
// Task 17 Start with task 16
Object.defineProperty(exports, "__esModule", { value: true });
const task16_1 = require("../Task016/task16");
console.log("Unfortunatly, my bigger table won't arrive so I can invite only two people for dinner");
// removing guest 
while (task16_1.guest_list3.length > 2) {
    let removedGuests = task16_1.guest_list3.pop();
    console.log(`Sorry ${removedGuests} I can't invite you to dinner this time`);
}
for (let p = 0; p < task16_1.guest_list3.length; p++) {
    console.log(`Dear ${task16_1.guest_list3[p]} your are still invited`);
}
// removing last two guest for getting empty error
task16_1.guest_list3.pop();
task16_1.guest_list3.pop();
console.log(task16_1.guest_list3);
