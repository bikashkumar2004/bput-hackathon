import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { navItems } from '../../constants/constants';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    if (isHome) {
      window.addEventListener('scroll', handleScroll);
    } else {
      setIsScrolled(true); // always styled on other pages
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const navbarClasses = isHome
    ? isScrolled
      ? 'bg-gradient-to-r from-indigo-900 to-pink-900'
      : 'bg-transparent'
    : 'bg-gradient-to-r from-indigo-900 to-pink-900';

  return (
    <nav className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarClasses}`}>
      <div className="container mx-auto px-6 w-full">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 cursor-pointer">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-lg">
              <img
                src="https://www.bput.ac.in/asset/images/logo/bput-logo.png"
                alt="Logo"
                className="w-10 h-11"
              />
            </div>
            <div className={`font-roboto-slab uppercase font-bold text-xl transition-all ${isScrolled
                ? 'bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-500'
                : 'text-white'
              }`}>
              Hackathon 2025
            </div>
          </Link>

          {/* Desktop Navigation & Register Button */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-1 font-semibold text-sm transition-all duration-200 ${isActive
                        ? 'text-yellow-300'
                        : isScrolled
                          ? 'text-white hover:text-yellow-300'
                          : 'text-white hover:text-indigo-200'
                      }`}
                  >
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
            <button
              className={`cursor-pointer font-bold py-2 px-6 rounded-full text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg ${isScrolled
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                  : 'bg-white/10 text-white border border-white/20 backdrop-blur'
                }`}
            >
              Register Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full z-40 bg-gradient-to-br from-indigo-900 to-pink-900 text-white shadow-lg transition-all duration-300">
            <div className="flex flex-col space-y-4 p-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-2 font-medium transition duration-200 ${isActive ? 'text-yellow-300' : 'hover:text-yellow-300'
                      }`}
                  >
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              <button className="bg-white text-indigo-900 font-bold py-2 px-4 rounded-full text-sm hover:bg-yellow-300 transition-all duration-300 hover:scale-105 hover:shadow-lg mt-2">
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
