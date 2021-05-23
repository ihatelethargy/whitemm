import React from 'react'
import './Header.scss'
import { useHistory } from 'react-router-dom'

function Header() {
  const history = useHistory()
  return (
    <>
      <div className="headerWrapper">
        <div
          onClick={() => {
            history.push('/')
          }}
          className="headerItem"
        >
          Home
        </div>
        <div
          onClick={() => {
            history.push('/members')
          }}
          className="headerItem"
        >
          Members
        </div>
        <div
          onClick={() => {
            history.push('/video')
          }}
          className="headerItem"
        >
          Video
        </div>
        <div
          onClick={() => {
            history.push('/contact')
          }}
          className="headerItem"
        >
          Contact
        </div>
      </div>
    </>
  )
}

export default Header
