const StateMachine = require("javascript-state-machine");

//game.transitions().includes("toFlop"); (or any other desired transition)
const gameState = StateMachine.factory({
	init: "RESET",
	transitions: [
		{
			name: "toReset",
			from: ["PREFLOP", "FLOP", "TURN", "RIVER"],
			to: "RESET"
		},
		{ name: "toPreflop", from: "RESET", to: "PREFLOP" },
		{ name: "toFlop", from: "PREFLOP", to: "FLOP" },
		{ name: "toTurn", from: "FLOP", to: "TURN" },
		{ name: "toRiver", from: "TURN", to: "RIVER" }
	],

	data: {
		game: "I am the game, I am not lame"
	},
	//TODO: make the methods/functions do something solid
	methods: {
		onToReset: () => console.log("I was reset"),
		onToPreflop: () => console.log("I am the game, I am not lame"),
		onToFlop: () => console.log("I came to the flop"),
		onToTurn: () => console.log("I came to the turn"),
		onToRiver: () => console.log("I came to the river")
	}
});

/*
const game = new gameState();

game.toPreflop();
console.log(game.state);

console.log(game.state);
game.toFlop();
console.log(game.transitions().includes("toTurn")); 
console.log(game.state);
console.log("from flop to river: ");
console.log(game.transitions().includes("toRiver"));
game.toTurn();
console.log("from turn to river: ");
console.log(game.transitions().includes("toRiver"));
game.toRiver();
console.log(game.state);
console.log(game.transitions().includes("toFlop"));
game.toPreflop();
game.toFlop();
console.log(game.state);

console.log(game.state);
game.toPreflop();
console.log(game.state);
console.log(game.transitions());
game.toFlop();
console.log(game.state);
console.log(game.transitions());
game.toTurn();
console.log(game.state);
console.log(game.transitions());
game.toRiver();
console.log(game.state);
console.log(game.transitions());
game.toReset();
console.log(game.state);
console.log(game.transitions());
*/

module.exports = { gameState };
