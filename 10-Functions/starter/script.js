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
