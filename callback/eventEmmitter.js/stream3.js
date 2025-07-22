// import the fs module
const fs = require("fs");

// create writable stream
const writableStream = fs.createWriteStream("output.txt");

// write data/infor into the create stream
writableStream.write("Hello Bernard, How have you been?")

// write some more::::
writableStream.write("\n We are learning node Js 'Streams'")

writableStream.write("\n That is good to note.")

// when the writing process finishes, notify the use.
writableStream.end();

writableStream.on("finish", ()=>{
    console.log("Data has been successfully written into the file...")
});

// handle errors incase of any
writableStream.on("error", (err)=>{
    console.log("Error writing the file..." + err)
});