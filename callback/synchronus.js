//It is whereby the program waits for one task to finish before moving on to the next

const fs = require("fs");
const chalk = require("chalk")

data = fs.readFileSync('input.txt'); // Blocking
console.log(chalk.bgBlue.whiteBright(data.toString()));
console.log("Program Ended...");