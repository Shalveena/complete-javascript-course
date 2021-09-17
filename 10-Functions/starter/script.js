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
*/

// Old way of setting default parameters:
/*const bookings = [];

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
*/

// ES6 way:
/*
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
*/

// Note: default values can contain any expressions, and we can even use the values of other parameters that were set before it. Eg:
/*
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
/*
let y = lufthansa;

y.name = "Test";

console.log(y);
console.log(lufthansa);
*/

// test to show that when you save the value saved in a property into a variable, you are saving the actual value, not passing just a reference. So, you are making a copy of the value and saving it into the variable. In the below example, if I save lufthansa.airline into variable x, I am not just saving a reference to lufthansa.airline. This is proven by the fact that when I change y to "Air Pacific", the value of the airline property in lufthansa object doesn't change.
/*
let x = lufthansa.airline;
x = "Air Pacific";
console.log(lufthansa.airline);

// console.log(x);
// let y = x;

// y = "Air Pacific";
// console.log(x);
// console.log(lufthansa);
*/

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

// Call method /////////////

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
console.log(eurowings);
// The apply method is not commonly used anymore because we can now pass arrays to the call method by using the spread operator:
book.call(eurowings, ...flightData);

// testing why objects appear changed in console before it is actually changed.
/*
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
*/
