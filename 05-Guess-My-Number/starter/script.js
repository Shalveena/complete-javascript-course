"use strict";
/*
/// DOM Manipulation //////////////////////////////////////////

// Target the "start guessing" text in html
document.querySelector(".message");
// Getting the content
console.log(document.querySelector(".message").textContent);
console.log(document.querySelector(".guess").value); // to get the content of an input field, we have to use .value instead of .textContent
// Setting the content
document.querySelector(".message").textContent = "🎉 Correct Number";
document.querySelector(".guess").value = 56;
console.log(document.querySelector(".guess").value);

*/

// addEventListener method listens for the event. We pass two arguments to it; the first argument is the event that it listens for ("click") and the second argument is what it should do when the event happens (function). This second argument is called the event handler.

// console.log(document.querySelector(".guess").value);

// Building the game ///////////////////////////////////////

// Define the secret number
const generateNum = () => Math.trunc(Math.random() * 20) + 1; // to make it 1-21
let secretNumber = generateNum();

// Set starting score
let score = 20;

// Set highscore
let highscore = 0;

// function to change the text of "Start guessing"
let displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// Target the "Check!" button so that something happens when it is clicked
document.querySelector(".check").addEventListener("click", function () {
  // When it is clicked, save the number input by the user in a new variable
  const guess = Number(document.querySelector(".guess").value); // the value we got from the user input is a string.

  // if the user did not input any number
  if (!guess) {
    displayMessage("⛔ No number!");
    // document.querySelector(".message").textContent = "⛔ No number!";

    // if guess is correct
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    // document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector(".number").textContent = secretNumber;
    if (highscore < score) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    //change css style
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // if guess is different to secret number
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? "📈 Too high!" : "📉 Too low!";
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent = "💥 You lose!";
      displayMessage("💥 You lose!");
      document.querySelector(".score").textContent = 0;
    }
  }

  //   // if guess is greater than secret number
  // } else if (guess > secretNumber) {
  //   // need another if statement to add that score should be > 0
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📈 Too high!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "💥 You lose!";

  //     document.querySelector(".score").textContent = 0;
  //   }

  //   // if guess is lower than secret number
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📉 Too low!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "💥 You lose!";

  //     document.querySelector(".score").textContent = 0;
  //   }
  // }

  // When Again button is clicked, secret number, and score are reset
});

document.querySelector(".again").addEventListener("click", function () {
  // restore initial value of the secretNumber
  secretNumber = generateNum();
  // restore initial value of the score
  score = 20;
  // restore initial condition of the message
  displayMessage("Start guessing...");
  // document.querySelector(".message").textContent = "Start guessing...";
  // restore initial condition of the score message
  document.querySelector(".score").textContent = score;
  // restore initial condition of the guess input field
  document.querySelector(".guess").value = "";
  // restore initial condition of the number message
  document.querySelector(".number").textContent = "?";
  // restore css styles
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
