// HTTP in Node.js
// Node.js has a built-in http module that allows developers to create web servers and handle HTTP requests and responses.

// Import HTTP Module
// const http = require('http');

// =======================================

// Creating a Server
// Use http.createServer() to create an HTTP server.
//  syntax..
// const server = http.createServer((req, res) => {
//   // Request handling logic
// });

// server.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

//================================================

// Handling HTTP Requests
// Request Object (req):

// Contains details about the client's request.
// Common properties:
// req.method: HTTP method (e.g., GET, POST).
// req.url: URL of the request.
// req.headers: Request headers.
// Example:

// http.createServer((req, res) => {
//   console.log(req.method); // GET, POST, etc.
//   console.log(req.url);    // Requested URL
//   console.log(req.headers); // Request headers
// });

//================================================

// Handling POST Requests
// For POST requests, capture incoming data using req.on('data') and req.on('end').

// http.createServer((req, res) => {
//   if (req.method === 'POST') {
//     let body = '';

//     req.on('data', chunk => {
//       body += chunk;
//     });

//     req.on('end', () => {
//       console.log('Body:', body);
//       res.end('Data received');
//     });
//   } else {
//     res.end('Only POST requests are supported');
//   }
// });

//====================================================

// HTTP Status Codes
// Common status codes:
// 200: OK (Success)
// 201: Created
// 400: Bad Request
// 404: Not Found
// 500: Internal Server Error


//======================================= practice code
const https = require("http");
const fss = require('fs')
const path = require("path");

let filePath = path.join(__dirname, "index.html");
let html = fss.readFileSync(filePath, "utf-8");

const server2 = https.createServer((req, res) => {
  html = html.replace("{{name}}", "how are you ayaad");
  res.end(html);
});

server2.listen(3001, () => {
  console.log("server is listening");
});

// const http = require("http");
// const path = require("path");
// const fs = require("fs");

// // console.log(filePath)
// const server = http.createServer((req, res) => {
let data = {
  firstName: "ayaad",
  lastName: "chouhan",
};

//   res.writeHead(200, { "Content-Type": "text/html" });
//   const filePath = path.join(__dirname, "index.html");
//   let html = fs.readFileSync(filePath, "utf-8");
//   const username = "Ayaad chouhan";

//   html = html.replace("{{name}}", username);
//   // console.log('hello world');

//   res.end(html);
// });

// server.listen(3001, () => {
//   console.log("server is running on 3000 port");
// });

////////////////////////////////////////////////////////

const http = require("http");
const fs = require("path");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("hello world");
      break;
    case "/about":
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(data));
      break;
    case "/contact":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("@mygmail.com");
      break;

    default:
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Page Not Found");
      break;
  }
  // res.writeHead(200, { "Content-Type": "application/json" });
  // res.end(JSON.stringify(data));
});

server.listen(3000, () => {
  console.log("server is running");
});
