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

//////////////////////////////////////////////////
// Lecture 34 Function Declarations vs Function Expressions
/*
//Function declaration
function calcAge1(birthYear) {
  return 2021 - birthYear;
}

const ageShally = calcAge1(1987);
console.log(ageShally);

//Function expression
// since it is an expression, it produces a value, which we store in a variable
const calcAge2 = function (birthYear) {
  return 2021 - birthYear;
};

const ageMax = calcAge2(1984);
console.log(ageMax);

// main difference: we can call function declarations before they are defined. Usually not a good idea to do this though, unless really necessary
*/

//////////////////////////////////////////////////
// Lecture 35 Arrow Functions
/*
//Arrow functions are a shorter form of function expression
const calcAge3 = (birthYear) => {
  return 2021 - birthYear;
};

//round brackets not needed when only one parameter
// curly brackets not needed when only one line of code.
// in that case, don't need return keyword either because of implicit return.
const calcAge4 = (birthYear) => 2021 - birthYear;
const age4 = calcAge4(1987);
console.log(age4);

//calculate how many years left until retirement
const yearsUntilRetire = (birthYear, firstName) => {
  const age = 2021 - birthYear;
  const retirement = 67 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetire(1987, "Shalveena"));
console.log(yearsUntilRetire(1984, "Max"));

// fundamental difference with arrow funtions - arrow functions don't get a 'this' keyword.
*/

//////////////////////////////////////////////////
// Lecture 36 Functions calling other functions
/*
// calling one function from inside another function
// imagine fruit processor needs another machine to first cut the fruit into smaller pieces.
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples); //calling cutFruitPieces with the argument we received from fruitProcessor rather than with a number directly.
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apple pieces, and ${orangePieces} orange pieces.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/

//////////////////////////////////////////////////
// Lecture 37 Reviewing functions
/*

// //arrow function
// const yearsUntilRetire = (birthYear, firstName) => {
//   const age = 2021 - birthYear;
//   const retirement = 67 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years.`;
// };

//changed to function expression
// const yearsUntilRetire = function (birthYear, firstName) {
//   const age = 2021 - birthYear;
//   const retirement = 67 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years.`;
// };

//calling one function inside another function;
// const calcAge = function (birthYear) {
//   return 2021 - birthYear;
// };

// const yearsUntilRetire = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   return retirement;
//   // return `${firstName} retires in ${retirement} years.`;
// };

// console.log(yearsUntilRetire(1987, "Shalveena"));
// console.log(yearsUntilRetire(1951, "Manni"));

// accounting for the situation where someone has already retired:

const calcAge = function (birthYear) {
  return 2021 - birthYear;
};

// const yearsUntilRetire = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = age < 65 ? 65 - age : "You have already retired! :)";
//   return retirement;
// };

// const yearsUntilRetire = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const yearsToRetirement = 65 - age;
//   const retirement =
//     yearsToRetirement > 0 ? yearsToRetirement : "You have already retired! 😊";
//   return retirement;
// };

//alternative:

const yearsUntilRetire = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement; //return immediately exists the function
  } else {
    return "You have already retired! 😊";
  }
};

console.log(yearsUntilRetire(1987, "Shalveena"));
console.log(yearsUntilRetire(1951, "Manni"));
*/
