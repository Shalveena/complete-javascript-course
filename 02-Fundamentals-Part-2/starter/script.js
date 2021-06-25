//////////////////////////////////////////////////
// Lecture 32 Activating Strict Mode

"use strict"; // this needs to be the first line of code.
/*
//Strict mode avoids unintentional errors. It forbids us to do certain things and it creates visible errors in the developer console where JS would otherwise just fail silently.
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicence = true; // strict mode will create a visible error for us.
if (hasDriversLicense) console.log("I can drive");

//Strict mode also introduces a shortlist of variable names that are reserved for features that might be added to the language a bit later.
// const interface = "Audio"; // Uncaught SyntaxError: Unexpected strict mode reserved word
// const private = 524; //Uncaught SyntaxError: Unexpected strict mode reserved word
*/

//////////////////////////////////////////////////
// Lecture 33 Functions
/*
//function is a piece of code that we can reuse in our code. It can hold one or more complete lines of code.

function logger() {
  console.log("My name is Shalveena");
}

logger(); // invoking, running or calling the function
logger();
logger();

//We can pass data to a function, and it can return data back.
// imagine a food processor - we give it fruit, it processes it, and returns juice.
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples, and ${oranges} oranges.`;
  return juice; // with the return value, we can return any value from the fuction.
}

const appleJuice = fruitProcessor(5, 0); // if we want to use the value that was returned from the function, we need to store it in a variable.
console.log(appleJuice);
console.log(fruitProcessor(5, 0)); // here, we just logged it directly instead of saving to a variable.

//we can reuse the function with diff input values and get diff output value
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//DRY: Don't Repeat Yourself!
*/
