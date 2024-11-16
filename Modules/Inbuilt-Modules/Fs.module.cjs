// The fs (File System) module in Node.js provides an API to interact with the file system on your machine. 
// It allows you to read, write, update, delete,
//  and rename files, along with managing directories.
//   The fs module has both synchronous and asynchronous methods, 
//   where synchronous methods block execution until they complete, and asynchronous methods use callbacks or promises to handle file operations.

// Operation	Asynchronous	Synchronous
// Read File	fs.readFile()	fs.readFileSync()
// Write File	fs.writeFile()	fs.writeFileSync()
// Append File	fs.appendFile()	fs.appendFileSync()
// Delete File	fs.unlink()	fs.unlinkSync()
// Rename File	fs.rename()	fs.renameSync()
// Create Directory	fs.mkdir()	fs.mkdirSync()
// Read Directory	fs.readdir()	fs.readdirSync()
// Remove Directory	fs.rmdir()	fs.rmdirSync()
// File Stats	fs.stat()	fs.statSync()
// Promise-based Interface	fs.promises for async/await usage	-

const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "file.txt");
console.log(filePath);

const fileContent = fs.readFileSync(filePath, "utf-8");
// console.log(__filename, 'file.txt')
// console.log(fileContent,+ '121212');

console.log(1);
fs.readFile(filePath, "utf8", (error, data) => {
  if (error) {
    console.log(error, "oooooooooooops");
  } else {
    console.log(data);
  }
});
console.log(2);

// =====================================

fs.writeFileSync("./greet.txt", "hello ayaad chouhan");
fs.writeFile("./greet.txt", "how are you", { flag: "a" }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file written");
  }
});

async function prom() {
  let val = "hwllo world";
  return val;
}

console.log(prom());
