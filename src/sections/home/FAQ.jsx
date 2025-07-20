import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: 'What is HackFest 2025?',
    answer: 'HackFest 2025 is a national-level 24-hour hackathon where participants collaborate to solve real-world problems using innovative technology solutions. It\'s a competition that brings together developers, designers, and problem-solvers to create impactful projects.'
  },
  {
    question: 'How to participate in HackFest 2025?',
    answer: 'To participate, click the registration button and fill out the form. You can register as an individual or with a team. Teams can have 2-4 members. Registration is free and open to all skill levels.'
  },
  {
    question: 'What are the eligibility criteria?',
    answer: 'The hackathon is open to students, professionals, and enthusiasts from all backgrounds. You must be at least 16 years old to participate. Both beginners and experienced developers are welcome.'
  },
  {
    question: 'What should I bring to the hackathon?',
    answer: 'Bring your laptop, chargers, and any development tools you prefer. We\'ll provide WiFi, power outlets, meals, and a collaborative workspace. Don\'t forget your creativity and enthusiasm!'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="text-primary">FAQs</span>
          </h2>
          <p className="text-xl text-gray-600">
            Got questions? We've got answers!
          </p>
        </div>
        
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="text-primary flex-shrink-0" size={20} />
                ) : (
                  <ChevronDown className="text-primary flex-shrink-0" size={20} />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;