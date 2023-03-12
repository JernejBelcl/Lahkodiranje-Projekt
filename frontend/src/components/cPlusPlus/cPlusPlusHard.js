import QuestionShort from './cPlusPlusQuestionShort';
import QuestionChoice from './cPlusPlusQuestionChoice';
import { useState } from "react";
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import { Box, Container, Stack, Text, Heading } from '@chakra-ui/react'

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
            {/*Naslov ki se izpiše v zavihku*/}
            <Helmet>
                <title> Zahtevnejši nivo </title>
            </Helmet>
            {/*Heading za zahtevnejši nivo */}
            <Container maxW={'7xl'} py={5} as={Stack} spacing={12}>
                    <Stack spacing={0} align={'center'}>
                        <Heading color="#007CC7">C++ zahtevnejši nivo</Heading>
                        <Text>Preizkusite svoje znanje C++</Text>
                    </Stack>
                    </Container>
            {/*Povezan izpis vprašanj in danih odgovorov tipa multiple choice*/}
            <Box
                key={choiceQuestion._id}
                p={4}
                mb={4}
                borderRadius="lg"
                boxShadow="md"
                bg="white"
            >
                    {choiceQuestion.map(
                        choiceQuestion => (<QuestionChoice choiceQuestion={choiceQuestion} key={choiceQuestion._id} ></QuestionChoice>),
                    )}
            </Box>

            {/*Povezan izpis vprašanj tipa kratki odgovor*/}
            {shortQuestion?.map(
                shortQuestion => (<QuestionShort shortQuestion={shortQuestion} key={shortQuestion._id} ></QuestionShort>),
            )}
        </>
        )
    }
}

export default Questions;