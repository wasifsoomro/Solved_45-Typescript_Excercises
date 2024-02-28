//Task32
    // List 1
    let current_Users:string [] = ["Abdul Hafeez", "Ahmed", "Aslam", "Haseeb", "Hafiz"];

    // List 2
    let new_Users:string [] = ["Ahmed", "Wasif", "Ali", "Aslam", "Saleem"];

    // convert current users into lowerCase
    let updating : string [] = current_Users.map(user => user.toLowerCase());

    // loop 
    for (let b = 0; b<new_Users.length; b++){
        if(updating.includes(new_Users[b].toLowerCase())){
            console.log(`The UserName ${new_Users[b]} is not available.`);
        }   else {
        console.log(`The UserName ${new_Users[b]} is available`)
        }
    }   
    