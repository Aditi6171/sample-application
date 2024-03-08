import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import logo from '../../assets/lti.svg';
import { makeStyles } from '@mui/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';



function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em'
  },
  logo: {
    width: '100px',
    height: '7em',
    [theme.breakpoints.down("md")]:{
      height:"5em"
    },
    [theme.breakpoints.down("xs")]:{
      height:"3em"
    }
  },

  tabContainer:{
    marginLeft:'auto'
  },
  tab:{
    ...theme.typography.tab,
    minWidth: 20,
    marginLeft:"25px"
  },
  button:{
    borderRadius:"50px",
    marginLeft:"25px",
    marginRight:"50px",
    height:"45px",
    ...theme.typography.estimate
  },

  

  menu: {
    '& .MuiMenu-paper': {
      backgroundColor: theme.palette.common.blue,
      color: "white"
    }
  },

drawer: {
    '& .MuiDrawer-paper': {
      backgroundColor: theme.palette.common.blue,
    }
  },

  drawerItem:{
    ...theme.typography.tab,
    color: "white"
  }

}));

export default function Header(props) {
  const classes = useStyles();
  const[value, setValue] = useState(0);
  const[anchorEl, setAnchorEl]=useState(null)
  const[selectedIndex, setSelectedIndex]=useState(0)
  const[openDrawer, setOpenDrawer] = useState(false)
  const[openMenu, setOpenMenu] = useState(false)

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"))
  const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const handleChange = (e, newValue)=>{
    setValue(newValue)
  };

  const handleClick=(e)=>{
    setAnchorEl(e.currentTarget)
    setOpenMenu(true)
  }

  const handleClose=(e, i)=>{
    setAnchorEl(null)
    setOpenMenu(false)
    
  }

  const handleMenuClick = (e, i)=>{
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i)
  }

  const menuOptions = [{name:"Services", link:"/services"},{name:"Custom Software Development", link:"/customsoftware"}, {name:"Mobile Apps", link:"/mobileapps"}, {name:"Websites", link:"/websites"}]

  useEffect(()=>{
    if(window.location.pathname==='/' && value!==0){
      setValue(0)
    }else if(window.location.pathname==="/services" && value !==1){
      setValue(1)
    }else if(window.location.pathname==="/revolution" && value !==2){
      setValue(2)
    }else if(window.location.pathname==="/about" && value !==3){
      setValue(3)
    }else if(window.location.pathname==="/contact" && value !==4){
      setValue(4)
    }
  },[value])

  switch (window.location.pathname) {
  case "/":
    if (value !== 0) {
      setValue(0);
    }
    break;
  case "/services":
    if (value !== 1) {
      setValue(1);
      setSelectedIndex(0);
    }
    break;
  case "/customsoftware":
    if (value !== 1) {
      setValue(1);
      setSelectedIndex(1);
    }
    break;
  case "/mobileapps":
    if (value !== 1) {
      setValue(1);
      setSelectedIndex(2);
    }
    break;
  case "/websites":
    if (value !== 1) {
      setValue(1);
      setSelectedIndex(3);
    }
    break;
  case "/revolution":
    if (value !== 2) {
      setValue(2);
    }
    break;
  case "/about":
    if (value !== 3) {
      setValue(3);
    }
    break;
  case "/contact":
    if (value !== 4) {
      setValue(4);
    }
    break;
  default:
    break;
}
  const tabs =(
    <>
     <Tabs value={value} indicatorColor="secondary" textColor="white" onChange={handleChange} className={classes.tabContainer}>
            <Tab className={classes.tab} label="Home" component={Link} to="/"/>
            <Tab className={classes.tab} label="Services" araia-owns={anchorEl? "simple-menu": undefined} aria-haspopup={anchorEl? "true": undefined} onMouseOver={event=> handleClick(event)} component={Link} to="/services"/>
            <Tab className={classes.tab} label="The Revolution" component={Link} to="/revolution"/>
            <Tab className={classes.tab} label="About Us" component={Link} to="/about"/>
            <Tab className={classes.tab} label="Contact Us" component={Link} to="/contact"/>
           </Tabs>
           <Button component={Link} to="/empform" variant='contained'className={classes.button} color='secondary'>Free Estimate</Button>
           <Menu id="simple-menu" anchorEl={anchorEl} open={openMenu} onClose={handleClose} MenuListProps={{onMouseLeave:handleClose}} elevation={3} className={classes.menu}>
            {menuOptions.map((option, i)=>(
              <MenuItem key={option} component={Link} to={option.link} onClick={(event)=>{handleMenuClick(event, i);handleClose()}} selected={i===selectedIndex}>
              {option.name}
              </MenuItem>
            ))}
           </Menu>
    </>
  )

  const drawers = (
    <>
    <SwipeableDrawer disableBackdropTransition={!iOS} open={openDrawer} onClose={()=> setOpenDrawer(false)} onOpen={()=>setOpenDrawer(true)} disableDiscovery={iOS} className={classes.drawer} >
    <List>
      <ListItem onClick={()=>setOpenDrawer(false)}divider button component={Link} to="/">
        <ListItemText className={classes.drawerItem} disableTypography>Home</ListItemText>
      </ListItem>
      <ListItem onClick={()=>setOpenDrawer(false)} divider button component={Link} to="/services">
        <ListItemText className={classes.drawerItem} disableTypography>Services</ListItemText>
      </ListItem>
      <ListItem onClick={()=>setOpenDrawer(false)} divider button component={Link} to="/revolution">
        <ListItemText className={classes.drawerItem} disableTypography>Revolution</ListItemText>
      </ListItem>
      <ListItem onClick={()=>setOpenDrawer(false)} divider button component={Link} to="/about">
        <ListItemText className={classes.drawerItem} disableTypography>About Us</ListItemText>
      </ListItem>
      <ListItem onClick={()=>setOpenDrawer(false)} divider button component={Link} to="/contact">
        <ListItemText className={classes.drawerItem} disableTypography>Contact Us</ListItemText>
      </ListItem>
    </List>

    </SwipeableDrawer>
    <IconButton style={{ marginLeft: "auto", "&:hover": { backgroundColor: "transparent" } }} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
    <MenuIcon/>
    </IconButton>
    </>
  )

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar position='static'>
          <Toolbar disableGutters={true}>
            <Link to="/" onClick={()=>setValue(0)}>
              <img alt="company logo" src={logo} className={classes.logo} />
            </Link>
            {matches? drawers: tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
}
