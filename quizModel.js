import mongoose from 'mongoose';

const optionSchema = new mongoose.Schema({
  text: String,
  isCorrect: Boolean
});

const quizSchema = new mongoose.Schema({
  question: String,
  options: [optionSchema],
  category: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Quiz', quizSchema);
