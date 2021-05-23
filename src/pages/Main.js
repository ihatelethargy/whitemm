import React from 'react'
import { Route } from 'react-router-dom'
import BottomHeader from '../components/bottomheader/BottomHeader'
import Contact from '../components/contact/Contact'
import Header from '../components/header/Header'
import Landing from '../components/landing/Landing'
import Members from '../components/members/Members'
import Video from '../components/video/Video'

function Main() {
  return (
    <div>
      <Route component={Header} />
      <Route component={BottomHeader} />
      <Route component={Landing} path="/" exact />
      <Route component={Members} path="/members" exact />
      <Route component={Video} path="/video" exact />
      <Route component={Contact} path="/contact" exact />
    </div>
  )
}

export default Main
