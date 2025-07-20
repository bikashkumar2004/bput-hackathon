import React from 'react';
import { Shield, Circle, MessageCircle, Search } from 'lucide-react';



const sponsors = [
  { name: 'Brave', icon: Shield },
  { name: 'Circle', icon: Circle },
  { name: 'Discord', icon: MessageCircle },
  { name: 'Google', icon: Search },
  { name: 'Google', icon: Search },
  { name: 'Jump', icon: Circle },
  { name: 'TechSpace', icon: Shield },
  { name: 'Magic Eden', icon: Circle }
];
const Step = ({ title }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};

const Partners = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary">Partners</span>
          </h2>
          <p className="text-xl text-gray-600">
            Proudly supported by industry leaders and innovators
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {sponsors.map((sponsor, index) => (
            <div
            key={index}
            className="h-28 flex items-center justify-center gap-3 p-6 rounded-2xl bg-blue-100 text-blue-800 transition-transform transform hover:scale-105 hover:bg-gradient-to-br hover:from-blue-400 hover:to-indigo-700 hover:text-white duration-300"
            style={{
              boxShadow: '6px 6px 12px rgba(0, 0, 0, 0.2)', // bottom-right custom shadow
            }}
          >
            <sponsor.icon/>
            <span className="text-lg font-semibold">{sponsor.name}</span>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;