import React, { useContext } from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import SearchIcon from '@mui/icons-material/Search';
import { NavLink, Link} from 'react-router-dom';
import { userContext } from '../context/userContext';



const Navbar =({user})=>{
 
  
  const handleLogout=()=>{
   
  }

  return(
    <section className='navbar'>
      <div className='topLeft'>
        <FacebookIcon className='topIcon'/>
        <InstagramIcon className='topIcon'/>
        <PinterestIcon className='topIcon'/>
        <TwitterIcon className='topIcon'/>

      </div>
      <div className='topCenter'>
        <ul className='TopList'>
              <Link  to='/home' className='topListItem'>HOME</Link>
              <Link  to='/home' className='topListItem'>ABOUT</Link>
              <Link  to='/home/settings' className='topListItem'>CONTACT</Link>
              <Link  to='/write' className='topListItem'>WRITE</Link>
              <Link  to='/' className='topListItem' onClick={handleLogout}>{user && "LOGOUT"}</Link>
          

        </ul>

      </div>
      <div className='topRight'>
      {user ?
      (
        <Link to="/home/settings">
        <img className='topImage'
        src={user.profilePic}
        alt=""
        /> 
        </Link>
        
      ):(
        <ul className='TopList'>
        <Link  to='/login' className='topListItem'>Login</Link>
         <Link  to='/register' className='topListItem'>register</Link>
         </ul>
      )}
        <SearchIcon className='searchIcon'/>


</div>


    </section>

  )
}
export default Navbar;
