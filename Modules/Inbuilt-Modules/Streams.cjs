// In Node.js, streams are a powerful concept that allows you to handle data in a more efficient and memory-friendly way by processing it in chunks

// Data in Chunks: Instead of loading the entire dataset into memory at once, streams break down the data into smaller, manageable chunks.

// Efficient Processing: As each chunk arrives, it's processed immediately, reducing memory usage and improving performance, especially when dealing with large datasets.

// Asynchronous Operations: Streams often operate asynchronously, allowing non-blocking operations and making your application more responsive.

// Different Types of Streams: Node.js offers various types of streams:
// Readable Streams: Used for reading data from a source (e.g., a file, network socket, or user input).
// Writable Streams: Used for writing data to a destination (e.g., a file, network socket, or console).
// Duplex Streams: Can be both read from and written to (e.g., a TCP socket).
// Transform Streams: Modify the data as it flows through (e.g., compressing or encrypting data).

const fs = require("fs");
const path = require("node:path");

const filePath = path.join(__dirname, "file.txt");
const file2Path = path.join(__dirname, "file2.txt");

const readStream = fs.createReadStream(filePath, {
  encoding: "utf-8",
  // highWaterMark: 2
});

const writeStream = fs.createWriteStream(file2Path);

// readStream.on("data", (chunk) => {
//   console.log(chunk);
//   writeStream.write(chunk);
// });

readStream.pipe(writeStream)