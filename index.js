// import express from "express";
// import UserRouter from "./router/Users.routers.js";
// import ParentCategoryRouter from "./router/ParentCategory.routers.js";
// import connectDB from "./lib/db.js";

// import dotenv from "dotenv";
// dotenv.config();

// const serverless = require("serverless-http");
// const app = express();
// // const PORT = 3500;

// //Connect DB
// connectDB();

// //Data Undestanding Middlware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.json({ msg: "hello World!!" });
// });

// //User Api
// app.use("/api", UserRouter);

// //Parent Category Api
// app.use("/api", ParentCategoryRouter);

// // app.listen(PORT, () => {
// //   console.log(`The server running at http://localhost:${PORT}`);
// // });

// module.exports.handler = serverless(app);

// import express from "express";
// import UserRouter from "./router/Users.routers.js";
// import ParentCategoryRouter from "./router/ParentCategory.routers.js";
// import connectDB from "./lib/db.js";
// import dotenv from "dotenv";
// import awsServerlessExpress from "aws-serverless-express";

// dotenv.config();

// const app = express();

// // Connect to the database
// connectDB();

// // Middleware for parsing request bodies
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Index route
// app.get("/", (req, res) => {
//   res.json({ msg: "hello World!!" });
// });

// // User API routes
// app.use("/api", UserRouter);

// // Parent Category API routes
// app.use("/api", ParentCategoryRouter);

// // Create the server for AWS Lambda
// const server = awsServerlessExpress.createServer(app);

// // Lambda handler function
// export const handler = (event, context) => {
//   return awsServerlessExpress.proxy(server, event, context);
// };

// import express from "express";
// import UserRouter from "./router/Users.routers.js";
// import ParentCategoryRouter from "./router/ParentCategory.routers.js";
// import connectDB from "./lib/db.js";

// import dotenv from "dotenv";
// dotenv.config();

// // const serverless = require("serverless-http");
// const app = express();
// // const PORT = 3500;

// //Connect DB
// connectDB();

// //Data Undestanding Middlware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.json({ msg: "hello World!!" });
// });

// //User Api
// app.use("/api", UserRouter);

// //Parent Category Api
// app.use("/api", ParentCategoryRouter);

// // app.listen(PORT, () => {
// //   console.log(`The server running at http://localhost:${PORT}`);
// // });

// // module.exports.handler = serverless(app);

import express from "express";
import UserRouter from "./router/Users.routers.js";
import ParentCategoryRouter from "./router/ParentCategory.routers.js";
import connectDB from "./lib/db.js";
import dotenv from "dotenv";
import awsServerlessExpress from "aws-serverless-express";

dotenv.config();

const app = express();
const PORT = 3500;
// Connect to the database
connectDB();

// Middleware for parsing request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Index route
app.get("/api", (req, res) => {
  res.json({ msg: "hello World!!" });
});

// User API routes
app.use("/api", UserRouter);

// Parent Category API routes
app.use("/api", ParentCategoryRouter);

app.listen(PORT, () => {
  console.log(`The server running at http://localhost:${PORT}`);
});

// // Create the server for AWS Lambda
// const server = awsServerlessExpress.createServer(app);

// // Lambda handler function
// export const handler = (event, context) => {
//   return awsServerlessExpress.proxy(server, event, context);
// };
