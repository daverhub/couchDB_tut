//var nano = require("nano")("http://localhost:5984"); 
//Futon
var nano = require("nano")("http://127.0.0.1:5984"); 
var http = require("http"); 

var server = http.createServer(function (request, response) { 
 }); 
 
server.listen(5984); 
console.log("Server running at http://127.0.0.1:5984/");
