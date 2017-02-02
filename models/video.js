//Schema & Model for video collection
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var videoSchema = new Schema ({

  _id: String,
  Time: String,
  PlayId: String,
  CameraPosition: String,
  PlayerPosition: Array,
  VideoThumbnailBlobUrl: String,
  VideoServiceInfo:{Version:String},
  OriginalVideoBlobUrl: String,
  FileName: String,
  MimeType: String,
  Url: String,
  BlobUrl: String,
  Size: Number,
  Updated:String

},{collection:'bb.videos'});

module.exports = mongoose.model('Video',videoSchema);
