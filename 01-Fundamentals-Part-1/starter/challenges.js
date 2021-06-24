/*
//Coding Challenge #1

//Store Mark's and John's mass and height in variables
// Data 1
// const weightMark = 78;
// const heightMark = 1.69;

// const weightJohn = 92;
// const heightJohn = 1.95;

// Data 2
const weightMark = 95;
const heightMark = 1.88;

const weightJohn = 85;
const heightJohn = 1.76;

// Calculate their BMI

//Mark's BMI:
const bmiMark = weightMark / heightMark ** 2;
console.log(`Mark's BMI is ${bmiMark}`);
//John's BMI:
const bmiJohn = weightJohn / heightJohn ** 2;
console.log(`John's BMI is ${bmiJohn}`);

// Does Mark have higher BMI that John?
const markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);
*/

/*
//Coding Challenge #2

// Data 1
const weightMark = 78;
const heightMark = 1.69;

const weightJohn = 92;
const heightJohn = 1.95;

// Data 2
// const weightMark = 95;
// const heightMark = 1.88;

// const weightJohn = 85;
// const heightJohn = 1.76;

// Calculate their BMI

//Mark's BMI:
const bmiMark = weightMark / heightMark ** 2;
//console.log(`Mark's BMI is ${bmiMark}`);

//John's BMI:
const bmiJohn = weightJohn / heightJohn ** 2;
//console.log(`John's BMI is ${bmiJohn}`);

//Compare their BMI using if/else statement:
if (bmiMark > bmiJohn) {
  console.log("Mark's BMI is higher than John's!");
} else if (bmiMark < bmiJohn) {
  console.log("John's BMI is higher than Mark's!");
} else {
  console.log("Mark and John have the exact same BMI!");
}

//Use template literals instead:
if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
} else if (bmiMark < bmiJohn) {
  console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`);
} else {
  console.log(`Mark and John have the exact same BMI ${bmiJohn}!`);
}
*/

/*
// Coding Challenge #3
// 1. Calculate the average score for each team, using the test data below

// Data 1:
// const scoreDolphins1 = 96;
// const scoreDolphins2 = 108;
// const scoreDolphins3 = 89;
// const totalScoreDolphins = scoreDolphins1 + scoreDolphins2 + scoreDolphins3;

// const scoreKoalas1 = 88;
// const scoreKoalas2 = 91;
// const scoreKoalas3 = 110;
// const totalScoreKoalas = scoreKoalas1 + scoreKoalas2 + scoreKoalas3;

// const avgScoreDolphins = totalScoreDolphins / 3;
// const avgScoreKoalas = totalScoreKoalas / 3;
// console.log(avgScoreDolphins, avgScoreKoalas);

// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)

// if (avgScoreDolphins > avgScoreKoalas) {
//   console.log("Dolphins are the winners!");
// } else if (avgScoreKoalas > avgScoreDolphins) {
//   console.log("Koalas are the winners!");
// } else {
//   console.log("It's a draw!");
// }

// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉

//Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// const scoreDolphins1 = 97;
// const scoreDolphins2 = 112;
// const scoreDolphins3 = 101;
// const totalScoreDolphins = scoreDolphins1 + scoreDolphins2 + scoreDolphins3;

// const scoreKoalas1 = 109;
// const scoreKoalas2 = 95;
// const scoreKoalas3 = 123;
// const totalScoreKoalas = scoreKoalas1 + scoreKoalas2 + scoreKoalas3;

// const avgScoreDolphins = totalScoreDolphins / 3;
// const avgScoreKoalas = totalScoreKoalas / 3;
// console.log(avgScoreDolphins, avgScoreKoalas);

// if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins >= 100) {
//   console.log("Dolphins are the winners!");
// } else if (avgScoreKoalas > avgScoreDolphins && avgScoreKoalas >= 100) {
//   console.log("Koalas are the winners!");
// } else {
//   console.log("There is no winner :(");
// }

// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

// Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
const scoreDolphins1 = 97;
const scoreDolphins2 = 112;
const scoreDolphins3 = 101;
const totalScoreDolphins = scoreDolphins1 + scoreDolphins2 + scoreDolphins3;

const scoreKoalas1 = 109;
const scoreKoalas2 = 95;
const scoreKoalas3 = 106;
const totalScoreKoalas = scoreKoalas1 + scoreKoalas2 + scoreKoalas3;

const avgScoreDolphins = totalScoreDolphins / 3;
const avgScoreKoalas = totalScoreKoalas / 3;
console.log(avgScoreDolphins, avgScoreKoalas);

if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins >= 100) {
  console.log("Dolphins are the winners!");
} else if (avgScoreKoalas > avgScoreDolphins && avgScoreKoalas >= 100) {
  console.log("Koalas are the winners!");
} else if (
  avgScoreDolphins === avgScoreKoalas &&
  avgScoreDolphins >= 100 &&
  avgScoreDolphins >= 100
) {
  console.log("It's a draw!");
} else {
  console.log("There is no winner :(");
}
*/
