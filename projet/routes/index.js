var express = require("express");
var router = express.Router();

var date = new Date();
var hour = date.getHours();
var day = date.getDay();

console.log('+++', )

if (!(day < 6 && 9 >= hour <= 16)) {
  router.get("/", function (req, res, next) {
    res.render("index", { title: "home" });
    res.end();
  });

  router.get("/contact", function (req, res, next) {
    res.render("contact", { title: "contact", phrase: " Home page" });
  });

  router.get("/services", function (req, res, next) {
    res.render("services", { title: "services" });
  });
} else {
  router.get("/", function (req, res, next) {
    res.render("layout");
  });
}

module.exports = router;