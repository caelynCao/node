var express = require('express');
var router = express.Router();
var userModel = require('../model/user')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'register'});
});
router.post('/validate', function(req, res, next) {
  console.log(req.body);
  userModel.create({
    username:req.body.username,
    password:req.body.password,
  }).then(result=>{
    res.redirect("/login");
  }).catch(error=>{

  })
});
router.get('/checkIt', (req,res)=>{
    console.log(req.query);
    userModel.find({
        username:req.query.username
    }).then(result=>{
        if(result.length == 0){
            res.send({ok:1})
        } else{
            res.send({ok:0})
        }
    })
});

module.exports = router;