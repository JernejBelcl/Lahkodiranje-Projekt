import {
    Tr,
    Td

} from '@chakra-ui/react'
import { Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react'
import { useId, useState } from 'react';

function CPlusPlusAnswer(props) {
    
    const id = useId();
    const [input, setInput] = useState("");
    let yellow = '#FFFFFF';
    const [bgColor, setBgColor] = useState(yellow);
  
    const [disable, setDisable] = useState(false);
    
    const changeColor = () => {
      let green = '#00FF00';
      let red = '#FF0000';
      setDisable(true);
     // setInput(input);
      if(input==props.answer.content){
        setBgColor(green);
      }
      else{
        setBgColor(red);
        setInput(input+"   - Napaka, pravilni odgovor je: "+props.answer.content)
      }
      setDisable(true);
     
    }

    return (
        <>

            <Checkbox style={{background: bgColor}} id={id} value={input} onChange={changeColor} disabled={disable}>
                {props.answer.content}
            </Checkbox>

        </>
    );
}

export default CPlusPlusAnswer;