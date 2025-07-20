import HeroSection from "../sections/home/HeroSection"
import About from "../sections/home/About"
import ProblemSectors from "../sections/home/ProblemSectors"
import Partners from "../sections/home/Partners"
import Schedule from "../sections/home/Schedule"
import Prizes from "../sections/home/Prizes"
import FAQ from "../sections/home/FAQ"


const Home = () => {
    return (
        <div className="">

            <HeroSection />
            <About />
            <ProblemSectors />
            <Partners />
            <Schedule />
            <Prizes />
            <FAQ />

        </div>
    )
}

export default Home