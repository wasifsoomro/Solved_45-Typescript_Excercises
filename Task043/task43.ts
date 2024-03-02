//Task43
import { magicianNames, show_Magician } from "../Task041/task41.js"
import { make_Great } from "../Task042/task42.js"

//creating a copy of array
let greatMagicians = make_Great([...magicianNames])
//calling previous function that print a value of same as excercise 41
show_Magician(magicianNames)
show_Magician(greatMagicians)

 