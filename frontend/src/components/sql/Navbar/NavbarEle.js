import styled from "styled-components"
import {NavLink as Link} from "react-router-dom";
import {FaBars} from "react-icons/fa";

export const Nav = styled.nav`
    background: #fff;
    height: ${(props) => (props.extendNavBar ? "100vh" : "80px")};
    display: flex;
    
    justify-content: center;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
    position: sticky;
    
    @media screen and (min-width: 768px) {
        height: 80px;
    }
`

export const NavLink =  styled(Link)`
    color: #15cdfc;
    align-items: center;
    text-decoration: none;
    height: 100%;
    display: flex;
    padding: 0 1rem;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    
    &.active {
        color: #00008B;
        border-bottom: 3px solid #00008B;
    }
    &:hover {
        color: #00008B;
        transition: 0.2s ease-in-out;
    }
`

export const Bars =  styled(FaBars)`
    color: #fff;
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #000000;
    }
`
export const NavMenu = styled.div`

    display: flex;
    
    align-items: center;
    /*margin-left: -24px;*/
    
    /*2nd nav*/
    margin-right: 24px;
    
    @media screen and (max-width: 768px) {
        display: none;
    }

`

export const NavBtn = styled.div`

    display: flex;
    align-items: center;
    margin-left: 24px;
    
    @media screen and (max-width: 768px) {
        display: none;
    }

`

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #256ce1;
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    align-items: center;
    justify-content: center;
    display: flex;
    cursor: pointer
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }

`


export const NavExtended = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    transition: 0.3s ease-in-out;
    @media  (min-width: 768px) {
        display: none;
    }

`
export const NavBarLink =  styled(Link)`
    color: #15cdfc;
    align-items: center;
    text-decoration: none;
    margin: 20px;
    display: flex;
    padding: 0 1rem;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    
    &.active {
        color: #00008B;
        
    }
    &:hover {
        color: #00008B;
        transition: 0.2s ease-in-out;
    }
`
/*00ff00, fff , 15cdfc*/
export const NavLogoLink =  styled(Link)`
    color: #fff;
    align-items: center;
    
    text-decoration: none;
    margin: 20px;
    display: ${(props) => (props.extendNavBar ? "none" : "flex")};
    transition: 0.2s ease-in-out;

    padding: 0 1rem;
    cursor: pointer;
    
    @media screen and (min-width: 768px) {
        display: flex;
    }
    &.active {
    
        color: #00ff00;
    }
    &:hover {
        color: #15cdfc;
        transition: 0.2s ease-in-out;
    }
`
