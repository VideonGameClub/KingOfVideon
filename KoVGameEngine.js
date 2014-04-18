var Dice = require('./Dice');
var Deck = require('./Deck');
var Character = require('./Character');

var players = [];
var blackDice;
var greenDice;
var deck;

function KoVGameEngine() { 
}

KoVGameEngine.prototype.setupGame = function(inputPlayers) {

	inputPlayers.forEach(function(element, value, array) {
		players.push(new Character(element));
	});

	this.blackDice = new Dice(6);
	this.greenDice = new Dice(2);

	// Game comes with 66 cards...will need to figure out how to import them.
	this.deck = new Deck(66);
	this.deck.shuffle();

};

KoVGameEngine.prototype.startGame = function() {
	this.blackDice.rollDice();
	this.blackDice.printDice();
};

KoVGameEngine.prototype.printPlayerStats = function() {
	players.forEach(function(player) {
		player.printCharacter();
	});
};


//export the dice class
module.exports = KoVGameEngine;
