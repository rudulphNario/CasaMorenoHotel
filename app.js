// jshint esversion: 6
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const { render } = require("express/lib/response");
const res = require("express/lib/response");
const ejs = require("ejs");

const app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.json())

app.get("/", function (req, res) {
    res.render("home");
  });
  app.get("/about", (req, res) => {
    res.render("about");
  });
  app.get("/blog", (req, res) => {
    res.render("blog");
  });
  app.get("/contact", (req, res) => {
    res.render("contact");
  });
  
  app.listen(process.env.PORT || 3000, function (req, res) {
    console.log("Server is running on port 3000");
  });
  