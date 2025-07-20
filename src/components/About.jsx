import React, { useState, useEffect } from "react";
import { Calendar, MapPin, Clock } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-0 top-0 w-full h-screen"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="none"
      >
        <path
          d="M 200 0 Q 300 270 200 540 T 200 1080"
          stroke="#0437F2"
          strokeWidth="20"
          fill="transparent"
        />
      </svg>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Hackathon participants"
              className="rounded-2xl shadow-xl w-full h-80 object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About <span className="text-primary">HackFest 2025</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join us for an exciting 24-hour hackathon where brilliant minds
              collaborate, create, and compete to solve real-world problems with
              innovative technological solutions.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <MapPin className="text-primary" size={20} />
                <span className="text-gray-700">
                  Venue: CUPGS, BPUT, Rourkela
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="text-primary" size={20} />
                <span className="text-gray-700">
                  Date: Sunday, 30 November 2025
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-primary" size={20} />
                <span className="text-gray-700">Duration: 24 Hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
