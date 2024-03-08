import React from 'react';
import Header from '../components/ui/Header';
import { ThemeProvider} from '@mui/material/styles';
import theme from '../components/ui/Theme'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './ui/About';
import LandingPage from './LandingPage';
import FooterTest from '../components/ui/FooterTest';
import Employees from './ui/Employee';


function App(){
  return (
    <ThemeProvider theme={theme}>
      <Router> 
      <Header/>
      <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/" element={<LandingPage/>} />
        <Route path="/empform" element={<Employees/>} />
        <Route path="/services" element={<div>Service</div>} />
        <Route path="/customsoftware" element={<div>Custom Software</div>} />
        <Route path="/mobileapps" element={<div>Mobile Apps</div>} />
        <Route path="/websites" element={<div>Websites</div>} />
        <Route path="/revolution" element={<div>Revolution</div>}/>
        <Route path="/contact" element={<div>Contact</div>}/>
      </Routes> 
      <FooterTest/>
    </Router>
      
    </ThemeProvider>
  )
}
export default App
