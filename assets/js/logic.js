/* --------------Logic for Touchdown-------
When the user selects the difficulty and clicks start:
-The 4 options will flash in a sequence. It will start with one and add on each time.
- The difficulty setting relates to the speed (Rookie = slow)(Veteran = Medium)(MVP = fast)


- Generate Sequence with Math Random Y
- Iterate through sequence and apply highlight function Y
- May need to use a promise to let highlights be seperate  Y
- Wait for sequence to end Y
- Allow user to select options Y
- Run check function to compare selections with current game sequence ********
-If Correct. Continue.
- RESTART BUTTON Y
- START BUTTON Y
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

const roundLimit = 10;
const playOrder = [kick, pass, run, rush];

var selectionMade = false;
var answerCorrect = false;

var currentGame = [];
var difficulty = Veteran;
var clicked = [];
var round = 1;
var lives = 3;
var playTypeId;
var playTypeObject;
var randomOrder = [];
var playType;

//------Restart- Confirmation-----------
const restartCheck = () => {
  if (
    confirm("Are you sure you want to restart? Your progress will be lost.")
  ) {
    restart();
  } else {
    return false;
  }
};

//---------Restart Function--- Brings game to the begining------
const restart = () => {
  clicked = [];
  $("#round").text("1");
  $("#play-btn").text("Start Game");
  round = 1;
  lives = 2;
  randomOrder = [];
  currentGame = [];
  makeGameSequence();
};

// const getRandomPlay = card => {
//     let card = playOrder[parseInt(Math.random * playOrder.length)];
//     return card;

// }

//-------- CREATES A NEW AND RANDOMISED CURRENT GAME LIST---BASED ON ROUND (each round increases by one)-----//

let makeGameSequence = () => {
  var y = Math.round(Math.random() * (playOrder.length - 1));
  currentGame.push(playOrder[y]);
  for (i in currentGame) {
    playTypeObject = currentGame[i];
    playTypeId = playTypeObject.getAttribute("data-id");
    randomOrder.push(playTypeId);
    i++;
  }
  console.log(currentGame);
  console.log(randomOrder);
};

makeGameSequence();

// ------- FLASH FUNCTION INITIATES HIGHLIGHT ON CARD----//

const flash = (card) => {
  return new Promise((resolve, reject) => {
    card.className += " flash";
    setTimeout(() => {
      card.className = card.className.replace(" flash", "");
      setTimeout(() => {
        //-----allows for repeating playtypes in the code so there is a gap between flashes-----
        resolve();
      }, 500);
    }, difficulty);
  });
};

$("#play-btn").click(function () {
  main();
});

//----------Play button initiates main function which iterates through currentGame (randomised sequence) and flashes each card
const main = async () => {
  $("#round").text(`${round}`);
  canClick = false;
  for (let card of currentGame) {
    await flash(card);
    canClick = true;
  }
};

//------Function to check answers with selections--------
// const checkAnswer = () => {
//   var choice = clicked[0];
//   var answer = randomOrder[0];
//   if (lives > 0) {
//     if (clicked.length === randomOrder.length) {
//       if (choice === answer) {
//         clicked.shift();
//         alert(`You completed round ${round}!`);
//         round += 1;
//         makeGameSequence();
//       } else {
//         alert("INCORRECT. YOU LOSE 1 LIFE!");
//         clicked = [];
//         lives -= 1;
//       }
//     } else {
//       console.log("Select another...");
//     }
//   } else {
//     alert("GAME OVER!");
//   }
//   //   }

//---------CARD CLICK FUNCTION RETRIEVES DATA ID OF CARD CLICKED AND INITIATES CHECK ANSWER FUNCTION -------

const cardClick = (card) => {
  playType = card.getAttribute("data-id");
  clicked.push(playType);
  let selectedCards = [...clicked];
  let sequence = [...randomOrder];
  if (selectedCards.length === sequence.length) {
    var choice = selectedCards.shift();
    var answer = sequence.shift();
    if (choice === answer) {
      randomOrder.shift();
      console.log("correct");
      $("#message").text(`Correct, You completed round ${round}!`);
      setTimeout(function () {
        $("#message").text("");
      }, 3000);
      round += 1;
      setTimeout(function () {
        $("#play-btn").text(`Round ${round}`);
      }, 1000);
      makeGameSequence();
    } else if (choice !== answer) {
      console.log("INCORRECT. YOU LOSE 1 LIFE!");
      clicked = [];
      lives -= 1;
      $("#lives").removeClass(".heart");
    }
  } else {
    console.log("select more");
  }
};

// while (clicked.length < currentGame.length) {
//   selectionMade = false;
// }

// while (clicked.length === currentGame.length) {
//   selectionMade = true;
// }

// if ((selectionMade = true)) {
//   checkAnswer();
// }
