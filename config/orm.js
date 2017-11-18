var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {
  //display all burgers
  all: function(table, callback) {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      console.log(result);
      callback(result);
    });
  },
  //add new burger
  create: function(burger_name) {
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
 updateOne: function(id, cb){

    // Run MySQL Query
    connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id: id}], function (err, result) {
        if (err) throw err;
          cb(result);
      });

  }


}

module.exports = orm;
