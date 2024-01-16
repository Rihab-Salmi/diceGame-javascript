"use strict";

function rollDice() {
  let randomNumber1 = Math.floor(Math.random() * 6 + 1);
  let randomNumber2 = Math.floor(Math.random() * 6 + 1);

  let newSrc1 = "images/dice" + randomNumber1 + ".png";
  let newSrc2 = "images/dice" + randomNumber2 + ".png";

  document.querySelector(".img1").setAttribute("src", newSrc1);
  document.querySelector(".img2").setAttribute("src", newSrc2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector(".container h1").innerHTML = "🏆 Player 1 wins";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector(".container h1").innerHTML = " Player 2 wins 🏆";
  } else {
    document.querySelector(".container h1").innerHTML = "Draw!";
  }
}
