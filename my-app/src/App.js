import './styles/style.css'
import './App.css';
import Navbar from './components/navbar';
import { Fragment } from 'react';
import Settings from './containers/settings';
import Footer from './components/footer';








function App() {
  return (
    <Fragment>
    <Navbar/>
  <Settings/>
  <Footer/>
  
    
    
   
    
    </Fragment>
    
  );
}

export default App;
