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

function JSHard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async function () {
      const res = await fetch("http://snf-60107.vm.okeanos-global.grnet.gr:3001/question/JavaScript/Hard/Choice");
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

export default JSHard;