import React from 'react'
import Logo from '../navbar/assets/logo.jpg'

const navbar = () => {
  return (
    <>
    <nav id="navbar">
      <div ><img src={Logo} alt="" className="logo"/></div>
      {/* <div className="hambuger"></div> */}

      <div className="navbar-text">
          <a className="navbar-links" href="index.html" >HOME</a>
          <a className="navbar-links" href="services1.html" >SERVICES</a>
          <a className="navbar-links" href="about.html">ABOUT</a>
          <a className="navbar-links" href="contact.html" >CONTACT</a>
          <a className="navbar-links" href="">BLOG</a>
      </div>
    </nav>
    
    

    </>
  )
}

export default navbar