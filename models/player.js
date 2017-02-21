//Schema & Model for player collection
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var playerSchema = new Schema ({

  _id: String,
  Ids: Array,
  ForeignIds: Array,
  FirstName: String,
  LastName: String,
  DateOfBirth:String,
  Dexterity:{Bats:String,Throws:String},
  Positions: Array,
  DefaultJerseyNumber: Number,
  Teams: Array,
  Updated:String

},{collection:'bb.players'});

module.exports = mongoose.model('Player',playerSchema);
