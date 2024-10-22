import express from "express";
import {
  ReadeUser,
  CreateUser,
  UpdateUser,
  DeleteUser,
} from "../controllers/user.controllers.js";

const UserRouter = express.Router();

//Read Users Data
UserRouter.get("/usersread", ReadeUser);

//Create Users Data
UserRouter.post("/createuser", CreateUser);

//Update Users Data
UserRouter.put("/updateuser", UpdateUser);

//Delele User Data
UserRouter.delete("/deleteusers", DeleteUser);

export default UserRouter;
