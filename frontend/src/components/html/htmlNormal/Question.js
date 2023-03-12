import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../htmlHeader";

const Content = ({vprasanje, odgovor, index}) => {

    const [Odgovor, setOdgovor] = useState('Vnesi odgovor');
    const [isCorrect, setIsCorrect] =  useState(false);
    const handleClickSubmit = () => {
        if(odgovor === Odgovor) alert('PRAVILNO!')
        else alert('NAPAČNO!')
       
    }

    return (

        <div style={{display: 'flex', flexFlow: 'column', width: '100%', backgroundColor: isCorrect ? 'green' : 'white'}}>
            <h1><b>Vprašanje {index+1}:</b> {vprasanje} </h1>
            <br></br>
            <div style={{display: 'flex', flexFlow: 'row'}}>
                <label><b>Odgovor:</b></label>&nbsp;&nbsp;
                <input type='text' placeholder={Odgovor}  onChange={(e) => {setOdgovor(e.target.value)}}/>&nbsp;&nbsp;
                <button class="btn btn-success" onClick={handleClickSubmit}>Pošlji</button>    
            </div>
            
            <br></br>
            <hr></hr>
        </div>
        

    );
}
export default Content