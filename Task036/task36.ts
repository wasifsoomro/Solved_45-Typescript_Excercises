// Task 36

//Creating Function with default value
function makeshirt(size: string , message = "I love Programming"){
    console.log(size, message)
}
makeshirt("Medium")
   
export {makeshirt}