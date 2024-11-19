// URL stands for Uniform Resource Locator.
// It is the address of a resource on the internet, such as a webpage, an API endpoint, or a file.

// example:
// http://localhost:3001/contact?myname=ayaad


// Protocol: http (defines the method of communication)
// Host: localhost (the server's address)
// Port: 3001 (the port on which the server is running)
// Path: /contact (the specific resource on the server)
// Query String: ?myname=ayaad (extra data sent to the server)

//================================================================


// Working with URLs in Node.js
// The url Module
// Node.js provides the url module to parse and work with URLs.

// Importing the url Module:
const url = require('url');

// Parsing a URL:
// Use the url.parse() method to break a URL into its components.

// Example:
const parsedUrl = url.parse('http://localhost:3001/contact?myname=ayaad');
console.log(parsedUrl);

// Output:

// {
//   protocol: 'http:',
//   slashes: true,
//   auth: null,
//   host: 'localhost:3001',
//   port: '3001',
//   hostname: 'localhost',
//   hash: null,
//   search: '?myname=ayaad',
//   query: 'myname=ayaad',
//   pathname: '/contact',
//   path: '/contact?myname=ayaad',
//   href: 'http://localhost:3001/contact?myname=ayaad'
// }

//================================================================

// Parsing Query Parameters
// By default, the query field in the parsed URL is a string. To convert it into an object, pass true as the second argument to url.parse().

const parsedUrl = url.parse('http://localhost:3001/contact?myname=ayaad', true);
//Note: it this url.parse() we are passing a path into it bcz of understanding the concept which i use here but when we work with this we alway pases url which is request req.url 
console.log(parsedUrl.query); // { myname: 'ayaad' }

// Key Properties of a Parsed URL:
// protocol: The protocol used (http:, https:).
// host: The full hostname with port (localhost:3001).
// pathname: The path of the resource (/contact).
// query: The query string, parsed into an object if true is passed ({ myname: 'ayaad' }).