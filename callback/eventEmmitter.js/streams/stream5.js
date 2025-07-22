// compressing the files for esier transfer
// imopor the file system core component
const fs = require("fs");

// import the module "zlib"
const zlib = require("zlib")

// import the built-in "zlib" module for compressing (gzip, deflate, gz, tar etc)

// Some chain of events shall happen i.e
// 1. Read the specified file
// 2. Compresses the contents of the file
// 3. Creates a new file with the specified extension type

// Step 1. Read the content inside of the input.txt
//create a readable stream for the input.txt
fs.createReadStream("input.txt")

// step2: Pipe the readable stream trough the gzip transform stream
// createGzip returns a tranfor stream that compresses data using the Gzip algorithm
.pipe(zlib.createGzip())


// step3: Pipe the compressed data to a writable stream. Where? into input.txt.gz
// This stream receives the compressed chunk of data and writes it into the disk
.pipe(fs.createWriteStream("input.txt.gz"))

// step 4: listen to the "finish" event after a successful write action
// This event will be triggered immediately the data is written into the new stream
.on("finish", ()=>{
    console.log("File successfully compressed...")
})


// Assignment: create a stream that fetches data from a given url/domain and saves the same into a file called "onlineData.txt"