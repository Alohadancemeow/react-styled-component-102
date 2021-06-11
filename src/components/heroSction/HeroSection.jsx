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
        <HeroContainer>

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
                <HeroH1>Virtual Banking Made Easy</HeroH1>
                <HeroP>
                    Sign up for accoun today and receive $250 in
                    credit towards your next payment.
                </HeroP>
                <HeroWrapper>
                    <Button
                        to="signup"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary='true'
                        // dark='true'
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
