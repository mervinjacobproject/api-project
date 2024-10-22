import express from "express";
import {
  CreateParentCategoryRouter,
  DeleteParentCategoryRouter,
  ReadeParentCategoryRouter,
  UpdateParentCategoryRouter,
} from "../controllers/paarentCategory.controllers.js";

const ParentCategoryRouter = express.Router();

//Read Users Data
ParentCategoryRouter.get("/parentcategoryread", ReadeParentCategoryRouter);

//Create Users Data
ParentCategoryRouter.post("/createparentcategory", CreateParentCategoryRouter);

//Update Users Data
ParentCategoryRouter.put("/updateparentcategory", UpdateParentCategoryRouter);

//Delele User Data
ParentCategoryRouter.delete(
  "/deleteparentcategory",
  DeleteParentCategoryRouter
);

export default ParentCategoryRouter;
