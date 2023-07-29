var express = require('express');
var router = express.Router();
var msql = require("./database");

var app = express();
var parser = require("body-parser")
app.use(parser.json());
app.use(parser.urlencoded({extended: false}));

var http = require('http').Server(app);
var io = require('socket.io')(http);

// client packages


router.get('/', function(req, res, next) {
  msql.query("SELECT * FROM Chat_DB", function(err, msg){
    if(err){
      throw err;
    }
    else{
      res.render('index', {'message':msg}); 
    }
  })
 
});
router.post('/send', function(req, res, next) {
  msql.query(`INSERT INTO Chat_DB(name, send) values('Suraj', '${req.body.messagebar}')`, function(err){
      if(err){
        throw err;
      }
      else{
        res.redirect('/');
      }
  });

})



module.exports = router;


