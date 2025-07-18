import React from 'react';
import { Zap, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <p className="text-lg text-gray-600 mb-2">Get To Know More</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">About Me</h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="flex-shrink-0">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="./assets/dag.png"
                alt="Kent Umut"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-8">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Zap className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Early Starter</h3>
                <p className="text-gray-600">Started programming when I was 6 years old</p>
              </div>

              <div className="card text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-purple-100 rounded-full">
                    <GraduationCap className="w-8 h-8 text-purple-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sankt Georg College</h3>
                <p className="text-gray-600">Senior year in high school</p>
              </div>
            </div>

            {/* Description */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Hi, I'm Kent. I'm a 17-year-old who is passionate about the next big thing. 
                Currently I'm researching AI and Quantum Computing. I'm taking courses like 
                deeplearning.com Machine Learning Specialization and Google Quantum AI QubitxQubit 
                to succeed in my journey. This website is for me to display my work and 
                accomplishments along the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;