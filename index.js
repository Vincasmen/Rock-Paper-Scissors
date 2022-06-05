"use strict";

//Initial values
let playerScore = document.querySelector(".player-score-number");
let computerScore = document.querySelector(".computer-score-number");
let winner = document.getElementById("winner-announcment");
//

const showPlayerBtns = document.getElementById("players-choice");
const againBtnDiv = document.getElementById("againBtn-div");
const againBtn = document.getElementById("againBtn");
const choice = document.querySelectorAll(".choice-player");
const infoBtn = document.getElementById("info-icon");
const modalWindow = document.getElementById("modal-div-id");
const overlay = document.getElementById("overlay");

overlay.addEventListener("click", function () {
  modalWindow.classList.toggle("hidden-modal");
  overlay.classList.toggle("hidden-overlay");
});

//Event listener to info button
infoBtn.addEventListener("click", function () {
  modalWindow.classList.toggle("hidden-modal");
  overlay.classList.toggle("hidden-overlay");
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modalWindow.classList.contains("hidden-modal")) {
    modalWindow.classList.toggle("hidden-modal");
    overlay.classList.toggle("hidden-overlay");
  }
});

const init = function () {
  playerScore.textContent = 0;
  computerScore.textContent = 0;
  winner.textContent = "⬇️Start the game⬇️";
  showPlayerBtns.classList.remove("hidden-player-btns");
};
init();
//First I declared each of the choice(rock, paper, scissor).
const rockPlayer = document.getElementById("rock");
const paperPlayer = document.getElementById("paper");
const scissorsPlayer = document.getElementById("scissors");

//Output text for computers random choice
let computer = document.getElementById("computer-choice");

//Output text for players choice
const player = document.getElementById("player-choice");

//Button to find out who won
const resultBtn = document.getElementById("result");

const playAgain = function () {
  init();
  againBtnDiv.classList.add("hidden");
};
//Div of players choices
// const playersOptions = document.getElementById("players-choice");

//Array for players buttons
// const playerChoices = [rockPlayer, paperPlayer, scissorsPlayer];

//Array for computers choice
const computerChoices = ["Rock 🪨", "Paper 📰", "Scissors ✂️"];
//Click events for player options buttons

rockPlayer.addEventListener("click", function () {
  player.textContent = rockPlayer.textContent;
}),
  paperPlayer.addEventListener("click", function () {
    player.textContent = paperPlayer.textContent;
  }),
  scissorsPlayer.addEventListener("click", function () {
    player.textContent = scissorsPlayer.textContent;
  }),
  //Event listener for again button
  againBtn.addEventListener("click", playAgain);

for (let i = 0; i < choice.length; i++) {
  choice[i].addEventListener("click", function () {
    //Randomize choice of the computer
    const randomChoice = Math.floor(Math.random() * 3);
    computer.textContent = computerChoices[randomChoice];

    //Tie eventuality
    if (computer.textContent === player.textContent) {
      winner.textContent = "Tie ❌";
      //Rule 1 🪨❌📰
    } else if (player.textContent == "Rock 🪨") {
      if (computer.textContent == "Paper 📰") {
        //Computer win 🤖🎉
        computerScore.textContent++;
        winner.textContent = "Computer WIN 🤖🎉";
        // console.log("Computer +1");
      } else {
        //Player win 😶🎉
        playerScore.textContent++;
        winner.textContent = "Player WIN 😶🎉";
        // console.log("Player +1");
      }
      //Rule 2 ✂️❌🪨
    } else if (player.textContent == "Scissors ✂️") {
      if (computer.textContent == "Rock 🪨") {
        //Computer win 🤖🎉
        computerScore.textContent++;
        winner.textContent = "Computer WIN 🤖🎉";
        // console.log("Computer +1");
      } else {
        //Player win 😶🎉
        playerScore.textContent++;
        winner.textContent = "Player WIN 😶🎉";
        // console.log("Player +1");
      }
      //Rule 3 📰❌✂️
    } else if (player.textContent == "Paper 📰") {
      if (computer.textContent == "Scissors ✂️") {
        //Computer win 🤖🎉
        computerScore.textContent++;
        winner.textContent = "Computer WIN 🤖🎉";
        // console.log("Computer +1");
      } else {
        //Player win 😶🎉
        playerScore.textContent++;
        winner.textContent = "Player WIN 😶🎉";
        // console.log("Player +1");
      }
    }
    endGame();
  });
}

//End Game rules
const endGame = function () {
  computerScore.textContent >= 5
    ? (winner.textContent = "Computer won the game 👎👎👎")
    : playerScore.textContent >= 5
    ? (winner.textContent = "Player won the game 🎉🎉🎉")
    : (winner.textContent = choice());
  showPlayerBtns.classList.add("hidden-player-btns");
  againBtnDiv.classList.remove("hidden");
};

//Longer way of creating an event handler for each of the button

//For loop, for looping :D over all the buttons

// for (let i = 0; i < choice.length; i++) {
//   choice[i].addEventListener("click", function () {
//     console.log(choice.length);
//   });
// }
