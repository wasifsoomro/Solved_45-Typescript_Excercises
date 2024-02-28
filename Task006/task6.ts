//task 6

// store value giving whitespaces
let person_Name: string = " \t \n    Muhammad Wasif \t \n   "
//print a meesage to check whitespaces
console.log(person_Name)

//now created a new declaration and pass person_Name to apply a method .trim() on it to remove whitespaces
let removeWhitespace: string = person_Name.trim();
console.log(removeWhitespace);