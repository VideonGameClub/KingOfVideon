var Dice = require('./Dice');
var Deck = require('./Deck');
var Character = require('./Character');

var players = [];

function KoVGameEngine() { 
}

KoVGameEngine.prototype.setupGame = function(InputPlayers) {

	//inputPlayers.forEach(function(){

	//});

	players[0] = new Character("Rob");
	players[1] = new Character("Teagan");
	players[2] = new Character("Declan");

	this.blackDice = new Dice(6);
	this.greenDice = new Dice(2);

	this.deck = new Deck();
	this.deck.shuffle();

};

KoVGameEngine.prototype.startGame = function() {

};

KoVGameEngine.prototype.printPlayerStats = function() {
	players.forEach(function(player) {
		player.printCharacter();
	});
};


//export the dice class
module.exports = KoVGameEngine;
