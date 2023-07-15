input = document.querySelector("#input");
btn = document.querySelector("#btn");
rows = document.querySelectorAll(".guess");
rowNum = 0;

word = validWords[Math.floor(Math.random() * validWords.length)];
console.log(word); //TODO cheater to delete after done with game
function checkWord() {
  for (let i = 0; i < 5; i++) {
    if (input.value[i] == word[i]) {
      rows[rowNum].children[i].style.backgroundColor = "green";
    } else {
      for (let j = 0; j < 5; j++) {
        if (input.value[i] == word[j]) {
          rows[rowNum].children[i].style.backgroundColor = "gold";
        }
      }
    }
  }
  rowNum++; //TODO I would like to access CSS to have a splash screen with you win or lose
  if (input.value == word) {
    console.log("You Won");
    rowNum += 10; //TODO just makes it greater then guesses to stop getting input. Still not quite right
  } else if (rowNum >= 6) {
    console.log("You Lose");
  }
}

function printWord(rowNumber) {
  for (let i = 0; i < 5; i++) {
    rows[rowNumber].children[i].innerText = input.value[i].toUpperCase();
  }
  checkWord();
}

btn.addEventListener("click", function () {
  if (rowNum < 6) {
    printWord(rowNum);
    input.value = "";
    input.focus();
  }
});

//TODO make a button to ask to play again
