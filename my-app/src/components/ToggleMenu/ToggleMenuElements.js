import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'


export const ToggleNavContainer = styled.div`
    position:fixed;
    z-index:100;
    width:100%;
    height:100%;
    min-height:100vh;
    background:#111111;
    display:grid;
    align-items:center;
    top:0;
    left:0;
    transition: 0.3s ease-in-out;
    opacity:${({isOpen}) => (isOpen ? '100%' : '0')};
    top:${({isOpen}) => (isOpen ? '0' : '-100%')};
`

export const Icon = styled.div`
    position:absolute;
    top:1.2rem;
    text-align:center;
    right:1.5rem;
    background:transparent;
    font-size:2rem;
    cursor:pointer;
    outline:none;
`

export const ToggleNavMenu = styled.ul`
    display:grid;
    grid-template-columns:1fr;
    grid-template-rows:repeat(6, 80px);
    gap:80px;
    position:absolute;
    top:20%;
    right:1%;

    @media screen and (max-width: 340px){
        grid-template-rows:repeat(6,60px);
    }
` 

export const ToggleNavLink = styled(Link)`
    color:#fff;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    text-decoration:none;
    list-style:none;
    transition:0.2s ease-in-out;
    padding:0 2rem;
    font-size:4rem;
    cursor:pointer;

    &:hover{
        color:#1399f2;
        transition: .3s ease-in-out;
    }

    @media screen and (max-width:340px){
        font-size:3rem;
    }
`