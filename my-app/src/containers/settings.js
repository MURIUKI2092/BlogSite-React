import React from 'react'
import Profile from '../components/profile'
import SideBar from '../components/sidebar'
import UserSettings from '../components/userSettings'

const Settings = () => {
  return (
    <div className='settings'>
      
      <div className='settingWrapper'>{/* 
      <div className='settingHeader'>Update Your Profile</div> */}
        <Profile/>
        <UserSettings/>
      </div>
      <SideBar/>
    </div>
  )
}
export default Settings
