import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper : {
        maxWidth: "s",
        height:"100vh",
        margin:"0 auto", 
        padding:"3rem 5rem"   
    }, 
}));

const Contact = () => {
    const classes = useStyles();
    return (
        <div id="contact" style={{backgroundColor:'#ffffff'}}>
            <Container className = {classes.paper}>
                <Typography variant="h1" component="h1">
                    Contact
                </Typography>
            </Container>
        </div>
    );   
}

export default Contact
