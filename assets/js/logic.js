/* --------------Logic for Touchdown-------
When the user clicks start game:
- The 4 options will flash in a sequence.
- It will start with one and add on each round.
- The difficulty setting relates to the speed (Rookie = slow)(Veteran = Medium)(MVP = fast)
- Generate Sequence with Math Random
- Iterate through sequence and apply highlight/flash function 
- May need to use a promise to let highlights be seperate  
- Wait for sequence to end
- Allow user to select options 
- Run check function to compare selections with current game sequence
- If Correct. Continue.
- If Incorrect start from begining and lose a life.
*/

$(document).ready(function () {
  console.log("ready!");
  $("#status").hide(); //------ON LOADING THE STATUS BAR STAYS HIDDEN UNTIL GAME IS STARTED-------
  $("#menu-btn").click(function () {
    $(".menu").toggle();
  });
  //-------MENU TOGGLE FUNCTION-------// For mobile design to maximise screen real estate
  $("#title").click(function () {
    $(".menu").toggle();
  });
  currentGame = [];
  randomOrder = [];
  clicked = [];
  round = 1;
  lives = 3;
  points = 0;
  starCount = 0;
  //---------Difficulty Levels----------
  rookie = 1200;
  veteran = 700;
  mvp = 200;
  difficulty = rookie; //-----DEFAULT DIFFICULTY
  //-------Cards to select from ---------
  playAction = {
    kick: document.querySelector(".kick"),
    pass: document.querySelector(".pass"),
    run: document.querySelector(".run"),
    rush: document.querySelector(".rush"),
  };
  playOrder = [
    playAction.kick,
    playAction.pass,
    playAction.run,
    playAction.rush,
  ];
  //---------Audio/Sound Effects----------
  gameAudio = {
    intro: new Audio("assets/audio/intro.mp3"),
    woo: new Audio("assets/audio/woo.mp3"),
    boo: new Audio("assets/audio/boo.mp3"),
    whistle: new Audio("assets/audio/whistle.mp3"),
    ping: new Audio("assets/audio/ping.mp3"),
    restartSound: new Audio("assets/audio/restart.mp3"),
    gameOver: new Audio("assets/audio/gameOver.mp3"),
    touchdown: new Audio("assets/audio/touchdown.mp3"),
  };
});
//------------------------------------------------FUNCTIONS------------------------------------------
//---------Restart Function--- Resets the game to the begining------
const restart = () => {
  gameAudio.restartSound.play();
  clicked = [];
  round = 1;
  lives = 3;
  points = 0;
  randomOrder = [];
  currentGame = [];

  $("#startGame").css("pointer-events", "auto"); //------Enables User Clicking or hovering

  $(".progress-bar").css("width", "0%");
  $("#round").text("");
  resetLives(); //------This resets the 3 heart icons that represent the lives left
  showPoints();
  $("#startGame").text("Start Game");
  $("#ball").addClass(" rotating ");
};

//------Restart Confirmation Function-----------// Checks if the user definitely wants to restart
const restartCheck = () => {
  if (
    confirm("Are you sure you want to restart? Your progress will be lost.")
  ) {
    restart();
  } else {
    return false; //----On cancel user returns to current game------//
  }
};

