var Player = require('../models/player.js');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

// GET video for a specifc play ID //
router.get("/player/:id",function (req,res) {

  var id = req.params.id;

  console.log(id);
  Player.find({'_id':id},function(err,doc){
  if(err) {return handleError(err);}
  else {
    res.status(200).json(doc)
  }


});
});


// GET video for ALL plays //
router.get("/player/",function (req,res) {


  Player.find({},function(err,doc){
  if(err) {return handleError(err);}
  else {
    res.status(200).json(doc)
  }


});
});


router.post("/player/search",function (req,res){
var query = req.body;
if (!(query.ForeignIds || query.FirstName || query.LastName)){

//write error funtion!!!! -> Important

  console.log("Please search by MLBAM ID or Player's First & Last Name")
  res.status(400).json({
    "Error message": "Please search by MLBAM ID, First Name, Last Name",
    "Example":{
      MLBAM:"MLBAM-XXXXXX",
      FirstName: "Erick",
      LastName: "Reyes"
    }
  })}
else {
  console.dir(query)
  Player.find(query,function(err,doc){
    if(err){return handleError(err);}
    else{
      res.status(200).json(doc);
    }
  });
}


});
module.exports = router;
