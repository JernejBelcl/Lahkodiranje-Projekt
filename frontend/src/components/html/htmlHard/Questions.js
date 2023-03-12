import { Link } from "react-router-dom";
import Header from "../htmlHeader";
import { useContext, useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Question from "./Question";

const Questions = () => {
    const [vprasanja, setVprasanja] = useState([]);
    const [odgovor, setOdgovor] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        const getVprasanja = async function () {
            const res = await fetch("http://snf-60107.vm.okeanos-global.grnet.gr:3001/question/html/hard");
            const data = await res.json();
            setVprasanja(data);
        }
        getVprasanja()
    }, []);

    return (
        vprasanja.map((vprasanje, index) =>
        <Question key={index} vprasanje={vprasanje.content} odgovor={vprasanje.answer} index={index} />
      )             
    );

}
export default Questions;