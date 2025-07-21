//they are programs that allows other to execute even if the process of one funtion is not yet complete
//non blocking
const fs =require("fs");
const chalk= require("chalk")
data= fs.readFile("input2.txt",function(err,data){

console.log(chalk.bgYellow.whiteBright(data.toString()))
});

console.log(chalk.red("this line of code()process will execute first"))