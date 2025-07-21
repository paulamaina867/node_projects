// They allow for asynchrous operations
// first operation
console.log("First Statement");

// second operation
setTimeout(() => {
 console.log("Second Statement");
}, 5000);

// Third operation
console.log("Third Statement");

// forth operation
console.log("forth Statement");

// fiveth operation
setTimeout(() => {
 console.log("fiveth Statement");
}, 3000);