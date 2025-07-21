// import the events
const EventsEmitter = require("events");

// create an instance of the event
const orderEmmiter = new EventsEmitter();

// create a listener for the order
orderEmmiter.on("orderPlaced", (orderId) =>{
    console.log(`order with the id #${orderId} has been placed.`)
});

// create listener for sending a confirmation
orderEmmiter.on("orderPlaced", (orderId)=>{
    console.log(`Sending a confirmation for the order with the ID: #${orderId}`)
});

// create a listener that checks whether the item which was ordered is available in stock
orderEmmiter.on("orderPlaced", (orderId)=>{
    console.log(`Checking stock for the orderId #${orderId}`)
});

// Generate a confirmation when you have confirmed the availability of the item in stock
orderEmmiter.on("orderPlaced", (orderId)=>{
    console.log(`The item with the order ID #${orderId} is available in the stock.`)
});

// create a function that simulates this:
function placedOrder(orderId){
    console.log(`\n ---New Order Incoming ---`);
    orderEmmiter.emit("orderPlaced", orderId)
};

// invoke the function to simulate several orders with different IDs
placedOrder(101);
placedOrder(102);
placedOrder(103);
placedOrder(104);
placedOrder(105);

// Assignments:
// 1. using an eventEmitter, simulate a person trying to login until the admin is notified
// 2. using an eventEmitter, simulate the payment process that would happen when someone is paying for netflix subcription.
// 3. using an eventEmitter, simulate the process that happens when someone is downloading a file (music, document) from online...