const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Server Running");
});

app.listen(3000, () => {
  console.log("server runninng port 3000");
});
