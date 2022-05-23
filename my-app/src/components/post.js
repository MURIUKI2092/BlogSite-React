import React from 'react'
import { Link } from 'react-router-dom'


 const Post = ({post}) => {
   const publicFolder="http://localhost:5000/images/"
  return (
    <div  className='post'>
      {post.photo &&(
         <img
         className='postImg'
         src={publicFolder + post.photo}
         alt=''
         />

      )}
     
      <div className='postInfo'>
        <div className='postCategories'>{
          post.categories.map(c=>(
            <span className='postCategory'>{c.name}</span>

          ))
        }
          
          

        </div>
        {/* Linking the title to the story using it's id */}
        <Link to={`/posts/${post._id}`} className="topListItem">
        <span className='postTitle'>
        {post.title}
        </span><hr/>

        </Link>
        
        <span className='postDate'>
        { new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className='postDescription'>
      {post.desc}
</p>
    </div>
  )
}
export default Post

