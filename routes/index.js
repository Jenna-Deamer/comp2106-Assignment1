var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
  res.render("index", { title: "Jenna Deamer's Portfolio" });
});

/* GET about page. */
router.get("/about", (req, res) => {
  res.render("about", { title: "About Jenna Deamer" });
});

/* GET projects page. */
router.get("/projects", (req, res) => {
  res.render("projects", { title: "Jenna Deamer's Work" });
});

/* GET contact  page. */
router.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Jenna Deamer" });
});

module.exports = router;
