import React, { useState } from 'react'
import Video from '../../videos/video3.mp4'
import { Button } from '../button.element'
import {
    HeroBg,
    HeroContainer,
    VideoBg,
    ArrowForward,
    ArrowRight,
    HeroContent,
    HeroH1,
    HeroP,
    HeroWrapper
} from './hero.element'

const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => setHover(!hover)

    return (
        <HeroContainer id="home">

            <HeroBg>
                <VideoBg
                    autoPlay
                    loop
                    muted
                    src={Video}
                    type="video/mp4"
                />
            </HeroBg>

            <HeroContent>
                <HeroH1>Lorem ipsum dolor sit amet.</HeroH1>
                <HeroP>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit exercitationem suscipit architecto?
                </HeroP>
                <HeroWrapper>
                    <Button
                        to="signup"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary='true'
                        // dark='true'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                    >
                        Get started
                        {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroWrapper>
            </HeroContent>

        </HeroContainer>
    )
}

export default HeroSection
