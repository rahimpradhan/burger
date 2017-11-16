var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var burgers = require("../models/burger.js");

router.get("/", function(req, res) {
  burgers.selectAll(function(data) {
    var burgerObject = {
      burger: data
    };
    console.log(burgerObject);
    res.render("index", burgerObject);
  });
});

router.post("/", function(req, res) {
  burgers.insertOne([
    "burger_name"
  ], [
    req.body.burger_name
  ], function(result) {
    // Send back the ID of the new burger
    res.json({ id: result.id });
  });
});

module.exports = router;