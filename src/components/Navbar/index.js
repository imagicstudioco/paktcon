import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import Logo from '../../images/logo.png';
import { Button } from '../NavButtonElements';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks
} from './NavbarElements';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
          <NavLogo to='/' > 
            <img src={Logo} alt='PAKT Consulting' />
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
            
              <NavItem>
            <NavLinks to='/'onClick={closeMobileMenu}>Home</NavLinks>
            </NavItem>
        
            <NavItem>
            <NavLinks to='/about'onClick={closeMobileMenu}>About</NavLinks>
            </NavItem>
        
            <NavItem>
            <NavLinks to='/certifications'onClick={closeMobileMenu}> Certifications</NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks to='/services'onClick={closeMobileMenu}>Services</NavLinks>
            </NavItem>
        
            <NavItem>
            <NavLinks to='/contact'onClick={closeMobileMenu}>Contact</NavLinks>
            </NavItem>
         
            </NavMenu>
           
          </NavbarContainer>
         
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;