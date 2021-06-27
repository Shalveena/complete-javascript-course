"use strict";

//Lecture: Values and Variables
/*
let country = "Australia";
let continent = "Australia";
let population = "25 million";

console.log(country, continent, population);
*/

// Lecture: Data Types
/*
let country = "Australia";
let continent = "Australia";
let population = "25 million";

const isIsland = false;
let language;
console.log(
  typeof isIsland,
  typeof population,
  typeof country,
  typeof language
);
*/

// Lecture: let, const and var
/*
const country = "Australia";
const continent = "Australia";
let population = "25 million";
const isIsland = false;
let language;

language = "English";
*/

// Lecture: Basic Operators
/*
const country = "Australia";
const continent = "Australia";
let population = 25;
const isIsland = false;
let language;
language = "English";

//country split in half, how many people on each half?
const halfPopulation = population / 2;
console.log(halfPopulation);
//increase population of country by 1;
population += 1;
console.log(population);
//does your country have more population than finland (6m)?
let popFinland = 6;
const isMorePop = population > popFinland ? true : false;
console.log(isMorePop);
//does your country have more population than avg (33m)?
let avgPop = 33;
const aboveAvgPop = population > avgPop ? true : false;
console.log(aboveAvgPop);
//new variable containing string: "Portugal is in Europe, and its 11 million people speak portugese"
const description = `${country} is in  the ${continent}n continent, and its ${population} million population speak ${language}.`;
console.log(description);
*/

//Lecture: Taking Decisions: if/else statements
/*
const country = "Australia";
const continent = "Australia";
let population = 25;
const isIsland = false;
let language;
language = "English";
let avgPop = 33;

//if population is more than 33m, log 'Portugal's population is above average'. Otherwise, log a string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population)

if (population > avgPop) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${avgPop - population} million below average`
  );
}
*/

// Lecture: Type conversion and coercion
/*
console.log(4);
console.log("617");
console.log(19 - 13 + 17);
console.log(123 < 57);
console.log(1149 - 4 - 2);
*/

// Lecture: equality operators: == vs. ===
/*
let numNeighbours = Number(
  prompt(`How many neighbour countries does your country have?`)
);

if (numNeighbours === 1) {
  console.log(`Only 1 border`);
} else if (numNeighbours > 1) {
  console.log(`More than 1 border`);
} else {
  console.log(`No borders`);
}
*/

// Lecture: Logical operators
/*
const country = "Australia";
const continent = "Australia";
let population = 25;
const isIsland = false;
let language;
language = "English";
let avgPop = 33;

//Sarah wants to live in a country that speaks English, has less than 50m people and is not an island
if (language === "English" && population < 50 && !isIsland) {
  console.log(`You should live in ${country}`);
} else {
  console.log(`${country} does not meet your criteria 😔`);
}
*/

// Lecture: The switch statement
/*
const language = "English";

switch (language) {
  case "Chinese":
  case "Mandarin":
    console.log(`MOST number of native speakers!`);
    break;
  case "Spanish":
    console.log(`2nd place in number of native speakers`);
    break;
  case "English":
    console.log(`3rd place`);
    break;
  case "Hindi":
    console.log("Number 4");
    break;
  case "Arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too 😃");
}
*/

// lecture: The conditional (ternary) operator
/*
const country = "Australia";
const continent = "Australia";
let population = 25;
const isIsland = false;
let language;
language = "English";
let avgPop = 33;

population > 33
  ? console.log(`${country}'s population is above average`)
  : console.log(`${country}'s population is below average`);

console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average`
);
*/
