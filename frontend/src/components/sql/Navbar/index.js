import React, {useState} from "react";
import {Nav, NavLink, Bars, NavMenu, NavBtnLink, NavBtn, NavExtended, NavBarLink, NavLogoLink} from "./NavbarEle";
import {UserContext} from "../../../userContext";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 768) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    }

    const onMouseLeave = () => {
        if (window.innerWidth < 768) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    }

    return (
        <>
            <Nav extendNavBar={click}>

                <Bars onClick={handleClick}/>
                <NavMenu extendNavBar={click}>

                                <>
                                    <NavLink to="/sql/Easy" activeStyle>
                                        Lahka stopnja
                                    </NavLink>

                                    <NavLink to="/sql/Medium" activeStyle>
                                        Srednja stopnja
                                    </NavLink>
                                    <NavLink to="/sql/Hard" activeStyle>
                                        Težka stopnja
                                    </NavLink>

                                </>

                </NavMenu>
                {/*<NavBtn>
                    <NavBtnLink to="/signin">Sign in</NavBtnLink>
                </NavBtn>*/}
                {click && (
                    <NavExtended>

                                    <>
                                        <NavBarLink to="/sql/Easy" onClick={handleClick} activeStyle>
                                            Lahka stopnja
                                        </NavBarLink>

                                        <NavBarLink to="/sql/Medium" onClick={handleClick} activeStyle>
                                            Srednja stopnja
                                        </NavBarLink>

                                        <NavBarLink to="/sql/Hard" onClick={handleClick} activeStyle>
                                            Težka stopnja
                                        </NavBarLink>

                                    </>

                    </NavExtended>)}
            </Nav>
        </>
    );
}

export default Navbar