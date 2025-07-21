import HeroSection from "../sections/home/HeroSection"
import About from "../sections/home/About"
import ProblemSectors from "../sections/home/ProblemSectors"
import Partners from "../sections/home/Partners"
import Schedule from "../sections/home/Schedule"
import Prizes from "../sections/home/Prizes"
import FAQ from "../sections/home/FAQ"
import Contact from "../sections/home/Contact"


const Home = () => {
    return (
        <>

            <HeroSection />
            <About />
            <ProblemSectors />
            <Partners />
            <Schedule />
            <Prizes />
            <FAQ />
            <Contact />

        </>
    )
}

export default Home