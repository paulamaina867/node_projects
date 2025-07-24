// import the file system core component from node
const fs = require("fs");

// read the file input.txt. We use 'utf-8' to encode the received packets of information
const readStream = fs.createReadStream("input.txt", "utf-8");

// below event will be triggered every time a chunk of data is available
readStream.on("data", (chunk)=>{
    const newText = chunk.trim().toUpperCase()
    console.log("The read packets of data from input.txt are: \n\n" + newText)
});
// below event shall be triggered when the entire file data has been read
readStream.on("end", ()=>{
    console.log("\n Done reading the file...");
});