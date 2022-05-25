//First I declared each of the choice(rock, paper, scissor).

// const rock = document.getElementById("rock");
// const paper = document.getElementById("paper");
// const scissors = document.getElementById("scissors");
const playersOptions = document.getElementById("players-choice");
const computerChoice = document.getElementById("computers turn");
const choice = document.querySelectorAll(".choice");

computerChoice.textContent = "Waiting for you to choose";

//Longer way of creating an event handler for each of the button

// rock.addEventListener("click", function () {
//   console.log("rock");
// });
// paper.addEventListener("click", function () {
//   console.log("paper");
// });
// scissors.addEventListener("click", function () {
//   console.log("scissors");
// });

//For loop, for looping :D over all the buttons

for (let i = 0; i < choice.length; i++) {
  choice[i].addEventListener("click", function () {
    console.log("Clicked");
  });
}
