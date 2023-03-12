import { Link } from "react-router-dom";
import { Stack, Heading, Box, Text, Container, Button} from '@chakra-ui/react';

function htmlHeader(props) {

    return (	
			<nav id="sidebar" class="active">
        <ul class="list-unstyled components mb-5">
          <li class="active">
            <a href="/Html/Easy">
            <i class='fa fa-thermometer-empty green-color fa-lg'></i>
            &nbsp;&nbsp;
            <Button
                  w={'180px'}
                  colorScheme={'blue'}
                  bg={'blue.400'}
                  rounded={'full'}
                  px={6}
                  _hover={{
                    bg: 'blue.600',
                  }}>
                    <Link to={`/Html/Easy`}>Osnovni nivo {'👶🏽'}</Link> <br></br>
                </Button></a>
          </li> <br></br>
          <li>
              <a href="/Html/Normal">
              <i class='fa fa-thermometer-half orange-color fa-lg'></i>
              &nbsp;&nbsp; 
              <Button
                  w={'180px'}
                  colorScheme={'blue'}
                  bg={'blue.400'}
                  rounded={'full'}
                  px={6}
                  _hover={{
                    bg: 'blue.600',
                  }}>
                    <Link to={`/Html/Normal`}>Srednji nivo {'👨🏽‍🎓'}</Link> <br></br>
                </Button>
              </a>
          </li><br></br>
          <li>
            <a href="/Html/Hard">
            <i class='fa fa-thermometer-full red-color fa-lg'></i>
            &nbsp;&nbsp; 
            <Button
                  w={'180px'}
                  colorScheme={'blue'}
                  bg={'blue.400'}
                  rounded={'full'}
                  px={6}
                  _hover={{
                    bg: 'blue.600',
                  }}>
                    <Link to={`/Html/Hard`}>Zahtevnejši nivo {'👩🏽‍💻'}</Link>
                </Button>
            </a>
          </li>
        </ul>
    	</nav>
    );
}

export default htmlHeader;