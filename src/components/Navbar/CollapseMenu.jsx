import React from 'react';
import styled from 'styled-components';
import {Link, animateScroll as scroll} from 'react-scroll';

import { useSpring, animated } from 'react-spring';

const CollapseMenu = (props) => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper style={{
        transform: open.interpolate({
          range: [0, 0.2, 0.3, 1],
          output: [0, -20, 0, -200],
        }).interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
      }}
      >
        <div className='nav-links-container'>
            <Link className='link' to="root-app" smooth={true} duration={1000} onClick={props.handleNavbar}>Home</Link>
            <Link className='link' to="about" smooth={true} duration={1000} onClick={props.handleNavbar}>About</Link>
            <Link className='link' to="services" smooth={true} duration={1000} onClick={props.handleNavbar}>Services</Link>
            <Link className='link' to="projects" smooth={true} duration={1000} onClick={props.handleNavbar}>Project</Link>
            <Link className='link' to="contact" smooth={true} duration={1000} onClick={props.handleNavbar}>Contact</Link>
        </div>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: #273755;
  position: fixed;
  top: 12vh;
  left: 0;
  right: 0;
  z-index: 10;
`;
