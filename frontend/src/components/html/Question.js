import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./htmlHeader";

const Content = ({vprasanje, odgovor, index}) => {

    const [Odgovor, setOdgovor] = useState('Vnesi odgovor');
    const [isCorrect, setIsCorrect] =  useState(false);
    const handleClickSubmit = () => {
        if(odgovor === Odgovor) alert('correct')
        else alert('wrong')
       
    }

    return (

        <div style={{display: 'flex', flexFlow: 'column', width: '100%', backgroundColor: isCorrect ? 'green' : 'white'}}>
            <h1>Vprašanje {index}: {vprasanje} </h1>
            <div style={{display: 'flex', flexFlow: 'row'}}>
                <input type='text' placeholder={Odgovor}  onChange={(e) => {setOdgovor(e.target.value)}}/>
                <button onClick={handleClickSubmit}>Submit</button>
            </div>
        </div>

    );
}
export default Content