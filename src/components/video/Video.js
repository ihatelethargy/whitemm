import React from 'react'
import './Video.scss'
import youtube from '../../img/youtube.png'

function Video() {
  return (
    <>
      <div className="videoWrapper">
        <img src={youtube} alt="" />
        <span>Youtube</span>
      </div>
    </>
  )
}

export default Video
