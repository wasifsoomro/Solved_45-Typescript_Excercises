// Task 28
// set a vlaue and apply a condtion to check my value if my condtion true then print a message according it 
let age = 50;
if (age < 2) {
    console.log(`The person is baby`);
}
else if (age === 2 || age < 4) {
    console.log(`The person is toddler`);
}
else if (age === 4 || age < 13) {
    console.log(`The person is kid`);
}
else if (age === 13 || age < 20) {
    console.log(`The person is teenager`);
}
else if (age === 20 || age < 65) {
    console.log(`The person is an adult`);
}
else if (age >= 65) {
    console.log(`The perspn is an elder`);
}
export {};
