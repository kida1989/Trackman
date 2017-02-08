var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res, next) {


  var id = req.query.id;
  console.log(id);
 var URL = 'http://127.0.0.1:3000/api/getvideo/';
 var videoURL = URL + id;

  request(videoURL, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(JSON.parse(body)[0].Url)
      res.render('video', { videoURL: JSON.parse(body)[0].Url });
    }
  })
});

module.exports = router;
