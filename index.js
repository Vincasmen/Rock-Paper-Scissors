//First I declared each of the choice(rock, paper, scissor).

const rockPlayer = document.getElementById("rock");
const paperPlayer = document.getElementById("paper");
const scissorsPlayer = document.getElementById("scissors");

const playersOptions = document.getElementById("players-choice");
const computerTurn = document.getElementById("computers turn");

//Array for computers choice
const choices = ["rock", "paper", "scissors"];

//Randomize choice of the computer
const randomChoice = Math.floor(Math.random() * 3);
computerChoice = choices[randomChoice];
console.log(choices[randomChoice]);

// const choice = document.querySelectorAll(".choice");

computerTurn.textContent = "Waiting for you to choose";

//Longer way of creating an event handler for each of the button

rockPlayer.addEventListener("click", function () {
  console.log(rockPlayer.textContent);
});
paperPlayer.addEventListener("click", function () {
  console.log(paperPlayer.textContent);
});
scissorsPlayer.addEventListener("click", function () {
  console.log(scissorsPlayer.textContent);
});

//For loop, for looping :D over all the buttons

// for (let i = 0; i < choice.length; i++) {
//   choice[i].addEventListener("click", function () {
//     console.log(choice.length);
//   });
// }

const rules = function () {};
