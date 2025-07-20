import React from 'react';
import { GraduationCap, Megaphone, Users, Building } from 'lucide-react';

const sectors = [
  {
    title: 'Education',
    icon: GraduationCap,
    description: 'Develop innovative solutions to enhance learning experiences and educational accessibility.',
    image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    title: 'Advertisement',
    icon: Megaphone,
    description: 'Create cutting-edge advertising technologies and personalized marketing solutions.',
    image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    title: 'Hiring',
    icon: Users,
    description: 'Build platforms that revolutionize recruitment and talent acquisition processes.',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    title: 'Community',
    icon: Building,
    description: 'Design solutions that bring communities together and enhance social connections.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

const ProblemSectors = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Problem <span className="text-primary">Sectors</span> - Theme
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from diverse problem domains and create solutions that make a real impact
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-primary p-2 rounded-lg">
                      <sector.icon className="text-white" size={20} />
                    </div>
                    <h3 className="text-white font-bold text-xl">{sector.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {sector.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="bg-primary p-3 rounded-full">
                <Building className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Convert Your Idea Into Action / Product</h3>
            </div>
            <button className="hover:scale-105 cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold duration-300 ">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSectors;