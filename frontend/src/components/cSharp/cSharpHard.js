import { useState, useEffect } from "react";
import QuestionTemplate from "./questionTemplate";

function CSharpHard() {
    const [data, setData] = useState([]);
    const [answer, setAnswer] = useState();
    useEffect(() => {
        const getData = async function () {
            const res = await fetch("http://localhost:3001/question/q/sql/hard"); // todo: change sql to c#
            const data = await res.json();
            setData(data);
        }
        getData();
    }, []);

    return (
        data.map((question, index) =>
            <QuestionTemplate key={index} question={question.content} answer={question.answer} index={index} />
        )
    );
}

export default CSharpHard;
