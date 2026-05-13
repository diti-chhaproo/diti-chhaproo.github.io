import React from 'react';
import { CircuitConnector, CircuitNode } from '../utils/CircuitElements';
import resumeData from '../data/resumeData';

const Projects = () => {
  const { projects } = resumeData;

  return (
    <section id="projects" className="py-16 relative">
      {/* Circuit decorations */}
      <CircuitConnector 
        start={{ x: 0, y: '30%' }} 
        end={{ x: '100%', y: '30%' }}
        pathType="bezier"
      />
      <CircuitConnector 
        start={{ x: '100%', y: '70%' }} 
        end={{ x: 0, y: '70%' }}
        pathType="bezier"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-block">
            <h2 className="text-3xl font-bold relative">
              <CircuitNode size={6} className="absolute -left-8 top-1/2 transform -translate-y-1/2" />
              Projects & Leadership
              <CircuitNode size={6} className="absolute -right-8 top-1/2 transform -translate-y-1/2" />
            </h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg overflow-hidden shadow-lg group hover:border-blue-500 transition-colors"
            >
              {/* Header with circuit design */}
              <div className="relative h-24 bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700 p-4 flex items-center">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                  <div className="absolute top-1/2 left-0 h-0.5 w-full bg-blue-900/30"></div>
                  <div className="absolute top-0 left-1/4 w-0.5 h-full bg-blue-900/30"></div>
                  <div className="absolute top-0 left-3/4 w-0.5 h-full bg-blue-900/30"></div>
                </div>
                
                <div className="relative z-10 flex-1">
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <div className="flex items-center">
                    <div className="bg-blue-900/50 text-blue-300 text-xs px-2 py-0.5 rounded-md mr-2">
                      {project.role}
                    </div>
                    <div className="text-gray-400 text-xs">
                      {project.duration}
                    </div>
                  </div>
                </div>
                
                <div className="relative z-10 h-10 w-10 rounded-full bg-blue-900/30 border border-blue-800 flex items-center justify-center group-hover:bg-blue-900 transition-colors">
                  <div className="h-3 w-3 bg-blue-400 rounded-full group-hover:animate-ping"></div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-5">
                {Array.isArray(project.description) ? (
                  <ul className="space-y-3">
                    {project.description.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="ml-2 text-gray-300">{point}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-300">{project.description}</p>
                )}
                
                {/* Circuit decoration */}
                <div className="mt-4 pt-4 border-t border-gray-700 flex justify-between items-center">
                  <div>
                    {project.title === 'Orbital Playground' && (
                      <a
                        href="https://github.com/shadyblues2006-d/orbital-playground"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Orbital Playground on GitHub"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="currentColor"
                        >
                          <path d="M12 2C6.477 2 2 6.486 2 12.021c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.455-1.158-1.112-1.467-1.112-1.467-.909-.622.069-.609.069-.609 1.004.071 1.532 1.032 1.532 1.032.893 1.534 2.343 1.09 2.913.834.091-.648.35-1.09.636-1.341-2.22-.253-4.555-1.113-4.555-4.952 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.851.004 1.707.115 2.507.337 1.909-1.296 2.748-1.026 2.748-1.026.545 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.696-4.566 4.944.359.31.678.921.678 1.856 0 1.34-.012 2.419-.012 2.749 0 .268.18.579.688.481A9.996 9.996 0 0 0 22 12.021C22 6.486 17.523 2 12 2z" />
                        </svg>
                      </a>
                    )}
                  </div>
                  <CircuitNode size={4} className="animate-pulse" />
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
