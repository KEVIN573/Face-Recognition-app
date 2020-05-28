import React from 'react';
import logo from '../../Images/logo/logo9.png';
import '../Brand/Brand.css'

const Brand = () => {
    return (
      <div className="ko-brand-container">
        <a href='https://ko-technologies.netlify.app/'>
          <img src= {logo} alt="Company Logo" /> 
        </a>
      </div>
    )
}

export default Brand;
