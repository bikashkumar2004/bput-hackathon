import React, { useState, useEffect } from "react";
import { Calendar, MapPin, Users, Trophy, Code, Zap } from "lucide-react";
import Header from "./Header";

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set hackathon date (you can modify this)
  const hackathonDate = new Date("2025-08-30T09:00:00");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = hackathonDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 overflow-hidden">
      <Header />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>

      <div className="relative z-10 container mx-auto px-6 pt-20 pb-8">
        {/* Header with logo and college info */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-2xl mr-4">
              <img
                src="https://www.bput.ac.in/asset/images/logo/bput-logo.png"
                alt=""
              />
            </div>
            <div className="flex items-center p-4 w-fit rounded-md ">
              {/* Left Vertical BPUT */}
              <div className="flex flex-col text-white font-semibold text-sm tracking-wider pr-2 mr-4">
                <span className="rotate-0">B</span>
                <span className="rotate-0">P</span>
                <span className="rotate-0">U</span>
                <span className="rotate-0">T</span>
              </div>

              {/* Right Title Block */}
              <div className="text-white">
                <h1 className="text-2xl font-semibold leading-snug">
                  Biju Patnaik University of Technology, Odisha
                </h1>
                <p className="text-lg font-medium text-white mt-1">
                  ବିଜୁ ପଟ୍ଟନାୟକ ବୈଷୟିକ ବିଶ୍ୱବିଦ୍ୟାଳୟ, ଓଡ଼ିଶା
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center text-indigo-200 mb-1">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="text-sm">Rourkela, Odisha, 761590</span>
          </div>
        </div>

        {/* Main hero content */}
        <div className="text-center mb-4">
          <h1 className="text-4xl text-indigo-100  max-w-2xl mx-auto">
            Learn, Build, Innovate
          </h1>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            HACK
            <span className="bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
              FEST
            </span>
            <br />
            <span className="text-2xl md:text-3xl font-bold text-indigo-200">
              2025
            </span>
          </h2>

          <p className="text-base md:text-lg text-indigo-100 mb-4 max-w-3xl mx-auto leading-relaxed">
            Join the ultimate coding marathon where brilliant minds come
            together to build the future. Code, create, and compete for amazing
            prizes!
          </p>

          {/* Countdown Timer */}
          <div className="mb-4">
            <h3 className="text-lg font-bold text-white mb-3">
              Event Starts In
            </h3>
            <div className="flex justify-center space-x-3 md:space-x-6">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 md:p-4 min-w-[70px] md:min-w-[80px]"
                >
                  {/* <div className="text-xl md:text-2xl font-black text-white mb-1">
                    {item.value.toString().padStart(2, "0")}
                  </div> */}
                  <span className="countdown font-mono text-5xl">
                    <span
                      style={{ "--value": item.value.toString().padStart(2, "0") }}
                      aria-live="polite"
                      aria-label={item.value.toString().padStart(2, "0")}
                    >
                      {/* {item.value.toString().padStart(2, "0")} */}
                    </span>
                  </span>
                  <div className="text-indigo-200 text-sm font-medium uppercase tracking-wide">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-6 rounded-full text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Register Now
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </button>

            <button className="group cursor-pointer bg-white/10 backdrop-blur-sm text-white font-bold py-3 px-6 rounded-full text-base border-2 border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105">
              <div className="flex items-center">
                <Trophy className="w-5 h-5 mr-2" />
                View Problems
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
