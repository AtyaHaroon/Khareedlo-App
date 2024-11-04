const express = require("express");

const app = express();
//---- env
require("dotenv").config();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//--- DB
const { ConnectionDB } = require("./Config/Database");

//Models - import
const {
  createRole,
  getRole,
  deleteRole,
  updateRole,
} = require("./Controllers/RolesController");

//---- User Role Api [GET,POST]
app.route("/role").get(getRole).post(createRole);

// User Role Api [ DELETE , UPDATE]
app.route("/role/:id").delete(deleteRole).put(updateRole)

//--server listen
app.listen(process.env.PORT, function () {
  console.log(`The server is running on port${process.env.PORT}`);
  ConnectionDB();
});
