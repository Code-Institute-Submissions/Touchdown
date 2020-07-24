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

const rookie = 2000;
const veteran = 1000;
const mvp = 500;
const default_diff = 1200;

const woo = new Audio("assets/audio/woo.mp3");
const boo = new Audio("assets/audio/boo.mp3");
const whistle = new Audio("assets/audio/whistle.mp3");
const ping = new Audio("assets/audio/ping.mp3")

const roundLimit = 10;
const playOrder = [kick, pass, run, rush];

var selectionMade = false;
var answerCorrect = false;

var currentGame = [];
var difficulty = default_diff;
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

//------- Checkbox Function ------------
let checkBox = () => {
  $("input[name=rookie]").change(function () {
    if ($(this).is(":checked")) {
      // Checkbox is checked..
      difficulty = rookie;
      console.log("rookie is checked");
    } else {
      // Checkbox is not checked..
      console.log("rookie not checked");
    }
  });
  $("input[name=veteran]").change(function () {
    if ($(this).is(":checked")) {
      // Checkbox is checked..
      difficulty = veteran;
      console.log("veteran is checked");
    } else {
      // Checkbox is not checked..
      console.log("veteran not checked");
    }
  });
  $("input[name=mvp]").change(function () {
    if ($(this).is(":checked")) {
      // Checkbox is checked..
      difficulty = mvp;
      console.log("mvp is checked");
    } else {
      // Checkbox is not checked..
      console.log("mvp not checked");
    }
  });
};

checkBox();

//---------Restart Function--- Brings game to the begining------
const restart = () => {
  clicked = [];
  $("#round").text("1");
  $("#play-btn").text("Start Game");
  $("#lives").show(500)
    .html(`<span class="heart"><i class="fa fa-heart"></i></span>
            <span class="heart"><i class="fa fa-heart"></i></span>
            <span class="heart"><i class="fa fa-heart"></i></span>`); //------This resets the 3 heart icons that represent the lives left
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
  ping.play();
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
  whistle.play();
  main();
});

//----------Play button initiates main function which iterates through currentGame (randomised sequence) and flashes each card
const main = async () => {
  $(".card").prop("disabled", true);
  $("#round").text(`${round}`);
  $("#play-btn").text("Wait...");
  for (let card of currentGame) {
    await flash(card);
    setTimeout(function () {
      $("#play-btn").text("Make your selection...");
    }, difficulty * round);
    $(".card").prop("disabled", false);
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
  if (clicked.length === randomOrder.length) {
    var choice = clicked.shift();
    var answer = randomOrder.shift();
    if (choice == answer) {
      console.log("correct");
      woo.play();
      $("#message").text(`Correct, You completed round ${round}!`);
      setTimeout(function () {
        $("#message").text("");
      }, 2000);
      round += 1;
      setTimeout(function () {
        $("#play-btn").text(`Round ${round}`);
      }, 1000);
      $("#round").text(round);
      makeGameSequence();
    } else if (choice !== answer) {
      boo.play();
      randomOrder.unshift();
      $("#message").text("INCORRECT. YOU LOSE 1 LIFE!");
      setTimeout(function () {
        $("#message").text("");
      }, 2000);

      console.log("INCORRECT. YOU LOSE 1 LIFE!");
      clicked = [];
      lives -= 1;
      $(".heart").last().remove();
      $("#play-btn").text(`Round ${round}`);
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
