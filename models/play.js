//Schema & Model for plays collection
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var playSchema = new Schema ({

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

},{collection:'bb.plays'});

module.exports = mongoose.model('Play',playerSchema);
