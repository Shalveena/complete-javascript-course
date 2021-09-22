"use strict";

// Default Values ----------------------------------------------

/*
const bookings = [];

const createBooking = function (flightNum, numPassengers, price) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123"); // numPassengers and price will show up as undefined becuase we didn't specify them as an argument.


// Old way of setting default parameters:
const bookings = [];

const createBooking = function (flightNum, numPassengers, price) {
  // setting default values for numPassengers and price:
  numPassengers = numPassengers || 1;
  price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123"); // {flightNum: 'LH123', numPassengers: 1, price: 199}


// ES6 way:

const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123"); // {flightNum: 'LH123', numPassengers: 1, price: 199}
createBooking("LH123", 2, 800); // flightNum: 'LH123', numPassengers: 2, price: 800


// Note: default values can contain any expressions, and we can even use the values of other parameters that were set before it. Eg:

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123", 2); // price would be automaticall calculated, so the log would be: {flightNum: 'LH123', numPassengers: 2, price: 398}
createBooking("LH123", 5); // {flightNum: 'LH123', numPassengers: 2, price: 995}

// Note: if you want to skip a parameter and just leave it as the default value, you can just put in undefined as the argument.
createBooking("LH123", undefined, 1000); // {flightNum: 'LH123', numPassengers: 1, price: 1000}
*/

// How Passing Arguments Works: Values vs References -----------------
/*
// How primitives and objects work in the context of functions
const flight = "LH234";
const jonas = {
  name: "Jonas Schmedtmann",
  passport: 24739479284,
};

// Function to check-in the passenger
const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 24739479284) {
    // alert("Check-in");
  } else {
    // alert("Wrong passport!");
  }
};

checkIn(flight, jonas);
//Is the same as doing:
const flightNum = flight;
const passenger = jonas;

// passing a primitive type to a function is the same as creating a copy of it, so the value is simply copies.
// but if you pass an object, it passes the reference to the object and so if you change it in the function, it will change the actual object!
console.log(flight); // LH234
console.log(jonas); // {name: 'Mr. Jonas Schmedtmann', passport: 24739479284}
*/

// Higher Order Functions --------------------------------------------

/*
// Simple functions that do string manipulation

// 1. Replaces all spaces in a word:
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

// 2. Makes the first word into uppercase:
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" "); // split the string into an array and then destructure it to create two variables - first and other.
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher Order Function: Functions accepting functions as arguments

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`); // functions also have properties!
};

transformer("JavaScript is the best!", upperFirstWord);
// Note: oneWord is a callback function here
// Output:
// Original string: JavaScript is the best!
// script.js:139 Transformed string: JAVASCRIPT is the best!
// script.js:141 Transformed by: upperFirstWord
// (index):70 Live reload enabled.

transformer("JavaScript is the best!", oneWord);
// Note: oneWord is a callback function here
// Output:
// Original string: JavaScript is the best!
// script.js:139 Transformed string: javascriptisthebest!
// script.js:141 Transformed by: oneWord

// Why are callback functions used so often in JS and why are they so helpful?
// They help us to split up our code into more re-usable and interconnected parts.
// But more importantly, callback functions allow us to create abstraction. Abstraction is when we hide the detail of some code implementation because we don't really care about that detail. It allows us to think at a higher and more abstract level. For example, the transformer function doesn't care how the string is transformed. It all it wants to do is to transform a string, but doesn't care how it is done. We could have written the code of the oneWord function or the upperFirstWord function directly into the transformer function, but we didn't do that, which allows the transformer function to be more flexible - all it is concerned with is transforming the string and doesn't care how that is done (it is delegating that task to the callback function).
*/

// Higher Order Function: Function returning function
/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetingHey = greet("Hey");

greetingHey("Shally");
// OR
greet("Hello")("Shally");

// Challenge: re-write the above using arrow functions

const greet2 = (greeting) => (name) => console.log(`${greeting} ${name}`);

greet2("Hi there")("Shalveena");
*/

