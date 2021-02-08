import styled from 'styled-components'

export const GlobalStyle = styled.body`
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-size:.938rem;
`

export const Title = styled.h1`
    font-size:1.5rem;
    color:${props => props.light? '#fff' : '#111111'};

    @media screen and (max-width:768px){
        font-size:2.25rem;
    }
`;

export const Subtitle = styled.h2`
    font-size:1.25rem;
    color:${props => props.light? '#fff' : '#111111'};

    @media screen and (max-width:768px){
        font-size:1.5rem;
    }
`;

export const MidSubtitle = styled.h3`
    font-size:1.125rem;
    color:${props => props.light? '#fff' : '#111111'};

    @media screen and (max-width:768px){
        font-size:1.25rem;
    }
`;

export const Paragraph = styled.p`
    font-size:.938rem;
    color:${props => props.light? '#fff' : '#111111'};
    
    @media screen and (max-width:768px){
        font-size:1rem;
    }
`;

export const TextLink = styled.a`
    text-decoration:none;
`;

export const UList = styled.ul` 
    list-style:none;
`;

export const List = styled.li``;

export const Container= styled.div`
    max-width:1024px;
    width:calc(100% - 2 rem);
    margin-left:1rem;
    margin-right:1rem;
`;

export const Wrapper = styled.section` 
    padding:4rem 0 2rem;
`;
