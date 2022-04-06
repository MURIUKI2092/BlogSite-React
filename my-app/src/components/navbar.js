import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import SearchIcon from '@mui/icons-material/Search';
import { NavLink, Link} from 'react-router-dom';


const Navbar =()=>{
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
              <Link  to='/' className='topListItem'>LOGOUT</Link>
          

        </ul>

      </div>
      <div className='topRight'>
        <img className='topImage'
        src="https://images.unsplash.com/photo-1647858881692-cd17fd80cf51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        alt=""
        />
        <SearchIcon className='searchIcon'/>


</div>


    </section>

  )
}
export default Navbar;
