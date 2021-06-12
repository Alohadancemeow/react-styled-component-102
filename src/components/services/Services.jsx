import React from 'react'
import Icon1 from '../../images/image1.svg'
import Icon2 from '../../images/image2.svg'
import Icon3 from '../../images/image3.svg'
import {
    ServicesCard,
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesIcon,
    ServicesP,
    ServicesWrapper
} from './services.element'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Services Section</ServicesH1>
            <ServicesWrapper>

                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>1st Sevice</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur odio quibusdam voluptatibus.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>2nd Service</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur odio quibusdam voluptatibus.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>3rd Service</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur odio quibusdam voluptatibus.</ServicesP>
                </ServicesCard>

            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
