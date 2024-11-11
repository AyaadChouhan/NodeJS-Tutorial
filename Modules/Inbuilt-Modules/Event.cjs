// In Node.js, events are a core part of the asynchronous and non-blocking nature of the platform. They allow functions to run when specific actions or occurrences happen, such as completing a network request, reading a file, or handling user inputs.

// What is an Event in Node.js?
// An event in Node.js is an action or occurrence recognized by the program, usually triggered by user interaction, system notifications, or other parts of the code. For example:

// A user clicks a button (a click event).
// A file has finished loading (a load event).
// A server receives an HTTP request (a request event).
// Events are the foundation of how Node.js handles asynchronous operations, enabling it to listen for events and respond to them without blocking the entire program.

// What is EventEmitter?
// EventEmitter is a built-in module in Node.js that provides a way to handle events by emitting and listening to them. The EventEmitter class is in the events module and allows you to create, trigger, and handle custom events in your application.

// Here's a breakdown of key methods and properties in EventEmitter:

// on(event, listener): Registers a listener (callback function) to be called whenever the specified event is emitted.

// emit(event, [args]): Triggers the specified event and calls all listeners attached to that event, optionally passing arguments.

// once(event, listener): Adds a listener for a one-time event, which will be removed automatically after being called once.

// removeListener(event, listener): Removes a specific listener for the event.

// Basic Example Using EventEmitter

// Import the events module
// const EventEmitter = require('events');

// Create an instance of EventEmitter
// const eventEmitter = new EventEmitter();

// Define a listener function
// function greet(name) {
//   console.log(`Hello, ${name}!`);
// }

// Register the listener for the 'greet' event
// eventEmitter.on('greet', greet);

// Emit the 'greet' event
// eventEmitter.emit('greet', 'Ayaad'); // Output: Hello, Ayaad!
// In this example:

// We define an event named greet.
// When eventEmitter.emit('greet', 'Ayaad') is called, the greet event triggers, calling the greet listener and passing "Ayaad" as an argument.

// Why Use EventEmitter?
// Using events and EventEmitter is essential for creating responsive applications that don’t block other operations while waiting for an event to occur. This pattern is highly useful in building scalable applications that handle I/O operations, such as servers or file operations, without waiting for each task to complete before starting the next.

// events triggered by the EventEmitter are synchronous by default. This means that when you call emit(), it immediately executes all the listeners for that event in the order they were registered, blocking further execution until each listener completes.

// Example of Synchronous Event Execution
// Here's an example to illustrate how EventEmitter works synchronously:

// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();

// eventEmitter.on('start', () => {
//   console.log('Event listener 1');
// });

// eventEmitter.on('start', () => {
//   console.log('Event listener 2');
// });

// console.log('Before emitting event');
// eventEmitter.emit('start');
// console.log('After emitting event');

// Output:
// Before emitting event
// Event listener 1
// Event listener 2
// After emitting event

// In this example:
// The emit() call triggers the start event listeners.
// Both listeners run immediately, one after the other.
// Only after both listeners complete does the code continue to the next line (console.log('After emitting event')).
// Making Event Listeners Asynchronous
// If you need an event listener to execute asynchronously (e.g., to avoid blocking other operations), you can use asynchronous functions or work with setImmediate(), setTimeout(), or promises within the listener. For instance:

// eventEmitter.on('start', async () => {
//   await new Promise(resolve => setTimeout(resolve, 1000));
//   console.log('Async event listener');
// });

// console.log('Before emitting event');
// eventEmitter.emit('start');
// console.log('After emitting event');

// Output:
// Before emitting event
// After emitting event
// Async event listener
// In this example, the listener runs asynchronously because of the await statement with setTimeout, which allows "After emitting event" to print immediately after the event is emitted.

// Meaning of "Emit"
// To emit something means to send out or release something. For example, when you "emit a sound," you are making or sending out a sound.

// In Node.js, "emit" is used to mean "trigger" or "send out" an event. When you call emit() on an event, you’re saying, "Hey, this event has occurred, and I’m notifying any listeners that are waiting for it."

// Meaning of "Emitter"
// An emitter is something that "emits" or "sends out" something. In Node.js, an EventEmitter is an object that can "emit" events, meaning it can send notifications when certain things happen.

// So, an EventEmitter is a tool that lets you:

// Emit events: Notify others when something happens.
// Listen for events: Register functions that will respond when those events occur.

// ======================= practice...
const EventEmitter = require("events");
module.exports = class User extends EventEmitter {
  constructor(count) {
    super()
    this.count = 0;
  }
  increment() {
    this.count++;
  }
  result() {
    this.emit('target')
    return this.count;
  }
};

// class User2 extends User {
//     result(){
//         return `count: ${this.count}`
//     }
// }

// const data = new User2()
// data.increment()
// console.log(data.result())
// data.increment()
// console.log(data.result())
