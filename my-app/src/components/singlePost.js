import React, { useContext, useState } from 'react'
import {useEffect} from 'react';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import { Context } from '../context/context';

const SinglePost = () => {
  const location =useLocation();
  const path = location.pathname.split("/")[2]
  const [post,setPost]=useState({})
  const publicFolder="http://localhost:5000/images/"
  // const {user} =useContext(Context)
  const[title,setTitle] = useState(" ")
  const [desc,setDesc]= useState(" ");
  const[updateMode,setUpdateMode]= useState(false);

  useEffect(()=>{
    const getSinglePost = async ()=>{
      const response = await axios.get("/posts/"+path);
      setPost(response.data);
      setTitle(response.data.title);
      setDesc(response.data.desc)
      
            
    };
     getSinglePost()

  },[path])
  const handleDelete = async()=>{
    try{
      await axios.delete(`/posts/${post._id}`,{
        // data:{username:user.username}
      })

    }catch(err){

    }
    
  }
  const handleUpdate = async()=>{
    try{
      await axios.put(`/posts/${post._id}`,{
        // username:user.username
        title,
        desc
      })
  
    }catch(err){

    }
  }
  
 
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        {post.photo &&(
           <img
           className='singlePostImg'
           src={publicFolder + post.photo}
           alt=""
                      />
        )}
        {
          updateMode?<input
           type={"text"}
            value={title}
             className="singlePostTitleInput"
             autoFocus
             onChange={(e)=>setTitle(e.target.value)}
             />:(
            <h1 className='singlePostTitle'>
            {post.title}
            {/* {post.username ===user?.username && */}
            <div className='singlePostEdit'>
                    <EditIcon className='singlePostIcon' onClick ={()=>setUpdateMode(true)}/>
                    <DeleteIcon className='singlePostIcon' onClick ={handleDelete}/>
          </div>
            {/* } */}
            
      
            </h1>

          )
        }
    
   
      <div className='singlePostInfo'>
        <span className='singlePostAuthor' > Author: 
        <Link to={`/home/?user=${post.username}`} className="topListItem" >
        <b>{post.username}</b>
        </Link></span>
        <span className='singlePostDate' >{new Date(post.createdAt).toDateString()}</span>
      </div>
      {
        updateMode ?(<textarea 
          className='singlePostDescription' 
          value={desc} 
          onChange={(e)=>setDesc(e.target.value)}/>):(
          <p className='singlePostDescription'>
        {post.desc}.</p>
        )
      }
      {updateMode &&(
         <button className='singlePostDesc'
         onClick={handleUpdate}
         >Update
         </button>
      )}
     
      
      </div>
    </div>
  )
}
export default SinglePost
