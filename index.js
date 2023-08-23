var randomNumber1 = Math.floor(Math.random()*6)+1;//kyuki 0 bhi aa rha tha :)
var randomImage1 = "dice" + randomNumber1 + ".png";
var randomImage1Source = "images/" + randomImage1;

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImage1Source);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImage2 = "dice" + randomNumber2 + ".png";
var randomImage2Source = "images/" + randomImage2;

var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImage2Source);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}else{
    document.querySelector("h1").innerHTML = "Draw";
}