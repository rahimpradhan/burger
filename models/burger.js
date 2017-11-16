// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burgers = {
  selectAll: function(cb) {
    orm.selectAll("burger", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(burger_name, cb) {
    orm.insertOne("burger", burger_name, function(res) {
      cb(res);
    });
  },
  /*update: function(devoured, cb) {
    orm.update("burger", devoured, function(res) {
      cb(res);
    });
  }
};*/
}
// Export the database functions for the controller
module.exports = burgers;