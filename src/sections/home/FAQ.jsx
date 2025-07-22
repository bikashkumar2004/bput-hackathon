import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqData } from '../../constants/constants';
import Heading from '../../components/typography/Heading';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  useEffect(() => {
    if (openIndex !== null) {
      const el = contentRefs.current[openIndex];
      if (el) {
        el.style.maxHeight = el.scrollHeight + 'px';
      }
    }
    contentRefs.current.forEach((el, idx) => {
      if (el && idx !== openIndex) {
        el.style.maxHeight = '0px';
      }
    });
  }, [openIndex]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Heading text={"Frequently Asked Questions"} />
          <p className="text-xl text-gray-600">
            Got questions? We've got answers!
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="text-primary flex-shrink-0" size={20} />
                ) : (
                  <ChevronDown className="text-primary flex-shrink-0" size={20} />
                )}
              </button>

              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className="px-6 transition-all duration-300 overflow-hidden max-h-0"
              >
                <p className="text-gray-600 py-4 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
