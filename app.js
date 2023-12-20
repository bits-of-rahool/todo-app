const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"))
var all = [];

let day = date.getDate();


app.get("/", (req, res) => {
  console.log(day);

  res.render("list", { all: all,day:day });
});

app.post("/", (req, res) => {
  var item = req.body.task;
  all.push(item);

  res.redirect("/");
});

app.listen(3000, function () {
  console.log("server running at 3000 ");
});
