import React from 'react';
import { Download, Mail, Github, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 pt-20">
      <div className="container-max">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0 animate-float">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img
                  src="./assets/Euroscola Kursu Foto.JPG"
                  alt="Kent Umut"
                  className="w-full h-full object-cover scale-150 object-center"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 animate-slide-up">
            <div className="space-y-2">
              <p className="text-lg text-gray-600 font-medium">Hello, I'm</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                Kent Umut
              </h1>
              <p className="text-2xl lg:text-3xl gradient-text font-semibold">
                Software Engineer
              </p>
            </div>

            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              A passionate 17-year-old developer exploring the frontiers of AI and Quantum Computing. 
              Started programming at age 6 and currently researching the next big innovations in technology.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => window.open('./assets/Kent Umut CV.pdf')}
                className="btn-primary flex items-center gap-2"
              >
                <Download size={20} />
                Download CV
              </button>
              <button
                onClick={scrollToContact}
                className="btn-secondary flex items-center gap-2"
              >
                <Mail size={20} />
                Contact Info
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <a
                href="https://www.linkedin.com/in/kentumut/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={24} className="text-blue-600" />
              </a>
              <a
                href="https://github.com/kentumut"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <Github size={24} className="text-gray-800" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;