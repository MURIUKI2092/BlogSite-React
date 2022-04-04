import './styles/style.css'
import './App.css';
import Navbar from './components/navbar';
import { Fragment } from 'react';


import Footer from './components/footer';
import SignUp from './components/registration';








function App() {
  return (
    <Fragment>
    <Navbar/>
   <SignUp/>
  
  <Footer/>
  
    
    
   
    
    </Fragment>
    
  );
}

export default App;
