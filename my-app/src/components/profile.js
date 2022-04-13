import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

 const Profile = () => {
  return (
    <div className='profile'>
            <div className='profileWrapper'>
               <div className='profilePicture'>
        <img className='profileImage'
        src="https://images.unsplash.com/photo-1647858881692-cd17fd80cf51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        alt=""
        />

              </div>
            <div className='inputProfile'>
        <label htmlFor='fileInput'>
            <AccountCircleIcon  className="changeIcon"/>
          </label>
          <input type={"file"} id="fileInput" style={{display:"none"}}/>
            </div>
            <div className='profileName'>
          <h1> James Muriuki Maina </h1>
            </div>
      </div>
      
     
    </div>
  )
}
export default Profile;
