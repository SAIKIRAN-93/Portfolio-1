import React from 'react';
import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "Sri Indu College of Engineering and Technology",
      year: "2020-2024",
      percentage: "68%",
      color: "from-purple-600 to-indigo-800"
    },
    {
      degree: "Intermediate",
      institution: "Sri Gayatri Junior College",
      year: "2018-2020",
      percentage: "72%",
      color: "from-indigo-600 to-blue-800"
    },
    {
      degree: "Secondary Education",
      institution: "Narayan Concept School",
      year: "2017-2018",
      percentage: "80%",
      color: "from-blue-600 to-purple-800"
    }
  ];

  return (
    <section className="py-24 space-gradient relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')] opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center text-purple-300">
          <GraduationCap className="mr-3" /> Education Journey
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="transform hover:scale-105 transition-all duration-300 animate-float"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`nebula-card bg-gradient-to-r ${edu.color} rounded-lg shadow-xl overflow-hidden`}>
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                  <p className="text-purple-200 mb-4">{edu.institution}</p>
                  
                  <div className="flex items-center mb-2">
                    <Calendar className="w-4 h-4 mr-2 text-purple-300" />
                    <span className="text-sm text-purple-200">{edu.year}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Award className="w-4 h-4 mr-2 text-purple-300" />
                    <span className="text-sm text-purple-200">Percentage: {edu.percentage}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;