"use strict";

// Coding Challenge #1:
//Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

// a. Understanding the problem
// Will all the temperatures be in the same unit of measurement (eg celcius?)

// b. Break it up into sub-problems
// - function that takes in an array as a parameter
// - loop through the array, and for each element in the array, return string.
// - put string into new array
// - join array to string

const printForecast = (temps) => {
  let newArr = [];

  for (let i = 0; i < temps.length; i++) {
    const string1 = `... ${temps[i]}°C in ${i + 1} days`;
    newArr.push(string1);
  }

  console.log(newArr.join(" ") + " ...");
  // return newArr.join(" ");
};

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
