import React from 'react';
import { GraduationCap, Calendar, Award, MapPin, BookOpen } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "Sri Indu College of Engineering and Technology",
      year: "2020-2024",
      percentage: "68%",
      location: "Hyderabad, Telangana",
      subjects: [
        "Data Structures",
        "Algorithms", 
        "Database Management",
        "Web Development",
        "Operating Systems",
        "Computer Networks"
      ],
      color: "from-blue-600 to-purple-600",
      hoverColor: "hover:from-blue-500 hover:to-purple-500",
      borderColor: "border-blue-400",
      iconColor: "text-blue-400"
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Sri Gayatri Junior College",
      year: "2018-2020",
      percentage: "72%",
      location: "Hyderabad, Telangana",
      subjects: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "English",
        "Telugu"
      ],
      color: "from-purple-600 to-pink-600",
      hoverColor: "hover:from-purple-500 hover:to-pink-500",
      borderColor: "border-purple-400",
      iconColor: "text-purple-400"
    },
    {
      degree: "Secondary Education",
      institution: "Narayan Concept School",
      year: "2017-2018",
      percentage: "80%",
      location: "Hyderabad, Telangana",
      subjects: [
        "Mathematics",
        "Science",
        "Social Studies",
        "English",
        "Telugu"
      ],
      color: "from-pink-600 to-rose-600",
      hoverColor: "hover:from-pink-500 hover:to-rose-500",
      borderColor: "border-pink-400",
      iconColor: "text-pink-400"
    }
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-purple-900 to-violet-900 opacity-100"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center text-purple-200">
          <GraduationCap className="mr-3 text-purple-400" /> Education Journey
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="relative group transform hover:scale-105 transition-all duration-300"
            >
              <div 
                className={`nebula-card rounded-xl overflow-hidden bg-gradient-to-r ${edu.color} ${edu.hoverColor} transition-all duration-300 
                           shadow-xl border-t-2 ${edu.borderColor} hover:shadow-2xl`}
              >
                <div className="p-6 text-white backdrop-blur-sm">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-bold mb-2 text-white">{edu.degree}</h3>
                  </div>
                  <p className="text-lg mb-4 text-white/90">{edu.institution}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <Calendar className={`w-4 h-4 mr-2 ${edu.iconColor}`} />
                      <span className="text-white/90">{edu.year}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className={`w-4 h-4 mr-2 ${edu.iconColor}`} />
                      <span className="text-white/90">{edu.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Award className={`w-4 h-4 mr-2 ${edu.iconColor}`} />
                      <span className="text-white/90">Percentage: {edu.percentage}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 flex items-center text-white">
                      <BookOpen className={`w-4 h-4 mr-2 ${edu.iconColor}`} /> Core Subjects
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.subjects.map((subject, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-white/20 rounded-full text-sm text-white hover:bg-white/30 transition-colors"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
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