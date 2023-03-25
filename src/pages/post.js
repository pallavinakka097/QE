import React from 'react'
import './post.css'
function Post() {
  return (
    <>
    <div className='b'>
        <h2 className='h'>CREATE A NEW POST</h2>
        <input placeholder='Title....' type="text" className='m' />
        <textarea placeholder='Description' rows={9} cols={22} className='m'/>
        <a className='bn'>UPLOAD FILE</a>
        <a className='bm'>POST</a>
    </div>
    <div className='v'>
      <h1>VIEW PREVIOUS POSTS</h1>
    </div>
    </>
  )
}
export default Post;