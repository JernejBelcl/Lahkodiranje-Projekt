import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { Stack, Heading, Box, Text, Container, Button} from '@chakra-ui/react';

function CSharpHome() {
    return (
        <>
            <div>
                <Helmet>
                    <title>C# kviz</title>
                </Helmet>
            </div>
            <Container maxW={'3xl'} marginLeft={445}  >
                <Stack
                    as={Box}
                    textAlign={'center'}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 20, md: 10 }}>
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                        lineHeight={'110%'}>
                        Kviz za {' '}
                        <Text as="span">
                            <Text as="span" color="#8a008a">
                                C#
                            </Text>{' '}
                            programiranje
                        </Text>
                    </Heading>

                    <Text color={'gray.600'} textAlign={'left'} fontWeight={600} fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}>
                        C sharp ali C sharf?
                    </Text>

                    <Text color={'gray.600'} textAlign={'left'}>
                        C# je objektno usmerjen jezik, kar pomeni, da uporablja razrede in objekte za modeliranje in manipulacijo podatkov.
                        Podpira tudi druge paradigme programiranja, kot so funkcionalno programiranje, generično programiranje in imperativno programiranje.
                        C# je statično tipiziran, kar pomeni, da se vrste spremenljivk določijo ob času prevajanja.
                        <br/>
                        <br/>
                        Je sodoben, večparadigmski programski jezik, ki ga je razvil Microsoft kot del svoje platforme .NET.
                        Prvič je bil izdan leta 2002 in od takrat postal eden najbolj priljubljenih programskih jezikov na svetu,
                        ki se uporablja za razvoj različnih aplikacij za namizne, spletni, mobilne in igralne platforme.
                    </Text>

                    <Text color={'gray.600'} textAlign={'left'} fontWeight={600} fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}>
                        Prikaz kode
                    </Text>

                    <Text color={'gray.900'} textAlign={'left'}>
                        Program:
                        <br></br><br></br>

                        <pre><code>{"internal class Program"}</code><br></br>
                        <code>{"{"}</code><br></br>
                        <code>{"    static void Main(string[] args)"}</code><br></br>
                        <code>{"    {"}</code><br></br>
                        <code>{`        int number = 5;`}</code><br></br>
                        <code>{`        string message = "Hello world";`}</code><br></br>
                        <code>{`        int result;`}</code><br></br>
                            <br></br>
                        <code>{`        result = number * number;`}</code><br></br>
                            <br></br>
                        <code>{`        Console.WriteLine(message);`}</code><br></br>
                        <code>{`        Console.WriteLine("The result is " + result + ".");`}</code><br></br>
                        <code>{`    }`}</code><br></br>
                        <code>{`}`}</code><br></br></pre>

                        <br></br>
                        Izpis v terminal:
                        <br></br><br></br>

                        <pre><code>{"Hello world"}</code><br></br>
                        <code>{"The result is 25."}</code><br></br>
                        </pre>
                    </Text>



                    <Text color={'gray.600'} textAlign={'left'} fontWeight={600} fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}>
                        Ste za izziv?
                    </Text>

                    <Text color={'gray.600'} textAlign={'left'}>
                        Pred vami je kviz za C# programiranje. Izberite stopnjo težavnosti in pokažite svoje dosedanje znanje ter se naučite nekaj novega!
                    </Text>
                    <Stack
                        direction={'row'}
                        spacing={3}
                        align={'center'}
                        alignSelf={'center'}
                        position={'relative'}>
                        {/* Povezava na osnovni nivo */}
                        <Button
                            w={'180px'}
                            colorScheme={'magenta'}
                            bg={'#8a008a'}
                            rounded={'full'}
                            px={6}>
                            <Link to={`/cSharp/Easy`}>Začetniški nivo</Link> <br></br>
                        </Button>
                        {/* Povezava na srednji nivo */}
                        <Button
                            w={'180px'}
                            colorScheme={'magenta'}
                            bg={'#8a008a'}
                            rounded={'full'}
                            px={6}>
                            <Link to={`/cSharp/Medium`}>Srednji nivo</Link> <br></br>
                        </Button>

                        {/* Povezava na zahtevnejši nivo */}
                        <Button
                            w={'180px'}
                            colorScheme={'magenta'}
                            bg={'#8a008a'}
                            rounded={'full'}
                            px={6}>
                            <Link to={`/cSharp/Hard`}>Zahtevnejši nivo</Link> <br></br>
                        </Button>
                    </Stack>
                </Stack>
            </Container>
        </>
    );
}
export default CSharpHome;