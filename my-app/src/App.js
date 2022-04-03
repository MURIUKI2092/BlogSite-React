import './styles/style.css'
import './App.css';
import Navbar from './components/navbar';
import { Fragment } from 'react';
import Home from './containers/home';


function App() {
  return (
    <Fragment>
    <Navbar/>
    <Home/>
    
    </Fragment>
    
  );
}

export default App;
