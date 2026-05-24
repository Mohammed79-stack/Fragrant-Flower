'use client'

import WaguriSection from "./WaguriSection"
import Container from "./Wrappers/Container"
import Labeling from "./Wrappers/Labeling"


const Hero = () => {
  return (
    <div className="relative">
    <Labeling label="Waguri"/>
    <Container>

    <WaguriSection />

    </Container>

    </div>
  )
}

export default Hero