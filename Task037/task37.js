"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task36_1 = require("../Task036/task36");
// Task 37
function makeshirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love typescript"; }
    return (0, task36_1.makeshirt)(size, message);
}
makeshirt();
makeshirt("Medium");
makeshirt("small", "I love Generative AI");
