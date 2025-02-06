import React from 'react';
import { Briefcase, Calendar, MapPin, Star } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section className="py-24 space-gradient relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')] opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-12 flex items-center justify-center text-purple-300">
          <Briefcase className="mr-3" /> Professional Experience
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="nebula-card rounded-lg shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 animate-float">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-800 p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-y-16 translate-x-16"></div>
              <h3 className="text-3xl font-bold text-white mb-2">Web Development Intern</h3>
              <p className="text-purple-200 text-xl">Web Stack Academy</p>
            </div>
            
            <div className="p-8 bg-opacity-40">
              <div className="flex items-center mb-6 text-purple-200 space-x-6">
                <div className="flex items-center">
                  <Calendar className="mr-2 text-purple-400" />
                  <span>Aug 2023 - Oct 2023</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 text-purple-400" />
                  <span>Hyderabad, Telangana</span>
                </div>
              </div>
              
              <div className="space-y-6 text-gray-200">
                <p className="text-lg text-purple-200 font-semibold">
                  Key Responsibilities & Achievements:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-purple-400 mr-3 mt-1" />
                    <span>Mastered foundational web development technologies including HTML, CSS, JavaScript, and React through hands-on project work</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-purple-400 mr-3 mt-1" />
                    <span>Developed full-stack applications using the MERN stack following professional SDLC practices</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-purple-400 mr-3 mt-1" />
                    <span>Collaborated with team members on real-world projects, improving both technical and soft skills</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;