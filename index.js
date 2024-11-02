const express = require("express");

const app = express();

//---- env
require("dotenv").config();

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))

//--- DB
const{ConnectionDB} = require("./Config/Database")

//Models - import
const {createRole,getRole} = require("./Controllers/RolesController")


//---- User Role Api [GET,POST]
app.route("/role").get(getRole).post(createRole)


//--server listen
app.listen(process.env.PORT,function(){
    console.log(`The server is running on port${process.env.PORT}`)
    ConnectionDB()
})