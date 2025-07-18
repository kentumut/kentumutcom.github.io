import React from 'react';

const Footer: React.FC = () => {
  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#courses', label: 'Courses' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-max">
        <div className="text-center space-y-6">
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-400">
              Copyright © 2024 Kent Umut. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;