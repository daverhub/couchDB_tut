//var nano = require("nano")("http://localhost:5984"); 
var couch = require("nano")("http://127.0.0.1:5984"); 
couch.db.create('test');
