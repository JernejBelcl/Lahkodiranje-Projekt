import { useState, useEffect } from "react";
import Question from "./Question";

const PythonEasy = () => {
    const [data, setData] = useState([]);
    const [answer, setAnswer] = useState();
    useEffect(() => {
     const getData = async function () {
            const res = await fetch("http://localhost:3001/question/"); // todo: change api call
            const data = await res.json();
            setData(data);
        } 
        getData();   
    }, []);
    return (
        data.map((question, index) =>
        <Question key={index} question={question.content} answer={question.answer} index={index} />
      ) 
    );
}
export default PythonEasy