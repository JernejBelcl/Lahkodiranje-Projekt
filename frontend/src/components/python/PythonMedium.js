import { useState, useEffect } from "react";
import Question from "./Question";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
const PythonMedium = () => {
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


        <TableContainer>

        <Table variant='simple' size="lg">
            <TableCaption>Loading</TableCaption>
            <Thead>
                <Tr >
                    <Th>Vprašanja</Th>

                </Tr>
            </Thead>
            <Tbody>
            {data.map((question, index) =>
        <Question key={index} question={question.content} answer={question.answer} index={index} />
        )}

            </Tbody>

        </Table>
    </TableContainer>
    );
}
export default PythonMedium