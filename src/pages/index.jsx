import React, { useState } from 'react'
import HeroSection from '../components/heroSction/HeroSection'
import InfoSection from '../components/infoSection/InfoSection'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'

import { homeObjOne } from '../components/infoSection/Data'

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
            <InfoSection {...homeObjOne}/>
        </>
    )
}

export default Home
