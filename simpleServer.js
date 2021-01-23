const http = require('http'); // Import Node.js core module
const fs = require('fs');
const mime = require('mime');
const hostDir = "hostDir";

var server = http.createServer(function (req, res) {   //create web server


        console.log("Incoming Requst URL: " + req.url + "\nIncoming Request Path: " + hostDir + req.url);
        if (req.url.includes("..")) {
                res.write("Invalid Request, malicious");
        } else {
        }

        if (true) {

                try {
                        let response = parseURL(req.url);
                        res.writeHead(200, { 'Content-Type': response[1] });
                        res.write(response[0]);
                        res.end();
                } catch (e) {
                        res.writeHead(500);
                        console.log(e)
                        //res.write("Invalid Request - exception: " + req.url);
                        res.end();
                }
        }
});

function parseURL(url) {

        // Malformed URL checks
        if (url.includes("..")) {
                callback(new Error(ex.toString()));
        }

        if (url === "/") {
                // console.log("testing " + fs.readFile(hostDir + "index.html"));
                return readF(hostDir + url + "index.html");
        } else {
                return readF(hostDir + url);
        }
}

function readF(input) {
        console.log("# Reading file: " + input);
        var content;

        console.log("#$ Mime Lookup: " + mime.getType(input));
        content = fs.readFileSync(input);
        return [content, mime.getType(input)];
}

server.listen(5000); //6 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..');