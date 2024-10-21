import express from "express";
import {
  ReadeUser,
  CreateUser,
  UpdateUser,
  DeleteUser,
} from "../controllers/user.controllers.js";

const router = express.Router();

//Read Users Data
router.get("/usersread", ReadeUser);

//Create Users Data
router.post("/createuser", CreateUser);

//Update Users Data
router.put("/updateuser", UpdateUser);

//Delele User Data
router.delete("/deleteuser", DeleteUser);

export default router;
