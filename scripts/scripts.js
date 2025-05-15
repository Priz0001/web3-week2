// console.log will output a message in the developer console
// two slashes starts a single line comment
console.log("it worked"); //single line comments can go beside code
/*
this is a multi-line comment
starts with a / and a * and closes with a * and a /
*/

// to declare a variable, use let or const
//the variables should start with a lowercase and then all the other words starts with uppercase
const ourClassNum = "J207";
let numStudents = 9; //with a number, you don't need quotes

console.log(ourClassNum);

// if you declare a variable with let, you can change its value
numStudents = 21;

console.log(numStudents);

// if you declare a value with const, you can't change its value
// ourClassNum = "C128";
//(trying to change a const variable will give you an error, and stop the code)

console.log(ourClassNum);
//const and let cannot be redeclared (or recreated) Ex.:
// let numStudents = 25; - this will also give you an error - se você descomentar, vai ser um erro no console e nada mais vai aparecer.