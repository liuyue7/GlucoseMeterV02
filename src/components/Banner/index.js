import React from 'react';
import styled from 'styled-components';

import bannerImage from '../../assets/Banner-image-11.png';

const StyledBanner = styled.div`
  width: 100%;
  height: 25vh;
  border-radius: 0 0 30px 30px;
  filter: drop-shadow(0px 0px 10px rgba(0,0,0,.5));
  position: relative;
`;

const BannerColor = styled.div`
  width: 100%;
  height: 100%;
background: rgb(95,207,255);
background: linear-gradient(90deg, rgba(95,207,255,0.6) 0%, rgba(38,29,253,0.6) 50%, rgba(189,137,255,0.6) 100%);
  border-radius: 0 0 30px 30px;
`;

const StyledTitle = styled.label`
  position: absolute;
  left: 50%;
  top: 60%;
  transform: translate(-50%, -60%);
  font-weight: bold;
  font-size: 36px;
  color: white;
  filter: drop-shadow(0px 0px 10px rgba(0,0,0,.5));
  z-index: 1;
`;

const StyledCopyText = styled.label`
  position: absolute;
  left: 50px;
  top: 20px;
  font-size: 9px;
  color: white;
`;

const BannerImageContainer = styled.div`
  position: absolute;
  left: 45%;
  top: 0;
  z-index: -1;
  height: 25vh;
  overflow: hidden;
`;

const BannerImage = styled.img`
  height: 80vh;
  top: 50%;
  transform: translate(0, -35%);
`;

function Banner() {
  return (
    <StyledBanner>
      <BannerColor/>
    	<StyledTitle>
    	 Glucose Meter Translator
    	</StyledTitle>
      <BannerImageContainer>
        <BannerImage src={bannerImage} />
      </BannerImageContainer>
      <StyledCopyText>
        BioHues Digital © 2020 Pardee Lab. All rights reserved.
      </StyledCopyText>
    </StyledBanner>
  );
}

export default Banner;