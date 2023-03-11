import { Link } from "react-router-dom";
import Header from "../cssHeader";
import { useContext, useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

function CssEasyQuestions() {
    const [vprasanja, setVprasanja] = useState([]);
    const [odgovor, setOdgovor] = useState("");
    const [error, setError] = useState("");

    useEffect(function () {
        const getVprasanja = async function () {
            const res = await fetch("http://83.212.82.61:42957/question/q/css/easy", { credentials: 'include' });
            const data = await res.json();
            setVprasanja(data);
        }
        getVprasanja()
    }, []);


    return (
        <div>
        <Header title="CSS Course"></Header>
        <div className="container h-50 justify-content-center mt-5 text-color-secondary" style={{ width: "100%" }}>
        <div className="jumbotron my-auto">
        <h1 class="display-2">CSS-Enostavna Vprašanja</h1>
        </div>
        <br></br>

        <hr></hr>
        <div className="text-center mt-5">
        <Link to='/css/Easy'>
        <button type="button" class="btn btn-success btn-lg">Nazaj</button>&nbsp;&nbsp;
        </Link>
        <Link to='/css/EasyCourse'>
        <button type="button" class="btn btn-danger btn-lg">Tečaj</button>
        </Link>
        </div>
        <br></br>
        <hr></hr>
        <div className="jumbotron my-auto">
        <h1 class="display-4">Vprašanja:</h1>
        </div>



  
        </div>

        </div>        
    );

}
export default CssEasyQuestions;