import React from 'react';
import ReactDOM from 'react-dom';
import MultiChoice from './MultiChoice';
import App from '../App/App';

it('renders without crashing', () => {
  const quiz_data = [
    {
      question: "What is the name of the diner/restaurant?",
      correct_answer: "Monks",
      possible_answers: ["Monks", "Bob's Diner", "Mendy's"]
    },
    {
      question: "What is the name of George's ficticious latex company?",
      correct_answer: "Vandelay Industries",
      possible_answers: ["Marine Biology Institute", "Vandelay Industries", "Putumayo"]
    },
    {
      question: "Who is the famous actor that 'owned' George's used LeBaron?",
      correct_answer: "Jon Voight",
      possible_answers: ["Keith Hernandez", "Jon Voight", "Bette Midler"]
    }
  ];
  const div = document.createElement('div');
  ReactDOM.render(<MultiChoice answers={quiz_data[0].possible_answers} />, div);
});
