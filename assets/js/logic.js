/* --------------Logic for Touchdown-------
When the user selects the difficulty and clicks start:
-The 4 options will flash in a sequence. It will start with one and add on each time.
- The difficulty setting relates to the speed (Rookie = slow)(Veteran = Medium)(MVP = fast)


- Generate Sequence with Math Random Y
- Iterate through sequence and apply highlight function Y
-May need to use a promise to let highlights be seperate  Y
- Wait for sequence to end Y
- Allow user to select options Y
- Run check function to compare selections with current game sequence
-If Correct. Continue.
If Incorrect start from begining 
*/

// $(document).ready(function () {
console.log("ready");

const kick = document.querySelector(".kick");
const pass = document.querySelector(".pass");
const run = document.querySelector(".run");
const rush = document.querySelector(".rush");

const Rookie = 2000;
const Veteran = 1200;
const MVP = 800;

const playOrder = [kick, pass, run, rush];

var currentGame = [];
var difficulty = Veteran;
var clicked = [];
var round = 1;
var lives = 3;
var playTypeId;
var playTypeObject;
var randomOrder = [];
var playType;

//---------Restart Function--- Brings game to the begining------
const restart = () => {
  clicked = [];
  round = 1;
  lives = 3;
  randomOrder = [];
  makeGameSequence();
};

//-------- CREATES A NEW AND RANDOMISED CURRENT GAME LIST---BASED ON ROUND (each round increases by one)-----//

let makeGameSequence = () => {
//   for (let x = 0; x < round; x++) {
    var y = Math.round(Math.random() * (playOrder.length - 1));
    currentGame.push(playOrder[y]);
//   }
  console.log(currentGame); //---DEVELOPMENT VIEW
  for (i in currentGame) {
    playTypeObject = currentGame[i];
    playTypeId = playTypeObject.getAttribute("data-id");
    randomOrder.push(playTypeId);
    i++;
  }
};
makeGameSequence();
// ------- FLASH FUNCTION INITIATES HIGHLIGHT ON CARD----//

const flash = (card) => {
  return new Promise((resolve, reject) => {
    card.className += " active";
    setTimeout(() => {
      card.className = card.className.replace(" active", "");
      setTimeout(() => {
        //-----allows for repeating playtypes in the code so there is a gap between flashes-----
        resolve();
      }, 400);
    }, difficulty);
  });
};

$("#play-btn").click(function () {
  main();
});

const cardClick = (card) => {
  playType = card.getAttribute("data-id");
  console.log(playType);
  clicked.push(playType);
  let choice = clicked.shift();
  let correctAnswer = randomOrder.shift();
  if (lives > 0) {
    if (clicked.length === randomOrder.length) {
      if (choice === correctAnswer) {
        clicked = [];
        alert(`You completed round ${round}!`);
        randomOrder = [];
        round += 1;
        makeGameSequence();
      } else if (choice !== correctAnswer) {
        alert("INCORRECT. YOU LOSE 1 LIFE!");
        clicked = [];
        currentGame = currentGame;
        lives -= 1;
      }
    } else {
      console.log("Make Selection!");
    }
  } else {
      alert("OUT OF LIVES! GAME OVER!")
  }
};
//----------main function iterates through currentGame (randomised sequence) and flashes each card within
const main = async () => {
  for (let card of currentGame) {
    await flash(card);
  }
};
