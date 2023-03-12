import { useState } from "react";
import { useEffect } from "react";
import { useId } from 'react';
import { Flex, CheckboxGroup, Stack, Heading, Box } from '@chakra-ui/react'

function CPlusPlusQuestion(props) {
    const id = useId();

    const [correctAnswer, setCorrectAnswer] = useState({});
    const [answer, setAnswer] = useState({});

    // react hook to get all c++ answers for specific question id
    useEffect(function () { // uporaba useEffect hook-a, ki lovi pravilne in označene odgovore

        const getAnswer = async function () {
            const res = await fetch("http://snf-60107.vm.okeanos-global.grnet.gr:3001/answer/cPlusPlus/" + props.choiceQuestion._id, { credentials: "include" });
            //wait for json data
            const data = await res.json();
             //set variable to value of data
            setAnswer(data);
        }
        const getCorrectAnswer = async function () {
            const res = await fetch("http://snf-60107.vm.okeanos-global.grnet.gr:3001/answer/cPlusPlus/correct/" + props.choiceQuestion._id, { credentials: "include" });
            //wait for json data
            const data = await res.json();
            //set variable to value of data
            setCorrectAnswer(data);
        }
        getAnswer();
        getCorrectAnswer();
    }, []);


    let white = '#FFFFFF';
    const [bgColor, setBgColor] = useState(white);

    const [disable, setDisable] = useState(false); // Nastavimo checkobxe na disabled po že vnesenem odgovoru
    const [test, settest] = useState(""); // Izpis pravilnega odgovora

    //function that is called when visual component checkbox is clicked
    const changeColor = (e) => {
        let green = '#BFEBA0';
        let red = '#FB6C6C';
        //check if value of clicked checkbox is correct (true - green background, false - red background)
        if (e == correctAnswer.content) {
            setBgColor(green);
        }
        else {
            settest(e)
            setBgColor(red);
            settest("    Napaka! Pravilni odgovor je: " + correctAnswer.content)
        }
        //disable checkbox
        setDisable(true);
    }

    //check if hook returned data
    if (answer.length > 0) { // Izpis vprašanj in odgovorov tipa multiple choice, če je bil odgovor označen
        return (
            <>            
            <Flex justifyContent="center" alignItems="center" rounded={'xl'}>
                <Box my='4' p='4' borderRadius='md' borderWidth='1px' boxShadow="15px 12px 30px #007CC7" width="45%" position={"center"}
                >
                    {/*Naslov vprašanja */}
                    <Heading size='sm'>{props.choiceQuestion.content}</Heading>
                    <CheckboxGroup>
                        {/*Povezava za izpis možnih odgovorov iz cPlusPlusAnswerChoice*/}
                        <Stack spacing={5} direction='row' style={{ background: bgColor }}> 
                        {answer.map( 
                            answer => (
                            <>
                             <input
                              type="checkbox" 
                              id={id} 
                              disabled={disable} 
                              answer={answer} 
                              key={answer._id} 
                              onInput={e => changeColor(answer.content)} 
                              ></input>
                              <p>{answer.content}</p> 
                              </>
                              ), 
                              )} 
                              </Stack>
                    </CheckboxGroup>
                    {/*Izpis pravilnega odgovora, če je bil podan napačen */}
                    <span>{test}</span>
                </Box>
                </Flex>
            </>
        );
    }
    else {
        return (
            <>
                <Heading>{props.choiceQuestion.content}</Heading>
            </>
        );
    }
}

export default CPlusPlusQuestion;