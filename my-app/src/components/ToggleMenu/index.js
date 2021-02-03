import React from 'react'
import { FaTimes } from 'react-icons/fa'
import{ToggleNavContainer, ToggleNavMenu, ToggleNavLink, Icon, CloseIcon} from './ToggleMenuElements'

const ToggleNav = ({isOpen, toggle}) => {
    return (
        <ToggleNavContainer isOpen={isOpen} toggle={toggle}>
            <Icon onClick={toggle}>
                <FaTimes />
            </Icon>
            <ToggleNavMenu>
                <ToggleNavLink to="/about">About</ToggleNavLink>
                <ToggleNavLink to="/portfolio">Portfolio</ToggleNavLink>
                <ToggleNavLink to="/contact">Contact</ToggleNavLink>
            </ToggleNavMenu>    
        </ToggleNavContainer>
    )
}

export default ToggleNav
