'use strict';

// Selecting DOM elements //////////////////////////////
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnsShowModal = document.querySelectorAll('.show-modal'); // gives a nodeList
// console.log(btnsShowModal);
// if we want to do something to all of these buttons, we can simply loop through the node list and do something with the buttons:
// for (let i = 0; i < btnsShowModal.length; i++) {
//   console.log(btnsShowModal[i].textContent);
// }

// Functions ////////////////////////////////////////////

// Function to close modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Function to open modal
const openModal = function () {
  // change the class of the modal so it is no longer "hidden"
  modal.classList.remove('hidden'); // classList is a property that we can read. It has a couple of methods, including the remove method.
  overlay.classList.remove('hidden');
};

// How to manipulate classes with JS

// Give an event listener to each show modal button:
for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', openModal);
}

// Add event listener to close modal button;
btnCloseModal.addEventListener('click', closeModal);

// Add event listener to overlay so when you click it, it closes the modal:
overlay.addEventListener('click', closeModal);

// How to handle keypress/keyboard events
// keyboard events are global events as they don't happen on one specific element. We therefore listen for them on the document as a whole.
// document.addEventListener('keydown', function () {
//   console.log('A key was pressed'); // this will happen when ANY key is pressed. But, we only want the function to be called when the Esc key is pressed. JS generates an object whenever the event happens, which we can access in the event handler function.
// });
// Three diff types of events for keyboard: keydown (fired when we press the key down), keypress (fired consistently as we keep our finger on the key), keyup (fired as soon as we lift our finger off the key)

document.addEventListener('keydown', function (event) {
  // console.log(event);
  // console.log(event.key); // to get the value stored in the property "key"

  // if (event.key === 'Escape') {
  //   console.log('Esc was pressed');
  // }

  // We want the esc key to be closed only if the modal is already open (it does not have the 'hidden' class)
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
