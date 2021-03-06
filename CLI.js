var readline = require('readline');
var async = require('async');
var Command = require('./Command');

function CLI(callback) { 
rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('KoV> ');
rl.prompt();

rl.on('line', function(line) {
	switch(line.trim()) {
		case 'print':
			callback(null, Command.type.PRINT);
			break;
		case 'q':
			callback(null, Command.type.QUIT);
			break;
		case 'setup':
			callback(null, Command.type.SETUP);
			break;
		case 'start':
			callback(null, Command.type.START);
			break;
		case 'turn':
			callback(null, Command.type.TURN);
			break;
		case 'take':
			callback(null, Command.type.TAKE_TURN);
			break;
		case '?':
		case 'h':
		case 'help':
			callback(null, Command.type.HELP);
			break;
		default:
			console.log('Say what? I might have heard `' + line.trim() + '`');
			callback(null, Command.type.UNKNOWN);
			break;
	}
	rl.prompt();
}).on('close', function() {
	callback(null, 'q');
});
}

CLI.prototype.printHelp = function() {
	console.log('-- Here is your help you asked for --');
	console.log('\tprint    - Print out player stats');
	console.log('\tsetup    - Run Game setup');
	console.log('\tstart    - Start the Game after setup is complete.');
	console.log('\tturn     - Check which player has the current turn.');
	console.log('\tq        - Quit the game and discard all data.');
	console.log('\t?,h,help - Print this help.');
};

CLI.prototype.setupPlayers = function(callback) {
	async.waterfall([ this.requestNumberOfPlayers,
                          this.requestAllPlayerNames
			], function(err, result){
				if (err) return console.error(err);
				callback(null, result);
			});
};

CLI.prototype.requestAllPlayerNames = function(numPlayers, callback) {
	var list = [];
	for (var i = 1; i <= numPlayers; i++) {
		list.push(i);
	}
	async.mapSeries(list, CLI.prototype.requestPlayerName.bind(this), function(err,results) {
		callback(err,results);
	});
};

CLI.prototype.requestNumberOfPlayers = function(callback) {
	rl.question('How many players? ', function(ans) {
		callback(null, ans);
	});
};

CLI.prototype.requestPlayerName = function(playerNumber, callback) {
	rl.question('Player ' +  playerNumber + '\'s Name? ', function(name) {
		callback(null, name);
	});
};

//export the dice class
module.exports = CLI;
