class Choice {
	constructor() {
		this.name;
		this.chipAmount; //amount of chips the player has potentially invested in the pot
	}

	setChoice(name, amount) {
		this.name = name;
		this.chipAmount = amount;
	}
}

module.exports = Choice;
