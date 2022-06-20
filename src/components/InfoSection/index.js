import React from 'react'
import { 
InfoContainer,
InfoWrapper,
InfoRow,
Column1,
Column2,
ImgWrap,
TextWrapper,
TopLine,
Heading,
Img,
Subtitle
} 
from './InfoElements';


const InfoSection = ({lightBg, id,  imgStart, topLine, headline, description, alt, img}) => {


    
  return (
    
    <>
    <InfoContainer lightBg={lightBg} id={id} >
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading>{headline}</Heading>
              <Subtitle>{description}</Subtitle>

            </TextWrapper>
          </Column1>
          <Column2>
          <ImgWrap>
          <Img src={img} alt={alt} />
          </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
</InfoContainer>
    </>
  )
}

export default InfoSection