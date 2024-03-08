import * as React from 'react';
import { Box, Grid, Link, Typography, Container, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import ltiimg from '../../assets/LTIMindtree.svg';
import { makeStyles } from '@mui/styles';


const socialMediaLinks = {
  facebook: '#',
  twitter: '#',
  instagram: '#',
};

const useStyles = makeStyles(theme => ({
    footersizing: {
        width: "15em",
        verticalAlign: "top",
        margin:0,
        padding:0,
        [theme.breakpoints.down("md")]: {
            width: "10em"
        },
        [theme.breakpoints.down("xs")]: {
            width: "7em"
        }
    },
    footer: {
    width: "100%",
    zIndex: 1302,
    position: "relative"
  }
}));


const FooterTest = () => {
    const classes = useStyles()
  return (
    <Box
      sx={{
        bgcolor: "#4848B9",
        color: 'white',
        py: 3,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container className={classes.footer}>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item>
            <img alt="black decorative slash" src={ltiimg} className={classes.footersizing}/>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" color="white" gutterBottom>
              Home
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" color="white" gutterBottom>
              Services
            </Typography>
            <Link href="/customsoftware" color="inherit" display="block">Custom Software Development</Link>
            <Link href="/mobileapps" color="inherit" display="block">Mobile App Development</Link>
            <Link href="/websites" color="inherit" display="block">Website Development</Link>

          </Grid>
          <Grid item>
            <Typography variant="subtitle1" color="white" gutterBottom>
              About Us
            </Typography>
            <Link href="#" color="inherit" display="block">History</Link>
            <Link href="#" color="inherit" display="block">Team</Link>
            
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="white" gutterBottom>
              SOCIAL MEDIA
            </Typography>
            <IconButton aria-label="Facebook" color="inherit" component="a" href={socialMediaLinks.facebook}>
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label="Twitter" color="inherit" component="a" href={socialMediaLinks.twitter}>
              <TwitterIcon />
            </IconButton>
            <IconButton aria-label="Instagram" color="inherit" component="a" href={socialMediaLinks.instagram}>
              <InstagramIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Typography variant="body2" color="white" align="center" sx={{ pt: 4 }}>
          © 2024 Company Co. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default FooterTest;