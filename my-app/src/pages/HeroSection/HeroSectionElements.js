import styled from 'styled-components'

export const HeroContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:90vh;
    position:relative;
    overflow:hidden;
    z-indez:1;
`

export const HeroBg = styled.div`
    position:absolute;
    top:0;
    right:0;
    left:0;
    bottom:0;
    width:100%;
    height:100%;
    overflow:hidden;
`

export const VideoBg = styled.video`
    width:100%;
    height:100%;
    -object-fit:cover;
    object-fit:cover;
    background:#232a34;
`

export const HeroContent = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100%;
    z-index:1;
    
`

export const HeroWrapper = styled.div`
    display:flex;
    position:relative;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    width:100%;
    padding:0 2rem;
    max-width:1000px;

    @media screen and (max-width:375px){
        width:98%;
    }

    @media screen and (max-width:768px){
        width:98%;
    }
`

export const HeroIntro = styled.p`
    font-size:18px;
    color:#fff;
    z-index:1;
    margin-top:10px;
    margin-bottom:10px;

    &::after{
        height:2px;
        width:100px;
        background:#fff;
        margin-left:10px;
        position:absolute;
        display:block;
    }
`

export const HeroTitle = styled.h1`
    font-size:42px;
    color:#fff;
    margin-top:10px;
    margin-bottom:10px;
`

export const HeroDesc = styled.p`
    font-size:18px;
    color:#fff;
    margin-top:10px;
    margin-bottom:10px;
    line-height:1.5;
`

export const HeroBtn = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:flex-start;
    position:relative;

    @media screen and (max-width:560px){
        flex-direction:column;
        align-items:center;
        width:100%;
        margin-top:20px;
    }
`