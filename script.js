const choice = document.querySelectorAll("[data-choices]");
const resultPos = document.querySelector("[data-border");
const playerScore = document.querySelector("[data-score-player]");
const computerScore = document.querySelector("[data-score-computer]");

const CHOICE = [
  {
    name: "rock",
    emoji: "✊",
    beats: "scissors",
  },
  {
    name: "paper",
    emoji: "✋",
    beats: "rock",
  },
  {
    name: "scissors",
    emoji: "✌",
    beats: "paper",
  },
];
console.log(CHOICE.length);
choice.forEach((choi) => {
  choi.addEventListener("click", (e) => {
    const choiceVal = choi.dataset.choices;
    const choicePlayer = CHOICE.find((choice) => choice.name === choiceVal);
    makeSelection(choicePlayer);
  });
});

function makeSelection(yourChoice) {
  const computerChoi = computerChoice();
  const playerWin = isWinner(yourChoice, computerChoi);
  const compWin = isWinner(computerChoi, yourChoice);

  addResult(computerChoi, compWin);
  addResult(yourChoice, playerWin);
  if (playerWin) incrementScore(playerScore);
  if (compWin) incrementScore(computerScore);
  console.log(computerChoi);
  console.log(playerWin);
  console.log(compWin);
}

function incrementScore(diver) {
  diver.innerText = parseInt(diver.innerText) + 1;
}

function addResult(result, winner) {
  const div = document.createElement("div");
  div.innerText = [result.emoji];
  div.classList.add("result-selection");
  if (winner) div.classList.add("winner");
  resultPos.after(div);
}
function isWinner(playerChoice, opponentChoice) {
  return playerChoice.beats === opponentChoice.name;
}
function computerChoice() {
  const randomIndex = Math.floor(Math.random() * CHOICE.length);
  return CHOICE[randomIndex];
}
