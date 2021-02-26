import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import CenteredGrid from '../../components/Grid/CenteredGrid';

const useStyles = makeStyles((theme) => ({
    paper : {
        maxWidth: "s",
        height:"100vh",
        margin:"0 auto", 
        padding:"3rem 5rem"   
    }, 
}));

export default function About(){
    const classes = useStyles();
    return (
        <div id="about" style={{backgroundColor:'#ffffff'}}>
            <Container className = {classes.paper}>
                <Typography variant="h1" component="h1">
                    About
                </Typography>
                <CenteredGrid/>
            </Container>
        </div>
    );   
}
