console.log("my first node application")
//import the chalk dpendency
const chalk = require ("chalk")
console.log(chalk.red("hello there"))



//how to create a node application
//how to install packages globally or locally
//how to configure start script inside package.json file
 //Create a new node project that contains a function which is find the sum of three numbers.
// Inside, install chalk package an use it on the output


//import module so we can use it

const welcome = require("./welcome")

// invoke the function sayHello() which is inside of the module welcome.js
welcome.sayHello()

// access the current date, time, company name inside of the module welcome
console.log("The Date is: " + welcome.currDate)
console.log("The Time is: " + welcome.currTime)
console.log(`The name of the company is: ${welcome.companyName}`)