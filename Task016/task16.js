//task 16 start from task 15
import { guest_list2 } from "../Task015/task15.js";
console.log("I just found a bigger table");
// adding element in beginning
guest_list2.unshift("Wahab");
//adding element in middle
guest_list2.splice(2, 0, "Ahmed");
// adding element in end
guest_list2.push("Ali");
for (let n = 0; n < guest_list2.length; n++) {
    console.log(`How are you ${guest_list2[n]}, Dear today i make a diner party for my freinds so invite you to attend my dinner party`);
}
// updating my guest list result and exporting it for use in other file 
let guest_list3 = guest_list2;
export { guest_list3 };
