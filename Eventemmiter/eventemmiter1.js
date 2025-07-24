// we need to import the events which is a core module in nodejs
const EventsEmitter = require("events");

// create an instance of the Events
const eventEmitter = new EventsEmitter()

// using the eventsEmitter instace we can access the method/function on
// This method acts as our listeners if any event get triggered.
eventEmitter.on("start", () => {
    console.log("Good morning, How have you been?")
});

// .emit act as the trigger so when the event is fired the listener will hear it
// then it executes the processes inside of the emitter
eventEmitter.emit("start");