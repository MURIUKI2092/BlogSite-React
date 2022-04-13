import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const SinglePost = () => {
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
      <img
      className='singlePostImg'
      src='https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
      alt=''
      />
      <h1 className='singlePostTitle'>
      lorem lorem lorem lorem.
      <div className='singlePostEdit'>
        <EditIcon className='singlePostIcon'/>
        <DeleteIcon className='singlePostIcon'/>
      </div>

      </h1>
      <div className='singlePostInfo'>
        <span className='singlePostAuthor' > Author: <b>Muriuki</b></span>
        <span className='singlePostDate' >1 day ago</span>
      </div>
      <p className='singlePostDescription'>Agree with @JeyDWork, this solution should be flagged as potential security risk. If your package.json doesn't contain confidential data now, who will guarantee that other developers won't put it there years later, without knowing that it is exposed to production? And even without any secrets, normally, a business doesn't want to expose information about its dependencies and devDependencies from the package.json to everybody - it makes it easier to 
find vulnerabilities and penetrate the application.
Agree with @JeyDWork, this solution should be flagged as potential security risk. If your package.json doesn't contain confidential data now, who will guarantee that other developers won't put it there years later, without knowing that it is exposed to production? And even without any secrets, normally, a business doesn't want to expose information about its dependencies and devDependencies from the package.json to everybody - it makes it easier to 
find vulnerabilities and penetrate the application.
Agree with @JeyDWork, this solution should be flagged as potential security risk. If your package.json doesn't contain confidential data now, who will guarantee that other developers won't put it there years later, without knowing that it is exposed to production? And even without any secrets, normally, a business doesn't want to expose information about its dependencies and devDependencies from the package.json to everybody - it makes it easier to 
find vulnerabilities and penetrate the application.
Agree with @JeyDWork, this solution should be flagged as potential security risk. If your package.json doesn't contain confidential data now, who will guarantee that other developers won't put it there years later, without knowing that it is exposed to production? And even without any secrets, normally, a business doesn't want to expose information about its dependencies and devDependencies from the package.json to everybody - it makes it easier to 
find vulnerabilities and penetrate the application.</p>
      </div>
    </div>
  )
}
export default SinglePost
