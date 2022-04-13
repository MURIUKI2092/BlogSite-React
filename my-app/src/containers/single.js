import React from 'react'
import SideBar from '../components/sidebar'
import SinglePost from '../components/singlePost'


const Singles = () => {
  return (
    <div className='single'>
      {/* post */}
      <SinglePost/>
      <SideBar/>
    </div>
  )
}
export default Singles
