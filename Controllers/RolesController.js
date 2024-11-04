//---Model
const { userRole } = require("../Models/Roles");
const { userAccounts } = require("../Models/UserAccount");

//Method ----- GET
//Api ------ http://localhost:5000/role
//Description ----- Get all user role

async function getRole(req, res) {
  const AllRoles = await userRole.find();
  return res.status(200).send({ data: AllRoles });
}

//Method ----- POST
//Api ------ http://localhost:5000/role
//Description ----- Insertion of user role

async function createRole(req, res) {
  const { Role_Name, Status } = req.body;
  // -- Check user Role already exists or not
  const roleExist = await userRole.find({ Role_Name: Role_Name.toLowerCase() });

  // -- Checker of User input
  const roleName_checker = /^[A-Za-z]+$/;

  if (roleName_checker.test(Role_Name)) {
    if (roleExist.length > 0)
      return res.send({ error: "Already exixts in database" });

    const newRole = await userRole.create({
      Role_Name: Role_Name,
      Status: Status,
    });

    return res.status(201).send({ data: req.body });
  } else {
    return res.send({
      error: "Special Character,extra spaces or number is not valid",
    });
  }
}

//Method ----- DELETE
//Api ------ http://localhost:5000/role/:id
//Description ----- Delete single Role

async function deleteRole(req, res) {
  try {
    //Finding Role exists or not
    const findRole = await userRole.find({
      Role_Name: req.params.id.toLowerCase(),
    });

    // Condition if Role not exists their lenght will not be greater than 0
    if (findRole.length <= 0)
      return res.send({ error: "not defined in Database" });
    //To delete
    const deleteRole = await userRole.deleteOne({ Role_Name: req.params.id });

    return res.status(200).send("Role deleted !!");
  } catch (error) {
    console.log(error);
  }
}

//Method -------  UPDATE
//Api   --------  http://localhost:5000/role/:id
//Description --  Update user Role
async function updateRole(req, res) {
  // ROLE RECORD ID TO UPDATE
  const updateRoleID = req.params.id;

  // ROLE RECORD OLD DATA
  const role_old_data = await userRoles.findOne({
    Role_Name: updateRoleID.toLowerCase(),
  });

  console.log(role_old_data.Role_Name);

  // ROLE RECORD NEW DATA
  const { Role_Name, Status } = req.body;

  // ROLE NEW OBJECT TO UPDATE

  const UpdateAction = await userRoles.updateOne(
    {
      Role_Name: role_old_data.Role_Name,
    },

    {
      $set: {
        Status,
      },
    }
  );

  return res.send({ message: "user updated successfully" });
}

async function updateRole(req, res) {
  //Role id to update
  const updateRoleID = req.params.id;

  //Role record old data
  const role_old_data = await userRole.findOne({
    Role_Name: updateRoleID.toLowerCase(),
  });

  console.log(role_old_data.Role_Name);

  //Role record new data
  const { Role_Name , Status } = req.body;

  //Role new object to update

  const UpdateAction = await userRole.updateOne(
    {
      Role_Name: role_old_data.Role_Name,
    },
    {
      $set: {
        Status,
      },
    }
  );
  return res.send({ message: "user updated successfully" });
  // return res.status(200).send("Role updated !!")
}

module.exports = { createRole, getRole, deleteRole, updateRole };
