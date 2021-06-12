import React, { useState } from 'react'
import HeroSection from '../components/heroSction/HeroSection'
import InfoSection from '../components/infoSection/InfoSection'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import Services from '../components/services/Services'

import { homeObjOne, homeObjThree, homeObjTwo } from '../components/infoSection/Data'
import Footer from '../components/footer/Footer'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Services />
            <InfoSection {...homeObjThree} />
            <Footer />
        </>
    )
}

export default Home
