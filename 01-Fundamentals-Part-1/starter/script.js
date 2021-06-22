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
/*true;
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
*/

//////////////////////////////////////////////////
// Lecture 13 let, const and var
/*
let age = 30;
age = 31; // the value assigned to age can change because it was declared with let. Called reassigning a value to the variable, or mutating the variable. 

const birthYear = 1987; //value in a const variable cannot be changed
// birthYear = 1984; //this will through an error. 
//const birthYear; //We also cannot declare empty const variables.

var job = "student";
job = 'junior developer'; // var works similar to let on the surface, but there are important differences, which we will learn later on in the course. 
*/

//////////////////////////////////////////////////
// Lecture 14 Basic Operators
/*
// const ageShally = 2021 - 1987;
// const ageMax = 2021 - 1984;
// console.log(ageShally, ageMax);

//better option:
const now = 2021;
const ageShally = now - 1987;
const ageMax = now - 1984;
console.log(ageShally, ageMax);

//Using arithmetic operators
console.log(ageShally * 2, ageShally / 10, 2 ** 3); // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2 = 8.

const firstName = "Shalveena";
const lastName = "Rohde";
console.log(firstName + " " + lastName);

// Assignment operators:
let x = 10 + 5; // = is an operator too, so here we have two operators!
console.log(x); // 10 + 5 is done first, and then it is assigned to x. Result: x = 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // x = 99
console.log(x);

// Comparison operators (give boolean values):
// >, <, >=, <=
console.log(ageShally < ageMax); // true
console.log(ageMax >= 18); // is Max at least 18 years old? True.

const isFullAge = ageMax >= 18; // storing the comparison in a variable so we can reuse it.
*/

//////////////////////////////////////////////////
// Lecture 15 Operator Precedence
/*
const now = 2021;
const ageShally = now - 1987;
const ageMax = now - 1984;

console.log(now - 1987 > now - 1984); // false

let x, y; // you can declare multiple variables at once!
x = y = 25 - 10 - 5; // we expect the result to be x = 10 and y = 10. This works because JS first checks all the operators present, sees the subtraction operator and performs that first because it has higher precedence than the assignment operator. It does the subtraction left to right. Then, it does the assignment right to left (y = 10, x = y, so x = 10). Otherwise, if it is done left to right, it wouldn't work because then it would be x = y, which is undefined; so x = undefined, and y = 10
console.log(x, y); // 10 10

// const averageAge = ageMax + ageShally / 2; // division will happen first because it has higher precendence.
// console.log(averageAge); // 54
const averageAge = (ageMax + ageShally) / 2; // now the brackets will be done first - because it has the highest precedence!
console.log(averageAge); // 35.5
*/

//////////////////////////////////////////////////
// Lecture 17 Strings and Template Literals
/*
const firstName = "Shalveena";
const job = "student";
const birthYear = 1987;
const currentYear = 2021;

const shalveena =
  "I'm " +
  firstName +
  ", a " +
  (currentYear - birthYear) +
  " year old " +
  job +
  "!";
console.log(shalveena);

// better way:
const shalveenaNew = `I'm ${firstName}, a ${
  currentYear - birthYear
} year old ${job}!`;
console.log(shalveenaNew);
*/
