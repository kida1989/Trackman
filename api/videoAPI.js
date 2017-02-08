var Video = require('../models/video.js');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

// GET video for a specifc play ID //
router.get("/getvideo/:id",function (req,res) {

  var id = req.params.id;

  console.log(id);
  Video.find({'_id':id},function(err,doc){
  if(err) {return handleError(err);}
  else {
    res.status(200).json(doc)
  }


});
});


// GET video for ALL plays //
router.get("/getvideo/",function (req,res) {


  Video.find({},function(err,doc){
  if(err) {return handleError(err);}
  else {
    res.status(200).json(doc)
  }


});
});



module.exports = router;
