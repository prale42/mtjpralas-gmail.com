const { gameState } = require("./gameState");
const LastAgrsr = require("./lastAgrsr");
const Choice = require("./choice");

class Game {
	constructor(table, bb) {
		this.table = table;
		this.bb = bb;
		this.sb = bb / 2;
		this.potSize;
		this.gameState = new gameState();
		this.lastAgrsr = new LastAgrsr();
		this.choice = new Choice();
		this.prevAgrsr;
		this.activePlayersIds;
		this.leftToAct;
		this.posOfActive;
		this.table.setPlayerIds();
		this.choiceNum = 0; // a pointer to the index of the next decision, purely for testing
		this.choices; //array of choices that are to happen on a street
		this.nextPlayerId;
	}

	initRound() {
		const currentState = this.gameState.state;
		switch (currentState) {
			case "RESET":
				this.setActivePlayers();
				console.log("I am at reset state");
			case "PREFLOP":
				this.table.setPositions();
				this.potSize = 0;
				this.prevAgrsr = true;
				this.posOfActive = 2;
				this.lastAgrsr.position = 1; //big blind is lastAgrsr PF
				this.lastAgrsr.raiseAmount = this.bb;
			/*	while (this.activePlayersId.length > 1) {
					this.startStreetAction();
				}*/
			case "FLOP":
			case "TURN":
			case "RIVER":
		}
	}

	startStreetAction() {
		const choice = this.choices[this.choiceNum];
		this.choiceNum++;
		switch (choice.name) {
			case "FOLD":
			case "CALL":
				this.potSize += choice.chipAmount; //amount of chips the player has potentially invested in the pot
			case "RAISE":
			case "CHECK":
		}
	}

	//creates an array of active players' Ids
	setActivePlayers() {
		this.activePlayersIds = [];
		this.table.players.forEach(player => {
			if (player.active) {
				this.activePlayersIds.push(player);
			}
		});
	}
}
module.exports = Game;
