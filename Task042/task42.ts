import { magicianNames, show_Magician } from "../Task041/task41"

//Task 42

// creating a function and using .map defined call back function on each element of an array
function make_Great(magicianNames: string[]){
  return magicianNames.map((magicianNames)=> `The Great ${magicianNames}`)
}

//modifying array and call with showmagician function
let new_Magician_Names = make_Great(magicianNames)
show_Magician(new_Magician_Names)

export {make_Great}