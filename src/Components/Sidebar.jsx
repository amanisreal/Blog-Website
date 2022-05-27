import React from 'react'
import './sidebar.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaInstagram}  from 'react-icons/fa'

function Sidebar() {
  return (
    <div className='sidebar'> 
        <div className='sidebarItems'>
            <div className='title__container'>
            <span className='sidebarTitlea'>
                About Me
            </span></div>

            <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
                alt=""
            />

            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus elit lobortis, bibendum massa in, finibus tortor. Nam sem mauris, lobortis sed lacus eu, posuere congue lorem. Nullam convallis elementum massa. 
            </p>
        </div>

        <div className='sidebarItems'>
            <span className='sidebarTitle'>
                 Categories
            </span>

            <ul className='sidebarList'>
                <li className='sidebarListItem'>Life</li>
                <li className='sidebarListItem'>Music</li>
                <li className='sidebarListItem'>Style</li>
                <li className='sidebarListItem'>Sports</li>
                <li className='sidebarListItem'>Cinema</li>
                <li className='sidebarListItem'>Tech</li>
            </ul>
        </div>

        <div className='social'>
        <span className="follows">Follow Us</span>
        <div className='sidebar__social'>

                 <FaFacebookSquare/>
                 <FaInstagram/>  
        </div>
        </div>
    </div>
  )
}

export default Sidebar