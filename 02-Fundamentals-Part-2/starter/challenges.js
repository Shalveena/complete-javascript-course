"use strict";

// Coding Challenge #1
/*
//1. Create arrow function to calculate average of three values
const calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3;

//2. Use the function to calculate the average for both teams;
//Data 1:
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);

//3. Create "checkWinner" function to log the winner to the console together with the victory points. A team only wins if it has at least double the avg score of the other team.
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`There is no winner`);
  }
};

//4. Call "checkWinner" to determine winner
checkWinner(avgDolphins, avgKoalas);

//Using test Data 2
//Data 2;
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
checkWinner(avgDolphins, avgKoalas);
*/

// Coding Challenge #2
//1. Write a function 'calcTip'. Tip 15% if the bill value is between 50 and 300, otherwise 20%.
const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(calcTip(100));

//2. Create an array 'bills' containing the test data
const bills = [125, 555, 44];
console.log(bills);

//3. Create an array 'tips' containing the tip for each bill using the calcTip function
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

//4. Bonus: Create an array 'total' containing the total values, so the bill + tip
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);
