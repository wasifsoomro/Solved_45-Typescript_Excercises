//Task44

//creating a function and pass parameter that takes a sigle as well as multiple argument
function makeSandwich(...item: string[]){
    console.log(`A sandwich is made with these things ${item} `)
  }
  makeSandwich("bread")
  makeSandwich( "bread", "meat")
  makeSandwich("bread", "meat", "cheese", "other Ingredients")