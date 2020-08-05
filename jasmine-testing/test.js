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
});

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
  });
});

