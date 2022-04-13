import React from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';

const Editing = () => {
  return (
    <div className='editing'>
      <img
      className='writeImg'
      src='https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
      alt=''
      />
      <form className='writeForm'>
        <div className='writeFormGroup'>
          <label htmlFor='fileInput'>
            <AddBoxIcon  className="writeIcon"/>
          </label>
          <input type={"file"} id="fileInput" style={{display:"none"}}/>
          <input type ={"text"} placeholder= "Title" autoFocus={true} className ="writeInput"/>
        </div>
        <div className='writeFormGroup'>
          <textarea placeholder='Write your story' type="text" className='writeInputText'></textarea>
        </div>
        <button  className='writeSubmit'>Publish</button>

      </form>

       
    </div>
  )
}
export default Editing
