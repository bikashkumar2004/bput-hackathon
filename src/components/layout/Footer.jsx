import React from 'react';
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, Youtube, Instagram, LucideWebhook, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          <div>
            <div className="text-2xl font-bold mb-4">
              BPUT Hackathon <span className="text-primary">2025</span>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering innovation through collaborative problem-solving and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.youtube.com/bputodisha" className="text-gray-400 hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://bput.ac.in" className="text-gray-400 hover:text-primary transition-colors">
                <Globe size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors">About</a></li>
              <li><a href="#schedule" className="text-gray-400 hover:text-primary transition-colors">Schedule</a></li>
              <li><a href="#prizes" className="text-gray-400 hover:text-primary transition-colors">Prizes</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <span className="text-gray-400">hackathon@bput.ac.in</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                <span className="text-gray-400">Rourkela, Odisha</span>
              </li>
            </ul>
          </div>

          {/* <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with the latest hackathon news</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-40 flex-1 px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-orange-500"
              />
              <button className="bg-primary hover:bg-blue-600 px-4 py-2 rounded-r-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div> */}
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © BPUT Hackathon 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;