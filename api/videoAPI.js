var Video = require('../models/video.js');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

router.get("/getvideo",function (req,res) {
  Video.find({'_id':'acdf9221-1ec8-40b4-9b55-01e76e2b64dd'},function(err,doc){
  if(err) {return handleError(err);}
  else {
    res.status(200).json(doc)
  }


});

});

module.exports = router;
