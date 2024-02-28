"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
//Task43
var task41_1 = require("../Task041/task41");
var task42_1 = require("../Task042/task42");
// //creating a new function 
// function unchangedMagicians(magicianNames: string[]){
//   //creating a new varaible with copy of array
//     let greatMagicians = make_Great([...magicianNames])
//     //calling previous function that print a value of same as excercise 41
//     show_Magician(magicianNames)
//     show_Magician(greatMagicians)
//     return greatMagicians
//   }
//   unchangedMagicians(magicianNames)
var greatMagicians = (0, task42_1.make_Great)(__spreadArray([], task41_1.magicianNames, true));
//calling previous function that print a value of same as excercise 41
(0, task41_1.show_Magician)(task41_1.magicianNames);
(0, task41_1.show_Magician)(greatMagicians);
