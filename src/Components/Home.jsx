import React from 'react'
import Posts from './Posts'
import Sidebar from './Sidebar'
import "./home.css"

function Home() {
  return (
    <>
      
      
      <div className='home'>
        
        <Posts/>
        <Sidebar/>
      </div>
    </>
  )
}

export default Home