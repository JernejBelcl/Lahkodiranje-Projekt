import styled from "styled-components";
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'


export const HomeContainer = styled.div`
    background: #fff ;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0px;
    height: 100%;
    width: 100%;
    position: relative;
    max-width: 3xl;
    margin-left: 445px;
    z-index: 1;

    
`
/*:before{
        content: '';
        position: absolute;
        top: 0;
        right:0;
        bottom: 0;
        left: 0;
        background: linear-gradient(
            180deg,
            rgba(0,0,0,0.2) 0%,
            rgba(0,0,0,0.6) 100%
         ),
         linear-gradient(180deg,rgba(0,0,0,0.2) 0%,transparent 100%);
         z-index: 2;
    }*/
export const HomeBG = styled.div`
    position: absolute;
    top: 0;
    right:0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBG = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const HomeContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HomeH1 = styled.h1`
    color: #000000;
    font-size: 60px;
    text-align: center;
    font-weight: 600;
    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
    
`
export const HomeH1Blue = styled.span`
    color: #4299E1;
    font-size: 60px;
    text-align: center;
    font-weight: 600;
    
    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
    
`

export const HomeP = styled.p`
    margin-top: 34px;
    color: #718096;
    font-size: 2xl;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 4xl;
    }

    @media screen and (max-width: 480px){
        font-size: 6xl;
    }
`

export const HomeBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const Arrowright = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`