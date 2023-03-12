import React, { useState, useEffect } from 'react';
import styled,{ css } from 'styled-components';

const QuestionContainer = styled.div`
border: 1px solid #007bff;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;

  &:hover {
    border-color: #0056b3;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
`;

const Content = styled.div`
white-space: pre-wrap;
font-size: 1 rem;
  line-height: 1.5;
  font-weight: bold;
  color: #333;
  margin-top: 1rem;

  &:before {
    content: "";
    display: inline-block;
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    background-color: #007bff;
    margin-right: 0.5rem;
    margin-top: 0.3rem;
  }
`;

const AnswerContainer = styled.div`
display: flex;
  
  align-items: center;
`;

const Label = styled.label`
font-size: 1 rem;
  font-weight: bold;
  color: #333;
  margin-right: 0.5rem;
  margin-top: 0.3rem;
`;

const Input = styled.input`
  
  border: 3px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
 padding: 5px;
  color: #333;
  background-color: #fff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);

  ${({ isCorrect }) =>
    isCorrect === true &&
    css`
      border-color: rgba(0, 255, 0, 0.6);
      
    `}

  ${({ isCorrect }) =>
    isCorrect === false &&
    css`
      border-color: rgba(255, 0, 0, 0.6);
      
    `}

  transition: all 0.3s ease-in-out;
`;

const WarningContainer = styled.div`
 color: #777;
`;


const Button = styled.button`
font-size: 0.7rem;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  margin-left: 10px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;

const Questions = () => {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState('');
    const [isCorrect, setIsCorrect] = useState(null);

    const handleAnswerChange = (event, questionId) => {
        setAnswers({ ...answers, [questionId]: event.target.value });
        setIsCorrect({ ...isCorrect, [questionId]: null });
    };
    const handleSubmit = (id) => {
        console.log("submitting answer for question", id);
        const submittedAnswer = answers[id];
        const correctAnswer = questions.find((q) => q.id === id).answer;
        const isAnswerCorrect = submittedAnswer === correctAnswer;

        setIsCorrect({ ...isCorrect, [id]: isAnswerCorrect });
        console.log("is answer correct?", isAnswerCorrect);
    };


    useEffect(() => {
        const fetchQuestions = async () => {
            const response = await fetch('http://snf-60107.vm.okeanos-global.grnet.gr:3001/question/sql/hard');
            const data = await response.json();
            setQuestions(data);
            setIsCorrect(data.reduce((acc, q) => ({ ...acc, [q.id]: null }), {}));
        };
        fetchQuestions();
    }, []);

    return (
        <div>
            {questions.map((question) => (
                <QuestionContainer key={question.id}>
                    <Content>{question.content}</Content>
                    <WarningContainer>(Uporabi ";" kjer je več možnih odgovorov)</WarningContainer>
                    <AnswerContainer key={question.id}>
                        <Label htmlFor={`answer-${question.id}`}>Odgovor:</Label>
                        <Input
                            type="text"
                            id={`answer-${question.id}`}
                            name="answer"
                            value={answers[question.id] || ''}
                            onChange={(event) => handleAnswerChange(event, question.id)}
                            isCorrect={isCorrect[question.id]}
                        />
                        <Button onClick={() => handleSubmit(question.id)}>Oddaj</Button>
                    </AnswerContainer>
                </QuestionContainer>
            ))}
        </div>
    );
};

export default Questions;