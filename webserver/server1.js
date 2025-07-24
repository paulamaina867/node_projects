// import the http core module
const http = require("http");
const fs = require("fs");


// create the web server
const server = http.createServer((req, res) =>{
    fs.readFile('home.html', (err, data)=>{
        // have two conditions:
        // 1. If the file was successfully read.
        // 2. else if there was an error in reading the file.
        if(err){
            res.writeHead(500, {'content-type' : 'plain/text'});
        }
        else{
            res.writeHead(200, {'content-type': 'html'});
            res.end(data)
        }
    })
});

// specify onto which port is your server running?
server.listen(3000, ()=>{
    console.log("The server is already running")
});