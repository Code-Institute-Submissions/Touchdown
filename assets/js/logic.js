/* --------------Logic for Touchdown-------
When the user selects the difficulty and clicks start:
-The 4 options will flash in a sequence. It will start with one and add on each time.
- The difficulty setting relates to the speed (Rookie = slow)(Veteran = Medium)(MVP = fast)


- Generate Sequence with Math Random
- Iterate through sequence and apply highlight function
-May need to use a promise to let highlights be seperate 
- Wait for sequence to end
- Allow user to select options
- Run check function to compare selections with current game sequence
-If Correct. Continue.
If Incorrect start from begining 
*/

$(document).ready(function () {
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
  var difficulty = Rookie;
  var clicked = [];
  var round = 2;

  //-------- CREATES A NEW AND RANDOMISED CURRENT GAME LIST---BASED ON ROUND (each round increases by one)-----//
  for (let x = 0; x < round; x++) {
    var y = Math.round(Math.random() * (playOrder.length - 1));
    currentGame.push(playOrder[y]);
  }
  console.log(currentGame); //---DEVELOPMENT VIEW

  // ------- PLAY BUTTON CLICK FUNCTION INITIATES HIGHLIGHT SEQUENCE----//

  const flash = (card) => {
    return new Promise((resolve, reject) => {
      card.className += " active";
      setTimeout(() => {
        card.className = card.className.replace(" active", "");
        setTimeout(() => {
          resolve();
        }, 400);
      }, difficulty);
    });
  };

  $("#play-btn").click(function () {
    main();
  });

  //-------USER SELECTION--------------------------------------------------
  $(".card").click(function () {
    $(this).addClass("active");
    setTimeout(function () {
      $(this).removeClass("active");
    }, 200);
    var id = $(this).attr("data-id"); //--This returns the data-id of the card the user has clicked--------
    clicked.push(id); //-------RECORDS DATA ID TO ARRAY-----------
    console.log(clicked);
  });

  const main = async () => {
    for (let card of currentGame) {
      await flash(card);
    }
  };

  // if(clicked.length < currentGame.length){
  //     alert("make a selection");
  // }
  // if (clicked.length === currentGame.length){
  //     if (clicked[0] === currentGame[0]){
  //         alert("correct. proceed to next round");
  //         round+=1;
  //         $("#round").html(round);
  //     }
  // }else{
  //     console.log(Error);
  // }
});
