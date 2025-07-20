import React, { useState } from 'react';
import { Menu, X, Code, Home, Info, Calendar, Trophy, Users } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', icon: Home, href: '#home' },
    { name: 'About', icon: Info, href: '#about' },
    { name: 'Schedule', icon: Calendar, href: '#schedule' },
    { name: 'Prizes', icon: Trophy, href: '#prizes' },
    { name: 'Team', icon: Users, href: '#team' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10  rounded-lg flex items-center justify-center shadow-lg">
              <img src="https://www.bput.ac.in/asset/images/logo/bput-logo.png" alt="" />
            </div>
            <div className="text-black font-bold text-lg">HackFest 2025</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-1 text-black transition-colors duration-200 font-medium"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </a>
            ))}
          </div>

          {/* Register Button */}
          <div className="hidden md:block ">
            <button className="cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 text-black font-bold py-2 px-6 rounded-full text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Register Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/10 backdrop-blur-md rounded-lg mt-2 p-4 border border-white/20">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-black transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </a>
              ))}
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-black font-bold py-2 px-4 rounded-full text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg mt-4">
                Register Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;