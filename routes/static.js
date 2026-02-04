const express = require("express");
const router = express.Router();

router.get("/privacy", (req, res) => {
  res.render("static/privacy.ejs");
});

router.get("/terms", (req, res) => {
  res.render("static/terms.ejs");
});

router.get("/companyDetails", (req, res) => {
  res.render("static/companyDetails.ejs");
});

module.exports = router;