// How we can set the 'this' keyword manually and why we would want to do this
/*
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${lufthansa.iataCode}${flightNum}`
    );

    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

// test to show that when you save a reference to an object in another variable, you are only passing the reference value to that variable. Adding a name property to y variable in effect adds a name variable to the lufthansa object.

let y = lufthansa;

y.name = "Test";

console.log(y);
console.log(lufthansa);


// test to show that when you save the value saved in a property into a variable, you are saving the actual value, not passing just a reference. So, you are making a copy of the value and saving it into the variable. In the below example, if I save lufthansa.airline into variable x, I am not just saving a reference to lufthansa.airline. This is proven by the fact that when I change y to "Air Pacific", the value of the airline property in lufthansa object doesn't change.

let x = lufthansa.airline;
x = "Air Pacific";
console.log(lufthansa.airline);

// console.log(x);
// let y = x;

// y = "Air Pacific";
// console.log(x);
// console.log(lufthansa);


lufthansa.book(239, "Shalveena Rohde");
lufthansa.book(12, "Manfred Rohde");
console.log(lufthansa);

// now, say we have another airline - eurowings:
const eurowings = {
  airline: "EuroWings",
  iataCode: "EW",
  bookings: [],
};

// eurowings should also have a method to book flights, but we don't want to write the whole book function out again (or copy and paste it), so what can we do?

// since a function is just a value, we can save it in a variable:
const book = lufthansa.book;

// however, the following will cause an error:
// book(23, "Sarah Fox"); // Uncaught TypeError: Cannot read property 'airline' of undefined at book.
// This happens because here it is no longer the lufthansa object that is calling the function. We have saved the value of the book method (remember that a method is just a property that holds a function as the value) onto the book variable, and now we are calling that function. So, the this keyword returns undefined because we are calling book as a normal function - we are not calling the book property/method of the lufthansa object; nor is the lufthansa object calling the book property/method.

// How can we tell JS what the this keyword should look like? We can use the call, apply and bind methods to do this.
*/

// Call method /////////////

/*
// This is simply a method that is available on functions (remember that functions are just another type of object, so they have methods).
book.call(eurowings, 23, "Sarah Williams");
console.log(eurowings);
// the call method's first argument is the object that we want the this keyword to point to. Note that we are not calling the book function ourselves here - we are calling the call method, which is calling the book function, with the this keyword set to eurowings. The other arguments are simply the arguments of the book method.

book.call(lufthansa, 239, "Marry Cooper");
console.log(lufthansa);

// Note: if you don't want to save the reference to the book method stored in the lufthansa object, but want to save the function directly (eg to avoid errors if the lufthans object is deleted/moved or if the book method within it is deleted), you could als do this:

const book2 = function (flightNum, name) {
  console.log(
    `${name} booked a seat on ${this.airline} flight ${lufthansa.iataCode}${flightNum}`
  );

  this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
};

book2.call(eurowings, 24, "Donald O'Conner");
console.log(eurowings);

// Apply Method ////////////
// Does the same as the call method, but instead of taking individual arguments, it takes an array as it's second argument:
const flightData = [583, "Marie Condo"];
book.apply(eurowings, flightData);
// console.log(eurowings);
// The apply method is not commonly used anymore because we can now pass arrays to the call method by using the spread operator:
book.call(eurowings, ...flightData);

// testing why objects appear changed in console before it is actually changed.

const newObj = {
  name: [],

  addName(firstName) {
    this.name.push(firstName);
  },
};

newObj.addName("Shalveena");
console.log(newObj.name);

newObj.addName("Max");
console.log(newObj.name);



// Bind method /////////////////////

// Also allows us to manually set the this keyword for any function call. It doesn't immediately call the function, but returns a new function where the this keyword is bound to the thing we passed as an argument.

const bookEW = book.bind(eurowings);
// this returns a function where the this keyword will be bound to eurowings.
bookEW(23, "Steven Williams");

// we can now go ahead and make a function for each of the airlines, so that instead of having to use a call all the time, we can just do bind once and from there on we can always use the new functions:
const bookLH = book.bind(lufthansa);

// In the bind method, we can actually pass in more arguments too, which will be bound in the function. For example, we could use bind to create a funciton for a specific airline and a specific flight:
const bookEW23 = book.bind(eurowings, 23);
// 23 will be the flightnumber, which will be pre-set to 23.

// Now, we can just book people onto flight 23 for Eurowings just be putting in the customer names:
bookEW23("Shalveena Rohde");
bookEW23("Martha Cooper");
// Note: this is called partial application - specifying parts of the arguments beforehand (a part of the arugment of he original function is already applied/set).

// Bind method is even more useful when using objects in combination with Event Listners:
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

// document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane);
// this.planes will be NaN because the this keyword is the button element that that the event listener is attached to. Why is that? Because in an event handler function, the this keyword always points to the element on which the handler function is attached to.
// We therefore need to manually define the this keyword. We cannot use the call method here, because the call method calls the function, and we don't want to call it (the button being clicked will call it)
document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Partial application
// means we can pre-set parameters

// General function for adding tax:
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// Specific function for adding VAT in Portugal:
// we can preset the tax rate so it will always be 23%.
// const addVAT = addTax.bind(null, 0.23); // first argument is the this keyword. We just use null here (can use any other value)

console.log(addVAT(200)); // 246
// Note: order of arguments is important here because if we want to pre-set the rate, it needs to be the first parameter of the addTax function.

// Could argue that the above could have easily been done with default parameters, but this is different here because it actually creates a brand new (and more specific) function based on the more general addTax function. Using bind gives us a new function.

// Challenge: Re-write the above, but with the technique of one function returning another function.

const addTax = (rate) => {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT = addTax(0.23);
console.log(addVAT(100));
*/

