import React from 'react';
import { makeStyles } from '@mui/styles';
import ltiimg from '../../assets/LTIMindtree.svg';
import Grid from '@mui/material/Grid';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: "100%",
        zIndex: 1302,
        position: "relative"
    },
    footersizing: {
        width: "25em",
        verticalAlign: "bottom",
        [theme.breakpoints.down("md")]: {
            width: "21em"
        },
        [theme.breakpoints.down("xs")]: {
            width: "15em"
        }
    },
   
    mainContainer:{
        position:"absolute",
        width:"100%"
    },

    link:{
        color:"white",
        fontFamily:"Arial",
        fontSize:"0.75rem",
        fontWeight:"bold",
    }
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Grid container justify="center" className={classes.mainContainer}>
                <Grid item className={classes.link}>Home</Grid>
            </Grid>
            <img alt="black decorative slash" src={ltiimg} className={classes.footersizing} />
        </footer>
    );
}
