// import the events
const EventsEmitter = require("events");

// create an instance of the event emitter
const bulbEmitter = new EventsEmitter();

// ---ON Events---
bulbEmitter.on("bulbSwitchedOn", (location) =>{
    console.log(`💡 The bulb in the ${location} is now ON`)
});

bulbEmitter.on("bulbSwitchedOn", (location)=>{
    console.log(`👷‍♀️ The power consumption check started for ${location}.`)
});

bulbEmitter.on("bulbSwitchedOn", (location)=>{
    console.log(`App updated Record for the bulb in: ${location} is Now available...`)
});


// function to switch on the bulb
function swithOnBulb(location){
    console.log("\n ---Switching ON Bulb for ---" + location)
    bulbEmitter.emit("bulbSwitchedOn", location)
};

// invoke the function to turn on the bulb as you pass a parameter (Room)
swithOnBulb("Dining room");
swithOnBulb("Living Room");