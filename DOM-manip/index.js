var a = Math.ceil(Math.random() * 6);
var randomImage = "Images/dice" + a + ".png";
var image = document.querySelectorAll("img")[0];
image.setAttribute("src", randomImage);

var b = Math.ceil(Math.random() * 6);
var randommage = "Images/dice" + b + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randommage);

if (a > b) {
    document.querySelector("h1").innerHTML = "yayy! player1 won!";
} else if (a < b) {
    document.querySelector("h1").innerHTML = "yayy! player2 won!";
} else {
    document.querySelector("h1").innerHTML = "its a draw";
}

// document.querySelectorAll("p")[0].innerHTML = "deepak";
// // document.querySelectorAll("p")[1].innerHTML = "Aswath";
// var a = document.querySelectorAll("p")[1].innerHTML;
// alert(a);