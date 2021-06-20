//////////////////////////////////////////////////
// Lecture 9 Linking a JavaScript File
/*
let js = "amazing";
if (js === "amazing") {
  alert("JavaScript is FUN!");
}

console.log(40 + 8 + 23 - 10); // this combines the values and returns a single value.
*/

//////////////////////////////////////////////////
// Lecture 10 Values and Variables
/*
console.log("Shalveena");
console.log(23);
// value is the smallest unit of info that we have in JS

// declaring a variable creates a variable in your computer's memory and stores the value given to the value:
let firstName = "Jonas";

// variable is like a box that holds an object. The label describes what is in it. We can later find what is in the box by using the name.
console.log(firstName); // passing in the variable name instead of the value directly. Output on the console will be "Jonas".
console.log(firstName);
console.log(firstName);
console.log(firstName); // can use the variable multiple times. Whenever JS sees the variable name, it will replace it with the original value that we assigned to the variable. So now if we want to change the first name to something else, we only have to do it in one place (where the variable is defined);

// Conventions and rules for naming variables:
//use camelCase,
//cannot start it with a number (illegal variable name),
//can only contain letters, numbers, unscore or the $ sign,
//cannot name a variable using a reserved JS keyword. For example:
let new = "xx" 
let function = "etc"
//Never call your variable "name"
let name = "Shalveena";
//Don't start with a capital letter.
let Love = "Max";
//Variables in all uppercase are reserved for constants that we know will never change. For example: 
let PI = 3.14;
//use names that are descriptive. It should be easy to understand what value the variable is holding just by reading the name of the variable.
let myFirstJob = "Lawyer";
let myCurrentJob = "Student";
//the above is better than the following:
let job1 = "Lawyer";
let job2 = "Student";
*/

//////////////////////////////////////////////////
// Lecture 12 Data Types
true;
console.log(true);
let javascriptIsFun = true; // can save boolean values to variables.
console.log(javascriptIsFun);
// using the typeof operator returns a new value (which is a string) describing the type of the first value.
console.log(typeof true); // boolean
console.log(typeof javascriptIsFun); // boolean
console.log(typeof 23); // number
console.log(typeof "Jonas"); // string

//Dynamic typing:
javascriptIsFun = "YES!"; // reassigning the variable (changing the variable that is in the variable/changing the contents of the box).
console.log(typeof javascriptIsFun); // string (no longer a boolean)

//Example of undefined:
// is the value taken by a variable that is not yet defined. It is therefore both the value and the type of value. For example:
let year;
console.log(year); //undefined
console.log(typeof year); //undefined

year = 1991; // reassigning the variable
console.log(typeof year); // number

//null: Again, both the value and the type of the value is null. For example:
console.log(typeof null); // object - bug!!
