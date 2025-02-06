import React from 'react';
import { Award, CheckCircle, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  const certificates = [
    {
      title: "MERN Stack Development",
      issuer: "Web Stack Academy",
      date: "2023",
      image: "https://i.ibb.co/jVKwkb3/Screenshot-2024-11-27-174859.png",
      description: "Full Stack Web Development Certification from Web Stack Academy",
      skills: ["MongoDB", "Express.js", "React", "Node.js", "Web Development"],
      color: "from-blue-600 to-indigo-600"
    },
    {
      title: "AI & Machine Learning",
      issuer: "IBM Skills Build",
      date: "2023",
      image: "https://i.ibb.co/ysWchwJ/Screenshot-2024-11-27-175205.png",
      description: "IBM Skills Build Certification in Artificial Intelligence and Machine Learning",
      skills: ["Artificial Intelligence", "Machine Learning", "Data Science", "Python"],
      color: "from-purple-600 to-pink-500"
    }
  ];

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-purple-900 to-violet-900 opacity-100"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')] opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-12 flex items-center justify-center text-purple-300">
          <Award className="mr-3" /> Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <div key={index} className="nebula-card rounded-xl overflow-hidden backdrop-blur-sm">
              <div className={`bg-gradient-to-r ${cert.color} p-6 text-white`}>
                <h3 className="text-2xl font-bold mb-2 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-2" />
                  {cert.title}
                </h3>
                <p className="text-lg text-purple-100">{cert.issuer}</p>
                <p className="text-sm text-purple-200 mt-1">{cert.date}</p>
              </div>

              <div className="p-6 space-y-4">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <p className="text-gray-300 text-lg">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm text-purple-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  <button 
                    onClick={() => window.open(cert.image, '_blank')}
                    className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                  >
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