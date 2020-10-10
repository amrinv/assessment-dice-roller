let rollButton = document.querySelector("#roll-button");
let allRollsButton = document.querySelector("#all-rolls-button");
let inputField = document.querySelector("#input-field");
let dieRoll = [];
let diceTotal = document.querySelector("#total-of-dice");
let resetButton = document.querySelector("#reset-button");
let allRollsList = document.querySelector("#allRolls-list");
let i = 0,
  total = 0;
//let randomNumber = Math.floor(Math.random() * 6) + 1;

// ----- Rolls Button Click Event ------

let rollAudio = document.querySelector("#roll-audio");
rollButton.addEventListener("click", function () {
  let randomNumber = [];
  rollAudio.play();
  let inputValue = Number(inputField.value);
  // inputField.value = " ";
  while (i < inputValue) {
    randomNumber[i] = Math.floor(Math.random() * 6 + 1);
    dieRoll.push(randomNumber[i]);
    total += dieRoll[i];
    i++;
  }
  diceTotal.innerHTML = total;
  console.log(dieRoll);
});

// ----- All Rolls Button Click Event ------
let allRollsAudio = document.querySelector("#allRolls-audio");
allRollsButton.addEventListener("click", function () {
  allRollsAudio.play();
  allRollsList.innerHTML = "";
  let j = 0;
  while (j < dieRoll.length) {
    // console.log(dieRoll[j]);
    allRollsList.innerHTML += "<li>" + dieRoll[j] + "</li>";
    j++;
  }
});

//---- RESET button click Event -----
let resetAudio = document.querySelector("#reset-audio");
resetButton.addEventListener("click", function () {
  resetAudio.play();
  window.alert("Dice Reseted!");
  dieRoll = [];
  inputField.value = " ";
  diceTotal.innerHTML = " ";
  allRollsList.innerHTML = " ";
});
