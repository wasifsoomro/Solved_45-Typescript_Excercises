// Task 17 Start with task 16
import { guest_list3 } from "../Task016/task16.js";
console.log("Unfortunatly, my bigger table won't arrive so I can invite only two people for dinner");
// removing guest using while loop
while (guest_list3.length > 2) {
    let removedGuests = guest_list3.pop();
    //sending a message to every removed guest    
    console.log(`Sorry ${removedGuests} I can't invite you to dinner this time`);
}
for (let p = 0; p < guest_list3.length; p++) {
    //Sending a meesage that are still invited
    console.log(`Dear ${guest_list3[p]} your are still invited`);
}
// removing last two guest for getting empty error
guest_list3.pop();
guest_list3.pop();
console.log(guest_list3);
