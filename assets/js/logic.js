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
var round = 2;
var playTypeString;
var playTypeObject;
var randomOrder = []
//-------- CREATES A NEW AND RANDOMISED CURRENT GAME LIST---BASED ON ROUND (each round increases by one)-----//

// let makeGameSequence = () => {
for (let x = 0; x < round; x++) {
  var y = Math.round(Math.random() * (playOrder.length - 1));
  currentGame.push(playOrder[y]);
}
console.log(currentGame); //---DEVELOPMENT VIEW
playTypeObject = currentGame[0];
playTypeString = playTypeObject.getAttribute("data-id");
randomOrder.push(playTypeString);

console.log(playTypeString);
// }
// makeGameSequence();
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

//-------USER SELECTION--------------------------------------------------
//   $(".card").click(function () {
//     $(this).addClass("active");
//     setTimeout(function () {
//       $(this).removeClass("active");
//     }, 200);
//     var id = $(this).attr("data-id"); //--This returns the data-id of the card the user has clicked--------
//     clicked.push(id); //-------RECORDS DATA ID TO ARRAY-----------
//     console.log(clicked);
//   });

let canClick = false;
var playType;
const cardClick = (card) => {
  playType = card.getAttribute("data-id");
  console.log(playType);
  clicked.push(playType);
  let choice = clicked.shift();
  let correctAnswer = playTypeString;
    if (choice === correctAnswer) {
       clicked.shift()
       randomOrder.shift();
      console.log("Correct!");
    } 
    if(choice !== correctAnswer){
        console.log("Incorrect");

    }
}
//----------main function iterates through currentGame (randomised sequence) and flashes each card within
const main = async () => {
  for (let card of currentGame) {
    await flash(card);
  }
};

canClick = true;

