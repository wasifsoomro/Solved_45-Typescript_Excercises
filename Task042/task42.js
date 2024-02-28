"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.make_Great = void 0;
var task41_1 = require("../Task041/task41");
//Task 42
// creating a function and using .map defined call back function on each element of an array
function make_Great(magicianNames) {
    return magicianNames.map(function (magicianNames) { return "The Great ".concat(magicianNames); });
}
exports.make_Great = make_Great;
//modifying array and call with showmagician function
var new_Magician_Names = make_Great(task41_1.magicianNames);
(0, task41_1.show_Magician)(new_Magician_Names);
