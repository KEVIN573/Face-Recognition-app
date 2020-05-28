import React from 'react';
import SocialLinks from '../SocialLinks/SocialLinks';
import '../Footer/Footer.css'


const Footer = () => {
const year = new Date();
    return ( 
        <footer className="footer-section">
            <SocialLinks />
            <div className='footer-text-container'>
                <p>Copyright &copy; {year.getFullYear()}, All rights Reserved.</p>
                <p>Created By <a href='https://ko-technologies.netlify.app/'>K&O Technologies.</a></p>
            </div>
		</footer>
     );
}
 
export default Footer;