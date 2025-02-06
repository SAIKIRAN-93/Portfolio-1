import React from 'react';
import { FolderGit2, Link, Shield, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "System For Identifying Fake Product Using Blockchain",
      description: [
        "An e-commerce website, using blockchain technology to verify the genuineness of products",
        "Generate QR code for the product based on genuine customer reviews"
      ],
      icon: <Shield className="w-6 h-6" />,
      color: "from-purple-500 to-indigo-700",
      technologies: ["Blockchain", "React", "Node.js", "QR Code"]
    },
    {
      title: "Big Data Exchange in Cloud Environment",
      description: [
        "Exchanging large volumes of data in cloud storage environments between group members",
        "Ensuring the safety and security of data stored in the cloud"
      ],
      icon: <Link className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-700",
      technologies: ["Cloud Computing", "Big Data", "Security", "Data Exchange"]
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-purple-900 to-violet-900 opacity-100"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')] opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-16 flex items-center justify-center text-purple-300">
          <FolderGit2 className="mr-3" /> Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative nebula-card rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 animate-float"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`bg-gradient-to-r ${project.color} p-6`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {project.icon}
                    <h3 className="text-xl font-bold ml-3">{project.title}</h3>
                  </div>
                  <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {project.description.map((desc, i) => (
                    <li key={i} className="flex items-start text-purple-200">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-purple-900 bg-opacity-50 text-purple-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
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

export default Projects;