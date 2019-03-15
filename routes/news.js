var express = require('express');
var router = express.Router();
var notiseModel = require('../model/notise')

router.get('/', function(req, res, next) {
  if(req.session.whatever){
    res.render('news', { 
      title:'news',
      name:req.session.whatever.username,
      isShow:false
});
  }else{
    res.redirect("/login");
  }
  
});

router.post('/', (req, res) =>{
  console.log(req.body);
  notiseModel.create({
      item:req.body.item
  }).then(result=>{
    console.log(result);
    res.redirect("/");
  })
});
module.exports = router;