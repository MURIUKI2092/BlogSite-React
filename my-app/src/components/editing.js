import React, { useContext, useState } from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';
import axios from 'axios';
// import { Context } from '../context/context';

const Editing = () => {
  const [title,setTitle]= useState("")
  const[desc,setDesc]= useState("")
  const[file,setFile]= useState(null)
  // const {user} =useContext(Context)

  const handleSubmit = async (event)=>{
    event.preventDefault();
    const newPost ={
    //  username: user.username,
      title,
      desc
    }
    if(file){
      const data =new FormData();
      const filename = Date.now()+file.name;
      data.append("name",filename);
      data.append("file",file);
      newPost.photo = filename;
      try{
        await axios.post("/upload",data)

      }catch(err){

      }
    }
    try{
      const response =await  axios.post("/posts".newPost)
      window.location.replace("/post/"+response.data._id)
    }catch(err){

    }
   
  }
  return (
    <div className='editing'>
      {
        file &&(
          <img
      className='writeImg'
      src={URL.createObjectURL(file)}
      alt='file goes here'
      />
        )
      }
      
      <form className='writeForm' onSubmit={handleSubmit}>
        <div className='writeFormGroup'>
          <label htmlFor='fileInput'>
            <AddBoxIcon  className="writeIcon"/>
          </label>
          {/* adds the functionality of adding the image to the website after the user has selected it. */}
          <input type={"file"} id="fileInput" style={{display:"none"}} onChange={(e)=>setFile(e.target.files[0])}/>
          <input type ={"text"} placeholder= "Title" autoFocus={true}
           className ="writeInput"
           onChange={e=>setTitle(e.target.value)}/>
        </div>
        <div className='writeFormGroup'>
          <textarea placeholder='Write your story' type="text"
           className='writeInputText'
           onChange={e=>setDesc(e.target.value)}
           ></textarea>
        </div>
        <button  className='writeSubmit' type='submit'>Publish</button>

      </form>

       
    </div>
  )
}
export default Editing
