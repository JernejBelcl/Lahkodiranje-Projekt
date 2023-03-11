import { useState, useEffect } from "react";

const Question = ({question, answer, index}) => {

    const [userAnswer, setUserAnswer] = useState('Enter Answer');
    const [isCorrect, setIsCorrect] =  useState(false);
    const handleClickSubmit = () => {
        if(answer === userAnswer) alert('correct')
        else alert('wrong')
       
    }

    return (
        <div style={{display: 'flex', flexFlow: 'column', width: '100%', backgroundColor: isCorrect ? 'green' : 'white'}}>
            <h1>Question {index}: {question} </h1>
            <div style={{display: 'flex', flexFlow: 'row'}}>
                <input type='text' placeholder={userAnswer}  onChange={(e) => {setUserAnswer(e.target.value)}}/>
                <button onClick={handleClickSubmit}>Submit</button>
            </div>
        </div>
    );
}
export default Question