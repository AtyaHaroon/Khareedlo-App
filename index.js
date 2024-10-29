const express = require("express");

const app = express();

//---- env
require("dotenv").config();


//--- DB
const{ConnectionDB} = require("./Config/Database")

//---Model
const {userRole}=require("./Models/Roles");
const {userAccounts}=require("./Models/UserAccount");

//--server listen
app.listen(process.env.PORT,function(){
    console.log(`The server is running on port${process.env.PORT}`)
    ConnectionDB()
})