var Dice = require('./Dice');
var Deck = require('./Deck');
var Character = require('./Character');

var players = [];
var blackDice;
var greenDice;
var deck;
var availableCards = [];
var isSetup = false;
var currentPlayer = 0;

function KoVGameEngine() { }

KoVGameEngine.prototype.setupGame = function(inputPlayers) {

	inputPlayers.forEach(function(element, value, array) {
		players.push(new Character(element));
	});

	blackDice = new Dice(6);
	greenDice = new Dice(2);

	// Game comes with 66 cards...will need to figure out how to import them.
	deck = new Deck(66);
	isSetup = true;
};

KoVGameEngine.prototype.startGame = function() {
	// make sure we are setup.
	if (!isSetup) {
		console.log("please run setup");
		return;
	}

	console.log("shuffling deck");
	deck.shuffle();
	console.log("Drawing cards for purchase");
	availableCards.push(deck.draw());
	availableCards.push(deck.draw());
	availableCards.push(deck.draw());

	//Pick who starts 
	console.log("Randomly select player " + players[currentPlayer].getName() + " to go first");
	return this.whoseTurn();
};

KoVGameEngine.prototype.whoseTurn = function() {
	return players[currentPlayer];
};

KoVGameEngine.prototype.takeTurn = function() {
	var p = players[currentPlayer];
	console.log(p.getName() + " is starting his turn");
	// -- Turn Overview -- 
	// 1. Rolling and rerolling the dice
	// 2. Resolving the dice 
	// 3. Buying cards (optional)
	// 4. End of your turn
	
	// Rolling and rerolling
	console.log("First Roll");
	blackDice.rollDice();
	blackDice.printDice();
	console.log("Second Roll");
	blackDice.rollDice();
	blackDice.printDice();
	console.log("Third Roll");
	blackDice.rollDice();
	blackDice.printDice();

	// Resolve the Dice..
	// Will need to ask user to what they want to do.
	
	// Buy some cards if they want.
	
	// End Turn
	this.incrementCurrentPlayer();

};

KoVGameEngine.prototype.incrementCurrentPlayer = function() {
	currentPlayer = currentPlayer + 1;
	if (currentPlayer >= players.length) {
		currentPlayer = 0;
	}
};

KoVGameEngine.prototype.printPlayerStats = function() {
	players.forEach(function(player) {
		player.printCharacter();
	});
};


//export the dice class
module.exports = KoVGameEngine;
