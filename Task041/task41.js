"use strict";
//Task 41
Object.defineProperty(exports, "__esModule", { value: true });
exports.show_Magician = exports.magicianNames = void 0;
//create a function and pass a array in function as parameter
var magicianNames = ["Harry Houdini", "David Blaine", "Deren Brown"];
exports.magicianNames = magicianNames;
function show_Magician(magicianNames) {
    console.log(magicianNames);
}
exports.show_Magician = show_Magician;
show_Magician(magicianNames);
