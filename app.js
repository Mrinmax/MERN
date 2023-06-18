const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("This is the Home Route");
});

app.get("/about", (req, res) => {
  res.send("This is the about Route");
});

app.get("/contact", (req, res) => {
  res.send("This is the contact Route");
});

app.get("/signin", (req, res) => {
  res.send("This is the signin Route");
});

app.get("/signup", (req, res) => {
  res.send("This is the signup Route");
});

app.listen(3000, () => {
  console.log("server runninng port 3000");
});
