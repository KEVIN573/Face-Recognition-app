import React from 'react'
import logo from '../../Images/logo/logo9.png';
import './Header.css'

const Header = () => {
  return (
    <header className="ms_header">
        <div className="ms_top_left">
            <a href="index.html"><img src={logo} alt="logo" className="img-fluid"/></a>
        </div>
        <div className='burger-wrapper'>
          <div className='sign-in'>
            <h1>SIGNUP</h1>
          </div>
          <div>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
          </div>
       
      </div>
           
    </header>
  )
}

export default Header
