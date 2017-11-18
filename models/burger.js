// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burgers = {
  all: function(cb) {
    orm.all("burger", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(burger_name, cb) {
    orm.create("burger", burger_name, function(res) {
      cb(res);
    });
  },
  update: function(state, id, cb) {
      console.log("Burgers State: "+ state);
      console.log("Burgers Id: "+ id);
      orm.update("burgers", state, id, function(result) {
        cb(result);
});
}

};

// Export the database functions for the controller
module.exports = burgers;