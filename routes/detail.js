var express = require("express");
var router = express.Router();
var blogerModel = require("../model/bloger");

router.get('/:id', function(req, res) {
    if(req.session.whatever){     
        if(req.session.whatever.username =="jgfsk"){ 
            blogerModel.find().then(result=>{
                res.render("detail", {
                    name:req.session.whatever.username,
                    list:result,
                    admin:"administor"
                })
            })
        } else {
            blogerModel.find({author:req.session.whatever.username}).then(result=>{
                res.render("detail", {
                    name:req.session.whatever.username,
                    list:result,
                    admin:"user"
                })
            })
        }
    }else{
        res.redirect("/detail");
    }
});
module.exports = router;

























