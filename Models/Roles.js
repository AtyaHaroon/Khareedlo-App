const mongoose = require("mongoose");

const Roles_Model = mongoose.Schema({

    Role_Name:{type:String, require :[true,"Role name mus be entered"]},
    Status:{type:String,require:[true,"please enter the stastus"]}
})


module.exports=mongoose.model("userRole",Roles_Model)