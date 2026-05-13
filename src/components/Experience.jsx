import React from 'react';
import { CircuitConnector, CircuitNode } from '../utils/CircuitElements';
import resumeData from '../data/resumeData';

const Experience = () => {
  const { internships } = resumeData;

  return (
    <section id="experience" className="py-16 bg-gray-800/30 relative">
      {/* Circuit decorations */}
      <CircuitConnector 
        start={{ x: '20%', y: 0 }} 
        end={{ x: '20%', y: '100%' }}
        pathType="steps"
      />
      <CircuitConnector 
        start={{ x: '80%', y: 0 }} 
        end={{ x: '80%', y: '100%' }}
        pathType="steps"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-block">
            <h2 className="text-3xl font-bold relative">
              <CircuitNode size={6} className="absolute -left-8 top-1/2 transform -translate-y-1/2" />
              Professional Experience
              <CircuitNode size={6} className="absolute -right-8 top-1/2 transform -translate-y-1/2" />
            </h2>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline track */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-900"></div>
            
            {internships.map((internship, index) => (
              <div key={index} className="mb-12 relative">
                {/* Timeline node */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -mt-2 w-5 h-5 rounded-full border-4 border-blue-500 bg-gray-900"></div>
                
                {/* Timeline date */}
                <div className={`hidden md:block absolute top-0 ${index % 2 === 0 ? 'left-0 md:left-auto md:right-1/2 md:pr-8 text-right' : 'left-0 md:left-1/2 md:pl-8'} md:w-1/2`}>
                  <div className="inline-block py-1 px-3 bg-blue-900/50 text-blue-200 text-sm rounded-md border border-blue-800">
                    {internship.duration}
                  </div>
                </div>
                
                {/* Card */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto' : ''} bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg p-6 shadow-lg mt-8 md:mt-0`}>
                  {/* Mobile timeline date */}
                  <div className="md:hidden mb-3 inline-block py-1 px-3 bg-blue-900/50 text-blue-200 text-sm rounded-md border border-blue-800">
                    {internship.duration}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-1">{internship.role}</h3>
                  <p className="text-blue-400 text-sm mb-2">{internship.company}</p>
                  
                  <div className="space-y-3 mt-4">
                    {internship.description.map((point, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-900 border border-blue-400 flex items-center justify-center mt-1">
                          <div className="h-2 w-2 bg-blue-400 rounded-full"></div>
                        </div>
                        <p className="ml-3 text-gray-300">{point}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Circuit decoration */}
                  <div className="absolute bottom-3 right-3 w-12 h-12 opacity-20">
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-blue-400"></div>
                    <div className="absolute bottom-1 right-1 w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Current position marker */}
            <div className="hidden md:block absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-500 animate-ping"></div>
            <div className="hidden md:block absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-500 opacity-75"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;