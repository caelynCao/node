var express = require('express');
var router = express.Router();
var userModel = require('../model/user')

router.get('/', function(req, res, next) {
  res.render('login', { title: 'login' ,isShow:false});
});
router.post('/validate', (req, res)=> {
  console.log(req.body);
  userModel.find({
    password:req.body.password,
    email:req.body.email
  }).then(result=>{
    if(result.length == 0 ){
      res.send({ok:0})
      // res.render("login",{title:"login",isShow:true})
        
    } else{
        // req.session.whatever = result[0];
          res.send({ok:1})

        // res.redirect("/");
    }
    
  }).catch(error=>{

  })
});
module.exports = router;