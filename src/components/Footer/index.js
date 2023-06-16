import React from 'react';
import Logo from '../../images/logo-footer.png';

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink
} from './Footer.elements';

function Footer() {
  return (
    <FooterContainer>
    
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
           <img src={Logo} alt='PAKT Consulting' />
           © PAKT Consulting Ltd. 
          </SocialLogo>
          
          <SocialIcons>
          <SocialIconLink href='/linkedin' target="_blank" rel="noreferrer"  aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
            <SocialIconLink href='/facebook' target="_blank" rel="noreferrer"  aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='/instagram' target="_blank" rel="noreferrer"  aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href='/twitter' target="_blank" rel="noreferrer"  aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
          
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;