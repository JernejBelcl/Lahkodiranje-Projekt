import { useState, useEffect } from "react";
import {
    Tr,
    Td

} from '@chakra-ui/react'
import { Input ,Button} from '@chakra-ui/react'
const Question = ({question, answer, index}) => {
const green = '#00FF00';
const red = '#FF0000';

//set function for input
const [input, setInput] = useState("");
const [backgroundColor, setBackgroundColor] = useState('white');
const [disable, setDisable] = useState(false);
const handleButtonClick = () => {

    //check if answer is correct
    if(input === answer) setBackgroundColor(green)
    else{
        setBackgroundColor(red);
        setInput(input+"   - Napaka, pravilni odgovor je: "+answer)
      }

    setDisable(true)
}
    return (
        <>
        <Tr>

            <Td>{question}</Td>

        </Tr>

      <Input placeholder='Vpiši odgovor' size='md' style={{ backgroundColor: backgroundColor}}  value={input} onInput={e => setInput(e.target.value)} disabled={disable} />

     <br></br>
      <Button  onClick={handleButtonClick} disabled={disable}> preveri</Button>

    </>
      
    );
}
export default Question