import express from "express";
import UserRouter from "./router/Users.routers.js";
import ParentCategoryRouter from "./router/ParentCategory.routers.js";
import connectDB from "./lib/db.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = 3500;

//Connect DB
connectDB();

//Data Undestanding Middlware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ msg: "hello World!!" });
});

//User Api
app.use("/api", UserRouter);

//Parent Category Api
app.use("/api", ParentCategoryRouter);

app.listen(PORT, () => {
  console.log(`The server running at http://localhost:${PORT}`);
});
