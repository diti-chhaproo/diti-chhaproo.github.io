import React from 'react';
import { CircuitConnector, CircuitNode } from '../utils/CircuitElements';
import resumeData from '../data/resumeData';

const Skills = () => {
  const { skills } = resumeData;

  
  // Define skill levels for visualization (1-5 scale)
  const technicalSkillLevels = {
    "C++": 4,
    "Python": 4,
    "Arduino": 5,
    "Java": 3,
    "HTML": 3,
    "Basic IBM Qiskit": 2,
    "MS Excel": 4,
    "MS Access": 3,
    "Fusion 360 Senior Automation CAD": 4,
    "Fast-Fourier transform": 3
  };

  return (
    <section id="skills" className="py-16 relative">
      {/* Circuit decorations */}
      <CircuitConnector 
        start={{ x: '5%', y: '20%' }} 
        end={{ x: '20%', y: '20%' }} 
        includeNodes={true} 
        nodePositions={[0.5]}
      />
      <CircuitConnector 
        start={{ x: '80%', y: '80%' }} 
        end={{ x: '95%', y: '80%' }} 
        includeNodes={true} 
        nodePositions={[0.5]}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-block">
            <h2 className="text-3xl font-bold relative">
              <CircuitNode size={6} className="absolute -left-8 top-1/2 transform -translate-y-1/2" />
              Skills
              <CircuitNode size={6} className="absolute -right-8 top-1/2 transform -translate-y-1/2" />
            </h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Technical Skills */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-6 flex items-center text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Technical Skills
            </h3>
            <div className="space-y-4">
              {skills.technical.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-300 group-hover:text-blue-300 transition-colors">{skill}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-6 flex items-center text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 21m5.25-4l.75 4m-7.5-8.25l-3.5-3.5m15.5 3.5l3.5-3.5M12 3v4m0 0a4 4 0 014 4v0a4 4 0 01-4 4v0a4 4 0 01-4-4v0a4 4 0 014-4z" />
              </svg>
              Tools
            </h3>
            <div className="space-y-4">
              {skills.tools && skills.tools.map((tool, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-300 group-hover:text-blue-300 transition-colors">{tool}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Methods */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-6 flex items-center text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              Methods
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {skills.methods.map((method, index) => (
                <div key={index} className="flex items-center border border-gray-700 rounded-lg p-3 bg-gray-900/50 hover:border-blue-500 hover:bg-gray-800/70 transition-colors group">
                  <div className="h-3 w-3 rounded-full bg-blue-500 mr-3 group-hover:animate-pulse"></div>
                  <span className="text-gray-300 group-hover:text-blue-300 transition-colors">{method}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Circuit board visualization */}
        <div className="mt-12 max-w-3xl mx-auto bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg p-6 shadow-inner">
          <h3 className="text-xl font-semibold mb-4 text-center text-blue-400">Domain Knowledge Areas</h3>

          <div className="relative h-64 circuit-board">
            {/* Base circuit board */}
            <div className="absolute inset-0 bg-[#102030] rounded-lg overflow-hidden">
              {/* Circuit traces */}
              <div className="absolute top-1/4 left-0 h-0.5 w-full bg-blue-500/30"></div>
              <div className="absolute top-3/4 left-0 h-0.5 w-full bg-blue-500/30"></div>
              <div className="absolute left-1/4 top-0 w-0.5 h-full bg-blue-500/30"></div>
              <div className="absolute left-3/4 top-0 w-0.5 h-full bg-blue-500/30"></div>

              {/* Circuit components */}
              <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-gray-800 border border-blue-500 rounded-full h-16 w-16 flex items-center justify-center">
                  <span className="text-blue-400 text-xs text-center">Embedded Systems</span>
                </div>
              </div>

              <div className="absolute top-1/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-gray-800 border border-blue-500 rounded-lg h-16 w-16 flex items-center justify-center">
                  <span className="text-blue-400 text-xs text-center">Graph Neural Networks</span>
                </div>
              </div>

              <div className="absolute top-3/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-gray-800 border border-blue-500 h-16 w-16 flex items-center justify-center" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}>
                  <span className="text-blue-400 text-xs text-center">Control Systems</span>
                </div>
              </div>

              <div className="absolute top-3/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-gray-800 border border-blue-500 rounded h-16 w-16 flex items-center justify-center" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
                  <span className="text-blue-400 text-xs text-center">Edge Computer Vision</span>
                </div>
              </div>
              
              {/* Central connector */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-blue-500/20 border-2 border-blue-500 rounded-full h-20 w-20 flex items-center justify-center animate-pulse">
                  <span className="text-blue-300 text-xs text-center font-bold">Systems Engineering</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;