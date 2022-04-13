import React, { useState } from 'react'
import {useEffect} from 'react';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SinglePost = () => {
  const location =useLocation();
  const path = location.pathname.split("/")[2]
  const [post,setPost]=useState({})

  useEffect(()=>{
    const getSinglePost = async ()=>{
      const response = await axios.get("/posts/"+path);
      setPost(response.data)
      console.log(response)
            
    };
     getSinglePost()

  },[path])
  
  
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        {post.photo &&(
           <img
           className='singlePostImg'
           src={post.photo}
           alt=""
                      />
        )}

     
      <h1 className='singlePostTitle'>
      {post.title}
      <div className='singlePostEdit'>
        <EditIcon className='singlePostIcon'/>
        <DeleteIcon className='singlePostIcon'/>
      </div>

      </h1>
      <div className='singlePostInfo'>
        <span className='singlePostAuthor' > Author: 
        <Link to={`/home/?user=${post.username}`} className="topListItem" >
        <b>{post.username}</b>
        </Link></span>
        <span className='singlePostDate' >{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className='singlePostDescription'>
        {post.desc}.</p>
      </div>
    </div>
  )
}
export default SinglePost
