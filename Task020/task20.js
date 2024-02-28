"use strict";
let arr = [];
for (let z = 0; z < 5; z++) {
    if (z === 0) {
        arr.push("Mount Everest");
    }
    else if (z === 1) {
        arr.push("River Indus");
    }
    else if (z === 2) {
        arr.push("Pakistan");
    }
    else if (z === 3) {
        arr.push("Naushahro Feroze");
    }
    else if (z === 4) {
        arr.push("Sindhi");
    }
    else {
        break;
    }
}
console.log(arr);
