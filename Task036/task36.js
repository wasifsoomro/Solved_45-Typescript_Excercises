"use strict";
// Task 36
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeshirt = void 0;
//Creating Function with default value
function makeshirt(size, message) {
    if (message === void 0) { message = "I love Programming"; }
    console.log(size, message);
}
exports.makeshirt = makeshirt;
makeshirt("Medium");
