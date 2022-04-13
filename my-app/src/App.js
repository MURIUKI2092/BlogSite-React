import './styles/style.css'
import './App.css';
import Navbar from './components/navbar';
import { Fragment } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import Footer from './components/footer';

import LandingPage from './containers/landingPage';








function App() {
  return (
    <Fragment>
    <Navbar/>
    <LandingPage/>
   
  
  <Footer/>
  
    
    
   
    
    </Fragment>
    
  );
}

export default App;
