var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var cardSchema = new Schema({

  username: String,
  cardTitle: String,
  cardDescription: String

});

var Cards = mongoose.model('Cards', cardSchema);

module.exports = Cards;
