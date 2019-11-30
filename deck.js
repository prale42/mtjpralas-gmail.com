class Deck {
	constructor() {
		this.deck = this.genDeck();
	}

	genDeck() {
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
	}

	drawCard() {
		const randNum = this.randNumGen(this.deck.length);
		const drawnCard = this.deck[randNum];
		this.deck = this.deck.filter(card => {
			return this.deck.indexOf(card) != randNum;
		});
		return drawnCard;
	}

	randNumGen(n) {
		const randNum = Math.floor(Math.random() * n);
		return randNum;
	}
	genFlop(flop) {
		this.board = flop;
	}

	genTurn(turn) {
		this.board.push(turn);
	}

	genRiver(river) {
		this.board.push(river);
	}
}

module.exports = Deck;
