import React from 'react'
import './Landing.scss'
import logo from '../../img/landing.png'

function Landing() {
  return (
    <>
      <div className="landingWrapper">
        <div className="landingTitle"></div>
        <div className="landingImg">
          <div className="landingBall">
            <span>We create a memorable event.</span>
          </div>
          {/* <img src={logo} alt="" /> */}
        </div>
      </div>
    </>
  )
}

export default Landing
