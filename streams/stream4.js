// piping: This is where you connect an input stream with an output stream meaning data can freely flow in through the streams

const fs = require("fs");

// create a readable and writable streams
const readerStream = fs.createReadStream("input.txt")
const writerStream = fs.createWriteStream("output1.txt")

// pipe reader to write
readerStream.pipe(writerStream);

// show when it is done
console.log("File copied successfully!")