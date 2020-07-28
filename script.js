//Variables for the user input name
const player1Input = document.getElementById("player1Input");
const player2Input = document.getElementById("player2Input");

//Variables for the player name display
const player1Name = document.getElementById("player1Name");
const player2Name = document.getElementById("player2Name");

//Variables for the user input buttons
const player1Button = document.getElementById("player1Button");
const player2Button = document.getElementById("player2Button");

//Variables for the roll buttons
const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");;

//Variables for the dice Images
let diceImageLeft = document.getElementById("diceImageLeft");
let diceImageRight = document.getElementById("diceImageRight");

//Variables for the score display
let player1Score = document.getElementById("scoreDisplayLeft");
let player2Score = document.getElementById("scoreDisplayRight")

//Event and function to input your own name
player1Button.addEventListener("click", () => {
    player1Name.textContent = player1Input.value;
    player1Input.value = "";
})
player2Button.addEventListener("click", () => {
    player2Name.textContent = player2Input.value;
    player2Input.value = "";
})

let totalScore1 = 0;
let totalScore2 = 0;

//Event and function to start player 1
leftButton.addEventListener("click", () => {
    diceImageLeft.style.visibility = "visible";
    var scoreCount1 = (assignImage1());
    if (scoreCount1 === 1) {
        totalScore1 = 0;
    } else {
        totalScore1 = totalScore1 + scoreCount1;
    }
    player1Score.textContent = totalScore1;
    if (totalScore1 > 19) {
        diceImageLeft.style.backgroundImage = "url(https://i.gifer.com/4SWL.gif)";
        diceImageLeft.style.backgroundSize = "100% 100%";
        diceImageRight.style.backgroundImage = "url(https://1.bp.blogspot.com/-99f6S73Z4hk/VRH2HD7PwaI/AAAAAAAABvs/cNLxpaZJdfM/s1600/tolkien%2Breaading%2Bday%2B6.png)";
        diceImageRight.style.backgroundSize = "100% 100%";
        totalScore1 = 0;
    }
})

//Event and function to start player 2
rightButton.addEventListener("click", () => {
    diceImageRight.style.visibility = "visible";
    var scoreCount2 = (assignImage2());
    if (scoreCount2 === 1) {
        totalScore2 = 0;
    } else {
        totalScore2 = totalScore2 + scoreCount2;
    }
    player2Score.textContent = totalScore2;
    if (totalScore2 > 19) {
        diceImageLeft.style.backgroundImage = "url(https://thumbs.gfycat.com/LeftExcitableAfricanaugurbuzzard-size_restricted.gif)";
        diceImageLeft.style.backgroundSize = "100% 100%";
        diceImageRight.style.backgroundImage = "url(https://i.pinimg.com/originals/81/2c/61/812c6173e8fc79e2a57c9b545718f18d.gif)";
        diceImageRight.style.backgroundSize = "100% 100%";
        totalScore2 = 0;
    }
})

//Function to assign image and respective score player 1
function assignImage1() {
    //Variables for the random numbers
    let numberValue = Math.floor(Math.random() * 6) + 1;
    if (numberValue === 1) {
        diceImageLeft.style.backgroundImage = "url(https://thumbs.gfycat.com/LeftExcitableAfricanaugurbuzzard-size_restricted.gif)";
        diceImageLeft.style.backgroundSize = "100% 100%";
        alert("YOU ROLLED A 1");
        return numberValue;
    } else if (numberValue === 2) {
        diceImageLeft.style.backgroundImage = "url(img/dice2.png)";
        return numberValue;
    } else if (numberValue === 3) {
        diceImageLeft.style.backgroundImage = "url(img/dice3.png)";
        return numberValue;
    } else if (numberValue === 4) {
        diceImageLeft.style.backgroundImage = "url(img/dice4.png)";
        return numberValue;
    } else if (numberValue === 5) {
        diceImageLeft.style.backgroundImage = "url(img/dice5.png)";
        return numberValue;
    } else if (numberValue === 6) {
        diceImageLeft.style.backgroundImage = "url(img/dice6.png)";
        return numberValue;
    }
}

//Function to assign image and respective score player 2
function assignImage2() {
    //Variables for the random numbers
    let numberValue = Math.floor(Math.random() * 6) + 1;
    if (numberValue === 1) {
        diceImageRight.style.backgroundImage = "url(https://1.bp.blogspot.com/-99f6S73Z4hk/VRH2HD7PwaI/AAAAAAAABvs/cNLxpaZJdfM/s1600/tolkien%2Breaading%2Bday%2B6.png)";
        diceImageRight.style.backgroundSize = "100% 100%";
        alert("YOU ROLLED A 1");
        return numberValue;
    } else if (numberValue === 2) {
        diceImageRight.style.backgroundImage = "url(img/dice2.png)";
        return numberValue;
    } else if (numberValue === 3) {
        diceImageRight.style.backgroundImage = "url(img/dice3.png)";
        return numberValue;
    } else if (numberValue === 4) {
        diceImageRight.style.backgroundImage = "url(img/dice4.png)";
        return numberValue;
    } else if (numberValue === 5) {
        diceImageRight.style.backgroundImage = "url(img/dice5.png)";
        return numberValue;
    } else if (numberValue === 6) {
        diceImageRight.style.backgroundImage = "url(img/dice6.png)";
        return numberValue;
    }
}
