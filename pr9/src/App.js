import React, { useState } from 'react';

const questions = [
  {
    question: "Что такое JSX?",
    options: ["JavaScript XML", "JavaScript Extension", "JavaScript X", "None"],
    answer: 0
  },
  {
    question: "Как обновить состояние в React?",
    options: ["setState", "updateState", "changeState", "None"],
    answer: 0
  },
  {
    question: "Что такое компонент в React?",
    options: ["Функция или класс", "Только функция", "Только класс", "Ничего"],
    answer: 0
  }
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const completed = current >= questions.length;

  const handleAnswer = (index) => {
    if (index === questions[current].answer) setScore(score + 1);
    setCurrent(current + 1);
  };

  const restart = () => {
    setCurrent(0);
    setScore(0);
  };

  return (
    <div style={{ maxWidth: 500, margin: 'auto', padding: 20 }}>
      <h1>React Quiz</h1>
      
      {completed ? (
        <div>
          <h2>Результат: {score} из {questions.length}</h2>
          <button onClick={restart}>Заново</button>
        </div>
      ) : (
        <div>
          <p>Вопрос {current + 1}/{questions.length}</p>
          <h3>{questions[current].question}</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {questions[current].options.map((option, i) => (
              <li 
                key={i} 
                onClick={() => handleAnswer(i)}
                style={{ 
                  padding: 10, 
                  margin: '5px 0', 
                  background: '#eee', 
                  cursor: 'pointer'
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}