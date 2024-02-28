//Task18

let places: string[] = ["Makkah","Baghdad",  "Madina", "NaranKaghan", "KohMaree"];
console.log("array not in alphabetical order ",places)


//making copy of above array
let original_Array: string[] = [...places]
let sorted_array: string[] = places.sort()
console.log(`array in alphabetical order , ${sorted_array} \n`)

console.log(`array in orginal form , ${original_Array} \n`)


// Reverse alphabetical order
let reverse_array: string[] = places.reverse();
console.log(`reversing array , ${reverse_array} \n`)

console.log(`original form of array ${original_Array } \n `)

let reverse_original_array: string[] = original_Array.reverse()
console.log(`reversing original array ,${reverse_original_array} \n `)

reverse_original_array.reverse()
console.log(`re reversing original array , ${reverse_original_array} \n`)

reverse_original_array.sort()
console.log(`sorting in alphabetical order, ${reverse_original_array} \n`)

reverse_original_array.sort()
console.log(`sorting  array, ${reverse_original_array} \n`)