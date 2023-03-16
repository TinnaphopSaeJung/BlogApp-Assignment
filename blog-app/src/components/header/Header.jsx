import React from 'react'
import "./header.css"

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className='headerTitleSm'>React & Node</span>
            <span className='headerTitleLg'>Blog</span>
        </div>
        <img 
        className='headerImg'
            src="https://i.pinimg.com/originals/8c/ad/b2/8cadb255b0088a4d99035f5d5ade00d8.jpg" 
            alt="" 
        />
    </div>
  )
}
