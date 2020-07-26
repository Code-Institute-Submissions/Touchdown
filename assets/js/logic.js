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
const veteran = 900;
const mvp = 300;
const default_diff = 1200;

//---------Audio/Sound Effects----------
const intro = new Audio("assets/audio/intro.mp3");
const woo = new Audio("assets/audio/woo.mp3");
const boo = new Audio("assets/audio/boo.mp3");
const whistle = new Audio("assets/audio/whistle.mp3");
const ping = new Audio("assets/audio/ping.mp3");
const restartSound = new Audio("assets/audio/restart.mp3");
const gameOver = new Audio("assets/audio/gameOver.mp3");
const touchdown = new Audio("assets/audio/touchdown.mp3");

const roundLimit = 10;
const playOrder = [kick, pass, run, rush];

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
    restart();
  } else {
    return false; //----On cancel user returns to current game------//
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

$("#status").hide();
//---------Restart Function--- Brings game to the begining------
const restart = () => {
  restartSound.play();
  clicked = [];
  round = 1;
  lives = 3;
  randomOrder = [];
  currentGame = [];
  $("#ball").addClass(" rotating ");
  $("#startGame").text("Start Game");
  $(".progress-bar").css("width", "0%");
  $("#round").text("");
  $("#lives").show(500)
    .html(`<span class="heart"><i class="fa fa-heart"></i></span>
            <span class="heart"><i class="fa fa-heart"></i></span>
            <span class="heart"><i class="fa fa-heart"></i></span>`); //------This resets the 3 heart icons that represent the lives left
};

//-------- CREATES A NEW AND RANDOMISED CURRENT GAME LIST-------//

const makeGameSequence = () => {
  var y = Math.round(Math.random() * (playOrder.length - 1));
  currentGame.push(playOrder[y]);
  convertAnswer();
};

//---------CONVERT ANSWER FUNCTION TO MAKE SELECTION AND ANSWER COMPARIBLE AS STRINGS----//
const convertAnswer = () => {
  for (let i = 0; i < currentGame.length; i++) {
    playTypeObject = currentGame[i];
    playTypeId = playTypeObject.getAttribute("data-id");
    randomOrder.push(playTypeId); //--------randomOrder stores converted answer------//
  }
};

//--------PROGRESS BAR FUNCTION----------//
const updateProgress = () => {
  var x = round * 10;
  var perc = `${x}%`;
  $(".progress-bar").css("width", perc);
};

//-------- CORRECT FUNCTION------//
const correct = () => {
  if (round === roundLimit) {
    //----------------CHECKS IF USER HAS COMPLETED GAME
    touchdown.play();
    gameWon();
    setTimeout(function () {
      location.reload();
      return false;
    }, 200);
  } else {
    $(".winning").css("visibility", "visible");
    setTimeout(function () {
      $(".winning").css("visibility", "hidden");
    }, 1000);
  }
};

//-------- WRONG FUNCTION------//
const wrong = () => {
  $(".losing").css("visibility", "visible");
  setTimeout(function () {
    $(".losing").css("visibility", "hidden");
  }, 1000);
};
//-------- GAME WON FUNCTION------//
const gameWon = () => {
    touchdown.play()
  $(".touchdown").css("visibility", "visible");
  setTimeout(function () {
    $(".touchdown").css("visibility", "hidden");
  }, 3000);
  alert("TOUCHDOWN YOU WIN!")
};

//-------ROUND CHECK FUNCTION-------// Determines if the player completes all 10 rounds
// const roundCheck = () => {
//   if (round === 10) {
//     touchdown.play();
//     gameWon();
//     setTimeout(function () {
//       alert("TOUCHDOWN YOU WIN!");
//     }, 2000);

//     round = 0;
//     restart();
//   } else {
//     return false;
//   }
// };

//---------LIFE CHECK FUNCTION-------// 3 lives to start.
const lifeCheck = () => {
  if (lives === 0) {
    gameOver.play();
    alert("GAME OVER");
    $("#startGame").text("Start Game");
    restart();
  } else if (lives > 0) {
    $("#startGame").text(`Round ${round}`);
    return false;
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

//---------
$("#startGame").click(function () {
    $(".card").css("pointer-events", "none");//------Prevents User Clicking or hovering
    $("#status").show('slow');
  $(".whistle").show(2000);
  whistle.play();
  makeGameSequence();
  console.log(currentGame);
  
  setTimeout(function () {
    main();
  }, 2000);
});

//----------Play button initiates main function which iterates through currentGame (randomised sequence) and flashes each card
const main = async () => {

  
  $("#round").text(round);
  $("#ball").removeClass("rotating");

  $("#startGame").text("Wait...");
  for (let card of currentGame) {
    await flash(card);
  }

  $("#startGame").text(`Round: ${round}`);
  $(".card").css("pointer-events", "auto");//------Enables User Clicking or hovering
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

//---------CARD CLICK FUNCTION RETRIEVES DATA ID OF CARD CLICKED AND ADDS TO CLICKED ARRAY-------
console.log(randomOrder);
const cardClick = (card) => {
  ping.play();
  playType = card.getAttribute("data-id");
  clicked.push(playType);
  console.log(clicked);
  setTimeout(function () {
    checkAnswer();
  }, 200);
};

//---------CHECK ANSWER FUNCTION COMPARES SELECTION TO CORRECT ANSWER-------//
const checkAnswer = () => {
  for (let i = 0; i < randomOrder.length; i++) {
    // if (clicked.length === randomOrder.length) {
      var choice = clicked[i];
      var answer = randomOrder[i];
      console.log(answer);
      if (choice == answer) {
        round += 1;
        clicked=[];
        randomOrder = [];
        console.log(choice);
        console.log("correct");
        woo.play();
        correct();
        updateProgress();
        setTimeout(function () {}, 1000);
        $("#round").text(round);
        $("#startGame").text(`Round ${round}`);
        $(".card").css("pointer-events", "none");//------Prevents User Clicking or hovering
        makeGameSequence();
        setTimeout(function () {
          main();
        }, 3000);
      } else if (choice !== answer) {
          randomOrder =[];
          clicked =[];
        lives -= 1;
        $(".heart").last().remove();
        setTimeout(function () {
          lifeCheck();
        }, 100);
        boo.play();
        wrong();
        $("#startGame").text("Try Again!");
        console.log("INCORRECT. YOU LOSE 1 LIFE!");
        console.log(currentGame);
        setTimeout(function () {
          main();
        }, 3000);
      }
    // } else {
    //   console.log("pick another");
    // //   $("#startGame").text("Make Selection...");
    // }
  }
};
//-------ALTERNATIVE CHECK ANSWER FUNCTION --------//

// const checkAnswer = () => {
//   for (var check = 0; check < currentGame.length; check++) {
//     if (clicked[check] === randomOrder[check]) {
//       //CORRECT
//       round += 1;
//       roundCheck();
//       clicked.shift();
//       //   randomOrder.shift();
//       console.log("correct");
//       woo.play();
//       correct();
//       updateProgress();
//       setTimeout(function () {}, 1000);
//       $("#round").text(round);
//       $("#play-btn").text(`Round ${round}`);
//       makeGameSequence();
//       setTimeout(function () {
//         main();
//       }, 3000);
//       //KEEP PLAYING
//     } if (clicked[check] !== randomOrder[check]) {
//       lives -= 1;
//       $(".heart").last().remove();
//       setTimeout(function () {
//         lifeCheck();
//       }, 100);
//       boo.play();
//       wrong();
//       clicked = [];
//       $("#play-btn").text("Try Again!");
//       console.log("INCORRECT. YOU LOSE 1 LIFE!");
//       console.log(currentGame);
//       setTimeout(function () {
//         main();
//       }, 3000);
//     }
//   }
// };
