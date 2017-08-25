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
        alert("JSON Data has been Loaded");
    };
}

easyWords = [];
mediumWords = [];
hardWords = [];

function sortWords() {
    for (let i = 0; i < requestData.length; i++) {
        if (requestData[i].length <= 5) {
            hardWords.push(requestData[i]);
        }
        if (requestData[i].length > 5 && requestData[i].length < 8) {
            mediumWords.push(requestData[i]);
        }
        if (requestData[i].length > 8) {
            easyWords.push(requestData[i]);
        }
    }
}

//let words = requestData;
let dashWord = [];
let word = [];
let count = 7;
function chooseWord() {
    setGameTypesInvis();
    let i = Math.floor(Math.random() * (requestData.length));
    //console.log(i);
    word = requestData[i].split("");
    word.pop();
    doDashWord();
}

function chooseEasyWord() {
    setGameTypesInvis();
    sortWords();
    let i = Math.floor(Math.random() * (easyWords.length));
    word = easyWords[i].split("");
    word.pop();
    doDashWord();
}

function chooseMediumWord() {
    setGameTypesInvis();
    sortWords();
    let i = Math.floor(Math.random() * (mediumWords.length));
    word = mediumWords[i].split("");
    word.pop();
    doDashWord();
}

function chooseHardWord() {
    setGameTypesInvis();
    sortWords();
    let i = Math.floor(Math.random() * (hardWords.length));
    word = hardWords[i].split("");
    word.pop();
    doDashWord();
}

function doDashWord() {
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
            lose();
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

function playGameEasy() {
    chooseWordEasy();
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
    document.getElementById("endText").innerHTML = "<b> You Won! You had " + count + " Lives Left!</b>";
}

let finalWord = "";
function getWordToGuessString() {
    for (let i = 0; i < word.length; i++) {
        console.log(word[i]);
        finalWord += word[i];
    }
}

function lose() {
    console.log("Loser");
    setElementsInvis();
    getWordToGuessString();
    document.getElementById("endText").innerHTML = "<b> You Lost. The word was " + finalWord + "! </b>";
}

function setElementsInvis() {
    document.getElementById("guessButton").style.visibility = 'hidden';
    document.getElementById("guessBox").style.visibility = 'hidden';
}

function setGameTypesInvis() {
    document.getElementById("randomGame").style.visibility = 'hidden';
    document.getElementById("easyGame").style.visibility = 'hidden';
    document.getElementById("mediumGame").style.visibility = 'hidden';
    document.getElementById("hardGame").style.visibility = 'hidden';
}