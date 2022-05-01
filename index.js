var p1 = "Player 1";
var p2 = "Player 2";

function editNames() {
    
    p1 = prompt("Change Player1 name");
    
    p2 = prompt("Change player2 name");

    document.querySelector(".player1").innerHTML = p1;
                      
    document.querySelector(".player2").innerHTML = p2;
}


function rollTheDice(){
    setTimeout(function () {

    var randomNumber1 = Math.floor( Math.random()*6) + 1;
    var randomNumber2 = Math.floor( Math.random()*6) + 1;


    document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
    document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

if(randomNumber1>randomNumber2){
   document.querySelector(".winner-heading").innerHTML = p1 + " Wins";
} else if(randomNumber1<randomNumber2){
    document.querySelector(".winner-heading").innerHTML = p2 + " Wins";
} else if(randomNumber1===randomNumber2){
    document.querySelector(".winner-heading").innerHTML = "DRAW";

}
    }, 500);
}

