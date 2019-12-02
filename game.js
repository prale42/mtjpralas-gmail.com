const { gameState } = require("./gameState");
const LastAgrsr = require("./lastAgrsr");

class Game {
	constructor(table, bb) {
		this.bb = bb;
		this.sb = bb / 2;
		this.potSize = 0;
		this.table = table;
		this.gameState = new gameState();
		this.lastAgrsr = new LastAgrsr(1, 2);
		this.prevAgrsr = true;
		this.setActivePlayers();
		this.numActive = this.activePlayers.length;
		this.leftToAct = this.numActive - 2;
		this.posOfActive = 2;
	}

	initRound() {}

	initStreetAction() {}
}
module.exports = Game;
