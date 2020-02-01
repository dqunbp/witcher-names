var expect = require("chai").expect;
var witcher = require(".");

describe("witcher-names", function() {
  describe("all", function() {
    it("should be array of string", function() {
      expect(witcher.all).to.satisfy(isArrayOfStings);

      function isArrayOfStings(array) {
        return array.every(function(item) {
          return typeof item === "string";
        });
      }
    });

    it("shoud contains 'Geralt of Rivia'", () => {
      expect(witcher.all).to.include("Geralt of Rivia");
    });
  });

  describe("random", () => {
    it("should return a random item from witcher.all", () => {
      expect(witcher.all).to.include(witcher.random());
    });
    it("should return an array of random items if passed a number", () => {
      var randomItems = witcher.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach(function(item) {
        expect(witcher.all).to.include(item);
      });
    });
  });
});
