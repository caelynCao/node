var express = require("express");
var router = express.Router();
var notiseModel = require("../model/notise");


router.get('/',(req,res,next)=>{
    notiseModel.find().then(result=>{
        console.log(result);
        res.render("notice",{
            info:result,
            name:req.session.whatever.username,
            isShow:false
        });
    })

});

module.exports = router;