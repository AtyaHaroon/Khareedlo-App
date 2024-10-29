const mongoose = require("mongoose");

const  userAcoount_Model =mongoose.Schema({

    userName:{type:String},
    userEmail:{type:String},
    userName:{type:String},
    userPassword:{type:String},
    userStatus:{type:String},
})

module.exports =mongoose.model("userAccounts",userAcoount_Model)