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

    useEffect(function () {
        const getChoiceQuestions = async function () {
            const res = await fetch("http://localhost:3001/question/cPlusPlus/Medium/Choice", { credentials: "include" });
            const data = await res.json();
            setChoiceQuestion(data);
        }
        const getShortQuestions = async function () {
            const res = await fetch("http://localhost:3001/question/cPlusPlus/Medium/Short", { credentials: "include" });
            const data = await res.json();
            setShortQuestion(data);
        }
        getChoiceQuestions();
        getShortQuestions();
    }, []);


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