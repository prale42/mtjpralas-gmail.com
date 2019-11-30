const Game = require("./game");
const Player = require("./player");
const Table = require("./table");

const playerNames = ["marko", "ivan", "laki", "jaran", "mirkecNe", "malnar"];
const chips = 2000;
let players = [];
playerNames.forEach(playerName =>
	players.push(new Player(playerName, chips, true))
);
const game1 = new Game(new Table(players), 100);
console.log(game1);
game1.table.deck.genFlop([
	game1.table.deck.drawCard(),
	game1.table.deck.drawCard(),
	game1.table.deck.drawCard()
]);
game1.table.deck.genTurn(game1.table.deck.drawCard());
game1.table.deck.genRiver(game1.table.deck.drawCard());
console.log(game1);
game1.table.players.forEach(player => {
	player.setHand([game1.table.deck.drawCard(), game1.table.deck.drawCard()]);
});
console.log(game1);
game1.table.players.forEach(player => console.log(player));
game1.gameState.toPreflop();
game1.gameState.toFlop();
