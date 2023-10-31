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

const playerChoice = document.querySelector(".current-player-choice");
const computerChoice = document.querySelector(".current-computer-choice");

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
  winner.textContent = "▼ Start the game ▼ ";
  showPlayerBtns.classList.remove("hidden");
  playerChoice.textContent = "Choose...";
  computerChoice.textContent = "Choose...";
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

//Array for computers choice
const computerChoices = ["Rock 🪨", "Paper 📰", "Scissors ✂️"];
//Click events for player options buttons

rockPlayer.addEventListener("click", function () {
  player.textContent = rockPlayer.textContent;
  playerChoice.textContent = rockPlayer.textContent;
}),
  paperPlayer.addEventListener("click", function () {
    player.textContent = paperPlayer.textContent;
    playerChoice.textContent = paperPlayer.textContent;
  }),
  scissorsPlayer.addEventListener("click", function () {
    player.textContent = scissorsPlayer.textContent;
    playerChoice.textContent = scissorsPlayer.textContent;
  }),
  //Event listener for again button
  againBtn.addEventListener("click", playAgain);

for (let i = 0; i < choice.length; i++) {
  choice[i].addEventListener("click", function () {
    //Randomize choice of the computer
    const randomChoice = Math.floor(Math.random() * 3);
    computer.textContent = computerChoices[randomChoice];

    rockPlayer.setAttribute("disabled", true);
    paperPlayer.setAttribute("disabled", true);
    scissorsPlayer.setAttribute("disabled", true);
    computerChoice.classList.add("pulsate-bck");
    computerChoice.textContent = "Choosing...";
    winner.classList.remove("scale-in-center");
    computerScore.classList.remove("text-focus-in");
    playerScore.classList.remove("text-focus-in");

    setTimeout(() => {
      computerChoice.textContent = computer.textContent;
      computerChoice.classList.remove("pulsate-bck");
      paperPlayer.removeAttribute("disabled");
      rockPlayer.removeAttribute("disabled");
      scissorsPlayer.removeAttribute("disabled");
      winner.classList.add("scale-in-center");

      if (computer.textContent === player.textContent) {
        winner.textContent = "Tie ❌";
        //Rule 1 🪨❌📰
      } else if (player.textContent == "Rock 🪨") {
        if (computer.textContent == "Paper 📰") {
          //Computer win 🤖🎉
          computerScore.classList.add("text-focus-in");
          computerScore.textContent++;
          winner.textContent = "Computer got point 🤖🎉";
        } else {
          //Player win 😶🎉
          playerScore.classList.add("text-focus-in");
          playerScore.textContent++;
          winner.textContent = "Player got point 😶🎉";
        }
        //Rule 2 ✂️❌🪨
      } else if (player.textContent == "Scissors ✂️") {
        if (computer.textContent == "Rock 🪨") {
          //Computer win 🤖🎉
          computerScore.classList.add("text-focus-in");
          computerScore.textContent++;
          winner.textContent = "Computer got point 🤖🎉";
        } else {
          //Player win 😶🎉
          playerScore.classList.add("text-focus-in");
          playerScore.textContent++;
          winner.textContent = "Player got point 😶🎉";
        }
        //Rule 3 📰❌✂️
      } else if (player.textContent == "Paper 📰") {
        if (computer.textContent == "Scissors ✂️") {
          //Computer win 🤖🎉
          computerScore.classList.add("text-focus-in");
          computerScore.textContent++;
          winner.textContent = "Computer got point 🤖🎉";
        } else {
          //Player win 😶🎉
          playerScore.classList.add("text-focus-in");
          playerScore.textContent++;
          winner.textContent = "Player got point 😶🎉";
        }
      }
      endGame();
    }, 1000);

    //Tie eventuality
  });
}

//End Game rules
const endGame = function () {
  computerScore.textContent >= 5
    ? (winner.textContent = "Computer won the game 👎👎👎")
    : playerScore.textContent >= 5
    ? (winner.textContent = "Player won the game 🎉🎉🎉")
    : (winner.textContent = choice());
  showPlayerBtns.classList.add("hidden");
  againBtnDiv.classList.remove("hidden");
  againBtnDiv.classList.add("bounce-top");
};

//Longer way of creating an event handler for each of the button

//For loop, for looping :D over all the buttons

// for (let i = 0; i < choice.length; i++) {
//   choice[i].addEventListener("click", function () {
//     console.log(choice.length);
//   });
// }
