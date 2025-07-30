import mongoose from "mongoose";

const optionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  isCorrect: { type: Boolean, required: true },
});

const quizSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: { type: [optionSchema], required: true },
  category: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Quiz = mongoose.model("Quiz", quizSchema);
export default Quiz;
