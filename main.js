const Game = require("./game");
const Player = require("./player");
const Table = require("./table");
const { gameState } = require("./gameState");

const playerNames = ["marko", "ivan", "laki", "jaran", "mirkecNe", "malnar"];
const chips = 2000;
let players = [];
playerNames.forEach(playerName =>
	players.push(new Player(playerName, chips, true))
);
const game1 = new Game(new Table(players), 100);
//game1.gameState.toPreflop();
game1.initRound();

console.log(game1.table.players);

game1.table.rotatePositions();

console.log("------------------after rotate----------------");

console.log("\n\n\n\n");
console.log(game1.table.players);
game1.table.players[2].active = false;
game1.setActivePlayers();
console.log("--------------after player unactive-------------");
console.log(game1.activePlayersIds);

/*  testiranje rotiranja pozicija
console.log(game1.table.players);

for (let i = 0; i < 6; i++) {
	game1.table.rotatePositions();

	console.log("------------------after rotate----------------");

	console.log(game1.table.players);
}

/*
/*
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
*/
