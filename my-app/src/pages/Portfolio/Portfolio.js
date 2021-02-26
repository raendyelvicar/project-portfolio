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
    typography:{
        textAlign:"right",
    }
}));

const Portfolio  = () => {
    const classes = useStyles();
    return (
        <div id="portfolio" style={{backgroundColor:'#ffffff'}}>
            <Container className = {classes.paper}>
                <Typography className={classes.typography} variant="h1" component="h1">
                    Portfolio
                </Typography>
            </Container>
        </div>
    ); 
}

export default Portfolio
