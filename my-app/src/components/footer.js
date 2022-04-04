import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerDetails'>
        <div  className='details1'>
        Title here and other Info
        </div>
        <div  className='details2'>
        <h2>Our Products</h2>
          <ul class="footer-links">
          <li className='footerListItem'>HOME</li>
              <li className='footerListItem'>ABOUT</li>
              <li className='footerListItem'>CONTACT</li>
              <li className='footerListItem'>WRITE</li>
              <li className='footerListItem'>LOGOUT</li>

            </ul>
        </div>
        <div  className='details3'>
        <h2>Help & Support</h2>
         <ul class="footer-links">
         <li className='footerListItem'>HOME</li>
              <li className='footerListItem'>ABOUT</li>
              <li className='footerListItem'>CONTACT</li>
              <li className='footerListItem'>WRITE</li>
              <li className='footerListItem'>LOGOUT</li>

            </ul> 
        </div>
        <div  className='details4'>
        <h2>About</h2>
          <ul class="footer-links">
          <li className='footerListItem'>HOME</li>
              <li className='footerListItem'>ABOUT</li>
              <li className='footerListItem'>CONTACT</li>
              <li className='footerListItem'>WRITE</li>
              <li className='footerListItem'>LOGOUT</li>

            </ul>
        </div>
      </div>
      <div className='otherFooterDetails'>
        <div className='copyWriteInfo'>
          <p>Copyright &copy;{new Date().getFullYear()} All Rights Reserved by </p>

        </div>
        <div className='socialsInfo'>
        <FacebookIcon className='footerIcon'/>
        <InstagramIcon className='footerIcon'/>
        <PinterestIcon className='footerIcon'/>
        <TwitterIcon className='footerIcon'/>
        <WhatsAppIcon  className='footerIcon'/>

        </div>
      </div>
    </div>
  )
}
export default Footer;
