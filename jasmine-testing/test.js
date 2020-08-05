
//-------AUTOMATED CHECK THAT OF INITIAL GAME SETTINGS ON PAGE LOAD--------
describe("Check base settings for game", function () {
  describe("Life Check", function () {
    it("Starting lives should be set at 3", function () {
      expect(lives).toBe(3);
    });
  });

  describe("Round Check", function () {
    it("Starting Round Count should should be set at 1", function () {
      expect(round).toBe(1);
    });
  });

  describe("Points Check", function () {
    it("Starting Point Count should should be set at 0", function () {
      expect(points).toBe(0);
    });
  });
  describe("Current Game", function () {
    it("Current game array should should be empty", function () {
      expect(currentGame).toEqual([]);
    });
  });
  describe("Random Order", function () {
    it("Random Order array should should be empty", function () {
      expect(currentGame).toEqual([]);
    });
  });

});

//-------AUTOMATED CHECK THAT RESTART BUTTON RESETS ALL COUNTERS-------
describe("Restart button functions for game", function () {
  describe("Restart Button", function () {
    it("should reset lives", function () {
      restart();
      expect(lives).toBe(3);
    });
    it("should reset points", function () {
      restart();
      expect(points).toBe(0);
    });
    it("should reset round", function () {
      restart();
      expect(round).toBe(1);
    });
    it("should reset clicked array", function () {
      restart();
      expect(clicked).toEqual([]);
    });
    it("should reset currentGame array", function () {
      restart();
      expect(currentGame).toEqual([]);
    });
    it("should reset randomOrder array", function () {
      restart();
      expect(randomOrder).toEqual([]);
    });
  });
});


//-------AUTOMATED CHECK OF DEFAULT DIFFICULTY-----
describe("Check difficulty", function () {
    it("should be set to default of rookie", function (){
        checkDifficulty();
        expect(difficulty).toEqual(1200);
    })
});