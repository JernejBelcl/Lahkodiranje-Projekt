import { Input, Button} from '@chakra-ui/react'
import { useId, useState } from 'react';

function CPlusPlusAnswer(props) {
  let white = '#FFFFFF';

  const id = useId();
  //set function for input
  const [input, setInput] = useState("");
  //set function for background color that changes when user asnwers a question
  const [bgColor, setBgColor] = useState(white);
  //set function for disabling visual component when user answers a question
  const [disable, setDisable] = useState(false);
  const [test, settest] = useState("");
  
   //function that is called when a user has selected an answer
  const changeColor = () => {
    let green = '#A4EA85';
    let red = '#FF5B5B';
   
      //check if selected component matches the correct answer (true - green background, false - red background)
    if(input==props.answer.content){
      setBgColor(green);
    }
    else{
      settest(input)
      setBgColor(red);
      settest("    Napaka! Pravilni odgovor je: " + props.answer.content)

    }
      //disable selected component
    setDisable(true);
   
  }
  return (  // Izpis vprašanj in odgovorov
    <>
    {/*Vnos odgovora*/}
      <Input placeholder='Vpišite odgovor' size='md' mt='4' style={{background: bgColor}} id={id} value={input} onInput={e => setInput(e.target.value)} disabled={disable} />
     <br></br>
     {/*Izpis pravilnega odgovora, če je bil podan napačen */}
     <span>{test}</span>
     <br></br>
     {/*Button za potrditev vnesenega odgovora */}
     <Button color="blue.400" size='md' onClick={changeColor}> Preveri</Button>
    </>
  );
}

export default CPlusPlusAnswer;