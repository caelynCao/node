var mongoose =require("mongoose");
var Schema = mongoose.Schema;


var obj = {
    item:String
}

var notiseModel = mongoose.model("notise",new Schema(obj))

module.exports = notiseModel;