import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import logo from '../../Images/logo/logo9.png';
import '../SideNav/SideNav.css'

const SideNav = () => {
  return (
    <React.Fragment>
        <nav className="ms_sidemenu_wrapper">
         
            <div className="ms_sidemenu_inner">
                <div className="ms_logo_inner">
                    
                    <div className="ms_logo_open">
                        <a href="index.html"><img src={logo} alt="logo" className="img-fluid"/></a>
                    </div>
                </div>
                <div className="ms_nav_wrapper">
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/KO-Technologies-109501813920800/" title="Facebook">
                                <span className="nav_icon">
                                    <span><FaFacebookF /></span>
                                </span>
                                <span className="nav_text">FACEBOOK</span>      
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/kevin-ochieng-b09999139/" title="LinkedinIn">
                                <span className="nav_icon">
                                    <span><FaLinkedinIn /></span>
                                </span>
                                <span className="nav_text">LINKEDIN</span>     
                            </a>
                        </li>
                        <li>
                            <a href="album.html" title="Twitter">
                                <span className="nav_icon">
                                    <span><FaTwitter /></span>
                                </span>
                                <span className="nav_text">TWITTER</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/orgs/K-O-Tech/dashboard" title="Github">
                                <span className="nav_icon">
                                    <span><FaGithub/></span>
                                </span>
                                <span className="nav_text">GITHUB</span>     
                            </a>
                        </li>
                        <li>
                            <a href="music-videos.html" title="Videos">
                                <span className="nav_icon">
                                    <span className="fa fa-video-camera" aria-hidden="true"></span>
                                </span>
                                <span className="nav_text">VIDEOS</span>      
                            </a>
                        </li>
                        <li>
                            <a href="gallery2.html" title="Gallery">
                                <span className="nav_icon">
                                    <span className="fa fa-picture-o" aria-hidden="true"></span>
                                </span>
                                <span className="nav_text">GALLERY</span>       
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </React.Fragment>

   
       
  )
}

export default SideNav
