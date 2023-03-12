import Answer from './cPlusPlusAnswerShort';
import { useState } from "react";
import { useEffect } from "react";
import { Box, Heading, Flex} from '@chakra-ui/react'


function CPlusPlusQuestion(props) {

    const [correctAnswer, setCorrectAnswer] = useState({});
    const [answer, setAnswer] = useState({});
    //react hook function to get all c++ answers for specific question
    useEffect(function () {

        const getAnswer = async function () {
            const res = await fetch("http://snf-60107.vm.okeanos-global.grnet.gr:3001/answer/cPlusPlus/" + props.shortQuestion._id, { credentials: "include" });

            const data = await res.json();
            setAnswer(data);
        }
        const getCorrectAnswer = async function () {
            const res = await fetch("http://snf-60107.vm.okeanos-global.grnet.gr:3001/answer/cPlusPlus/correct/" + props.shortQuestion._id, { credentials: "include" });
            // wait for json data
            const data = await res.json();
            // set variable to json data
            setCorrectAnswer(data);
        }

        getAnswer();
        getCorrectAnswer();
    }, []);

    //check if hook returned data
    if (answer.length > 0) {  // Izpis vprašanj tipa short answer in vnosnega polja
        return (
            <>
            <Flex justifyContent="center" alignItems="center" >

                <Box my='4' p='6' borderRadius='md' borderWidth='1px'  boxShadow="15px 12px 30px #007CC7" width="45%" position={"center"}>
                    {/*Naslov vprašanja */}
                    <Heading size="sm">{props.shortQuestion.content}</Heading>
                    {/*Povezava na vnosno polje iz cPlusPlusAnswerShort*/}
                    {answer.map(
                        answer => (<Answer answer={answer} key={answer._id} ></Answer>),
                    )}
                </Box>
                </Flex>
            </>
        );
    }
    else {
        return (
            <>
                <Heading>{props.shortQuestion.content}</Heading>
            </>
        );
    }
}

export default CPlusPlusQuestion;