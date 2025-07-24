// import the express module
const Express = require('express');

const app = Express();

// route 1
app.get('/', (req, res) => {
    res.send("This is the Landing Page.");
});

// route 2
app.get("/second", (req, res) => {
    res.send("This is the second page.");
});

// route 3
app.get("/third", (req, res) => {
    res.send("This is the third page/route accessed");
});

//  route 4 - 
app.get("/fourth", (req, res) => {
    res.send("This is the fourth page.");
});

//  route 5 
app.get("/fifth", (req, res) => {
    res.send("This is the fifth and final page.");
});

// start the server
app.listen(3000, () => {
    console.log("Server already running");
});
