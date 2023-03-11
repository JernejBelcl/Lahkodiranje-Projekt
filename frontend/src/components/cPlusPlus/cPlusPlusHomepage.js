import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { Stack, Heading, Box, Text, Container, Button} from '@chakra-ui/react';

function Home() {
    return (
        <>
        <div>
            <Helmet>
                <title>C++ kviz</title>
                </Helmet>
                </div>
          <Container maxW={'3xl'} marginLeft={445} >
            <Stack
              as={Box}
              textAlign={'center'}
              spacing={{ base: 8, md: 10 }}
              py={{ base: 20, md: 10 }}>
              <Heading
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                lineHeight={'110%'}>
                Pozdravljeni v kvizu za <br />
                <Text as="span">
                    <Text as="span" color="blue.400">
                        C++
                        </Text>{' '}
                        programiranje!
                    </Text>
              </Heading>
              <Text color={'gray.500'}>
              Ste pripravljeni na izziv?
              Izberite stopnjo težavnosti in pokažite svoje dosedanje znanje ter se naučite nekaj novega!
              </Text>
              <Stack
                direction={'column'}
                spacing={3}
                align={'center'}
                alignSelf={'center'}
                position={'relative'}>
        {/* Povezava na osnovni nivo */}
                <Button
                  w={'180px'}
                  colorScheme={'blue'}
                  bg={'blue.400'}
                  rounded={'full'}
                  px={6}
                  _hover={{
                    bg: 'blue.600',
                  }}>
                    <Link to={`/cPlusPlus/Easy`}>Osnovni nivo {'👶🏽'}</Link> <br></br>
                </Button>
        {/* Povezava na srednji nivo */}
                <Button
                  w={'180px'}
                  colorScheme={'blue'}
                  bg={'blue.400'}
                  rounded={'full'}
                  px={6}
                  _hover={{
                    bg: 'blue.600',
                  }}>
                    <Link to={`/cPlusPlus/Medium`}>Srednji nivo {'👨🏽‍🎓'}</Link> <br></br>
                </Button>
    
        {/* Povezava na zahtevnejši nivo */}
                <Button
                  w={'180px'}
                  colorScheme={'blue'}
                  bg={'blue.400'}
                  rounded={'full'}
                  px={6}
                  _hover={{
                    bg: 'blue.600',
                  }}>
                    <Link to={`/cPlusPlus/Hard`}>Zahtevnejši nivo {'👩🏽‍💻'}</Link> <br></br>
                </Button>
              </Stack>
            </Stack>
          </Container>
        </>
    );
}
export default Home;