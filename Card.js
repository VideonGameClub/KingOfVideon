
function Card() {
	// Value of the role
	this.value = -1;
}

Card.prototype.getValue = function() {
	return this.value;
};

//export the dice class
module.exports = Card;
