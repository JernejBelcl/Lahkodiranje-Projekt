import { useId, useState } from 'react';
import { Checkbox } from '@chakra-ui/react';

function CPlusPlusAnswer(props) {
  
  const id = useId();
      //set function for input
  const [input, setInput] = useState("");
  let yellow = '#FFFFFF';
      //set function for background color that changes when user asnwers a question

  const [bgColor, setBgColor] = useState(yellow);
      //set function for disabling visual component when user answers a question

  const [disable, setDisable] = useState(false);

  return ( // Izpis vprašanj in odgovorov
      <>
      {/*Izpis vseh možnih odgovorov posameznega vprašanja*/}
          <Checkbox mt='4' style={{background: bgColor}} id={id} value={input}  disabled={disable}>
              {props.answer.content}
          </Checkbox>
      </>
  );
}

export default CPlusPlusAnswer;