import React from 'react'
import './Members.scss'
import mem1 from '../../img/mem1.png'
import mem2 from '../../img/mem2.png'
import mem3 from '../../img/mem3.png'
import insta from '../../img/insta.png'

function Members() {
  return (
    <>
      <div className="membersWrapper">
        <div className="membersItem">
          <div className="memberImg">
            <img src={mem1} alt="" />
            <span className="nameTitle">IL</span>

            <span>
              <img src={insta} alt="" />
              <a href="https://www.instagram.com/an01_212/"> an01_212</a>
            </span>
            <span>PM</span>
            <span>Marketing</span>
          </div>

          <div className="memberImg">
            <img src={mem3} alt="" />
            <span className="nameTitle">GU</span>

            <span>
              <img src={insta} alt="" />
              <a href="https://www.instagram.com/prokujira/"> prokujira</a>
            </span>
            <span>Developer</span>
            <span>Design</span>
          </div>
          <div className="memberImg">
            <img src={mem2} alt="" />
            <span className="nameTitle">VO</span>
            <br />
            <span>
              <img src={insta} alt="" />
              <a href="https://www.instagram.com/sungb_o/?igshid=1tsjrqnvvnons">
                {' '}
                sungb_o
              </a>
            </span>
            <span>PD</span>
            <span>Editing</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Members
