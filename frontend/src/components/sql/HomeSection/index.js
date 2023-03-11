import React, {useState} from 'react'
import {
    HomeContainer,
    HomeBG,
    VideoBG,
    HomeContent,
    HomeH1,
    HomeP,
    HomeBtnWrapper,
    HomeH1Blue,
    ArrowForward,
    Arrowright
} from './HomeEle'
import {Button} from '../ButtonEle'
import {UserContext} from "../../../userContext";
import Navbar from "../Navbar";
import { Helmet } from 'react-helmet';

const HomeSection = () => {
    const [hover, setHover] = useState(false)
    const [hover1, setHover1] = useState(false)
    const [hover2, setHover2] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    const onHover1 = () => {
        setHover1(!hover1)
    }
    const onHover2 = () => {
        setHover2(!hover2)
    }
    return (

        <HomeContainer>
            <Helmet>
                <title>SQL kviz</title>
            </Helmet>
            <HomeContent>
                <HomeH1>Pozdravljeni v kvizu za <br/> <HomeH1Blue>SQL</HomeH1Blue> programiranje!</HomeH1>

                <HomeP>
                    Ste pripravljeni na izziv? Izberite stopnjo težavnosti in pokažite svoje dosedanje znanje ter se naučite nekaj novega!
                </HomeP>

                <HomeBtnWrapper>

                                <>
                                    <Button to="/sql/Easy" onMouseEnter={onHover} onMouseLeave={onHover} primary="true"
                                            dark="true">
                                       Osnovni nivo {hover ? <ArrowForward/> : <Arrowright/>}
                                    </Button>

                                    <Button to="/sql/Medium" onMouseEnter={onHover1} onMouseLeave={onHover1} primary="true"
                                            dark="true">
                                        Srednja nivo {hover1 ? <ArrowForward/> : <Arrowright/>}
                                    </Button>

                                    <Button to="/sql/Hard" onMouseEnter={onHover2} onMouseLeave={onHover2} primary="true"
                                            dark="true">
                                        Zahtevnejši nivo {hover2 ? <ArrowForward/> : <Arrowright/>}
                                    </Button>
                                </>


                </HomeBtnWrapper>
            </HomeContent>
        </HomeContainer>
    )
}

export default HomeSection