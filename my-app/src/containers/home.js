import React from 'react'
import Header from '../components/header'

import SideBar from '../components/sidebar'
import { Posts } from './posts'

const Home = () => {
  return (
    <>
    <Header/>
    <div className='home'>
      <Posts/>
      <SideBar/>
      

    </div>
    
    
    </>
    
  )
}
export default Home
