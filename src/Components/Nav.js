import React from 'react'
import "./nav.css"
import {FaFacebookSquare} from 'react-icons/fa'
import {FaInstagram}  from 'react-icons/fa'
import {VscAccount} from "react-icons/vsc"
import {BsSearch} from "react-icons/bs"
import {Link} from "react-router-dom"


function Nav() {
  return (
<>    
          
    <div className='container navBar__container'>
        <div className='top__left'>
            <FaFacebookSquare className='iconss'/>
            <FaInstagram className='iconss'/>
        </div>
        
        <div className='top__middle'>
            <ul className='top__list'>
                <li  className='topList__item'>HOME</li>
                <li className='topList__item'>ABOUT</li>
                <li className='topList__item'>CONTACT</li>
                <li className='topList__item'>
                WRITE
                </li>
                <li className='topList__item'>LOGOUT</li>
            </ul>
        </div>
        <div className='top__right'>
            <VscAccount className='iconss'/>
            <BsSearch className='iconss'/>
        </div>
    </div>
    </>

  )
}

export default Nav