var Dice = require('./Dice');
var CLI = require('./CLI');
var KoVGameEngine = require('./KoVGameEngine');

console.log("Welcome to Kings of Videon!\n");

console.log("Launch CLI, maybe someday have different interface.\n");
var gameEngine = new KoVGameEngine();
var cli = new CLI(inputCallback);

function inputCallback(err, data) {
	if (err) {
		console.log("We got an error");
	}
	switch(data) {
		case 's':
			cli.requestPlayerSetup();
			gameEngine.setupGame();
			break;
		case 'p':
			gameEngine.printPlayerStats();
			break;
		case '?':
			console.log("print help");
			break;
		case 'q':
			console.log("shutting down");
			process.exit(0);
			break;
		default:
			console.log("Unkown Command");
			break;
	}
}
