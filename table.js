const Deck = require("./deck");

class Table {
	constructor(players) {
		this.players = players;
		this.deck = new Deck();
		this.setPositions();
	}
	setPositions() {
		let position = 0; //position 0 is SB, position 5 is BTN (for 6max games)
		this.players.forEach(player => {
			player.setPosition(position);
			position++;
		});
	}

	removePlayer(playerId) {
		this.players.filter(player => {
			return player.playerId != playerId;
		});
	}

	addPlayer(newPlayer) {
		this.players.push(newPlayer);
	}
}

module.exports = Table;
