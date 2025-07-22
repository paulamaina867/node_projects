// use the the utf-8 encoding type
const fs = require("fs")

// highWaterMark object is used to divide the buffered data into some buffer bytes
const readStream = fs.createReadStream("input.txt", {highWaterMark : 20})

// simulate how the data get transfered from the input.txt inform of bytes
readStream.on("data", (chunk) =>{
    console.log("New packets of data received: " + chunk.toString())
});

// below event shall be triggered when the entire file data has been read
readStream.on("end", ()=>{
    console.log("\n Done reading the file...");
});