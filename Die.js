
function Die(numberOfSides) {
	// Value of the role
	this.value = -1;
	//Number of Sides
	this.sides = numberOfSides;
}

// class methods
Die.prototype.roll = function() {
	this.value = Math.floor((Math.random() * (this.sides - 1) + 1));
	return this.value;
};

Die.prototype.getValue = function() {
	return this.value;
};

//export the dice class
module.exports = Die;
