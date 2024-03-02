//Task24
//More Conditional Tests: 
let str1 = "Wasif";
let str2 = "Soomro";
//equality and inequality with strings
console.log(str1 == str2); //false
console.log(str2 != str1); //true
//Tests using the lower case function
console.log(str1.toLowerCase() == "Wasif"); //false
console.log(str2.toLowerCase() == "soomro"); //true
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1 = 25;
let num2 = 52;
//equality and inequality
console.log(num1 == num2); //false
console.log(num2 != num1); //true
//greater than and less than
console.log(num2 < num1); //false
console.log(num2 > num1); //true
//greater than or equal to, and less than or equal to
console.log(num1 >= num2); //false
console.log(num1 <= num2); //true
//Tests using "and" and "or" operators
console.log(num1 > num2 || num2 >= num1); //true
console.log(num1 == num2 || num2 < num1); //false
console.log(num2 != str1.length && num1 < str2.length); //false
console.log(num2 >= str1.length && num1 < num2); //true
//Test whether an item is in a array
let checkArr = [45, 25, 50, 89];
let checkElement = 25;
let findElemnt = checkArr.includes(checkElement);
console.log(findElemnt); //true
// Test whether an item is not in a array
let checkArr1 = [45, 25, 50, 89];
let checkElement1 = 67;
let findElemnt1 = checkArr1.includes(checkElement1);
console.log(findElemnt1); //false
export {};
