var enumFactory = require("simple-enum");

var type = enumFactory(["UNKNOWN", "START", "SETUP", "HELP", "QUIT", "PRINT"]);

exports.type = type;
