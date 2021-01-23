var http = require('http'); // Import Node.js core module
var fs = require('fs');

var server = http.createServer(function (req, res) {   //create web server

        console.log("Incoming Requst URL: " + req.url);
        if(req.url.includes("..")) {
                res.write("Invalid Request");
        } else {
                try {
                        res.write(fs.readFile(req.url));
                } catch (e) {
                        res.write("Invalid Request: " + req.url);
                }
        }
        res.write("oof?");
        res.end();
});
server.listen(5000); //6 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..');
