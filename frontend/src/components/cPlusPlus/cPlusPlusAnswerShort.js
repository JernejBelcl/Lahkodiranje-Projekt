import {
  Tr,
  Td

} from '@chakra-ui/react'
import { Input ,Button} from '@chakra-ui/react'


import { useEffect } from "react";
import { useId, useState } from 'react';



function CPlusPlusAnswer(props) {
  const id = useId();
 //set function for input
  const [input, setInput] = useState("");
  let yellow = '#FFFFFF';
   //set function for background color that changes when user asnwers a question
  const [bgColor, setBgColor] = useState(yellow);
//set function for disabling visual component when user answers a question
  const [disable, setDisable] = useState(false);
   //function that is called when a user has selected an answer
  const changeColor = () => {
    let green = '#00FF00';
    let red = '#FF0000';
   
    //check if selected component matches the correct answer (true - green background, false - red background)
    if(input==props.answer.content){
      setBgColor(green);
    }
    else{
      setBgColor(red);
      setInput(input+"   - Napaka, pravilni odgovor je: "+props.answer.content)
    }
      //disable selected component
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