import './styles/style.css'
import './App.css';
import { Fragment } from 'react';
import Home from './containers/home';
import Router from './Router'
import LandingPage from './containers/landingPage';
import Settings from './containers/settings';
import SignIn from './components/login';
import SignUp from './components/registration';
import Singles from './containers/single';
import Write from './containers/write';
import { Posts } from './containers/posts';

function App() {
  return (

    <>   
    <Router>
   <LandingPage /> 
   <SignIn/>
   <SignUp/>
   <Singles/>
   <Write/>
   <Posts/>
       <Home/>
   <Settings />
    </Router>
    
    </>
    
   
    
  );
}

export default App;
