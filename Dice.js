var Die = require("./Die");

var dice = [];

function Dice(numberOfDice) {
	//Init dice array
	for(i=0; i < numberOfDice; i++) {
		dice[i] = new Die(6);
	}
}

Dice.prototype.rollDice = function() {
	dice.forEach(function(entry){
		entry.roll();
	});
};

Dice.prototype.printDice = function() {
	for (i=0; i< dice.length; i++) {
		console.log("Dice[" + i + "] = " + dice[i].getValue());
	}
};

//export the dice class
module.exports = Dice;
