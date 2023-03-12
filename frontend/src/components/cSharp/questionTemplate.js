import {useState, useEffect} from "react";

const QuestionTemplate = ({question, answer, index}) => {
    const [userAnswer, setUserAnswer] = useState('Enter Answer');
    const [isCorrect, setIsCorrect] =  useState(false);

    const handleClickSubmit = () => {
        if(answer === userAnswer) alert('✔ Pravilni odgovor')
        else alert('❌ Napačen odgovor')

    }

    // <!--style={{display: 'flex', flexFlow: 'column', width: '100%', backgroundColor: isCorrect ? 'green' : 'white'}}-->
    //  <!--style={{display: 'flex', flexFlow: 'row'}}-->
    return (
        <div >
            <h1 style={{fontWeight: 'bold', fontSize: '22px'}}>{index+1}. vprašanje:</h1>
            <h2 style={{marginLeft: '10px', marginTop: '3px', marginBottom: '3px', whiteSpace: 'pre-wrap'}}>{question} </h2>
            <input style={{fontWeight: 'bold', border: '1px solid #595757', padding: '10px', width: '500px', marginTop: '5px', height: '30px', marginLeft: '10px'}} type='text' placeholder={userAnswer}  onChange={(e) => {setUserAnswer(e.target.value)}}></input>
            <button style={{fontWeight: 'bold', color: 'white', border: '1px solid #595757', backgroundColor: '#8a008a', marginTop: '5px', padding: '5px', borderRadius: '10px', marginLeft: '40px', marginBottom: '30px'}} onClick={handleClickSubmit}>Potrdi</button>
        </div>
    );
}

export default QuestionTemplate