const mongoose = require("mongoose");

const Roles_Model = mongoose.Schema({

    Role_Name:{type:String, require :[true,"Role name mus be entered"]},
    Status:{type:String,require:[true,"please enter the stastus"]}
})


const userRole = mongoose.model("userRole",Roles_Model)

module.exports={userRole}