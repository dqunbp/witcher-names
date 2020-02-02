import uniqueRandomArray from "unique-random-array";
import witcherNames from "./witcher-names.json";
const getRandomItem = uniqueRandomArray(witcherNames);

function random(length) {
  if (length === undefined) return getRandomItem();
  else {
    const items = [];
    for (let i = 0; i < length; i++) items.push(getRandomItem());
    return items;
  }
}

const witcher = { all: witcherNames, random: random };

export default witcher;
