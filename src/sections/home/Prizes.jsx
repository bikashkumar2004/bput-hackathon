import React from "react";
import { Gift, Briefcase, Users, Trophy } from "lucide-react";
import Heading from "../../components/typography/Heading";

const benefits = [
  {
    icon: <Users size={40} />,
    title: 'Special Rewards',
    description: 'Best Woman-Led Team, Green Technology Award and Jury\'s Choice',
  },
  {
    icon: <Gift size={40} />,
    title: 'Swag & Goodies',
    description: 'Participation Ceritificate, Exclusive t-shirts, stickers, and digital Badges',
  },
  {
    icon: <Briefcase size={40} />,
    title: 'Career Opportunities',
    description: 'Potential internships and job opportunities with sponsors',
  },
];


const Prizes = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Heading text={"Prizes & More"} />
        <div className="flex flex-col-reverse md:grid md:grid-cols-1 lg:grid-cols-2 gap-16 items-center ">
          {/* Left Side - Prize & More */}
          <div>
            <section className="flex flex-col items-center justify-center px-4 py-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
                {/* Top two cards */}
                {benefits.slice(0, 2).map((benefit, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl p-6 text-center text-white shadow-lg bg-gradient-to-r from-blue-500 to-purple-500"
                  >
                    <div className="flex justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm opacity-90">{benefit.description}</p>
                  </div>
                ))}
              </div>

              {/* Bottom single card */}
              <div className="mt-6 w-full max-w-2xl">
                <div className="rounded-xl p-6 text-center text-white shadow-lg bg-gradient-to-r from-blue-500 to-purple-500">
                  <div className="flex justify-center mb-4">
                    {benefits[2].icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {benefits[2].title}
                  </h3>
                  <p className="text-sm opacity-90">
                    {benefits[2].description}
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Side - Prize Money */}
          <div className="space-y-8">
            {/* First Prize */}
            <div className="">
              <div className="text-6xl md:text-[90px] font-bold bg-gradient-to-r from-primary via-primary to-purple-500 text-transparent bg-clip-text mb-2">
                ₹ 50,000
              </div>
              <div className="text-lg font-semibold text-gray-600 uppercase tracking-wider flex items-center gap-3">
                <Trophy /> FIRST PRIZE
              </div>
            </div>

            {/* Second Prize */}
            <div className="">
              <div className="text-6xl md:text-[90px] font-bold bg-gradient-to-r from-primary via-primary to-purple-500 text-transparent bg-clip-text mb-2">
                ₹ 30,000
              </div>
              <div className="text-lg font-semibold text-gray-600 uppercase tracking-wider flex items-center gap-3">
                <Trophy /> SECOND PRIZE
              </div>
            </div>

            {/* Third Prize */}
            <div className="">
              <div className="text-6xl md:text-[90px] font-bold bg-gradient-to-r from-primary via-primary to-purple-500 text-transparent bg-clip-text mb-2">
                ₹ 20,000
              </div>
              <div className="text-lg font-semibold text-gray-600 uppercase tracking-wider flex items-center gap-3">
                <Trophy /> THIRD PRIZE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
