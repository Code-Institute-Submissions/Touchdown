/* --------------Logic for Touchdown-------
When the user selects the difficulty and clicks start:
-The 4 options will flash in a sequence. It will start with one and add on each time.
- The difficulty setting relates to the speed (Rookie = slow)(Veteran = Medium)(MVP = fast)
- Generate Sequence with Math Random
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
//-------Cards to select from ---------
const kick = document.querySelector(".kick");
const pass = document.querySelector(".pass");
const run = document.querySelector(".run");
const rush = document.querySelector(".rush");

//---------Difficulty Levels----------
const rookie = 1200;
const veteran = 700;
const mvp = 200;

//---------Audio/Sound Effects----------

const gameAudio = {
  intro: new Audio("assets/audio/intro.mp3"),
  woo: new Audio("assets/audio/woo.mp3"),
  boo: new Audio("assets/audio/boo.mp3"),
  whistle: new Audio("assets/audio/whistle.mp3"),
  ping: new Audio("assets/audio/ping.mp3"),
  restartSound: new Audio("assets/audio/restart.mp3"),
  gameOver: new Audio("assets/audio/gameOver.mp3"),
  touchdown: new Audio("assets/audio/touchdown.mp3"),
};
const playOrder = [kick, pass, run, rush];

var difficultyPicked = false;
var difficulty = rookie;
var currentGame = [];
var clicked = [];
var round = 1;
var lives = 3;
var points = 0;
var playTypeId;
var playTypeObject;
var randomOrder = [];
var playType;

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

//-------MENU TOGGLE FUNCTION-------//
$("#menu-btn").click(function () {
  $(".menu").toggle();
});

//------- Checkbox Function ------------
let checkBox = () => {
  $("input[id=rookie]").change(function () {
    if ($(this).is(":checked")) {
      // Checkbox is checked..
      difficulty = rookie;
      difficultyPicked = true;
      console.log("rookie is checked");
    } else {
      // Checkbox is not checked..
      console.log("rookie not checked");
    }
  });
  $("input[id=veteran]").change(function () {
    if ($(this).is(":checked")) {
      // Checkbox is checked..
      difficulty = veteran;
      difficultyPicked = true;
      console.log("veteran is checked");
    } else {
      // Checkbox is not checked..
      console.log("veteran not checked");
    }
  });
  $("input[id=mvp]").change(function () {
    if ($(this).is(":checked")) {
      // Checkbox is checked..
      difficulty = mvp;
      difficultyPicked = true;
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
  gameAudio.restartSound.play();
  clicked = [];
  round = 1;
  lives = 3;
  points = 0;
  randomOrder = [];
  currentGame = [];
  $("#startGame").css("pointer-events", "auto"); //------Prevents User Clicking or hovering
  $("#ball").addClass(" rotating ");
  $("#startGame").text("Start Game");
  $(".progress-bar").css("width", "0%");
  $("#round").text("");
  resetLives();
  //------This resets the 3 heart icons that represent the lives left
};

const loseLife = () => {
  clicked = [];
  $(".heart").last().remove();
  round = 1;
  randomOrder = [];
  currentGame = [];
};

//------- RESET LIVES FUNCTION-------//
const resetLives = () => {
  $("#lives").show()
    .html(`<span class="heart"><i class="fa fa-heart"></i></span>
            <span class="heart"><i class="fa fa-heart"></i></span>
            <span class="heart"><i class="fa fa-heart"></i></span>`);
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
  const roundLimit = 10;
  if (round === 5) {
    alert("Youre halfway up the field. Keep going!!!");
    $(".winning").css("visibility", "visible");
    setTimeout(function () {
      $(".winning").css("visibility", "hidden");
    }, 1000);
  }
  if (round === roundLimit) {
    //----------------CHECKS IF USER HAS COMPLETED GAME
    gameWon();
    setTimeout(function () {
      location.reload();
      return false;
    }, 4000);
  } else {
    $(".winning").css("visibility", "visible");
    setTimeout(function () {
      $(".winning").css("visibility", "hidden");
    }, 1000);
  }
};

//-------- WRONG FUNCTION------//
const wrong = () => {
  gameAudio.boo.play();
  $(".losing").css("visibility", "visible");
  setTimeout(function () {
    $(".losing").css("visibility", "hidden");
  }, 1000);
};
//-------- GAME WON FUNCTION------//
const gameWon = () => {
  var totalPoints = lives * points;
  gameAudio.touchdown.play();
  $(".touchdown").css("visibility", "visible");
  setTimeout(function () {
    $(".touchdown").css("visibility", "hidden");
  }, 3000);
  setTimeout(function () {
    alert(
      `TOUCHDOWN YOU WIN! \n YOU SCORED ${points} points. \n YOU HAD ${lives} LIVES LEFT. \n TOTAL SCORE = POINTS X LIVES LEFT \n YOUR TOTAL SCORE IS SCORED ${totalPoints} POINTS! \n `
    );
  }, 3000);
  return false;
};

//---------LIFE CHECK FUNCTION-------// 3 lives to start.
const lifeCheck = () => {
  if (lives === 0) {
    gameAudio.gameOver.play();
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
  gameAudio.ping.play();
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

//-------- Points Counter function----------

const showPoints = () => {
  $("#currentPoints").text(points);
};

//--------- START GAME FUNCTION ----- makes user select difficulty----
const startGame = () => {
  if (difficultyPicked = false) {
    $("#selectDifficulty").modal("show");
    $("#letsPlay").click(function () {
      difficultyPicked = true;
    });
  } else {
    $(".card").css("pointer-events", "none"); //------Prevents User Clicking or hovering
    $(this).css("pointer-events", "none"); //------Prevents User Clicking or hovering
    $("#status").show("slow");
    gameAudio.whistle.play();
    makeGameSequence();
    console.log(currentGame);
    setTimeout(function () {
      main();
    }, 2000);
  }
};

//---LETS PLAY FUNCTION ---- Recognises if difficulty has been selected and starts the game accordingly




//----------MAIN FUNCTION -- iterates through currentGame (randomised sequence) and flashes each card
const main = async () => {
  $("#round").text(round);
  $("#ball").removeClass("rotating");

  $("#startGame").text("Wait...");
  for (let card of currentGame) {
    await flash(card);
  }
  $("#startGame").text(`Round: ${round}`);
  $(".card").css("pointer-events", "auto"); //------Enables User Clicking or hovering
};

//---------CARD CLICK FUNCTION RETRIEVES DATA ID OF CARD CLICKED AND COMPARES WITH RANDOM ORDER ARRAY-------
const cardClick = (card) => {
  gameAudio.ping.play();
  playType = card.getAttribute("data-id");
  console.log(playType);
  clicked.push(playType);
  let expectedAnswer = randomOrder[0];

  if (playType === expectedAnswer) {
    randomOrder.shift();
    console.log("correct");

    if (randomOrder.length === 0) {
      points += 3;
      showPoints();
      round += 1;
      $("#round").text(round); //---------Increase Round and update round count to user-------
      clicked = []; //---------Reset Clicked Array--------------
      gameAudio.woo.play();
      correct();
      updateProgress();

      $("#startGame").text(`Round ${round}`);
      makeGameSequence(); //------Adds another random card to the sequence---------
      $(".card").css("pointer-events", "none"); //------Prevents User Clicking or hovering
      setTimeout(function () {
        main();
      }, 3000); //-----------Plays next sequence of card flashes--------
    }
  } else if (playType !== expectedAnswer) {
    lives -= 1;
    if (lives === 0) {
      gameAudio.gameOver.play();
      alert("GAME OVER");
      $("#startGame").text("Start Game");
      restart();
    } else {
      points -= 5;
      showPoints();
      loseLife();
      wrong();
      $("#play-btn").text("Try Again!");
      makeGameSequence();
      $(".card").css("pointer-events", "none"); //------Prevents User Clicking or hovering------
      setTimeout(function () {
        main();
      }, 3000); //------Plays Sequence of card flashes-------
    }
  }
};
