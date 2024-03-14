import React from 'react';
import { makeStyles, useTheme } from '@mui/styles';
import Lottie from 'react-lottie';
import animationData from '../animations/landinganimation/data'
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';
import customsoftwareicon from '../assets/Custom Software Icon.svg'

export const StyledButton = styled(Button)(({ theme }) => ({
  
  backgroundColor: theme.palette.common.blue,
  borderRadius: '50px',
  height: '45px',
  width: '145px',
  marginRight: '40px'
}));

export const LearnButton = styled(Button)(({ theme }) => ({
  borderColor: theme.palette.common.blue,
  color:theme.palette.common.blue,
  borderRadius: '50px',
  fontSize: '0.9rem',
  fontWeight:"bold",
  height: '45px',
  width: '145px'
}));

 const useStyles = makeStyles(theme=>({
    animation:{
      maxWidth:"50em",
      minWidth:"21em",
      marginTop:"2em",
      marginLeft:"10%",
       [theme.breakpoints.down("sm")]: {
      maxWidth: "30em"
    }
    },
    buttonContainer:{
      marginTop:"2em"
    },

    mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em"
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em"
    }
  },
  specialText:{
    fontFamily:"Pacifico",
    color: theme.palette.common.orange
  },

  subtitle:{
    marginBottom: "1em"
  },

  icon:{
    marginLeft:"2em",
     [theme.breakpoints.down("xs")]: {
      marginLeft: 0
    }

  },
  serviceContainer:{
    marginTop: "12em"
  }

 
 }))

export default function LandingPage(){
     const classes = useStyles();
     const theme = useTheme()
     const matchesSM= useMediaQuery(theme.breakpoints.down("sm"))

    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }

    return (
      <>
      <Grid container direction="column" className={classes.mainContainer}>{/*---Hero Block--- */}
        <Grid item>
        <Grid container justifyContent="flex-end" alignItems="center" direction="row">
          <Grid xs={12} sm={6} item>
          <Typography variant="h2" align='center'>
          Getting to the <br/>
          Future, Faster, Together.
          </Typography>
          <Grid container justifyContent="center" className={classes.buttonContainer}>
            <Grid item> 
            <StyledButton variant="contained">Free Estimate</StyledButton>
            </Grid>
            <Grid item>
               <LearnButton variant="outlined">Learn More
               </LearnButton>
            </Grid>
          </Grid>
          </Grid>
         <Grid className={classes.animation} item>
          <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </Grid>
        </Grid>
        </Grid>
        <Grid item>{/*---Services---*/}
        <Grid container direction="row" className={classes.serviceContainer}>
          <Grid item style={{marginLeft:"5em"}}>
            <Typography variant ="h4">
              Custom Software Development 
            </Typography>
             <Typography variant ="subtitle1">
              Save Energy. Save Time. Save Money.
            </Typography>
             <Typography variant ="subtitle1">
              Complete digital solutions, from investigation to {""}
              <span className={classes.specialText}>Celebration</span>
            </Typography>
            <LearnButton variant="outlined">Learn More</LearnButton>
          </Grid>
          <Grid item>
          <img className={classes.icon} alt="custom software icon" src={customsoftwareicon}></img>
          </Grid>
        </Grid>
        </Grid>
      </Grid>
      </>
    )
}