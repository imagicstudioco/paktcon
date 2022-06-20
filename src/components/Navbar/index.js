import React from 'react';
import Logo from '../../images/logo.png';
import { FaBars } from 'react-icons/fa';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks 
} 
from './NavbarElements';

const Navbar = ({toggle}) => {
    return (
         <>
        <Nav>
            <NavbarContainer>
            <NavLogo to='/' > 
            <img src={Logo} height={75} width={367} alt='Pakt Consulting' />
            </NavLogo>
            <MobileIcon onClick={toggle}>
            <FaBars />
            </MobileIcon>
            <NavMenu>
            <NavItem>
            <NavLinks to='/'>Home</NavLinks>
            </NavItem>
        
            <NavItem>
            <NavLinks to='/about'>About</NavLinks>
            </NavItem>
        
            <NavItem>
            <NavLinks to='/certifications'> Certifications</NavLinks>
            </NavItem>
            
            <NavItem>
            <NavLinks to='/partnerships'>Partnerships & Affiliations</NavLinks>
            </NavItem>
    
            <NavItem>
            <NavLinks to='/services'>Services</NavLinks>
            </NavItem>
        
            <NavItem>
            <NavLinks to='/contact'>Contact</NavLinks>
            </NavItem>

            </NavMenu>
            </NavbarContainer>
        </Nav>
        </>

        );

    };


export default Navbar;