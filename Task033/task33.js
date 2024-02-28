"use strict";
// Task 33
let ordinal_Numbers = [];
for (let d = 1; d < 10; d++) {
    ordinal_Numbers.push(d);
    if (d == 1) {
        console.log(`${d}st`);
    }
    else if (d == 2) {
        console.log(`${d}nd`);
    }
    else if (d == 3) {
        console.log(`${d}rd`);
    }
    else {
        console.log(`${d}th`);
    }
}
console.log(ordinal_Numbers);
