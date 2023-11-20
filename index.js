var randomNumber1 = Math.floor(Math.random()*6) + 1
var randomNumber2 = Math.floor(Math.random()*6) + 1

var new_img_1 = "images/dice" + randomNumber1 + ".png"
var new_img_2 = "images/dice" + randomNumber2 + ".png"

document.querySelector(".img1").setAttribute("src", new_img_1)
document.querySelector(".img2").setAttribute("src", new_img_2)


if (new_img_1 > new_img_2){
    document.querySelector("h1").textContent = "Player 1 Wins!"
}

else if (new_img_1 < new_img_2){
    document.querySelector("h1").textContent = "Player 2 Wins!"
}

else{
    document.querySelector("h1").textContent = "Draws"
}