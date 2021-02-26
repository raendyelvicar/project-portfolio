import React from 'react'
import {HeroContainer, HeroBg, VideoBg, HeroContent,HeroWrapper, HeroTitle, HeroDesc, HeroIntro, HeroBtn} from './HeroSectionElements'
import video from '../../assets/videos/video.mp4'
import Button from '../../components/Button'
import file from '../../assets/pdf/Resume_Raendy Andhika El Vicar.pdf'

const HeroSection = () => {
    return (
        <HeroContainer id="hero">
            <HeroBg>
                <VideoBg autoPlay loop muted src={video} type="video/mp4"/>
            </HeroBg>
            <HeroContent>
                <HeroWrapper className="hero-wrapper">
                    <HeroIntro>
                        Hello, my name is
                    </HeroIntro>
                    <HeroTitle>
                        Raendy Andhika El Vicar
                    </HeroTitle>
                    <HeroDesc>
                        Information System Student |<br/> Passionate about UI/UX Design and Web Development.
                    </HeroDesc>
                    <HeroBtn>
                        <Button className='white' file={file} fileName="Resume_Raendy Andhika El Vicar.pdf">Download CV</Button>
                        <Button>Contact</Button>
                    </HeroBtn>
                </HeroWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
