const Deck = require("./deck");

class Table {
	constructor(players) {
		this.players = players;
		this.deck = new Deck();
		this.setInitialPositions();
	}
	setInitialPositions() {
		let position = 0; //position 0 is SB, position 5 is BTN (for 6max games)
		this.players.forEach((player) => {
			player.setPosition(position);
			position++;
		});
	}

	setPositionsByIds(positionOfPlayersByIds) {
		this.players.forEach((player) => {
			positionOfPlayersByIds.forEach((id) => {
				if (player.id === id) {
					player.position = positionOfPlayersByIds.indexOf(id);
				}
			});
		});
	}

	rotatePositions() {
		const first = this.players[0];
		this.players.shift();
		this.players.push(first);
	}

	addPlayer(newPlayer) {
		this.players.push(newPlayer);
	}

	setPlayerIds() {
		let id = 0;
		this.players.forEach((player) => {
			player.playerId = id;
			id++;
		});
	}
}

module.exports = Table;
