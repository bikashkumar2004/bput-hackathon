
import { Calendar, Rocket, Building, CheckCircle } from 'lucide-react';
import { scheduleData } from '../../constants/constants';
import Heading from '../../components/typography/Heading';

const getPhaseStatus = (startDate, endDate) => {
  const now = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);

  if (now < start) {
    return 'upcoming';
  } else if (now >= start && now <= end) {
    return 'ongoing';
  } else {
    return 'completed';
  }
};

const formatDateRange = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return `${formatDate(start)} - ${formatDate(end)}`;
};

// const getStatusColor = (status) => {
//   switch (status) {
//     case 'upcoming':
//       return 'bg-blue-100 text-blue-800';
//     case 'ongoing':
//       return 'bg-green-100 text-green-800';
//     case 'completed':
//       return 'bg-gray-100 text-gray-600';
//     default:
//       return 'bg-gray-100 text-gray-600';
//   }
// };

const Schedule = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Technical Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(124, 58, 237, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(124, 58, 237, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Terminal Header */}
        {/* <div className="flex justify-center mb-8">
          <div className="bg-gray-900 border border-purple-300 rounded-lg px-4 py-2 font-mono text-sm shadow-lg">
            <span className="text-green-400">timeline@hackfest:~$</span>
            <span className="text-white ml-2">cat hackathon_phases.json</span>
            <span className="animate-pulse text-purple-400 ml-1">|</span>
          </div>
        </div> */}

        <div className="text-center mb-16">
          <Heading text={"Hackathon Journey"} />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive multi-phase competition designed to identify and nurture the best innovative solutions
          </p>

          <div className="w-fit mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-10 bg-gradient-to-r from-purple-50 to-pink-50 px-6 py-3 rounded-xl border border-purple-200 mt-6">
            <p className='flex items-center gap-3'>

              <Calendar className="text-purple-600" size={20} />
              <span className="font-semibold text-gray-800">7th November 2025</span>
            </p>
            <p className='flex items-center gap-3'>
              <Building className="text-purple-600" size={20} />
              <span className="font-semibold text-gray-800">BPUT,Chhend, Rourkela</span>
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Main Timeline Line */}
            <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-orange-500 rounded-full"></div>

            <div className="space-y-12">
              {scheduleData.map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline Node */}
                  <div className="absolute left-1 md:left-1/2 md:transform md:-translate-x-1/2 z-20">
                    <div className={`w-16 h-16 bg-gradient-to-r ${getPhaseStatus(item.startDate, item.endDate) === 'completed' ? 'from-gray-400 to-gray-500' : item.color} rounded-full flex items-center justify-center shadow-lg border-4 border-white group hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="text-white" size={24} />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-14 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <div className={`relative group ${getPhaseStatus(item.startDate, item.endDate) === 'completed' ? 'opacity-60' : ''}`}>
                      {/* Glowing border effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${getPhaseStatus(item.startDate, item.endDate) === 'completed' ? 'from-gray-300 to-gray-400' : item.color} rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                      <div className={`relative bg-gradient-to-r ${getPhaseStatus(item.startDate, item.endDate) === 'completed' ? 'from-gray-50 to-gray-100' : item.bgColor} border-2 ${getPhaseStatus(item.startDate, item.endDate) === 'completed' ? 'border-gray-300' : item.borderColor} rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300`}>
                        {/* Phase Badge */}
                        <div className="flex items-center justify-between mb-4">
                          <span className={`bg-gradient-to-r ${getPhaseStatus(item.startDate, item.endDate) === 'completed' ? 'from-gray-400 to-gray-500' : item.color} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`}>
                            {item.phase}
                          </span>

                        </div>

                        {/* Date Range and Status */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 px-3 py-2 rounded-lg">
                            <div className="flex items-center gap-2">
                              <Calendar className="text-gray-600" size={14} />
                              <span className="text-sm font-medium text-gray-700">
                                {formatDateRange(item.startDate, item.endDate)}
                              </span>
                            </div>
                          </div>
                          {/* <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${getStatusColor(getPhaseStatus(item.startDate, item.endDate))}`}>
                            {getPhaseStatus(item.startDate, item.endDate)}
                          </span> */}
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                          {item.title}
                        </h3>

                        <div className="space-y-3">
                          {item.items.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-start gap-3">
                              <CheckCircle className={`${getPhaseStatus(item.startDate, item.endDate) === 'completed' ? 'text-gray-400' : 'text-green-500'} mt-0.5 flex-shrink-0`} size={16} />
                              <span className="text-gray-700 text-sm leading-relaxed">{detail}</span>
                            </div>
                          ))}
                        </div>

                        {/* Progress indicator */}
                        <div className="mt-6 flex items-center gap-2">
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div
                              className={`bg-gradient-to-r ${getPhaseStatus(item.startDate, item.endDate) === 'completed' ? 'from-gray-400 to-gray-500' : item.color} h-2 rounded-full transition-all duration-500`}
                              style={{
                                width: getPhaseStatus(item.startDate, item.endDate) === 'completed' ? '100%' :
                                  getPhaseStatus(item.startDate, item.endDate) === 'ongoing' ? '50%' : '0%'
                              }}
                            ></div>
                          </div>
                          <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                            {getPhaseStatus(item.startDate, item.endDate)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="relative group max-w-2xl mx-auto">
            {/* Glowing border effect */}
            {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div> */}
            <div className="relative bg-white rounded-2xl shadow-xl border border-purple-200 p-8">
              {/* Terminal header for CTA */}
              {/* <div className="flex justify-center mb-6">
                <div className="bg-gray-900 border border-purple-300 rounded-lg px-3 py-1 font-mono text-xs">
                  <span className="text-green-400">registration@hackfest:~$</span>
                  <span className="text-white ml-2">./join_competition.sh</span>
                </div>
              </div> */}

              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full shadow-lg">
                  <Rocket className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Ready to Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Journey</span>?
                </h3>
              </div>

              <p className="text-gray-600 mb-6 font-mono text-sm">
                Join thousands of innovators in this epic coding adventure
              </p>

              <button className="relative group text-white py-3 px-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] font-semibold">
                <span className="flex items-center relative z-10">
                  Register
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur opacity-70 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;