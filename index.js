/*
Adjectives:
Crazy 
Amazing
Fire

Shop name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub
*/

function businessNameGenerator() {
  let businessName = "";

  let random = Math.random();
  if (random <= 1 / 3) {
    businessName = "Crazy";
  } else if (random > 1 / 3 && random <= 2 / 3) {
    businessName = "Amazing";
  } else {
    businessName = "Fire";
  }

  random = Math.random();
  if (random <= 1 / 3) {
    businessName += " Engine";
  } else if (random > 1 / 3 && random <= 2 / 3) {
    businessName += " Foods";
  } else {
    businessName += " Garments";
  }

  random = Math.random();
  if (random <= 1 / 3) {
    businessName += " Bros";
  } else if (random > 1 / 3 && random <= 2 / 3) {
    businessName += " Limited";
  } else {
    businessName += " Hub";
  }

  alert(`Your business name is "${businessName}"`);
}

businessNameGenerator();
