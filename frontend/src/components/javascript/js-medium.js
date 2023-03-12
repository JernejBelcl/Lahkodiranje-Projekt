import { useState, useEffect } from "react";
import JSQuestion from "./js-question";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

function JSMedium() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async function () {
      const res = await fetch("http://localhost:3001/question/JavaScript/Medium/Choice");
      const data = await res.json();
      setData(data);
    }
    getData();
  }, []);

  return (
    <TableContainer>
      <Table variant='simple' size="lg">
        <Thead>
          <Tr >
            <Th>Vprašanja</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((question, index) =>
            <JSQuestion key={index} question={question.content} answer={question.answer} index={index} />
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default JSMedium;