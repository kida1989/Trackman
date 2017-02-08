var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {


 var id = '8089bb39-8fdd-40f4-82fd-4ccfb76590ca';
 var URL = 'http://127.0.0.1:3000/api/getvideo/';
 var videoURL = URL + id;

  request(videoURL, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(JSON.parse(body)[0].Url)
      res.render('index', { videoURL: JSON.parse(body)[0].Url });
    }
  })


});

module.exports = router;
