import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin:'auto 0',
    color: theme.palette.text.secondary,
    height:'80vh',
    boxShadow:'none'
  },
  typography:{
    paddingTop:'20vh',
    textAlign:'justify'
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <Typography className={classes.typography} variant="body1">
                I am a person who is committed to learning and selfdevelopment, so that I can consistently achieve better
              results. Furthermore, I am highly motivated for building a career in tech, design and business field, to which I would 
              bring dedication and enthusiasm for my work.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
