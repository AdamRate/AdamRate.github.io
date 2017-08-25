let requestData;
function getWords() {
    let requestURL = 'https://github.com/dwyl/english-words/blob/master/words.txt';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'text';
    request.send();
    request.onload = function () {
        requestData = request.response;
        console.log(requestData[0]);
        alert("JSON Data has been Loaded");
    };
}

let words = ["test", "school", "keyboard"];
let dashWord = [];
let word = [];
function chooseWord() {
    let i = Math.floor(Math.random() * (words.length));
    console.log(i);
    word = words[i].split("");
    for (let x = 0; x < word.length; x++) {
        dashWord.push(" _");
    }
    console.log(dashWord);
    console.log(word);
}

function guess() {
    //User Input
    let box = document.getElementById('guessBox');
    let boxVal = box.elements[0].value;
    console.log(boxVal);
    boxVal = boxVal.toLowerCase();
    boxVal = boxVal.split("");
    boxVal = boxVal[0];
    console.log(boxVal);

    checkLetter(boxVal);
}

function checkLetter(val) {
    for (let i = 0; i < word.length; i++) {
        if (word[i] === val) {
            dashWord[i] = val;
        }
    }
    console.log(dashWord);
}

function initPage() {
    chooseWord();
}