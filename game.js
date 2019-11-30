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
	initGame() {
		this.table.players.forEach(player => {
			player.setHand();
		});
		this.gameState.toPreflop();
		this.initStreetAction();
	}

	initStreetAction() {
		while (this.leftToAct > 0) {
			if (this.activePlayers.length < 2) {
				//the case in which everyone except for the aggressor folds
				gameState.toReset();
				break;
			}
			if (this.prevAgrsr) {
				this.prevAgrsrAction(this.table.players[this.posOfActive]);
			} else {
				this.noPrevAgrsrAction(this.table.players[this.posOfActive]);
			}
		}
		this.gameState.next(); //make it so that the .next() automatically transitions to the next state unless everyone fodled
	}

	prevAgrsrAction(player) {
		const options = ["FOLD", "CALL", "RAISE"];
		const chosenOption = options[this.chooseOption(options)]; // chosenOption is an object with name  and raiseAmount
		if (chosenOption.name.equals("CALL")) {
			this.table.players.map(player => {
				if (player.position.equals(this.posOfActive)) {
					player.chips -= lastAgrsr.raiseAmount;
					this.potSize += lastAgrsr.raiseAmount;
					this.leftToAct--;
					this.determineNextActive();
					//TODO: figure out how to get the next active player
				}
			});
		} else if (chosenOption.name.equals("FOLD")) {
			this.table.players.map(player => {
				if (player.position.equals(this.posOfActive)) {
					player.active = false;
					this.leftToAct--;
					this.determineNextActive();
					//TODO: figure out how to get the next active player
				}
			});
		} else {
			this.table.players.map(player => {
				this.lastAgrsr.position = this.posOfActive;
				this.lastAgrsr.raiseAmount = chosenOption.raiseAmount; //figure out how to get both the option and the amount from the chosenOption ^
				if (player.position.equals(this.posOfActive)) {
					player.chips -= lastAgrsr.raiseAmount;
					this.potSize += lastAgrsr.raiseAmount;
					this.leftToAct = this.numActive - 1;
					this.determineNextActive();
					//TODO: figure out how to get the next active player
				}
			});
		}
	}

	noPrevAgrsrAction(player) {}

	async chooseOption(options) {
		const randNum = this.table.deck.randNum(options.length);
		const chosenOption = new Promise((resolve, reject) => {
			setTimeout(() => resolve(randNum, 500));
		});
		const result = await chosenOption;
		return result;
	}

	setActivePlayers() {
		this.activePlayers = this.table.players.filter(player => {
			return player.active; //returns a player only if his active property is true
		});
	}

	determineNextActive() {}

	smallestNext() {
		let smallest = this.table.players.length;
		this.activePlayers.forEach(player => {
			if (player.position > this.posOfActive && player.position < smallest) {
				smallest = player.position;
			}
		});
		return smallest;
	}
}

module.exports = Game;
