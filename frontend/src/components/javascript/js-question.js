import { useState, useEffect } from "react";
import { Tr, Td } from '@chakra-ui/react'
import { Input, Button } from '@chakra-ui/react'

const JSQuestion = ({ question, answer, index }) => {
    const green = '#00FF00';
    const red = '#FF0000';

    const [input, setInput] = useState("");
    const [backgroundColor, setBackgroundColor] = useState('white');
    const [disable, setDisable] = useState(false);

    const handleButtonClick = () => {
        if (input === answer) {
            setBackgroundColor(green);
        } else {
            setBackgroundColor(red);
            setInput(input + "   - Napaka, pravilni odgovor je: " + answer);
        }
        setDisable(true);
    }
    return (
        <>
            <Tr>
                <Td p={1} fontWeight="bold">{question}</Td>
            </Tr>
            <Input placeholder='Vpiši odgovor' size='md' style={{ backgroundColor: backgroundColor }} value={input} onInput={e => setInput(e.target.value)} disabled={disable} />
            <br></br>
            <Button mt={1} onClick={handleButtonClick} disabled={disable}>Preveri</Button>
        </>
    );
}
export default JSQuestion;