import React from 'react';
import { Award, CheckCircle, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  const certificates = [
    {
      title: "Full Stack Web Development in MERN",
      issuer: "Web Stack Academy",
      date: "October 2023",
      image: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      skills: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs"]
    },
    {
      title: "IBM Skills Build in AI ML",
      issuer: "IBM",
      date: "2023",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      skills: ["Machine Learning", "Python", "Data Science", "Neural Networks"]
    }
  ];

  return (
    <section className="py-24 space-gradient relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')] opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-12 flex items-center justify-center text-purple-300">
          <Award className="mr-3" /> Certifications
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <div 
              key={index}
              className="nebula-card rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 animate-float group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{cert.title}</h3>
                  <p className="text-purple-200">{cert.issuer}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4 text-purple-300">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>{cert.date}</span>
                </div>
                
                <div className="space-y-3">
                  <p className="text-purple-200 font-semibold">Skills Acquired:</p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-purple-900 bg-opacity-50 text-purple-200 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end">
                  <button className="flex items-center text-purple-300 hover:text-purple-100 transition-colors">
                    <span className="mr-2">View Certificate</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;