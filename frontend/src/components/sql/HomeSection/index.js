import React, {useState} from 'react'
import {
    HomeContainer,
    HomeBG,
    VideoBG,
    HomeContent,
    HomeH1,
    HomeP,
    HomeBtnWrapper,
    ArrowForward,
    Arrowright
} from './HomeEle'
import {Button} from '../ButtonEle'
import {UserContext} from "../../../userContext";
import Navbar from "../Navbar";

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

            <HomeContent>
                <HomeH1>SQL VAJE </HomeH1>
                <HomeP>
                    Začni z vprašanji.
                </HomeP>

                <HomeBtnWrapper>

                                <>
                                    <Button to="/sql/Easy" onMouseEnter={onHover} onMouseLeave={onHover} primary="true"
                                            dark="true">
                                       Lahka vprašanja {hover ? <ArrowForward/> : <Arrowright/>}
                                    </Button>

                                    <Button to="/sql/Medium" onMouseEnter={onHover1} onMouseLeave={onHover1} primary="true"
                                            dark="true">
                                        Srednja vprašanja {hover1 ? <ArrowForward/> : <Arrowright/>}
                                    </Button>

                                    <Button to="/sql/Hard" onMouseEnter={onHover2} onMouseLeave={onHover2} primary="true"
                                            dark="true">
                                        Težka vprašanja {hover2 ? <ArrowForward/> : <Arrowright/>}
                                    </Button>
                                </>


                </HomeBtnWrapper>
            </HomeContent>
        </HomeContainer>
    )
}

export default HomeSection