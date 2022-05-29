//First I declared each of the choice(rock, paper, scissor).

const rockPlayer = document.getElementById("rock");
const paperPlayer = document.getElementById("paper");
const scissorsPlayer = document.getElementById("scissors");
let computer = document.getElementById("computer-choice");
const player = document.getElementById("player-choice");
const result = document.getElementById("result-choice");
const winner = document.getElementById("winner-announcment");

const playersOptions = document.getElementById("players-choice");

//Array for players buttons
const playerChoices = [rockPlayer, paperPlayer, scissorsPlayer];

//Array for computers choice
const computerChoices = ["Rock", "Paper", "Scissors"];

//Randomize choice of the computer
const randomChoice = Math.floor(Math.random() * 3);
computer = computerChoices[randomChoice];
console.log(computerChoices[randomChoice]);

const compare = function (computerChoice, playerChoice) {
  if (computerChoice === playerChoice) {
    return console.log("Tie");
  }
};
const output = compare(computer[randomChoice], player.textContent);

//Longer way of creating an event handler for each of the button

rockPlayer.addEventListener("click", function () {
  player.textContent = rockPlayer.textContent;
});
paperPlayer.addEventListener("click", function () {
  player.textContent = paperPlayer.textContent;
});
scissorsPlayer.addEventListener("click", function () {
  player.textContent = scissorsPlayer.textContent;
});

//For loop, for looping :D over all the buttons

// for (let i = 0; i < choice.length; i++) {
//   choice[i].addEventListener("click", function () {
//     console.log(choice.length);
//   });
// }
