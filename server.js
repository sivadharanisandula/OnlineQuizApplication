import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import quizRoutes from "./routes/quizRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/quiz", quizRoutes);

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(5000, () => console.log("Server started on port 5000")))
  .catch((err) => console.error("MongoDB connection error:", err));

