import React from 'react';
import logo from '../../Images/logo/ko-logo.png';
import '../Brand/Brand.css'
import Tilt from 'react-tilt'
 


const Brand = () => {
    return (
      <div className="ko-brand-container">
        <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
          <div className="Tilt-inner"> 
            <a href='https://ko-technologies.netlify.app/'>
              <img src= {logo} alt="Company Logo" /> 
            </a>
          </div>
        </Tilt>
        
      </div>
    )
}

export default Brand;
