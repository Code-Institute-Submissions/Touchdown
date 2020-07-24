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

//-------Cards to select from ---------
const kick = document.querySelector(".kick");
const pass = document.querySelector(".pass");
const run = document.querySelector(".run");
const rush = document.querySelector(".rush");

//---------Difficulty Levels----------
const rookie = 2000;
const veteran = 1000;
const mvp = 500;
const default_diff = 1200;

//---------Audio/Sound Effects----------
const intro = new Audio("assets/audio/intro.mp3");
const woo = new Audio("assets/audio/woo.mp3");
const boo = new Audio("assets/audio/boo.mp3");
const whistle = new Audio("assets/audio/whistle.mp3");
const ping = new Audio("assets/audio/ping.mp3");
const restartSound = new Audio("assets/audio/restart.mp3");
const gameOver = new Audio("assets/audio/gameOver.mp3");

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

// $(document).ready(function () {
console.log("ready");

//---Play intro Function-----

//------Restart- Confirmation-----------
const restartCheck = () => {
  if (
    confirm("Are you sure you want to restart? Your progress will be lost.")
  ) {
    restartSound.play();
    restart();
  } else {
    return false;
  }
};

//------- Checkbox Function ------------
let checkBox = () => {
  $("input[name=rookie]").change(function () {
    if ($(this).is(":checked")) {
      $(".veteran").remove("checked");
      $(".mvp").remove("checked");
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
      $(".rookie").remove("checked");
      $(".mvp").remove("checked");
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
      $(".rookie").remove("checked");
      $(".veteran").remove("checked");
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
  $("#play-btn").text("Start Game");
  $("#ball").addClass(" rotating ");
  $(".progress-bar").css("width", "0%");
  clearTimeout();
  clearTimeout();
  clearTimeout(); //--- Stops all current Timeouts----//
  clicked = [];
  $("#round").text("1");
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
};

makeGameSequence();
console.log(currentGame);

//--------PROGRESS FUNCTION----------//
const updateProgress = () => {
  if (round < 10) {
    var x = round * 10;
    var perc = `${x}%`;
    $(".progress-bar").css("width", perc);
  } else{
      touchdown.play();
      alert("TOUCHDOWN. CONGRATULATIONS, YOU WIN!");
  }
};

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
  $(".whistle").show(2000);
  whistle.play();

  setTimeout(function () {}, 1000);
  //   setTimeout(function () {
  //     $(".count").text("2");
  //   }, 2000);

  setTimeout(function () {
    main();
  }, 2000);
});

//----------Play button initiates main function which iterates through currentGame (randomised sequence) and flashes each card
const main = async () => {
  $(".card").prop("disabled", true);
  $("#round").text(round);
  $("#ball").removeClass("rotating");

  $("#play-btn").text("Wait...");
  for (let card of currentGame) {
    await flash(card);
  }

  $("#play-btn").text(`Round: ${round}`);
  $(".card").prop("disabled", false);
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
console.log(randomOrder);
const cardClick = (card) => {
  ping.play();
  playType = card.getAttribute("data-id");
  clicked.push(playType);
  if (lives === 0) {
    alert("GAME OVER. OUT OF LIVES");
    restart();
  } else {
    if (clicked.length === randomOrder.length) {
      var choice = clicked[0];
      var answer = randomOrder[0];
      if (choice == answer) {
        clicked.shift();
        randomOrder.shift();
        console.log("correct");
        woo.play();
        updateProgress();
        $("#message").text(`Correct, You completed round ${round}!`);
        setTimeout(function () {
          $("#message").text("");
        }, 2000);
        round += 1;
        setTimeout(function () {}, 1000);
        $("#round").text(round);
        $("#play-btn").text(`Round ${round}`);
        makeGameSequence();
        console.log(randomOrder);
        setTimeout(function () {
          main();
        }, 3000);
        console.log(currentGame);
      } else if (choice !== answer) {
        boo.play();
        clicked = [];
        lives - 1;
        $("#message").text("INCORRECT. YOU LOSE 1 LIFE!");
        setTimeout(function () {
          $("#message").text("");
        }, 2000);
        $("#play-btn").text("Try Again!");
        console.log("INCORRECT. YOU LOSE 1 LIFE!");
        console.log(currentGame);

        $(".heart").last().remove();
        $("#play-btn").text(`Round ${round}`);
        setTimeout(function () {
          main();
        }, 3000);
      } else if (lives === 0 && choice !== answer) {
        gameOver.play();
        alert("GAME OVER");
        restart();
      }
    } else {
      console.log("pick another");
      $("#play-btn").text("Make Selection...");
    }
  }
};
