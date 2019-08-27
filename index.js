var img1Src = "images/dice" + Math.floor((Math.random() * 6) + 1) + ".png";
var img2Src = "images/dice" + Math.floor((Math.random() * 6) + 1) + ".png";

document.querySelector(".img1").setAttribute("src", img1Src);
document.querySelector(".img2").setAttribute("src", img2Src);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
