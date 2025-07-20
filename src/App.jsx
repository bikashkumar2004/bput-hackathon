import React, { useState } from 'react';
import About from './components/About';
import ProblemSectors from './components/ProblemSectors';
import Partners from './components/Partners';
import Schedule from './components/Schedule';
import Prizes from './components/Prizes';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';



function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <HeroSection/>
      <About />
      <ProblemSectors />
      <Partners />
      <Schedule />
      <Prizes />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;