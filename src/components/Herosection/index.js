import React, {useState} from 'react';
import { Button } from '../ButtonElements';
import Video from '../../videos/video.mp4';
import { 
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} 
from './HeroElements';

const Herosection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


    return (
      <HeroContainer >
<HeroBg>
<VideoBg autoPlay loop muted src={Video} type='video/mp4' />
</HeroBg>
<HeroContent>
    <HeroBtnWrapper>
        <Button 
        to='about' 
        onMouseEnter={onHover} 
        onMouseLeave={onHover} 
        primary='true' 
        dark='true'
        smooth={true}
        duration={500}
        spy={true}
        exact='true'
        offset={-80}
        >
            Get Started { hover ? <ArrowForward /> : <ArrowRight />}
        </Button>

    </HeroBtnWrapper>
</HeroContent>
</HeroContainer>
);

    };


export default Herosection;