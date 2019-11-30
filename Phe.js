const Player = require("./player");
const phe = require("phe");

//Generating a full deck of cards
const genDeck = () => {
	const cardValues = [
		"A",
		"K",
		"Q",
		"J",
		"T",
		"9",
		"8",
		"7",
		"6",
		"5",
		"4",
		"3",
		"2"
	];
	let deck = [];
	const cardSuits = ["c", "d", "h", "s"];
	cardValues.forEach(value => {
		cardSuits.forEach(suit => {
			const card = value + suit;
			deck.push(card);
		});
	});
	return deck;
};

//Generate a random number from 0 to 51 [52 total elements in a deck]
const randNumGen = n => {
	const randNum = Math.floor(Math.random() * n);
	return randNum;
};

// draw a random card from the deck
const drawCard = randNum => {
	const drawnCard = deck[randNum];
	return drawnCard;
};

/*
//generates a player from a player name
let id = 0;
const genPlayer = playerName => {
  //ID krece od nule i povecava se svaki put kada se doda novi igrac
  const hand = [drawCard(), drawCard()];
  const player = new Player(playerName, id, 1000, hand, 69, board);
  id++;
  return player;
};
*/

/*
//generate players with player names
const playerNames = ["marko", "ivan", "laki", "jaran", "mirkecNe"];
let players = [];
playerNames.forEach(playerName => players.push(genPlayer(playerName)));

players.forEach(player => {
  //console.log(player);
});


const determineWinners = players => {
  let bestScore = 100000;
  let tempWinners = [];
  players.forEach(player => {
    if (player.handScore < bestScore) {
      bestScore = player.handScore;
      tempWinners = [player];
    } else if (player.handScore === bestScore) {
      tempWinners.push(player);
    }
  });
  //console.log("----------------winners-----------------");
  return tempWinners;
};

const winners = determineWinners(players);
//winners.forEach(winner => console.log(winner));
*/

module.exports = { genDeck, drawCard, randNumGen };
