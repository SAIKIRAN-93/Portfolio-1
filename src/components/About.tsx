import React from 'react';
import { User, Target, Rocket } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-24 space-gradient text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')] opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 flex items-center justify-center text-purple-300">
            <User className="mr-3" /> About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="nebula-card rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 animate-float">
              <Target className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-purple-300">Mission</h3>
              <p className="text-gray-300">
                Seeking a position in a growth-oriented company where I can leverage my skills while continuously developing my expertise.
              </p>
            </div>
            
            <div className="nebula-card rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 animate-float" style={{animationDelay: '0.2s'}}>
              <Rocket className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-purple-300">Vision</h3>
              <p className="text-gray-300">
                To become an exceptional developer who creates innovative solutions and contributes to cutting-edge technology.
              </p>
            </div>
          </div>
          
          <p className="text-lg leading-relaxed text-gray-300 nebula-card p-6 rounded-lg">
            A motivated individual with in-depth knowledge of languages and development tools, passionate about creating efficient and scalable solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;