import React from 'react'
import { Link } from 'react-router-dom'
import "./post.css"


export default function Post({post}) {
  const PF = "http://localhost:5000/images/"

  return (
    <div className='post'>
      {post.photo && (
      <img 
        className='postImg'
        src={PF + post.photo}
        alt="" 
      />
      )}
    <div className='postInfo'>
        <Link className='link' to={`/post/${post._id}`}>
          <span className='postTitle'>{post.title}</span>
        </Link>
        <hr/>
    </div>
    <p className='postDesc'>
      {post.desc}
    </p>
    </div>
  )
}
