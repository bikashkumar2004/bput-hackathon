
import {
  Building,
  ShieldCheck,
  Leaf,
  GraduationCap,
  Stethoscope,
  Tractor,
  Users,
  Lightbulb
} from "lucide-react";
import Heading from '../../components/typography/Heading';

const sectors = [
  {
    title: 'Smart Cities & Infrastructure',
    icon: Building,
    description: 'Innovate urban planning, traffic systems, and waste management through technology.',
    image: 'https://images.pexels.com/photos/3739123/pexels-photo-3739123.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    title: 'Healthcare',
    icon: Stethoscope,
    description: 'Build remote diagnostic tools, mental health solutions, and accessible healthcare platforms.',
    image: 'https://images.pexels.com/photos/7580250/pexels-photo-7580250.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    title: 'Agriculture & Food Security',
    icon: Tractor,
    description: 'Develop smart irrigation systems, crop monitoring, and food supply chain innovations.',
    image: 'https://images.pexels.com/photos/2255801/pexels-photo-2255801.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    title: 'Education & Skilling',
    icon: GraduationCap,
    description: 'Create interactive learning tools and skill mapping platforms for lifelong learning.',
    image: 'https://images.pexels.com/photos/4144223/pexels-photo-4144223.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    title: 'Environment & Energy',
    icon: Leaf,
    description: 'Innovate in renewable energy, pollution tracking, and sustainable development solutions.',
    image: 'https://images.pexels.com/photos/235925/pexels-photo-235925.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    title: 'Cybersecurity & Digital Safety',
    icon: ShieldCheck,
    description: 'Protect users with tools for threat detection, data privacy, and secure digital experiences.',
    image: 'https://images.pexels.com/photos/5380659/pexels-photo-5380659.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    title: 'Social Inclusion & Public Services',
    icon: Users,
    description: 'Develop e-governance apps, disaster response tech, and accessibility-first platforms.',
    image: 'https://images.pexels.com/photos/6646914/pexels-photo-6646914.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

const ProblemSectors = () => {
  return (
    <section className="py- bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Heading text={'PROBLEM SECTORS'} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector, index) => (
            <div key={index} className="bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow group  ">
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
          <div className="bg-blue-50  border border-blue-200 overflow-hidden hover:shadow-xl transition-shadow flex flex-col items-center justify-between p-4 rounded-tr-4xl rounded-bl-4xl">
            <div className="flex flex-col items-center justify-evenly h-full mb-4 ">
              <div className="bg-primary p-3 rounded-full">
                <Lightbulb className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold text-primary leading-tight">
                Have Some Ideas ?
              </h3>
              <h3 className="text-lg font-bold text-gray-900 leading-tight text-center">
                Convert Your Idea <br /> Into Action !
              </h3>
            </div>
            <button className="hover:scale-105 cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 font-semibold duration-300">
              Register Now
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProblemSectors;