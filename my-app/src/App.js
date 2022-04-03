import './styles/style.css'
import './App.css';
import Navbar from './components/navbar';
import { Fragment } from 'react';
import Singles from './containers/single';




function App() {
  return (
    <Fragment>
    <Navbar/>
    <Singles/>
    
   
    
    </Fragment>
    
  );
}

export default App;
