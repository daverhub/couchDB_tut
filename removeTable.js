//var nano = require("nano")("http://localhost:5984"); 
var nano = require("nano")("http://127.0.0.1:5984"); 
nano.db.create('test');
