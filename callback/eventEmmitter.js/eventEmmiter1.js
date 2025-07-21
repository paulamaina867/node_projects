// import the event emitter
const EventsEmitter = require("events")
// create an instace of the event emitter
const emitter = new EventsEmitter();

// turn on the event
emitter.on("start", (name) =>{
    console.log(`Hello ${name}, I wish you good...`)
});

// triggering the event...
emitter.emit("start", "pauline");
emitter.emit("start", "Ann");
emitter.emit("start", "Jane");