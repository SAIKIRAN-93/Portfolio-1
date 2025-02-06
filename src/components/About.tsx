import React from 'react';
import { User, Code, Brain, Rocket, Target, Coffee } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Frontend Developer",
      description: "Specialized in React.js development with a focus on building responsive web applications"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Strong analytical skills with a passion for creating efficient solutions"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Quick Learner",
      description: "Adaptable to new technologies and committed to continuous improvement"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-purple-900 to-violet-900 opacity-100"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 flex items-center justify-center text-purple-200">
            <User className="mr-3 text-purple-400" /> About Me
          </h2>

          {/* Main Introduction */}
          <div className="nebula-card p-8 rounded-xl bg-gradient-to-r from-gray-900/80 to-purple-900/80 backdrop-blur-sm mb-12">
            <p className="text-xl leading-relaxed text-gray-300 text-center">
              A passionate Frontend Developer with expertise in modern web technologies. 
              Focused on creating intuitive, responsive, and user-friendly interfaces that 
              deliver exceptional user experiences.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="nebula-card p-6 rounded-xl bg-gradient-to-r from-gray-900/80 to-purple-900/80 backdrop-blur-sm
                         transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center mb-4 text-purple-400">
                  {item.icon}
                  <h3 className="text-xl font-semibold ml-3 text-purple-200">{item.title}</h3>
                </div>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Professional Goals */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="nebula-card p-6 rounded-xl bg-gradient-to-r from-gray-900/80 to-purple-900/80 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <Target className="w-6 h-6 text-purple-400 mr-3" />
                <h3 className="text-xl font-semibold text-purple-200">Professional Goals</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Dedicated to mastering frontend technologies and creating beautiful user interfaces. 
                Committed to writing clean, maintainable code and implementing modern design principles.
              </p>
            </div>

            <div className="nebula-card p-6 rounded-xl bg-gradient-to-r from-gray-900/80 to-purple-900/80 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <Rocket className="w-6 h-6 text-purple-400 mr-3" />
                <h3 className="text-xl font-semibold text-purple-200">Vision</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Aspiring to create impactful user interfaces that enhance user experiences. 
                Focused on continuous learning and staying current with emerging frontend 
                technologies and design trends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;