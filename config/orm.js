var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {
  //display all burgers
  all: function(table, cb) {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      console.log(result);
      cb(result);
    });
  },
  //add new burger
  create: function(burger_name, cb) {
    var queryString =  "INSERT INTO burgers (burger_name, devoured) VALUES (?,?)";
    //console.log(queryString);
    connection.query(queryString, burger_name, function(err, result) {
      if (err) {
        throw err;
      }
      console.log(result);
       cb(result);
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


