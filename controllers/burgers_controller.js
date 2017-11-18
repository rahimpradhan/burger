var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var burgers = require("../models/burger.js");

//route to list all burgers
router.get("/", function(req, res) {
  burgers.all(function(data) {
    var burgerObject = {
      burger: data
    };
    //console.log(burgerObject);
    res.render("index", burgerObject);
  });
});

//route to create new burger
router.post("/api/burgers", function(req, res) {
  burgers.create( [
    req.body.burger_name, req.body.devoured
  ], function(result) {
    // Send back the ID of the new burger
    res.json({ id: result.id });
  });
});

//route to update burger
router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  console.log("Burgers Controllers Update: "+ req.body.devoured)
  burger.update({
    devoured: req.body.devoured
  },condition, function(result) {
    if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } 
      else {
        res.status(200).end();
      }
  });
});
module.exports = router;