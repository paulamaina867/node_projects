//the program waits for one task before moving to the next
const fs =require("fs");
const chalk= require("chalk")

data= fs.readFileSync('input.txt');//blocking
console.log(chalk.bgBlue.whiteBright(data.toString()));
console.log("program ended....")

