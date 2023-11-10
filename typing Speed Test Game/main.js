// array of words
const words = [
  "hello",
  "programming",
  "code",
  "javascript",
  "town",
  "country",
  "testing",
  "youtube",
  "linkedin",
  "twitter",
  "github",
  "leetcode",
  "internet",
  "python",
  "scala",
  "destructuring",
  "coding",
  "funny",
  "working",
  "dependencies",
  "task",
  "runner",
  "roles",
  "test",
  "rust",
  "playing",
];

// setting levels

const lvlS = {
  "easy": 5,
  "normal": 3,
  "hard": 2
};

//default level

let defaultLevelName = "easy"; //change level from here
let defaultLevelSeconds = lvlS[defaultLevelName];

// catch selectors

let startButton = document.querySelector(".start");
let lvlNameSpan = document.querySelector(".message .lvl");
let secondsSpan = document.querySelector(".message .seconds");
let theWord = document.querySelector(".the-word");
let upComingWords = document.querySelector(".upcoming-word");
let input = document.querySelector(".input");
let timeLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");

// setting level name + seconds + score
lvlNameSpan.innerHTML = defaultLevelName;
secondsSpan.innerHTML = defaultLevelSeconds;
timeLeftSpan.innerHTML = defaultLevelSeconds;
scoreTotal.innerHTML = words.length;

//disable paste event
input.onpaste = function () {
  return false;
}

//start game
startButton.onclick = function () {
  this.remove();
  input.focus();
  //generate word function
  genWords()
}

function genWords() {
  // get random word from array 
  let randomWord = words[Math.floor(Math.random() * words.length)];
  // get word index
  let indexWord = words.indexOf(randomWord);
  // remove from array
  words.splice(indexWord, 1);
  // show the random word
  theWord.innerHTML = randomWord;
  // empty upcoming words
  upComingWords.innerHTML = '';
  //generate words
  for (let i = 0; i < words.length; ++i) {
    // create div element
    let div = document.createElement('div');
    let txt = document.createTextNode(words[i]);
    div.appendChild(txt);
    upComingWords.appendChild(div);
  }
  //start play function
  startPlay();
}

function startPlay() {
  timeLeftSpan.innerHTML = defaultLevelSeconds;
  let start = setInterval(() => {
    timeLeftSpan.innerHTML--;
    if (timeLeftSpan.innerHTML === "0") {
      // stop time
      clearInterval(start);
      //compare words
      if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {
        //Empty input field
        input.value = "";
        // increase score
        scoreGot.innerHTML++;
        if (words.length > 0) {
          //call generate word function 
          genWords();
        } else {
          let span = document.createElement("span");
          span.classList = "good";
          let spanText = document.createTextNode("good job");
          span.appendChild(spanText);
          finishMessage.appendChild(span);
          //remove upcoming words function
          upComingWords.remove();
        }
      } else {
        let span = document.createElement("span");
        span.classList = "bad";
        let spanText = document.createTextNode("game over");
        span.appendChild(spanText);
        finishMessage.appendChild(span);
      }
    }
  }, 1000);
}
