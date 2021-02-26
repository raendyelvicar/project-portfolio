import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'


export const Nav = styled.nav`
    background : #111111;
    height:80px;
    position:relative;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:1rem;
    top:0;
    z-index:101;

    @media screen and (max-width:960px){
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display:flex;
    justify-content:space-between;
    height:100%;
    padding-left:50px;
    padding-right:50px;
    z-index:1;
    width:100%;

    @media screen and (max-width:768px){
        padding-left:20px;
        padding-right:20px;
    }
    
`
export const NavLogo = styled(LinkS)`
    color:#1399f2;
    display:flex;
    align-items:center;
    justify-self:flex-start;
    margin-left:50px;
    padding:0 1rem;
    height:100%;
    text-decoration:none;
    font-weight:bold;
    font-size:26px;
    cursor:pointer;

    @media screen and (max-width:768px){
        margin-left:0px;
    }
`

export const MobileIcon = styled.div`
    display:none;
    color:#fff;
    
    @media screen and (max-width:768px){
        display:block;
        position:absolute;
        top:0;
        right:0;
        transform:translate(-100%, 75%);
        font-size:1.8rem;
        cursor:pointer;
    }
`

export const NavMenu = styled.ul`
    display:flex;
    justify-content:flex-end;
    align-items:center;
    list-style:none;
    margin-right:24px;
    width:100%;

    @media screen and (max-width:768px){
        display:none;
    }
`

export const NavItem =styled.li`
    height:80px;
    margin-left:30px;
    margin-right:30px;

    &::after{
        content: '';
        width: 0;
        height: 3px;
        background:#1399f2;
        display: block;
        margin: auto;
        -webkit-transition: .3s;
        transition: .3s;
    }

    &:hover::after{
        width: 70%;
    }

`

export const NavLink = styled(LinkS)`
    color:#fff;
    display:flex;
    align-items:center;
    text-decoration:none;
    padding:0 1rem;
    height:100%;
    cursor:pointer;

    h1{
        color:
    }

    &:hover{
        color:#7af6ff;
    }
`