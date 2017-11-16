var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {
  //display all burgers
  selectAll: function() {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      console.log(result);
    });
  },
  //add new burger
  insertOne: function(burger_name) {
    var queryString = "INSERT INTO burgers ??";
    //console.log(queryString);
    connection.query(queryString, [burger_name], function(err, result) {
      if (err) {
        throw err;
      }
      console.log(result);
    });
  },
  //update burger status
  /*updateOne: function(devoured) {
    var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";

    connection.query(queryString, [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol], function(err, result) {
      console.log(result);
    });
  }
};*/
}

module.exports = orm;
