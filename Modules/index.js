// Module...

// Node.js modules allow you to encapsulate and organize code into reusable parts. Each file in Node.js is treated as a separate module, with its own scope and exportable features.

===================================================================================

// Types of Modules...
// Core Modules: These are built into Node.js (e.g., fs, path, http, etc.). They don’t require installation and can be used by directly requiring them.

// const fs = require('fs');
// Local Modules: These are custom modules created within your application. They are usually specific to your project’s needs.
// Third-Party Modules: These are external libraries installed via npm (e.g., express, lodash). They are managed using package.json.

===================================================================================

// Creating a Module
// In Node.js, each file is its own module.
// Use module.exports or exports to make variables, functions, or objects available to other files.

// // greet.js
// function greet(name) {
//   return `Hello, ${name}!`;
// }

// module.exports = greet;

===================================================================================

// Exporting from a Module
// module.exports: Exports a single entity (object, function, or value).

// // greet.js
// module.exports = function(name) {
//   return `Hello, ${name}!`;
// };
// exports: Adds multiple properties to module.exports for exporting.

// // utilities.js
// exports.add = (a, b) => a + b;
// exports.subtract = (a, b) => a - b;
// Remember, exports is just a reference to module.exports. If you reassign exports directly, it will break the link to module.exports.

===================================================================================

// Importing a Module
// Use the require() function to import a module.
// When you require a file, Node.js will execute that file and return the module.exports object.

// const greet = require('./greet');
// console.log(greet("Ayaad")); // Output: Hello, Ayaad!

===================================================================================
// Module Wrapper Function
// In Node.js, each module is wrapped in a function to provide module-specific scope.
// The function signature is as follows:

// (function (exports, require, module, __filename, __dirname) {
  // Module code here
// });
// This wrapper function provides access to:
// exports: Shortcut for module.exports.
// require: Function to import modules.
// module: Object representing the current module.
// __filename: Full path of the module file.
// __dirname: Directory of the module file.
