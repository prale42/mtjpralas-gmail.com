const phe = require("phe");

class Player {
	constructor(name, chips, active) {
		this.name = name;
		this.chips = chips;
		this.active = active;
	}

	setHand(hand) {
		this.hand = hand;
	}

	setFullHand(board) {
		const handArr = this.hand.concat(board);
		let fullHand = "";
		handArr.forEach(card => {
			if (fullHand.length === 0) {
				fullHand += card;
			} else {
				fullHand += ` ${card}`;
			}
		});
		this.fullHand = fullHand;
		this.fullHandArr = handArr;
	}

	setHandRank() {
		this.handRank = phe.rankBoard(this.fullHand);
		this.setHandDescription();
	}

	setHandDescription() {
		this.handDescription = phe.rankDescription[this.handRank];
	}

	setHandScore() {
		this.handScore = phe.evaluateCards(this.fullHandArr);
	}

	setPosition(position) {
		this.position = position;
	}
}

module.exports = Player;
