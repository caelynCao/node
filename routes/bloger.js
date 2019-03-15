var express = require('express');
var router = express.Router();
var blogerModel = require('../model/bloger')

router.get('/', function(req, res, next) {
  if(req.session.whatever){
    res.render('bloger', { 
      title:'bloger',
      isnew:true,
      name:req.session.whatever.username,
      isShow:false
});
  }else{
    res.redirect("/login");
  }
  
});
router.post('/', (req, res) =>{
  console.log(req.body);
  blogerModel.create({
      author:req.session.whatever.username,
      company:req.body.company,
      project:req.body.project
  }).then(result=>{
    console.log(result);
    res.redirect("/");
  })
});


router.get("/delete",(req,res)=>{
  console.log(req.query);
  blogerModel.remove({
    _id:req.query.id
  }).then(result=>{
    res.redirect("/")
  })
})

router.get("/update",(req,res)=>{
  console.log(req.query);
    blogerModel.findById(req.query.id).then(result=>{
    res.render("bloger",{info:result,
      isnew:false, 
      name:req.session.whatever.username,
      isShow:false
    })
  })
})

router.post("/update",(req,res)=>{
  console.log(req.body.id);
  blogerModel.findByIdAndUpdate(req.body.id,{$set:{
        project:req.body.project,
        author:req.session.whatever.username,
        company:req.body.company

    }}).then(result=>{
      console.log(result);
      res.redirect("/");
    })
  
});

module.exports = router;