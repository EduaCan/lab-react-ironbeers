import React from 'react'
import { Link } from "react-router-dom"
import home from "../assets/homeicon.png"


function Header() {
  return (
    <div id="home-button-img" style={{zIndex:"69"}}>
        <Link to="/">
        <img src={home} alt="" width={35}/></Link>

    </div>
  )
}

export default Header