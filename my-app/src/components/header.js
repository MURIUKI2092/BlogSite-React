import React from 'react'


const Header = () => {
  return (
    <div className='header'>
      <div className='headerTitles'>
        <span  className='headerTitleSm'><strong>100</strong> Days Of</span>
        <span className='headerTitleLg'>CODE</span>

      </div>
      <img className='headerImg' src="https://images.unsplash.com/photo-1595776613215-fe04b78de7d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="headerImage"/>
    </div>
  )
}
export default Header
