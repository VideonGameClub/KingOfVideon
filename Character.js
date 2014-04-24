
function Character(name) {
	// Name of the Character
	this.name = name;

	//Number of Energy Cubes
	this.energyCubes = 0;

	// Number of Victory Points
	this.victoryPoints = 0;
	
	// Life
	this.hitPoints = 10;
}

// class methods
Character.prototype.getName = function() {
	return this.name;
};

// class methods
Character.prototype.incrementVP = function(val) {
	this.victoryPoints = this.victoryPoints + val;
	return this.victoryPoints;
};

// class methods
Character.prototype.decrementVP = function(val) {
	this.victoryPoints = this.victoryPoints - val;
	return this.victoryPoints;
};

// class methods
Character.prototype.getVP = function(val) {
	return this.victoryPoints;
};

// class methods
Character.prototype.incrementHP = function(val) {
	this.hitPoints = this.hitPoints + val;
	return this.hitPoints;
};

// class methods
Character.prototype.decrementHP = function(val) {
	this.hitPoints = this.hitPoints - val;
	return this.hitPoints;
};

// class methods
Character.prototype.getHP = function(val) {
	return this.hitPoints;
};

// class methods
Character.prototype.incrementEnergy = function(val) {
	this.energyCubes = this.energyCubes + val;
	return this.energyCubes;
};

// class methods
Character.prototype.decrementEnergy = function(val) {
	this.energyCubes = this.energyCubes - val;
	return this.energyCubes;
};

// class methods
Character.prototype.getEnergy = function(val) {
	return this.energyCubes;
};

// class methods
Character.prototype.printCharacter = function() {
	console.log("Character  " + this.name);
	console.log("\t vp = " + this.victoryPoints);
	console.log("\t hp = " + this.hitPoints);
	console.log("\t energy  = " + this.energyCubes);
};


//export the character class
module.exports = Character;
