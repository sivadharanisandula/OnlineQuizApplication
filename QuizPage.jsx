import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuizPage = () => {
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState('');
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:5000/api/quiz').then((res) => {
      const all = res.data.map((q) => q.category);
      setCategories([...new Set(all)]);
    });
  }, []);

  useEffect(() => {
    if (selected) {
      axios.get(`http://localhost:5000/api/quiz?category=${selected}`)
        .then((res) => setQuestions(res.data));
    }
  }, [selected]);

  const handleAnswer = (correct) => {
    if (correct) setScore(score + 1);
    setIndex((prev) => prev + 1);
  };

  if (!selected) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Select Quiz Category</h2>
        {categories.map((cat, i) => (
          <button key={i} onClick={() => setSelected(cat)} className="m-2 p-2 bg-blue-500 text-white rounded">
            {cat}
          </button>
        ))}
      </div>
    );
  }

  if (index >= questions.length) {
    return <h1 className="p-6 text-xl">Score: {score}/{questions.length}</h1>;
  }

  const q = questions[index];
  return (
    <div className="p-6">
      <h3 className="text-lg font-medium mb-2">{q.question}</h3>
      {q.options.map((opt, i) => (
        <button
          key={i}
          onClick={() => handleAnswer(opt.isCorrect)}
          className="block mb-2 p-2 bg-green-400 text-white rounded"
        >
          {opt.text}
        </button>
      ))}
    </div>
  );
};

export default QuizPage;
