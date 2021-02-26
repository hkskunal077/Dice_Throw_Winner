

//We can generate controlled random number using Math.floor
var randomNumber1 = Math.floor(Math.random()*6)+ 1; //inclusive of both 1 and 6
var randomImg1 = "dice" + randomNumber1 + ".png"; //for eg dice2.png
var randomImg1Soruce = "images/" + randomImg1; //for eg images/dice2.png
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImg1Soruce);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImg2 = "dice" + randomNumber2 + ".png";
var randomImg2Soruce = "images/" + randomImg2;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImg2Soruce);


if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "&#127942 Player A wins";
}else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player B wins &#127942";
}else {
  document.querySelector("h1").innerHTML = "It is a draw, try again";
}
