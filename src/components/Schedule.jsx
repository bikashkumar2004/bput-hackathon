import React from 'react';
import { Clock, Calendar } from 'lucide-react';

const scheduleData = [
  {
    time: '10:00-10:00',
    phase: 'Phase - I',
    title: 'Registration & Team Formation',
    description: 'Check-in, team formation, and opening ceremony'
  },
  {
    time: '12:00-01:00',
    phase: 'Phase - II',
    title: 'Problem Statement Release',
    description: 'Official problem statements announced and ideation begins'
  },
  {
    time: '01:00-04:00',
    phase: 'Phase - III',
    title: 'Development Phase',
    description: 'Intensive coding and development period'
  },
  {
    time: '05:00-06:00',
    phase: 'Phase - IV',
    title: 'Final Presentation',
    description: 'Project presentations and judging'
  }
];

const Schedule = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Hackathon <span className="text-primary">Schedule</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            24-hour timeline packed with innovation and collaboration
          </p>
          
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-xl border border-gray-200">
            <Calendar className="text-primary" size={20} />
            <span className="font-semibold text-gray-800">Sunday, 30 November 2025</span>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary"></div>
            
            <div className="space-y-6">
              {scheduleData.map((item, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <Clock className="text-white" size={24} />
                  </div>
                  
                  <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-primary font-semibold">{item.time}</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {item.phase}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;