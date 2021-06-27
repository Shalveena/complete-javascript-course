"use strict";

// Lecture: Functions
/*

// write a function called "describeCountry" with 3 parameters - "country", "population" and "capitalCity". Returns string: "Finland has 6 million people and its capital city is Helsinki"
const describeCountry = function (country, population, capitalCity) {
  return `${country} has ${population} million population and its capital city is ${capitalCity}`;
};

console.log(describeCountry("Australia", 25, "Canberra"));
console.log(describeCountry("New Zealand", 5, "Wellington"));
console.log(describeCountry("Germany", 83, "Berlin"));
*/

// Lecture: Function declarations vs expressions
/*
function percentageOfWorld1(population, country) {
  return `${country} has ${population} million population, so it's about ${Math.floor(
    (population / 7900) * 100
  )}% of the world population`;
}

let australiaPop = percentageOfWorld1(25, "Australia");
let chinaPop = percentageOfWorld1(1441, "China");
let germanyPop = percentageOfWorld1(83, "Germany");
console.log(`${australiaPop}`);
console.log(`${chinaPop}`);
console.log(`${germanyPop}`);

//same thing but using function expression
const percentageOfWorld2 = function (population, country) {
  return `${country} has ${population} million population, so it's about ${Math.floor(
    (population / 7900) * 100
  )}% of the world population`;
};

chinaPop = percentageOfWorld2(1441, "China");
germanyPop = percentageOfWorld2(83, "Germany");
australiaPop = percentageOfWorld2(25, "Australia");
console.log(`${australiaPop}`);
console.log(`${chinaPop}`);
console.log(`${germanyPop}`);
*/

// Lecture: arrow functions
/*

// same thing as above, but using arrow functions
const percentageOfWorld2 = (population, country) => {
  return `${country} has ${population} million population, so it's about ${Math.floor(
    (population / 7900) * 100
  )}% of the world population`;
};

const chinaPop = percentageOfWorld2(1441, "China");
const germanyPop = percentageOfWorld2(83, "Germany");
const australiaPop = percentageOfWorld2(25, "Australia");
console.log(`${australiaPop}`);
console.log(`${chinaPop}`);
console.log(`${germanyPop}`);
*/

// Lecture: Functions calling other functions

// Lecture: Introduction to arrays

// Lecture: Basic array operations (methods)
