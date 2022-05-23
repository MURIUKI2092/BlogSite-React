import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';
 const Landing = () => {
  return (
    <div  className='landing'>
      <div className='landingInfo'>
        <h1 className='landingText'>
          The Best<br></br> Place To Connect<br></br> With Other <br></br>Geeks.
        </h1>

        <div className='startJourney'>
        <ul className='LandList'>
              <Link to='/register' className='LandListItem'>Start your Journey    </Link>
        </ul>
        
        <ul className='LandList'>
              <Link  to='/register' className='LandListItem'><ArrowRightAltIcon className="landIcon"/>  </Link>

        </ul>
 
        </div>
        

      </div>
      <div className='landingImg'>
      <img className='LandImage'
        src="https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        alt=""
        />

      </div>
    

    </div>
  )
}

export default Landing
