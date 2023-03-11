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
   
    const [correctAnswer, setCorrectAnswer] = useState({});
    const [answer, setAnswer] = useState({});
    // react hook to get all c++ answers for specific question id
    useEffect(function () {

        const getAnswer = async function () {
            const res = await fetch("http://localhost:3001/answer/cPlusPlus/" + props.choiceQuestion._id, { credentials: "include" });
   //wait for json data
            const data = await res.json();
              //set variable to value of data
            setAnswer(data);
        }
        const getCorrectAnswer = async function () {
            const res = await fetch("http://localhost:3001/answer/cPlusPlus/correct/" + props.choiceQuestion._id, { credentials: "include" });
   //wait for json data
            const data = await res.json();
              //set variable to value of data
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
  
//function that is called when visual component checkbox is clicked
    const changeColor = (e) => {
        let green = '#00FF00';
        let red = '#FF0000';
        
    //check if value of clicked checkbox is correct (true - green background, false - red background)
        if(e==correctAnswer.content){
          setBgColor(green);
        }
        else{
          settest(e)
          setBgColor(red);
          settest("    Napaka pravilni odgovor je: "+correctAnswer.content)
        }
        //disable checkbox
        setDisable(true);
      }

   
//check if hook returned data
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