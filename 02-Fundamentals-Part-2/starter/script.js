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
/*

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
*/

//////////////////////////////////////////////////
// Lecture 42 Introduction to Objects
/*

// Array:
const shalveenaArray = [
  "Shalveena",
  "Rohde",
  2021 - 1987,
  "student",
  ["Kajal", "Mauzama", "Anushka", "Anna M", "Prashita"]
]

// Object:
const shalveena = {
  firstName: "Shalveena", // key-value pair
  lastName : "Rohde", // the key is also called a 'property' of the object
  age: 2021 - 1987,
  job: "student",
  friends: ["Kajal", "Mauzama", "Anushka", "Anna M", "Prashita"]
}
// above object has 5 properties. 
// in objects, the order of the data does not matter. 
*/

//////////////////////////////////////////////////
// Lecture 43 Dot vs Bracket Notation
/*
const shalveena = {
  firstName: "Shalveena", // key-value pair
  lastName: "Rohde", // the key is also called a 'property' of the object
  age: 2021 - 1987,
  job: "student",
  friends: ["Kajal", "Mauzama", "Anushka", "Anna M", "Prashita"],
};

// How to get values out of objects?
console.log(shalveena.firstName);
// OR
console.log(shalveena["firstName"]);

// with the bracket notation, we can put any expression inside the brackets.
// for example:
const nameKey = "Name";
console.log(shalveena["first" + nameKey]);
console.log(shalveena["last" + nameKey]);

another example:
const userInterest = prompt(
  "What do you want to know about Shalveena? Choose from firstName, lastName, age, job, or friends"
);
// console.log(shalveena.userInterest); // prints undefined because shalveena object does not have a property called userInterest.
console.log(shalveena[userInterest]);

// we can write some logic to give a different message if what the user typed is not actually a property of the shalveena object:
if (shalveena[userInterest]) {
  console.log(shalveena[userInterest]);
} else {
  console.log(
    `That is not a valid option. Please choose from firstName, lastName, age, job, or friends.`
  );
}

// Adding new properties to object
shalveena.location = "Melbourne";
shalveena["gender"] = "female";

console.log(shalveena);
*/

//Challenge
/*
//"Shalveena has 5 friends, and her best friend is called Kajal."
const shalveena = {
  firstName: "Shalveena", // key-value pair
  lastName: "Rohde", // the key is also called a 'property' of the object
  age: 2021 - 1987,
  job: "student",
  friends: ["Kajal", "Mauzama", "Anushka", "Anna M", "Prashita"],
};

//length of shalveena.friends
// shalveena[friends] = value of friends
// shalveena[friends].length

const numOfFriends = shalveena.friends.length;

console.log(
  `${shalveena.firstName} has ${numOfFriends} friends, and her best friend is called ${shalveena["friends"][0]}`
);
*/

//////////////////////////////////////////////////
// Lecture 44 Object Methods
/*
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,
//   calcAge: function (birthYear) {
//     return 2021 - birthYear;
//   }, //this is a method. A method is a property that holds a function as the value.
// };

//accessing the calcAge method:
// console.log(jonas.calcAge(1991)); // OR
// console.log(jonas["calcAge"](1991));

// The this keyword/variable (is equal to the object on which the method is called):

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   calcAge: function () {
//     // console.log(this); // will return the whole jonas object (because jonas is calling the calcAge method below)
//     return 2021 - this.birthYear;
//   },
// };

// console.log(jonas.calcAge());

// calculating the age only once by using the calcAge method and then store it in the object and then retrieve the age as a property from the object:

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
// };

// console.log(jonas.calcAge());
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

//Challenge:
//get summary that returns a string that summarises the data in the jonas object using a method. E.g. "Jonas is a 30 year old teacher, and he has a/no driver's license."

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(jonas.getSummary());
*/

//////////////////////////////////////////////////
// Lecture 46 Iteration: the for loop
/*

//They are a control structure. Loops allow us to automate repetitive tasks.

//E.g. lifting weights at the gym, doing 10 repetitions:
// console.log(`Lifing weights repetition 1 🏋️‍♀️`);
// console.log(`Lifing weights repetition 2 🏋️‍♀️`);
// console.log(`Lifing weights repetition 3 🏋️‍♀️`);
// console.log(`Lifing weights repetition 4 🏋️‍♀️`);
// console.log(`Lifing weights repetition 5 🏋️‍♀️`);
// console.log(`Lifing weights repetition 6 🏋️‍♀️`);
// console.log(`Lifing weights repetition 7 🏋️‍♀️`);
// console.log(`Lifing weights repetition 8 🏋️‍♀️`);
// console.log(`Lifing weights repetition 9 🏋️‍♀️`);
// console.log(`Lifing weights repetition 10 🏋️‍♀️`); // violates the DRY principle

// Instead, do for loop:
// is similar to if statement, but is a for statement
// for loop keeps running while condition is TRUE
for (
  let rep = 1; //initialise the counter at 1 because we wanted to start at repetition 1
  rep <= 10; // rep <= 10 is a condition that will be evaluated before each iteration of the loop (the loop will keep running while this condition stays true.)
  rep++ // after each iteration, we want to increase rep by one, otherwise the condition will never become false and it will be an infinite loop.
) {
  console.log(`Lifing weights repetition ${rep} 🏋️‍♀️`);
}
*/

//////////////////////////////////////////////////
// Lecture 47: Looping Arrays, breaking and continuing
/*
// For Loop through array
const jonas = [
  "Jonas",
  "Schmedtmann",
  2021 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

for (let i = 0; i < jonas.length; i++) {
  // console.log(jonas[i], typeof jonas[i]);
}

// Creating a new array using for loop
const jonas1 = [
  "Jonas",
  "Schmedtmann",
  2021 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

let types = [];

for (let i = 0; i < jonas1.length; i++) {
  // reading from jonas array
  console.log(jonas1[i], typeof jonas1[i]);

  // filling types array
  // types[i] = typeof jonas1[i];

  // another way to fill types array
  types.push(typeof jonas1[i]);
}

console.log(types);

// Another example:
// calculate ages for the birthyears and store in a new array.
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  const calcAge = function () {
    const age = 2021 - years[i];
    return age;
  };
  ages.push(calcAge());
}
console.log(ages);

// easier way to do it!
for (let i = 0; i < years.length; i++) {
  ages.push(2021 - years[i]);
}
console.log(ages);
*/

// Continue and Break statements for Loops:
/*
// Continue is to exit the current iteration of the loop and continue to the next one.
// Break is used to completely terminate the whole loop.

const jonas = [
  "Jonas",
  "Schmedtmann",
  2021 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

// Imagine we only wanted to print the elements that are strings:
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue; //if this condition is true, then the current iteration is immediately stopped and continued to the next one iteration.

  console.log(jonas[i], typeof jonas[i]);
}

//Imagine we don't want to log any other elements once we have found a number:
console.log("---STOP AFTER NUMBER!---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") {
    console.log(jonas[i], typeof jonas[i]);
    break;
  }

  console.log(jonas[i], typeof jonas[i]);
}
*/

//////////////////////////////////////////////////
// Lecture 48: Looping Backwards and Loops in Loops
const jonas = [
  "Jonas",
  "Schmedtmann",
  2021 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

// looping over the array backwards:
for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(jonas[i]);
}
