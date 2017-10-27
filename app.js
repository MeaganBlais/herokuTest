const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080

app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("home");
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});