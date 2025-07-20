// import React, { useState, useEffect } from "react";
// import { Calendar, MapPin, Clock } from "lucide-react";

// const About = () => {
//   return (
//     <section id="about" className="py-20 bg-white relative">
//       {/* <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="absolute left-0 top-0 w-full h-screen"
//         viewBox="0 0 1920 1080"
//         preserveAspectRatio="none"
//       >
//         <path
//           d="M 200 0 Q 300 270 200 540 T 200 1080"
//           stroke="#0437F2"
//           strokeWidth="20"
//           fill="transparent"
//         />
//       </svg> */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div>
//             <img
//               src="https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=600"
//               alt="Hackathon participants"
//               className=" shadow-xl w-full h-80 object-cover"
//             />
//           </div>

//           <div>
//             <h2 className="text-4xl font-bold text-gray-900 mb-6">
//               About <span className="text-primary">HackFest 2025</span>
//             </h2>
//             <p className="text-lg text-gray-600 mb-8">
//               Join us for an exciting 24-hour hackathon where brilliant minds
//               collaborate, create, and compete to solve real-world problems with
//               innovative technological solutions.
//             </p>

//             <div className="space-y-4 mb-8">
//               <div className="flex items-center gap-3">
//                 <MapPin className="text-primary" size={20} />
//                 <span className="text-gray-700">
//                   Venue: CUPGS, BPUT, Rourkela
//                 </span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <Calendar className="text-primary" size={20} />
//                 <span className="text-gray-700">
//                   Date: Sunday, 30 November 2025
//                 </span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <Clock className="text-primary" size={20} />
//                 <span className="text-gray-700">Duration: 24 Hours</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;




import { Calendar, MapPin, Clock } from "lucide-react";
import Heading from "../../components/typography/Heading";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">





      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <Heading text="About HackFest 2025" />
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="relative group col-span-3">
            {/* Glowing border effect */}

            <div className="relative bg-white   p-2  transition-all duration-300">
              {/* <img
                src="https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Hackathon participants"
                className="rounded-lg w-full h-80 object-cover"
              /> */}
              {/* Tech overlay */}
              {/* <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-1">
                <span className="text-green-400 font-mono text-sm">// Innovation in progress</span>
              </div> */}



              <p className="text-lg text-gray-700 mb-8 leading-relaxed text-justify">
                The BPUT Hackathon is the flagship innovation and technology development event organized by the Biju Patnaik University of Technology, Odisha. Building on the overwhelming success of the previous edition, the 2025 edition promises to be bigger, more inclusive, and packed with real-world impact. The event is designed as a three-month-long journey of ideation, innovation, evaluation, and execution. With structured mentoring, multi-phase assessments, and final on-site demonstrations, it offers a platform for students to turn ideas into impactful solutions.
              </p>
            </div>
          </div>

          <div className="col-span-2">
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200 hover:border-purple-300 transition-colors group">
                <div className="bg-purple-100 p-2 rounded-lg group-hover:bg-purple-200 transition-colors">
                  <MapPin className="text-purple-600" size={20} />
                </div>
                <div>
                  <div className="font-mono text-xs text-purple-600 uppercase tracking-wider">Location</div>
                  <span className="text-gray-800 font-medium">CUPGS, BPUT, Rourkela</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200 hover:border-blue-300 transition-colors group">
                <div className="bg-blue-100 p-2 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <Calendar className="text-blue-600" size={20} />
                </div>
                <div>
                  <div className="font-mono text-xs text-blue-600 uppercase tracking-wider">Date</div>
                  <span className="text-gray-800 font-medium">Sunday, 30 November 2025</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg border border-green-200 hover:border-green-300 transition-colors group">
                <div className="bg-green-100 p-2 rounded-lg group-hover:bg-green-200 transition-colors">
                  <Clock className="text-green-600" size={20} />
                </div>
                <div>
                  <div className="font-mono text-xs text-green-600 uppercase tracking-wider">Duration</div>
                  <span className="text-gray-800 font-medium">24 Hours Non-Stop</span>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default About;