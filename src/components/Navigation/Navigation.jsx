import React from 'react'
import Brand from '../Brand/Brand';
import '../Navigation/Navigation.css'
const Navigation = () => {
  return (
    <nav className='navigation'>
      <Brand />
      <p className='sign-in'>Sign In</p>
    </nav>
  )
}

export default Navigation
