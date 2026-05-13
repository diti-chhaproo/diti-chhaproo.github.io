import React from 'react';
import { CircuitConnector, CircuitNode } from '../utils/CircuitElements';
import resumeData from '../data/resumeData';

const Publications = () => {
  const { publications } = resumeData;

  return (
    <section id="publications" className="py-16 bg-gray-800/30 relative">
      {/* Circuit decorations */}
      <CircuitConnector 
        start={{ x: '15%', y: 0 }} 
        end={{ x: '15%', y: '100%' }}
        pathType="steps"
        includeNodes={true}
        nodePositions={[0.3, 0.7]}
      />
      <CircuitConnector 
        start={{ x: '85%', y: 0 }} 
        end={{ x: '85%', y: '100%' }}
        pathType="steps"
        includeNodes={true}
        nodePositions={[0.3, 0.7]}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-block">
            <h2 className="text-3xl font-bold relative">
              <CircuitNode size={6} className="absolute -left-8 top-1/2 transform -translate-y-1/2" />
              Publications
              <CircuitNode size={6} className="absolute -right-8 top-1/2 transform -translate-y-1/2" />
            </h2>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg p-6 shadow-lg relative overflow-hidden">
            {/* Circuit decoration */}
            <div className="absolute -top-10 -right-10 w-40 h-40 opacity-20">
              <div className="w-full h-full border-r-2 border-b-2 rounded-full border-blue-400 rotate-45"></div>
            </div>
            
            {/* Publication content */}
            {publications.map((publication, index) => (
              <div key={index} className="mb-8 last:mb-0">
                <div className="flex items-center mb-3">
                  <div className="h-8 w-8 rounded-md bg-blue-900 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{publication.title}</h3>
                </div>
                
                <div className="ml-11 bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                  <div className="flex flex-col md:flex-row md:items-center mb-4 text-gray-300">
                    <div className="flex items-center mr-6">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span>{publication.authors}</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{publication.date}</span>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <div className="text-sm text-gray-400 mb-1">Published in:</div>
                    <div className="text-gray-200 font-medium">{publication.publisher}</div>
                  </div>
                  
                  <div className="flex items-center pt-3 border-t border-gray-700">
                    <div className="bg-blue-900/40 text-blue-300 text-xs px-3 py-1 rounded-full font-medium border border-blue-800 flex items-center">
                      <CircuitNode size={2} className="mr-1" />
                      <span>Mechanical Systems</span>
                    </div>
                    <div className="ml-2 bg-blue-900/40 text-blue-300 text-xs px-3 py-1 rounded-full font-medium border border-blue-800 flex items-center">
                      <CircuitNode size={2} className="mr-1" />
                      <span>Robotics</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Research interests */}
            <div className="mt-8 pt-6 border-t border-gray-700">
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Research Interests</h4>
              <div className="flex flex-wrap gap-2">
                {["Systems Engineering", "Robotics", "Graph Neural Networks", "Embedded Systems", "Generative Design", "AI in Engineering"].map((area, index) => (
                  <div key={index} className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-800 flex items-center">
                    <CircuitNode size={3} className="mr-2" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;