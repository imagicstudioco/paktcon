import React from 'react';
import { Button } from '../ButtonElements';
import Video from '../../videos/video.mp4';
import {Link} from 'react-scroll';
import { 
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    
} 
from './HeroElements';

const Herosection = () => {




    return (
      <HeroContainer >
<HeroBg>
<VideoBg autoPlay loop muted src={Video} type='video/mp4' />
</HeroBg>
<HeroContent>
    
        <Button primary='true' dark='true'>
            <Link to='about'>
            Get Started
            </Link> 
        </Button>

  
</HeroContent>
</HeroContainer>
);

    };


export default Herosection;