//Task35

//creating array

let animals: string[] = ["Dog", "Cat", "Rabbit"]

//using for loop with if else if chain 
for(let t = 0; t < animals.length; t++){
    console.log(animals[t])
    if(animals[t] === "Dog"){
        console.log(`A ${animals[t]} would make a great pet`)
    } else if(animals[t] === "Cat" ){
        console.log(`${animals[t]} are independent yet affectionate pets`)
    } else if(animals[t] === "Rabbit"){
        console.log(`${animals[t]} are gentle and social creatures that form strong bonds with their owners`)
    }
} 
console.log("Any of these animals would make a great pet")