//------- Check Difficulty Function ------------// Changes difficulty based on radio button input
let checkDifficulty = () => {
  $("input[id=rookie]").change(function () {
    //-----ROOKIE
    if ($(this).is(":checked")) {
      // Checkbox is checked..
      difficulty = rookie;
      console.log("rookie is checked");
    } else {
      // Checkbox is not checked..
      console.log("rookie not checked");
    }
  });

  $("input[id=veteran]").change(function () {
    //--------VETERAN
    if ($(this).is(":checked")) {
      // Checkbox is checked..
      difficulty = veteran;
      console.log("veteran is checked");
    } else {
      // Checkbox is not checked..
      console.log("veteran not checked");
    }
  });

  $("input[id=mvp]").change(function () {
    //----------MVP
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
checkDifficulty();

//------Lose life function------
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
    }, 3000);
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
      `TOUCHDOWN YOU WIN! \n YOU SCORED ${points} points. \n YOU HAD ${lives} LIVES LEFT. \n TOTAL SCORE = POINTS X LIVES LEFT \n YOUR TOTAL SCORE IS ${totalPoints} POINTS! \n `
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

//--------- START GAME FUNCTION ----- makes user select difficulty----
const startGame = () => {
  $(".card").css("pointer-events", "none"); //------Prevents User Clicking or hovering on cards
  $("#startGame").css("pointer-events", "none"); //------Prevents User Clicking or hovering on button
  $("#status").show("slow");
  gameAudio.whistle.play();
  makeGameSequence();
  console.log(currentGame);
  setTimeout(function () {
    main();
  }, 2000);
};

//---------CARD CLICK FUNCTION RETRIEVES DATA ID OF CARD CLICKED AND COMPARES WITH RANDOM ORDER ARRAY-------//
const cardClick = (card) => {
  gameAudio.ping.play();
  playType = card.getAttribute("data-id");
  console.log(playType);
  clicked.push(playType);
  let expectedAnswer = randomOrder[0];

  if (playType === expectedAnswer) {
    //----Correct Answer
    randomOrder.shift();
    console.log("correct");

    if (randomOrder.length === 0) {
      //-------Round Complete
      points += 3;
      showPoints();
      updateProgress();
      round += 1;
      $("#round").text(round); //---------Increase Round and update round count to user-------
      clicked = []; //---------Reset Clicked Array--------------
      gameAudio.woo.play();
      correct();

      $("#startGame").text(`Round ${round}`);
      makeGameSequence(); //------Adds another random card to the sequence---------
      $(".card").css("pointer-events", "none"); //------Prevents User Clicking or hovering
      setTimeout(function () {
        main();
      }, 3000); //-----------Plays next sequence of card flashes--------
    }
  } else if (playType !== expectedAnswer) {
    //----Wrong Answer
    lives -= 1;
    if (lives === 0) {
      //------Game Over---
      gameAudio.gameOver.play();
      alert("GAME OVER");
      $("#startGame").text("Start Game");
      restart();
    } else {
      //---Lose a life and lose 5 points
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

//----------- REPLAY FUNCTION-------
const replay = () => {
  if (confirm("Are you sure you want to replay? You will lose 3 points!")) {
    main(); //-----------Repeats the current sequence
    points -= 3;
    showPoints();
  } else {
    return false; //----On cancel user returns to current game------//
  }
};

//----------CONTACT US MODAL WITH EMAILJS API--------------------//

$(".star").click(function () {
  $(this).toggleClass("star-picked"); //------FEEDBACK STAR FUNCTION-------//
  starCount += 1;
});

//------SEND EMAIL FUNCTION using EmailJS API -------//
const sendEmail = () => {
  let full_name = $("#fname").val() + " " + $("#lname").val();
  let email = $("#email").val();
  let rating = `${starCount} / 5 (STARS)`;
  let enquiry = $("#enquiry").val();

  if (full_name == "" || email == "" || enquiry == "") {
    alert("Please complete all required fields");
    return false;
  } else {
    $("#startGame").css("pointer-events", "none"); //------Disables User Clicking or hovering

    emailjs.init("user_rsvmwq5KBsvLqIljtmzs3");
    emailjs
      .send("gmail", "touchdown_user", {
        from_name: full_name,
        rating: rating,
        enquiry: enquiry,
        from_email: email,
      })
      .then(
        function (response) {
          $(".star").toggleClass("star-picked");
          starCount = 0;
          $("#send-btn")
            .removeClass("send-btn")
            .removeClass("btn-light")
            .addClass("sent");
          $("#send-btn").text("EMAIL SENT");
          $("#contactUs").modal("hide");
          setTimeout(function () {
            $("#contactUs").modal("hide"); //-----------Waits for confirmation email has been sent before closing modal
          }, 8000);
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          $("#startGame").css("pointer-events", "auto"); //------Enables User Clicking or hovering
          console.log("FAILED...", error);
        }
      );
  }
  
};
