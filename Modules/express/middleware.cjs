const express = require("express");
const app = express();
const fs = require("fs");
const http = require('http')
app.use((req, res, next) => {
  console.log("this is from outer middleware");
  fs.appendFile("log.txt", `\n${Date.now()}: ${req.method}: ${req.path}: ${res.statusCode} `, (err) => {
    if (err) {
      console.log(err)
    }
    next()
  });
});

app.use((req, res, next) => {
  res.send("1 middleware");
  console.log(req.headers.host)
  console.log(res.statusCode)
});

app.get("/get", (req, res) => {
  return res.send("this is home page");
});

app.listen(3000, () => {
  console.log("server is started");
});
