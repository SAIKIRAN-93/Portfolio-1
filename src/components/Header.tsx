import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="w-full text-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-black via-gray-900 to-purple-900 bg-opacity-100 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-xl font-bold">Sai Kiran</h1>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['about', 'skills', 'education', 'projects', 'certifications'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-300 hover:text-purple-400 transition-colors capitalize"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 bg-opacity-95 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-4">
              {['about', 'skills', 'education', 'projects', 'certifications'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 text-gray-300 hover:text-purple-400 transition-colors capitalize"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="hero-section min-h-screen flex flex-col justify-center relative pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-purple-900 opacity-60"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')] opacity-10"></div>
        
        <div className="mx-auto text-center z-10 px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Sai Kiran Annoju
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-200">
            Frontend Developer
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
            <a 
              href="mailto:annojusaikiran@gmail.com" 
              className="flex items-center text-purple-200 hover:text-purple-100 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              annojusaikiran@gmail.com
            </a>
            <a 
              href="tel:+919398884536" 
              className="flex items-center text-purple-200 hover:text-purple-100 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              +91 9398884536
            </a>
            <div className="flex items-center text-purple-200">
              <MapPin className="w-5 h-5 mr-2" />
              Hyderabad, Telangana
            </div>
          </div>
          
          <div className="flex justify-center gap-6">
            <a 
              href="https://www.linkedin.com/in/sai-kiran-annoju-50972924a/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full flex items-center transition-colors"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
            <a 
              href="https://github.com/SAIKIRAN-93"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-full flex items-center transition-colors"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;