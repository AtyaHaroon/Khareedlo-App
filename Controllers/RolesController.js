//---Model
const {userRole}=require("../Models/Roles");
const {userAccounts}=require("../Models/UserAccount");

//Method ----- POST
//Api ------ http://localhost:5000/role
//Description ----- Insertion of user role

async function createRole(req,res){
    const{Role_Name,Status}= req.body;

    const roleexist =await userRole.find({Role_Name:Role_Name})
if(roleexist.length>0) return res.send({"error":"Already exixts in database"})
const newRole= await userRole.create(
    {
        Role_Name:Role_Name,
        Status:Status
    }
)

    return res.status(201).send({"data": req.body})
}


//Method ----- GET
//Api ------ http://localhost:5000/role
//Description ----- Get all user role

async function getRole(req,res){

    return res.status(200).send({"message":"roles added Succesfully!! "})
}

module.exports={createRole,getRole}