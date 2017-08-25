// Import the dao to implement functions that will interact with the database
var dao = require("../config/dao.js");

// Create the burger object
var burger = {
  // Select all burger table entries
  selectAll: function(cb) {
    console.log('callback', cb);
    dao.selectAll("burgers", function(res) {
      cb(res);
    });
  },

  // The variables cols and vals are arrays
  insertOne: function(cols, vals, cb) {
    dao.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },

  // The objColVals is an object specifying columns as object keys with associated values
  updateOne: function(objColVals, condition, cb) {
    dao.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burger_controller.js).
module.exports = burger;
