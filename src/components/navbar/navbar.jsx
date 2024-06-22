import React from 'react'
import Logo from '../navbar/assets/logo.jpg'

const navbar = () => {
  return (
    <>
    <nav id="navbar">
      <div ><img src={Logo} alt="" class="logo"/></div>
      {/* <div class="hambuger"></div> */}

      <div class="navbar-text">
          <a class="navbar-links" href="index.html" >HOME</a>
          <a class="navbar-links" href="services1.html" >SERVICES</a>
          <a class="navbar-links" href="about.html">ABOUT</a>
          <a class="navbar-links" href="contact.html" >CONTACT</a>
          <a class="navbar-links" href="">BLOG</a>
      </div>
    </nav>
    
    

    </>
  )
}

export default navbar