import React from 'react'
import myImage from '../assets/logo.png'

function Logo({width = '200px'}) {
  return (
    <div><img src={myImage} width="50px"></img></div>
  )
}

export default Logo