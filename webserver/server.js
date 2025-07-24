// creating a server we use the http core module
const http = require('http')

// create the server
const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type' : 'text'});
    res.end("Node js");
});

// the listen function you need to specify onto which port the server will be running on
server.listen(3000, ()=>{
    console.log("The server is running/listening to the port: 3000")
})