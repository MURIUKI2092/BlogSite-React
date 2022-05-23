import React from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';

const SideBar = () => {
  const [category,setCategory]= useState([]);

  useEffect(()=>{
    const getCategory = async ()=>{
      const response= await axios.get("/categories")
      setCategory (response.data);
    }
    getCategory()
  },[])
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span><br></br>
        <img className='aboutImage'
        src='https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
        alt=''
        />
        <p>Explore and add your first skill to get started. HackerRank offers a variety of skills, tracks and tutorials for you to learn and improve. </p>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>CATEGORIES </span><br></br>
        <ul className='sidebarList'>
          {category.map((cat)=>(
            <Link to={`/home/?cat=${cat.name}`} className='topListItem'><li className='sidebarListItem'>{cat.name}</li></Link>
            

          ))}
          
        

        </ul>
            </div>
            <div className='sidebarItem'>
        <span className='sidebarTitle'>FOLLOW US </span><br></br>
        <div className='sidebarSocial'>
        <FacebookIcon className='sidebarIcon'/>
        <InstagramIcon className='sidebarIcon'/>
        <PinterestIcon className='sidebarIcon'/>
        <TwitterIcon className='sidebarIcon'/>
          

        </div>
            </div>
      

    </div>
  )
}
export default SideBar
