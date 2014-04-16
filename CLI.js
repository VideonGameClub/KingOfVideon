var readline = require('readline');

function CLI(callback) { 
rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('KoV> ');
rl.prompt();

rl.on('line', function(line) {
	switch(line.trim()) {
		case 'p':
			callback(null, 'p');
			break;
		case 'q':
			callback(null, 'q');
			break;
		case 's':
			callback(null, 's');
			break;
		case '?':
			callback(null, '?');
			break;
		default:
			console.log('Say what? I might have heard `' + line.trim() + '`');
			callback(null, 'default');
			break;
	}
	rl.prompt();
}).on('close', function() {
	callback(null, 'q');
});
}

CLI.prototype.requestPlayerSetup = function() {
	console.log('How many players?');
};

//export the dice class
module.exports = CLI;
