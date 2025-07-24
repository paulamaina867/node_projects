// Import the http core module
const http = require("http");

// Import the file system module
const fs = require("fs");

// Create the server
const myServer = http.createServer((req, res) => {
    // Read the HTML file
    fs.readFile("contact.html", (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Internal Server Error");
        } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        }
    });
});

// Start the server on port 4000
myServer.listen(4000, () => {
    console.log("Server is running on port 4000");
});
