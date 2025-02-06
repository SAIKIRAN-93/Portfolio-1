import React from 'react';
import { User, Mail, Phone, MapPin, Linkedin, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="hero-section text-white">
      <div className="container mx-auto px-4 py-20 min-h-[90vh] flex flex-col justify-center">
        <div className="animate-fade-in">
          <h1 className="text-6xl font-bold mb-6">SAI KIRAN ANNOJU</h1>
          <h2 className="text-2xl mb-8 text-blue-300">Software Developer</h2>
          
          <div className="flex flex-wrap gap-6 mb-12 text-lg">
            <div className="flex items-center animate-fade-in animate-delay-100">
              <Phone size={20} className="mr-2" />
              <span>+919398884536</span>
            </div>
            <div className="flex items-center animate-fade-in animate-delay-200">
              <MapPin size={20} className="mr-2" />
              <span>Hyderabad, Telangana</span>
            </div>
            <div className="flex items-center animate-fade-in animate-delay-300">
              <Mail size={20} className="mr-2" />
              <a href="mailto:annojusaikiran@gmail.com" className="hover:text-blue-300 transition-colors">
                annojusaikiran@gmail.com
              </a>
            </div>
            <div className="flex items-center animate-fade-in animate-delay-400">
              <Linkedin size={20} className="mr-2" />
              <a 
                href="https://www.linkedin.com/in/sai-kiran-annoju" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition-colors"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
          
          <div className="mt-12 animate-bounce">
            <ChevronDown size={40} className="mx-auto" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;