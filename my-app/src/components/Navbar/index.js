import React from 'react';
import { FaBars} from 'react-icons/fa';
import {Nav,NavbarContainer,NavLogo,MobileIcon,NavLink,NavMenu,NavItem} from './NavbarElements';

const Navbar = ({ toggle }) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    <h1>XOXO</h1>
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLink to="/about" activeStyle>About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/portfolio" activeStyle>Portfolio</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/contact" activeStyle>Contact</NavLink>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar
