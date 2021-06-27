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

//////////////////////////////////////////////////
// Lecture 39 Intro to Arrays
/*

//Arrays are a data structure. It's like a big container into which we can throw variables and later reference them

//e.g. instead of doing this:
const friend1 = "Mark";
const friend2 = "Tom";
const friend3 = "Paul";
//we can do this:
const friends = ["Mark", "Tom", "Paul"];
console.log(friends);
//another way to make an array:
const y = new Array(2000, 2001, 2002, 2003, 2004); //using the 'new' keyword and 'Array' function.

//Arrays are zero based (starts at 0)
//If we want to get data out of the array:
console.log(friends[0]); // Mark
console.log(friends[2]); // Paul
//Note: you can put any expression within the [ ]

//To get the number of elements in the array:
console.log(friends.length); //uses the .length property. Prints 3 (not zero based)
//we can use the above to get the last element in the array:
console.log(friends[friends.length - 1]); // Paul

//Change element in array
friends[2] = "Jay";
console.log(friends);

//Can mutate elements in array declared with const but cannot replace the whole array
// friends = ["Peter", "Alice", "June"]; //Uncaught TypeError: Assignment to constant variable.

//Can contain mix of diff kinds of expressions:
const firstName = "Shalveena";
const shalveena = [firstName, "Rohde", 2021 - 1987, "student", friends];
console.log(shalveena);

//cannot use whole arrays to do calculations:
const years = [1984, 1987, 1989, 2000];
const calcAge = function (birthYear) {
  return 2021 - birthYear;
};
console.log(calcAge(years)); //NaN

//instead do:
const age1 = calcAge(years[0]);
console.log(age1); // calcAge(1984) = 2021 - 1984 = 37
const age2 = calcAge(years[2]);
console.log(age2); // 32
const age3 = calcAge(years[years.length - 1]);
console.log(age3); // 21

//it's good practice to store what you get from an array back into an array
const ages = [
  calcAge(years[0]),
  calcAge(years[2]),
  calcAge(years[years.length - 1]),
];
console.log(ages); // [37, 32, 21]
*/

//////////////////////////////////////////////////
// Lecture 40 Basic Array Operations (Methods)

//These methods are built in JS functions that can be performed on arrays.

// Add Elements

//Push method
const friends = ["Mark", "Tom", "Paul"];
friends.push("Jay"); // adds new element to end of array
console.log(friends);
//push method returns the length of the new array
const newLength = friends.push("Hale"); // ["Mark", "Tom", "Paul", "Jay", "Hale"]
console.log(newLength); // 5

//Unshift method
friends.unshift("Peter"); // adds new element to the start of the array
//also returns the length of th new array
console.log(friends); // ["Peter", "Mark", "Tom", "Paul", "Jay", "Hale"]

// Remove Elements

// Pop method
friends.pop(); // removes last element
console.log(friends); // ["Peter", "Mark", "Tom", "Paul", "Jay"]
friends.pop();
console.log(friends); // ["Peter", "Mark", "Tom", "Paul"]
console.log(friends.pop()); // returns the element that was removed.

// Shift method
friends.shift(); //removes first element
console.log(friends); // ["Mark", "Tom"]
//also returns the element that was removed

// IndexOf method
// returns the position of the element within the array
console.log(friends.indexOf("Tom"));
// if you try to return index of an element that doesn't exist, it will return -1
console.log(friends.indexOf("Max"));

// Includes method
// is ES6 method. Preferable. Returns true or false
console.log(friends.includes("Tom")); //true
console.log(friends.includes("Max")); //false
// uses strict equality for the check
friends.push(23);
console.log(friends.includes("23")); //false
console.log(friends.includes(23)); //true

// can use the includes method to write conditionals:
if (friends.includes("Tom")) console.log("You have a friend called Tom");
