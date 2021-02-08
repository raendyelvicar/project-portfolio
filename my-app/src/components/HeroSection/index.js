import React from 'react'
import {HeroContainer, HeroBg, VideoBg, HeroContent,HeroWrapper, HeroTitle, HeroDesc, HeroIntro, HeroBtn, CtaBtn, ResumeBtn} from './HeroSectionElements'
import video from '../../videos/video.mp4'
import { Paragraph } from '../../GlobalVariables'

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={video} type="video/mp4"/>
            </HeroBg>
            <HeroContent>
                <HeroWrapper className="hero-wrapper">
                    <HeroIntro>
                        Hello,
                    </HeroIntro>
                    <HeroTitle>
                        My name is Raendy
                    </HeroTitle>
                    <HeroDesc>
                        Information System Student |<br/> Passionate about UI/UX Design and Web Development.
                    </HeroDesc>
                    <HeroBtn>
                        <CtaBtn>Contact</CtaBtn>
                        <ResumeBtn>Resume</ResumeBtn>
                    </HeroBtn>
                </HeroWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
