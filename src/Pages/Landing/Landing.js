import React from 'react'
import NavBar from '../../Components/NavBar'
import HeroSection from './HeroSection'
import LandEnd from './LandEnd'
import LandQuiz from './LandQuiz'

function Landing() {
    return (
        <div>
            <NavBar />
            <HeroSection />
            <LandQuiz />
            <LandEnd />
        </div>
    )
}

export default Landing
