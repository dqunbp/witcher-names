var uniqueRandomArray = require("unique-random-array");
var witcherNames = require("./witcher-names.json");

module.exports = {
  all: witcherNames,
  random: uniqueRandomArray(witcherNames)
};
