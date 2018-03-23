var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var testSchema = new Schema({

  username: String,
  test: String

});

var Tests = mongoose.model('Tests', testSchema);

module.exports = Tests;