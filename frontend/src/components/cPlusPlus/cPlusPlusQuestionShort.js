import {
    Tr,
    Td

} from '@chakra-ui/react'
import { useState } from "react";
import { useEffect } from "react";
import Answer from './cPlusPlusAnswerShort';
import { Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
function CPlusPlusQuestion(props) {


    const [answer, setAnswer] = useState({});
    useEffect(function () {

        const getAnswer = async function () {
            const res = await fetch("http://localhost:3001/answer/cPlusPlus/" + props.shortQuestion._id, { credentials: "include" });

            const data = await res.json();
            setAnswer(data);
        }

        getAnswer();
    }, []);

    if (answer.length > 0) {

        return (
            <>
                <Tr>

                    <Td>{props.shortQuestion.content}</Td>

                </Tr>

                {answer.map(
                    answer => (<Answer answer={answer} key={answer._id} ></Answer>),
                )}

            </>
        );
    }
    else {
        return (
            <>
                <Tr>
                    <Td>{props.shortQuestion.content}</Td>
                </Tr>

            </>
        );
    }
}

export default CPlusPlusQuestion;