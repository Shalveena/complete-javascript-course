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
//1. Create a function called 'describePopulation'. Use the function type you like the most. This function takes in two arguments: 'country' and 'population', and returns a string like this: 'China has 1441 million people, which is about 18.2% of the world.'
//2. To calculate the percentage, 'describePopulation' call the 'percentageOfWorld1' you created earlier

function percentageOfWorld(population) {
  return ((population / 7900) * 100).toFixed(2);
}

const describePopulation = (country, population) => {
  const percentage = percentageOfWorld(population);
  return `${country} has ${population} million people, which is about ${percentage}% of the world`;
};

// 3. Call 'describePopulation' with data for 3 countries of your choice

console.log(describePopulation("China", 1440));
console.log(describePopulation("Germany", 83));
console.log(describePopulation("Australia", 25));

// Lecture: Introduction to arrays
//1. Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a variable called 'populations'

const populations = [1441, 83, 25, 5];

//2. Log to the console whether the array has 4 elements or not (true or false)
console.log(populations.length === 4);

//3. Create an array called 'percentages' containing the percentages of the world population for these 4 population values. Use the function 'percentageOfWorld1' that you created earlier to compute the 4 percentage values
const percentages = [
  percentageOfWorld(populations[0]),
  percentageOfWorld(populations[1]),
  percentageOfWorld(populations[2]),
  percentageOfWorld(populations[3]),
];
console.log(percentages);

// Lecture: Basic array operations (methods)

// 1. Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called 'neighbours'
const neighbours = [
  "Denmark",
  "Netherlands",
  "Belgium",
  "Luxembourg",
  "France",
  "Switzerland",
  "Austria",
  "Czechia",
  "Poland",
];

// 2. At some point, a new country called 'Utopia' is created in the neighbourhood ofyour selected country. So add it to the end of the 'neighbours' array
neighbours.push("Utopia");

// 3. Unfortunately, after some time, the new country is dissolved. So remove it from the end of the array
neighbours.pop();

// 4. If the 'neighbours' array does not include the country ‘Germany’, log to the console: 'Probably not a central European country :D'
console.log(
  neighbours.includes("Germany")
    ? "Likely a central European country"
    : "Probably not a central European country :D"
);

// 5. Change the name of one of your neighbouring countries. To do that, find the index of the country in the 'neighbours' array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.
const indexOfLuxembourg = neighbours.indexOf("Luxembourg");
// console.log(indexOfLuxembourg);
neighbours[indexOfLuxembourg] = "Republic of Sweden";
console.log(neighbours);
