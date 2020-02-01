var uniqueRandomArray = require("unique-random-array");
var witcherNames = require("./witcher-names.json");
var getRandomItem = uniqueRandomArray(witcherNames);

module.exports = {
  all: witcherNames,
  random: random
};

function random(length) {
  if (length === undefined) return getRandomItem();
  else {
    var items = [];
    for (var i = 0; i < length; i++) items.push(getRandomItem());
    return items;
  }
}
