import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import '../SocialLinks/SocialLinks.css'

const SocialLinks = () => {
    return (  
        <div className="social-links">
            <a href="https://www.facebook.com/KO-Technologies-109501813920800/"><i><FaFacebookF /></i></a>
            <a href="https://twitter.com/home"><i><FaTwitter /></i></a>
            <a href="https://www.linkedin.com/in/kevin-ochieng-b09999139/"><i><FaLinkedinIn /></i></a>
            <a href="https://github.com/orgs/K-O-Tech/dashboard"><i><FaGithub/></i></a>
        </div>	 	
    );
}
 
export default SocialLinks;