import React from 'react';
import { Button } from '../NavButtonElements';
import { 

    SidebarContainer, 
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLinks 
} 
from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
      
<SidebarContainer isOpen={isOpen} onClick={toggle}>
    <Icon onClick={toggle}>
    <CloseIcon />
    </Icon>
    <SidebarWrapper>
    <SidebarMenu>
    <SidebarLinks to='/' onClick={toggle}>Home</SidebarLinks>
   <SidebarLinks to='/about' onClick={toggle}>About</SidebarLinks>
   <SidebarLinks to='/certifications' onClick={toggle}> Certifications</SidebarLinks>
    <SidebarLinks to='/services' onClick={toggle}>Services</SidebarLinks>
   <SidebarLinks to='/contact' onClick={toggle}>Contact</SidebarLinks>
   <Button to='/assesment'  primary='true' dark='true'>
          Free Security Assesment 
        </Button>
    </SidebarMenu>
    
    </SidebarWrapper>
</SidebarContainer>

        );

    };


export default Sidebar;