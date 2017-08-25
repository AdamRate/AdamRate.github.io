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
        console.log("JSON Data has been Loaded");
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
        if (requestData[i].length >= 8) {
            easyWords.push(requestData[i]);
        }
    }
}

let dashWord = [];
let word = [];
let count = 7;
function chooseWord() {
    setGameTypesInvis();
    setElemntsVis();
    let i = Math.floor(Math.random() * (requestData.length));
    word = requestData[i].split("");
    word.pop();
    doDashWord();
}

function chooseEasyWord() {
    setGameTypesInvis();
    setElemntsVis();
    sortWords();
    let i = Math.floor(Math.random() * (easyWords.length));
    word = easyWords[i].split("");
    word.pop();
    doDashWord();
}

function chooseMediumWord() {
    setGameTypesInvis();
    setElemntsVis();
    sortWords();
    let i = Math.floor(Math.random() * (mediumWords.length));
    word = mediumWords[i].split("");
    word.pop();
    doDashWord();
}

function chooseHardWord() {
    setGameTypesInvis();
    setElemntsVis();
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
    for (let v = 0; v < dashWord.length; v++) {
        document.getElementById('wordArea').innerHTML += dashWord[v];
    }
    displayGuessedLetters();
    displayLivesLeft();
}

function guess() {
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
        imageSwitch(count);

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
    checkWin();
}

function displayGuessedLetters() {
    document.getElementById('guessedLetters').innerHTML = "Guessed Letters: " + guessedLetters;
}

function displayLivesLeft() {
    document.getElementById('hangmanzone').innerHTML = "<center> Incorrect Guesses Remaining: " + count + "</center>";
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
            count++;
            if (count >= dashWord.length) {
                win();
            }
        }
    }
}

function win() {
    setElementsInvis();
    document.getElementById("endText").innerHTML = "<b> You Won! You had " + count + " Lives Left!</b>";
    showPlayAgainButton();
}

let finalWord = "";
function getWordToGuessString() {
    for (let i = 0; i < word.length; i++) {
        finalWord += word[i];
    }
}

function lose() {
    setElementsInvis();
    getWordToGuessString();
    document.getElementById("endText").innerHTML = "<b> You Lost. The word was " + finalWord + "! </b>";
    showPlayAgainButton();
}

function setElementsInvis() {
    document.getElementById("guessingDiv").style.visibility = 'hidden';
    document.getElementById("guessingDiv").style.display = 'none';
}

function setElemntsVis() {
    document.getElementById("guessingDiv").style.visibility = 'visible';
    document.getElementById("guessingDiv").style.display = 'block';
}

function setGameTypesInvis() {
    document.getElementById("gameTypes").style.visibility = 'hidden';
    document.getElementById("gameTypes").style.display = 'none';
}

function setGameTypesVis() {
    document.getElementById("gameTypes").style.visibility = 'visible';
    document.getElementById("gameTypes").style.display = 'block';
}

function showPlayAgainButton() {
    document.getElementById("playAgainButton").style.visibility = 'visible';
}

function playAgain() {
    location.reload();
}

function imageSwitch(count) {
    console.log(count);
    switch (count) {
        case 6:
            addImage(6);
            break;

        case 5:
            switchImage(6, 5);
            break;

        case 4:
            switchImage(5, 4);
            break;

        case 3:
            switchImage(4, 3);
            break;

        case 2:
            switchImage(3, 2);
            break;

        case 1:
            switchImage(2, 1);
            break;
        case 0:
            switchImage(1, 0);
            break;

        default:
            console.log("break");
            break;
    }
}
function removeImage(i) {
    let image = document.getElementById(i);
    image.parentNode.removeChild(image);
}

function addImage(i) {
    let img = document.createElement("img");
    img.src = "test" + i + ".jpg";
    img.id = i;
    src = document.getElementById("test");
    src.appendChild(img);
}

function switchImage(a, b) {
    removeImage(a);
    addImage(b);
}
