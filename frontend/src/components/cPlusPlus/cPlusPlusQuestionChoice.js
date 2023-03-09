import {
    Tr,
    Td

} from '@chakra-ui/react'
import { useState } from "react";
import { useEffect } from "react";
import Answer from './cPlusPlusAnswerChoice';
import { Checkbox, CheckboxGroup, Stack,Button,Input } from '@chakra-ui/react'

import { useId } from 'react';



function CPlusPlusQuestion(props) {
    const id = useId();



    const [checkboxValue, setCheckBoxChecked] = useState("");



   

   
    const [correctAnswer, setCorrectAnswer] = useState({});
    const [answer, setAnswer] = useState({});
    useEffect(function () {

        const getAnswer = async function () {
            const res = await fetch("http://localhost:3001/answer/cPlusPlus/" + props.choiceQuestion._id, { credentials: "include" });

            const data = await res.json();
            setAnswer(data);
        }
        const getCorrectAnswer = async function () {
            const res = await fetch("http://localhost:3001/answer/cPlusPlus/correct/" + props.choiceQuestion._id, { credentials: "include" });

            const data = await res.json();
            setCorrectAnswer(data);
        }
        getAnswer();
        getCorrectAnswer();
    }, []);

    
    const [input, setInput] = useState("");
    let yellow = '#FFFFFF';
    const [bgColor, setBgColor] = useState(yellow);
  
    const [disable, setDisable] = useState(false);
    const [test, settest] = useState("");
  

    const changeColor = (e) => {
        let green = '#00FF00';
        let red = '#FF0000';
        
    
        if(e==correctAnswer.content){
          setBgColor(green);
        }
        else{
          settest(e)
          setBgColor(red);
          settest("    Napaka pravilni odgovor je: "+correctAnswer.content)
        }
        
        setDisable(true);
      }

   

    if (answer.length > 0) {
      
     
        return (
            <>
                <Tr>

                    <Td>{props.choiceQuestion.content}</Td>
                   
                </Tr>
                
                <CheckboxGroup  >
                <Stack spacing={5} direction='row' style={{background: bgColor}}>
            
                    {answer.map(
                        answer => (<> <input type="checkbox" id={id}  disabled={disable} 
                            answer={answer} key={answer._id}   onInput={e => changeColor(answer.content)}
                           ></input><p>{answer.content}</p> </>),
                    )}
                      </Stack>
                </CheckboxGroup>
                <span>{test}</span>
                   
            </>
        );
    }
    else {
        return (
            <>
                <Tr>
                    <Td>{props.choiceQuestion.content}</Td>
                </Tr>

            </>
        );
    }
}

export default CPlusPlusQuestion;