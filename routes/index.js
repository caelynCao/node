var express = require('express');
var router = express.Router();
var blogerModel = require("../model/bloger");
var notiseModel = require("../model/notise");

router.get('/', function(req, res) {
    if(req.session.whatever){     
        if(req.session.whatever.username =="jgfsk"){ 
            Promise.all([blogerModel.find(), notiseModel.find()]).then(result=>{
                res.render("index", { title: "home",
                    name:req.session.whatever.username,
                    list:result[0],
                    lis:result[1],
                    admin:"administor",
                    isShow:true
                    })
            })
        } else {
            Promise.all([blogerModel.find({author:req.session.whatever.username}), notiseModel.find()]).then(result=>{
                res.render("index", { title: "home",
                    name:req.session.whatever.username,
                    list:result[0],
                    lis:result[1],
                    admin:"user",
                    isShow:false
                })
            })
        }
    } else {
        res.redirect("/login");
    }
});

 
router.get("/logout",(req,res)=>{
    req.session.destroy((error)=>{
        if(!error){
            res.redirect("/login");
        }
    })
})

        
module.exports = router;
