var mongoose =require("mongoose");
var Schema = mongoose.Schema;


var obj = {
    author:String,
    company:String,
    project:String
}

var blogModel = mongoose.model("blog",new Schema(obj))

module.exports = blogModel;