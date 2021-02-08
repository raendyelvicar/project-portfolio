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
                <ToggleNavLink to="/about" onClick={toggle}>About</ToggleNavLink>
                <ToggleNavLink to="/portfolio" onClick={toggle}>Portfolio</ToggleNavLink>
                <ToggleNavLink to="/contact" onClick={toggle}>Contact</ToggleNavLink>
            </ToggleNavMenu>    
        </ToggleNavContainer>
    )
}

export default ToggleNav
