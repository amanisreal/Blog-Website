import React from 'react'
import Sidebar from "./Sidebar"
import SinglePost from './SinglePost'
import "./single.css"

function Single() {
  return (
    <div className='single'>
        {/* POsts */}
        <SinglePost/>
        <Sidebar/>
    </div>
  )
}

export default Single