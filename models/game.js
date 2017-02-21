//Schema & Model for games collection
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gameSchema = new Schema ({

  _id: String,
  Time:String,
  LocalTime: String,
  TimeZone: String,
  Kind: String,
  Name: String,
  Client:{Name:String,Version:String,HostName:String,EngineVersion:Number},
  Event:{Id:String,Name:String,Organization:{Id:String,Name:String}},
  Location:{Venue:{Id:String,Name:String,Field:{Id:String,Name:String,Usage:Array,Location:{Longitude:Number,Latitude:Number}}}},
  HomeTeam:{Id:String,TeamName:String,TeamShortNameDisplay:String},
  AwayTean:{Id:String,TeamName:String,TeamShortNameDisplay:String},
  HomeTeamRoster:Array,
  AwayTeamRoster:Array,
  State:{Status:String,IsComplete:Boolean,IsVerified:Boolean,HasIssues:Boolean,IsEditing:Boolean,HasBadBreaks:Boolean,ErrorDescription:String,StartTime:String,LocalStartTime:String,CompleteTime:String,LocalCompleteTime:String,StatCalculated:Boolean},
  PlayCount:Number,
  GameLevel:{Id:String,Name:String},
  League:{Id:String,Name:String},
  Schedule:{Id:String,ForeignIds:Array,Name:String},
  Updated:String

},{collection:'bb.games'});

module.exports = mongoose.model('Game',gameSchema);
