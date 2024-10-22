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
};

//Update Users Data
export const UpdateUser = async (req, res) => {
  const FindUserId = Number(req.body.UserId);
  const UpdateUserValue = req.body;

  if (!req.body.UserId) {
    return res.status(400).send("userId is required");
  }

  try {
    const updateUser = await Users.findOneAndUpdate(
      { UserId: FindUserId },
      UpdateUserValue,
      { new: true }
    );
    if (!UpdateUserValue) {
      return res.status(404).send("User not found");
    }
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Delele User Data
export const DeleteUser = async (req, res) => {
  const FindUserIds = JSON.parse(req.body.UserIds);

  if (!FindUserIds || !Array.isArray(FindUserIds)) {
    return res.status(400).send("userIds is required and should be an array");
  }

  try {
    const DeleteUser = await Users.deleteMany({
      UserId: { $in: FindUserIds },
    });

    if (DeleteUser.deletedCount === 0) {
      return res.status(404).send("No users found to delete");
    }

    res.send(`${DeleteUser.deletedCount} users deleted successfully`);
  } catch (error) {
    res.status(500).send("Error deleting users: " + error.message);
  }
};
