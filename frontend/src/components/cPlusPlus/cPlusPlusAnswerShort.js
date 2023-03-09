import {
  Tr,
  Td

} from '@chakra-ui/react'
import { Input ,Button} from '@chakra-ui/react'


import { useEffect } from "react";
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
      <Input placeholder='Vpiši odgovor' size='md' style={{background: bgColor}} id={id} value={input} onInput={e => setInput(e.target.value)} disabled={disable} />
     <br></br>
      <Button  onClick={changeColor}> preveri</Button>
    </>
  );
}

export default CPlusPlusAnswer;