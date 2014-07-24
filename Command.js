var Enum = require("enum");
var type = new Enum(["UNKNOWN", "START", "SETUP", "TURN", "TAKE_TURN", "HELP", "QUIT", "PRINT"]);

exports.type = type;
