import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 w-full">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {/* Personal Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4">Sai Kiran Annoju</h3>
            <p className="text-gray-400">Software Developer</p>
            <p className="text-sm text-gray-400">
              Passionate about creating efficient and scalable solutions
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="hover:text-purple-400 transition-colors cursor-pointer text-left w-full"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('skills')}
                  className="hover:text-purple-400 transition-colors cursor-pointer text-left w-full"
                >
                  Skills
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="hover:text-purple-400 transition-colors cursor-pointer text-left w-full"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('certifications')}
                  className="hover:text-purple-400 transition-colors cursor-pointer text-left w-full"
                >
                  Certifications
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone size={18} className="mr-3 text-purple-400" />
                <span>+919398884536</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-3 text-purple-400" />
                <a 
                  href="mailto:annojusaikiran@gmail.com"
                  className="hover:text-purple-400 transition-colors"
                >
                  annojusaikiran@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPin size={18} className="mr-3 text-purple-400" />
                <span>Hyderabad, Telangana</span>
              </div>
            </div>
          </div>

          {/* Languages & Social */}
          <div className="space-y-4">
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-4">Languages</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Globe size={18} className="mr-3 text-purple-400" />
                  <span>English</span>
                </li>
                <li className="flex items-center">
                  <Globe size={18} className="mr-3 text-purple-400" />
                  <span>Telugu</span>
                </li>
                <li className="flex items-center">
                  <Globe size={18} className="mr-3 text-purple-400" />
                  <span>Hindi</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/sai-kiran-annoju-50972924a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="https://github.com/SAIKIRAN-93"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Sai Kiran Annoju. All rights reserved.
            </p>
            <div className="flex items-center mt-4 md:mt-0">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-sm text-purple-400 hover:text-purple-300 transition-colors cursor-pointer"
              >
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;