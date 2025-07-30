import express from "express";
import Quiz from "../models/Quiz.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { category } = req.query;
    const quizzes = category ? await Quiz.find({ category }) : await Quiz.find();
    res.json(quizzes);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch quizzes" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newQuiz = new Quiz(req.body);
    await newQuiz.save();
    res.status(201).json(newQuiz);
  } catch (err) {
    res.status(400).json({ error: "Failed to create quiz" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Quiz.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete quiz" });
  }
});

export default router;
