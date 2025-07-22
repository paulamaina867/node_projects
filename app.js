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


//import the summation module
const summation = require("./summation")

// access the function inside of the module
summation.addition(4, 8, 6);

// create a mudule called AreaOfASqure
// inside, create a function that accepts parameters and find the area of the square. Import the module inside of tha app.js file


// access the function inside of the module
summation.addition(4, 8, 6);

// create a mudule called AreaOfASqure
// inside, create a function that accepts parameters and find the area of the square. Import the module inside of tha app.js file

// import the module
const mathUtils = require('./mathUtils');

// use the functions and variables
console.log("Division:", mathUtils.division(70, 10));
console.log("Multiplication:", mathUtils.multiply(5, 10, 16));
console.log("Power:", mathUtils.power(7));
console.log("PI:", mathUtils.pi);
console.log("Version:", mathUtils.version);




// create a module call it "stringUtil".
// Have three functions: one to transform a string entered into uppercase, lowercase and another one to count the letter of a string.
// import the function inside of app.js and call the three funtions.

// app.js

// app.js

// Import the stringUtil module
const stringUtils = require('./stringUtils'); 



// Use the functions
const input = "Hello, Modcom!";

console.log("Uppercase:", stringUtils.toUpperCase(input));
console.log("Lowercase:", stringUtils.toLowerCase(input));
console.log("Letter Count:", stringUtils.countLetters(input));

