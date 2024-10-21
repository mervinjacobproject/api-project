import express from "express";
import userRoute from "./router/users.routers.js";
import connectDB from "./lib/db.js";

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
app.use("/api", userRoute);

app.listen(PORT, () => {
  console.log(`The server running at http://localhost:${PORT}`);
});
