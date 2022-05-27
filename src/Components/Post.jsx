import React from 'react'
import "./post.css"

import {Route, Router, Routes} from "react-router-dom"

function Post({img}) {
  return (
    <div>
    <div className='post'>
    
       <img className='postImg'
            src={img}
            alt=""
        />

        <div className="postinfo">
        <div className='postcats'>
        <span className='postcat'>
               <div className='music'>
                   Music
               </div>
            </span>

            <span className='postcat'>
               <div className='music'>
                   Life
               </div>
            </span>

            <span className='postTitle'>
               <div className='music'>
               Lorem ipsum dolor sit amet
               </div>
            </span>
            <hr/>
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
atque, exercitationem quibusdam, reiciendis odio laboriosam?
</p>
        </div>
 
        
    </div>
    
    </div>
  )
}

export default Post;

