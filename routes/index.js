var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
  res.render("index", { title: "Jenna Deamer Portfolio" });
});

/* GET about page. */
router.get("/about", (req, res, next) =>{
  res.render("about", { title: "About Jenna Deamer" });
});

module.exports = router;
