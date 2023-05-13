import express, { NextFunction } from "express";
import "dotenv/config";
import mongoose from "mongoose";
// import noteModel from "../models/noteModel";
import noteRoutes from "../routes/notesRoute";
import { defaultText } from "../controllers/notesController";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
// import createHttpError from "http-errors";

const app = express();

const port = process.env.PORT;
// const URL: string = process.env.MONGO_URL || "";

// app.get("/", async (req, res) => {
//   const notes = await noteModel.find().exec();
//   res.json(notes);
// });

app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());
const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGO_URL || "")
    .then(() => console.log("Connected"))
    .catch((err) => console.log(err));
};
connectDB();

app.use("/server", noteRoutes);
app.get("/*", defaultText);

app.listen(port, () => {
  console.log("Server is running at port 3001");
});
