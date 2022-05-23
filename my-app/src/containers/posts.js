import React from 'react'
import Post from '../components/post'

export const Posts = ({posts}) => {
  
  return (
    <div className='posts'>
{/* mapping posts so that they can be displayed after they are gotten from  the backend */}
      {posts.map(p=>(
         <Post   post ={p}/>

      ))}
     
     
    </div>
  )
}
