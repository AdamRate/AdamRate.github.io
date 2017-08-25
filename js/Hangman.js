let requestData;
function getWords() {
    let requestURL = "https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt";
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'text';
    request.send();
    request.onload = function () {
        requestData = request.response;
        requestData = requestData.split("\n");
        console.log(requestData[0]);
        alert("JSON Data has been Loaded");
    };
}

//let words = requestData;
let dashWord = [];
let word = [];
let count = 7;
function chooseWord() {
    let i = Math.floor(Math.random() * (requestData.length));
    //console.log(i);
    word = requestData[i].split("");
    word.pop();
    for (let x = 0; x < word.length; x++) {
        dashWord.push("_ ");
    }
    console.log(dashWord);
    console.log(word);
    for (let v = 0; v < dashWord.length; v++) {
        document.getElementById('wordArea').innerHTML += dashWord[v];
    }
    displayGuessedLetters();
    displayLivesLeft();
}

function guess() {
    //User Input
    if (count > 0) {
        let box = document.getElementById('guessBox');
        let boxVal = box.elements[0].value;
        console.log(boxVal);
        boxVal = boxVal.toLowerCase();
        boxVal = boxVal.split("");
        boxVal = boxVal[0];
        console.log(boxVal);

        checkLetter(boxVal);
    }
    else {
        //endGame();
        console.log("you already died lol");
    }
}
let guessedLetters = [];
function checkLetter(val) {
    let trigger = false;
    guessedLetters.push(val);
    for (let i = 0; i < word.length; i++) {
        if (word[i] === val) {
            dashWord[i] = val;
            trigger = true;
        }
    }
    if (trigger === false) {
        count -= 1;
        displayLivesLeft();

        if (count === 0) {
            console.log("you died lol");
            document.getElementById("guessButton").disabled = true;
        }
    }

    document.getElementById('wordArea').innerHTML = "";
    for (let v = 0; v < dashWord.length; v++) {
        document.getElementById('wordArea').innerHTML += dashWord[v];
    }
    displayGuessedLetters();
    console.log(dashWord);
    checkWin();
}

function displayGuessedLetters() {
    document.getElementById('guessedLetters').innerHTML = "Guessed Letters: " + guessedLetters;
}

function displayLivesLeft() {
    document.getElementById('hangmanzone').innerHTML = "Incorrect Guesses Remaining: " + count;
}

function resetVals() {
    count = 7;
    dashWord = [];
    word = [];
}
function initPage() {
    getWords();
    resetVals();
}

function playGame() {
    chooseWord();
}

function checkWin() {
    let count = 0;
    for (let i = 0; i < dashWord.length; i++) {
        if (dashWord[i] !== "_ ") {
            console.log("Checked Win: " + count);
            count++;
            if (count >= dashWord.length) {
                win();
            }

        }
    }
}

function win() {
    console.log("win");
    setElementsInvis();

}

function setElementsInvis() {
    document.getElementById("guessButton").style.visibility = 'hidden';
    document.getElementById("guessBox").style.visibility = 'hidden';
}