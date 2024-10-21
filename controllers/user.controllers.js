import Users from "../model/users.model.js";

//Read Users Data
export const ReadeUser = async (req, res) => {
  try {
    let query = {};
    const GetUsers = await Users.find(query);
    res.json(GetUsers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Create Users Data
export const CreateUser = async (req, res) => {
  const GetUsers = await Users.find();
  const sort = (await GetUsers.sort((a, b) => b.UserId - a.UserId)) || [];

  //Validate Your Data
  const newUser = new Users({
    UserId: Number(sort.length > 0 ? sort[0]?.UserId + 1 : 1),
    UserName: req.body.UserName,
    Email: req.body.Email,
    Password: req.body.Password,
    IpAddress: req.body.IpAddress,
    PhoneNo: req.body.PhoneNo,
    Status: req.body.Status,
  });
  try {
    const user = await newUser.save();
    return res.status(400).json(user);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
  // res.json({ message: "User Created Successfully!!" });
};

//Update Users Data
export const UpdateUser = async (req, res) => {
  res.json({ message: "User Updated Successfully!!" });
};

//Delele User Data
export const DeleteUser = async (req, res) => {
  res.json({ message: "User Delete Successfully!!" });
};
