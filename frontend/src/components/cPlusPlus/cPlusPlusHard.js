import { useState } from "react";
import { useEffect } from "react";
import QuestionShort from './cPlusPlusQuestionShort';
import QuestionChoice from './cPlusPlusQuestionChoice';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'




function Questions() {
    const [choiceQuestion, setChoiceQuestion] = useState({});
    const [shortQuestion, setShortQuestion] = useState({});
// react hook to get all c++ questions from database for difficulty hard and types choice/short
    useEffect(function () {
        const getChoiceQuestions = async function () {
            const res = await fetch("http://localhost:3001/question/cPlusPlus/Hard/Choice", { credentials: "include" });
               //wait for json data
            const data = await res.json();
             //set variable to value of data
            setChoiceQuestion(data);
        }
        const getShortQuestions = async function () {
            const res = await fetch("http://localhost:3001/question/cPlusPlus/Hard/Short", { credentials: "include" });
               //wait for json data
            const data = await res.json();
             //set variable to value of data
            setShortQuestion(data);
        }
          //call for both functions
        getChoiceQuestions();
        getShortQuestions();
    }, []);

//check if both hook functions returned data
    if (choiceQuestion.length > 0 && shortQuestion.length > 0) {
        return (
            <>

                <TableContainer>

                    <Table variant='simple' size="lg">
                        <TableCaption>Vsi uporabniki z dostopi</TableCaption>
                        <Thead>
                            <Tr >
                                <Th>Vprašanja</Th>

                            </Tr>
                        </Thead>
                        <Tbody>


                            {choiceQuestion.map(
                                choiceQuestion => (<QuestionChoice choiceQuestion={choiceQuestion} key={choiceQuestion._id} ></QuestionChoice>),
                            )}


                            {shortQuestion.map(
                                shortQuestion => (<QuestionShort shortQuestion={shortQuestion} key={shortQuestion._id} ></QuestionShort>),
                            )}

                        </Tbody>

                    </Table>
                </TableContainer></>

        )
    }



}

export default Questions;