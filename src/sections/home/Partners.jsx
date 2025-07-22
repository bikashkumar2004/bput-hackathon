import React from 'react';
import Heading from '../../components/typography/Heading';

const sponsors = [
  { name: 'Brave' },
  { name: 'Circle' },
  { name: 'Discord' },
  { name: 'Google' },
  { name: 'Google' },

];

const Partners = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Heading text={'OUR PARTNERS'} />

        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-8 mt-10 place-items-center">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src="https://bputmic.in/assets/bput-logo-hiYptyQQ.png"
                alt={sponsor.name}
                className="w-20 h-20 object-contain"
              />
              <span className="mt-2 text-sm font-medium text-gray-700">{sponsor.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
