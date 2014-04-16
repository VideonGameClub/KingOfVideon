var Card = require("./Card");

var deck = [];

function Deck(numberOfCards) {
	//Init deck array
	for(i=0; i < numberOfCards; i++) {
		deck[i] = new Card();
	}
}

Deck.prototype.shuffle = function() {
	console.log("shuffle is not implemented");
};

Deck.prototype.draw = function() {
	console.log("draw is not implemented");
};


Deck.prototype.printDeck = function() {
	for (i=0; i< deck.length; i++) {
		console.log("Deck[" + i + "] = " + deck[i].getValue());
	}
};

//export the deck class
module.exports = Deck;
