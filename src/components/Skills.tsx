import React from 'react';
import { Code, Database, PenTool as Tool, Brain, Layout } from 'lucide-react';

const Skills: React.FC = () => {
  const programmingLogos = {
    Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    C: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    VSCode: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
  };

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      skills: ['Python', 'Java', 'C', 'JavaScript'],
      color: 'from-purple-500 to-indigo-700'
    },
    {
      title: 'Web Technologies',
      icon: <Layout className="w-6 h-6" />,
      skills: ['HTML', 'CSS', 'React'],
      color: 'from-indigo-500 to-blue-700'
    },
    {
      title: 'Databases',
      icon: <Database className="w-6 h-6" />,
      skills: ['MySQL'],
      color: 'from-blue-500 to-purple-700'
    },
    {
      title: 'Development Tools',
      icon: <Tool className="w-6 h-6" />,
      skills: ['Git', 'VSCode'],
      color: 'from-purple-500 to-blue-700'
    },
    {
      title: 'Soft Skills',
      icon: <Brain className="w-6 h-6" />,
      skills: ['Problem-solving', 'Communication', 'Adaptability', 'Time Management'],
      color: 'from-indigo-500 to-purple-700'
    }
  ];

  return (
    <section className="py-24 space-gradient relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')] opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-16 text-center text-purple-300">Technical Expertise & Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="skill-card rounded-xl shadow-xl overflow-hidden animate-float"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-xl font-bold ml-3">{category.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="flex items-center p-3 bg-opacity-20 bg-purple-900 rounded-lg hover:bg-opacity-40 transition-colors text-white"
                    >
                      {programmingLogos[skill] ? (
                        <img 
                          src={programmingLogos[skill]} 
                          alt={skill}
                          className="w-6 h-6 mr-2"
                        />
                      ) : (
                        <div className="w-6 h-6 mr-2" />
                      )}
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;