// Challenge 1 ------------------------------------------
/*
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],

  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    // Get answer
    const replyNumber = Number(
      prompt(
        `${this.question} \n${this.options.join("\n")} \n (Write option number)`
      )
    );

    // Register answer

    // My solution:
    // if (replyNumber >= 0 && replyNumber <= 3) {
    //   this.answers[replyNumber]++;
    // } else {
    //   window.alert("Please enter a number between 1 and 3");
    // }

    // Jonas's solution (short-circuiting):

    typeof replyNumber === "number" &&
      replyNumber < this.answers.length &&
      this.answers[replyNumber]++;

    // Display answer
    this.displayResults();
    this.displayResults("string");
  },

  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};

const registerNewAnswerForPoll = poll.registerNewAnswer.bind(poll);
const pollBtn = document.querySelector(".poll");

pollBtn.addEventListener("click", registerNewAnswerForPoll);

// Use the "displayResults" method to display the following arrays, using both the "array" and "string" option.

const data1 = {
  answers: [5, 2, 3],
};

const data2 = {
  answers: [1, 5, 3, 9, 6, 1],
};

const displayResults = poll.displayResults;
displayResults.call(data1, "array");
displayResults.call(data1, "string");
displayResults.call(data2, "array");
displayResults.call(data2, "string");
*/

// Immediately Invoked Function Expressions (IIFE)/////////
/*
// A function that is only executed once and then disappears and is never called again. We need this for async await.

// Option 1: Can create a function and only execute it once:
const runOnce = function () {
  console.log("This is supposed to run only once!");
};

runOnce();
// But there is nothing stopping someone from running this function again.

// Option 2 (better option): IIFE
// We want to execute a function immediately without even having to save it somewhere.
(function () {
  console.log("This will never run again");
})();

// Can also do this in arrow function form:
(() => console.log("This will never run again"))();

// Why was this invented?
// Functions create scopes, and a scope doesn't have access to variables in an inner scope. E.g. the global scope doesn't have access to any variables defined inside a function. Therefore, we say that all data defined inside a scope is private, and the data is encapsulated. IIFEs were invented for this.
// Note: code blocks also create scope, for let and const variables. E.g:
{
  const isPrivate = 23;
} // this is not accessible on the global scope.

// IIFE are not used so much anymore, because if what we really want is to create a new scope to protect data privacy, all we need to do is create a new code block - no need to create a function, unless we want to use var for our variables.
// But if what you really need is to execute a function only once, then an IIFE is ideal, even now with modern JS.
*/

// Closures --------------------------------------------------

// Example 1:
let f;

const g = function () {
  const a = 23;

  // reassigning variable f to a function
  f = function () {
    console.log(a * 2);
  };
};

g();
// At this point, the execution environment of g() is no longer there.

f(); // 46
// This shows that the f function keeps a copy of the variable environment of the execution context in which it was made - that is, it remembers all the variables that existed within the execution context of g(), which included the a variable. That is why it can refer to a and multiple it by 2.
// The above is true even though variable f was not actually defined inside the function g; it was defined/created outside but then re-defined inside the g function (re-assigned).

const h = function () {
  const b = 277;
  f = function () {
    console.log(b * 2);
  };
};

// Re-assigning f function
g();
f();
console.dir(f); // Closure: 23

// Re-assigning f function again
h();
f();
console.dir(f); // Closure: 777

// Above shows that a closure can change as the variable is re-assigned!

// Example 2:
// We don't need to return a function to see a closure in action.
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  // Timer
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);
// Will create perGroup, setTimeout function will be called and it will register the callback function, which will be called after 3 seconds. And the console.log at the end will be called immediately (without waiting the 3 seconds). After the code inside boardPassengers is run, it's execution context will disappear/be removed from the call stack (even though the callback function is not executed until 3 seconds later - the boardPassengers function call puts it into motion and then finishes immediately, without waiting for the 3 seconds to finish.)
// Despite the above, the callback function remembers what n, perGroup and wait variables are (even though it was executed completely separately to the boardPassengers function). It remembered these variables through closure (note that the closure also includes the arguments, e.g. n and wait, because those are just local variables in the function)

// Coding Challenge 2:

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.querySelector("body").addEventListener("click", () => {
    header.style.color = header.style.color === "blue" ? "red" : "blue";
  });
})();
