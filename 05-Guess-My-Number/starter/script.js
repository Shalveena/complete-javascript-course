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

// Building the game ///////////////////////////////////////
// A. Target the "Check!" button so that something happens when it is clicked
// B. When it is clicked, we want to save the number input by the user in a new variable
// C. and we want to write some logic for what would happen if the user did not input any number

document.querySelector(".check").addEventListener("click", function () {
  // addEventListener method listens for the event. We pass two arguments to it; the first argument is the event that it listens for ("click") and the second argument is what it should do when the event happens (function). This second argument is called the event handler.

  const guess = document.querySelector(".guess").value;
});
