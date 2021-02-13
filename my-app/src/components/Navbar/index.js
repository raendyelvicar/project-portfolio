import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {Nav,NavbarContainer,NavLogo,MobileIcon,NavLink,NavMenu,NavItem} from './NavbarElements';
import Hero from '../../pages/HeroSection'

const Navbar = ({ toggle }) => {
     return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="hero" spy={true} smooth={true} activeStyle>
                   <h1>XOXO</h1>
                </NavLogo>
                <MobileIcon onClick={toggle}>
                   {toggle ?
                    <FaBars /> : <FaTimes />
                   }
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLink to="about" spy={true} smooth={true} activeStyle>About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="portfolio" spy={true} smooth={true} activeStyle>Portfolio</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="contact" spy={true} smooth={true} activeStyle>Contact</NavLink>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar
