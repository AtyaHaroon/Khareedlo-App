const mongoose =require("mongoose");

async function ConnectionDB(){
    try{
    const ConnectDB = await mongoose.connect(process.env.DB)
    if(ConnectDB) console.log("Mongo Atlas Connected")
    }
catch(error){
    console.log(error)
}
}

module.exports={
    ConnectionDB
}