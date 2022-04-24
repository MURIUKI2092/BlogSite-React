import React, { useEffect, useState } from 'react'
import Header from '../components/header'

import SideBar from '../components/sidebar'
import { Posts } from './posts'
import axios from "axios"
import { useLocation } from 'react-router-dom';
import { userContext } from "../context/userContext";
import { useContext } from 'react'

const Home = () => {
  // use state hooks to store the states of the posts
  const [posts,setPosts]=useState([])

  const {user}= useContext(userContext);
  console.log(user);


  // use useLocation hooks 
  const {search}=useLocation();
  
  // use effect hooks to fetch those posts from backend
  useEffect( ()=>{
    const fetchPosts = async () =>{
      const response =await axios.get("/posts"+search)
      setPosts(response.data)
      
     

    }
    fetchPosts()

  },[search])
  return (
    <>
    <Header />
    <div className='home'>
    <pre>{JSON.stringify(user,null,2)}</pre>
      <Posts posts={posts}/>
      <SideBar/>
      

    </div>
    
    
    </>
    
  )
}
export default Home
