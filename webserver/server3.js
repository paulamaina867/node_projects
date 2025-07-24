// import the http core module
const http = require("http");

// import the file system module
const fs = require('fs');

// create a server
const myServer = http.createServer((req, res) =>{
    // using the file system, read the htm file created
    fs.readFile('about.html', (err, data)=>{
        //check for the conditions
        if(err){
            res.writeHead(500, {"content-type": "plain/text"});
        }
        else{
            res.writeHead(200, {"content-type" : "html"});
            res.end(data);
        }
    })
});

// specify onto which port the server is running
myServer.listen(3000, ()=>{
    console.log("The server is alreader runnig on port 3000")
});

// Assigmnet: Create a new js file "server4.js" and also a new html template. use the same format to read and render the template onto the broswer.