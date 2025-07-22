import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";

import { Users, Trophy, Code, Terminal, Cpu, GitBranch, Database, Zap } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import BputLogo from '../../assets/logo/bput-logo.png'
import FlipNumberAnimation from "../../components/countdown/FlipNumberAnimation";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const hackathonDate = new Date("2025-08-30T09:00:00");



  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = hackathonDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="-mt-20 relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 overflow-hidden">


      {/* Enhanced Grid Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(124, 58, 237, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(124, 58, 237, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[Code, Terminal, Cpu, GitBranch, Database, Zap].map((Icon, i) => (
          <Icon
            key={i}
            className="absolute text-white/20 animate-float-tech"
            style={{
              left: `${10 + (i * 15)}%`,
              top: `${20 + (i * 10)}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: '8s'
            }}
            size={24}
          />
        ))}
      </div>


      <main className="relative z-10 container mx-auto px-6 pt-24 pb-12">

        {/* <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div> */}


        <div className="relative z-10 pt-6 flex justify-center mb-5">
          <img
            src={BputLogo}
            alt="BPUT Logo"
            className="w-28 md:w-32 lg:w-40 drop-shadow-lg"
          />
        </div>
        {/* Hero Text */}
        <section className="text-center mb-4">
          <h1 className="text-2xl md:text-2xl text-indigo-100 font-semibold font-roboto-mono">
            <Typewriter words={["Learn", "Build", "Innovate"]} loop cursor cursorStyle="_" typeSpeed={80} deleteSpeed={50} delaySpeed={500} />
          </h1>
          <h2 className="text-4xl md:text-5xl font-black font-roboto-slab text-white leading-tight drop-shadow-[0_0_15px_rgba(124,58,237,0.8)]">
            BPUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse">HACKATHON</span> <span className="text-indigo-300">2025</span>
          </h2>

          {/* College Info */}
          <div className="text-center mt-4 w-full flex items-center justify-center">
            <h3 className="text-xl font-extrabold font-roboto-mono bg-white w-fit text-primary uppercase px-2">7th November 2025, Biju Patnaik University of Technology, Rourkela, Odisha</h3>
          </div>

          <p className="text-base md:text-lg text-indigo-100 mt-4 max-w-3xl mx-auto leading-relaxed">
            Join the ultimate coding marathon where brilliant minds come together to build the future. Code, create, and compete for amazing prizes!
          </p>
        </section>




        {/* Countdown */}
        <div className="text-center mb-12">
          <h4 className="text-lg font-bold mb-4 text-white">Event Starts In</h4>
          <div className="flex justify-center flex-wrap gap-4">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item, index) => (
              <Tilt key={index} glareEnable glareMaxOpacity={0.2} className="bg-white/10 backdrop-blur-md p-4 w-24 rounded-xl">
                <div className="text-3xl font-bold text-white mb-1">
                  <FlipNumberAnimation value={item.value} />
                </div>
                <div className="text-indigo-200 text-sm font-medium uppercase tracking-wider">
                  {item.label}
                </div>
              </Tilt>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="relative group text-white py-3 px-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg hover:scale-105 transition-transform">
            <span className="flex items-center font-semibold">
              <Users className="w-5 h-5 mr-2" /> Register Now
            </span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur opacity-70 group-hover:opacity-100 transition-opacity duration-300 z-[-1]" />
          </button>

          <button onClick={() => navigate("/problem-statements")} className="bg-white/10 cursor-pointer backdrop-blur-lg border border-white/20 py-3 px-6 rounded-full text-white hover:bg-white/20 hover:scale-105 transition-all font-semibold flex items-center">
            <Trophy className="w-5 h-5 mr-2" /> Problem Statements
          </button>
        </div>
      </main>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => {
          const symbols = ["</>", "let", "const", "!", "import"];
          const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];

          return (
            <div
              key={i}
              className="absolute text-white/25 text-xs font-mono animate-float-tech"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
                opacity: 0,
              }}
            >
              {randomSymbol}
            </div>
          );
        })}
      </div>


    </div>
  );
};

export default HeroSection;
