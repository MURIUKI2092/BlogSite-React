import React from 'react'


 const Post = () => {
  return (
    <div  className='post'>
      <img
      className='postImg'
      src='https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
      alt=''
      />
      <div className='postInfo'>
        <div className='postCategories'>
          <span className='postCategory'>Music</span>
          <span className='postCategory'>Life</span>

        </div>
        <span className='postTitle'>lorem lorem lorem lorem
        </span><hr/>
        <span className='postDate'>
          1 day ago
        </span>
      </div>
      <p className='postDescription'>
Agree with @JeyDWork, this solution should be flagged as potential security risk. If your package.json doesn't contain confidential data now, who will guarantee that other developers won't put it there years later, without knowing that it is exposed to production? And even without any secrets, normally, a business doesn't want to expose information about its dependencies and devDependencies from the package.json to everybody - it makes it easier to 
find vulnerabilities and penetrate the application.
</p>
    </div>
  )
}
export default Post

