const chalk = require("chalk")

const welcome = {
    // create a function
    sayHello(){
        console.log(chalk.blueBright("Hello user. How have you been?"))
    },

    //create two variables
    currDate : new Date().toLocaleDateString(),
    currTime : new Date().toLocaleTimeString(),
    companyName: "Modcom"
};

module.exports = welcome;