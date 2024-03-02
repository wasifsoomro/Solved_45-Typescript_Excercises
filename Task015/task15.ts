//Task 15
//changing guest list

import { guest_list1 } from "../Task014/task14.js";

// raplacing one guest with another guest
let guestUnableToAttend: string[] =  guest_list1.splice(1, 1 ,"Majeed");
console.log(`${guestUnableToAttend}, Unable to attend my dinner party`);

for(let m = 0; m < guest_list1.length; m++){
  console.log(`How are you ${guest_list1[m]}, Today I arrange a dinner party so i invite you to attend a dinner party`)
}

// updating my guest list result and exporting it for use in other file 

let guest_list2 = guest_list1

export {guest_list2}
