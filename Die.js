var Enum = require("enum");

var dieEnum = new Enum({'ONE': 1, 'TWO': 2, 'THREE': 3, 'ENERGY': 4, 'ATTACK': 5, 'HEAL':6});
var value;

function Die() {
	// Value of the role
	this.value = dieEnum.ONE;
	//Number of Sides
	this.sides = dieEnum.enums.length;
}

// class methods
Die.prototype.roll = function() {
	var roll = Math.floor((Math.random() * (this.sides - 1) + 1));
	this.value = dieEnum.get(roll);
	return this.value;
};

Die.prototype.getValue = function() {
	return this.value;
};

//export the dice class
module.exports = Die;
