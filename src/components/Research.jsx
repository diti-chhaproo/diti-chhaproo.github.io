import React from 'react';
import { CircuitConnector, CircuitNode } from '../utils/CircuitElements';
import resumeData from '../data/resumeData';

const Research = () => {
  const { research } = resumeData;

  return (
    <section id="research" className="py-16 bg-gray-800/30 relative">
      <CircuitConnector
        start={{ x: '10%', y: 0 }}
        end={{ x: '10%', y: '100%' }}
        includeNodes={true}
        nodePositions={[0.4, 0.8]}
      />
      <CircuitConnector
        start={{ x: '90%', y: 0 }}
        end={{ x: '90%', y: '100%' }}
        includeNodes={true}
        nodePositions={[0.3, 0.7]}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-block">
            <h2 className="text-3xl font-bold relative">
              <CircuitNode size={6} className="absolute -left-8 top-1/2 transform -translate-y-1/2" />
              Research
              <CircuitNode size={6} className="absolute -right-8 top-1/2 transform -translate-y-1/2" />
            </h2>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {research.map((entry, index) => (
            <div
              key={index}
              className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg overflow-hidden shadow-lg hover:border-blue-500 transition-colors relative"
            >
              {/* Header */}
              <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700 p-5">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                  <div className="absolute top-1/2 left-0 h-0.5 w-full bg-blue-900/20"></div>
                  <div className="absolute top-0 left-1/3 w-0.5 h-full bg-blue-900/20"></div>
                  <div className="absolute top-0 left-2/3 w-0.5 h-full bg-blue-900/20"></div>
                </div>
                <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{entry.role}</h3>
                    <p className="text-blue-400 text-sm">{entry.lab}</p>
                    <p className="text-gray-400 text-xs mt-0.5">Advisor: {entry.advisor}</p>
                  </div>
                  <div className="inline-block py-1 px-3 bg-blue-900/50 text-blue-200 text-sm rounded-md border border-blue-800 shrink-0">
                    {entry.duration}
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 space-y-3">
                {entry.description.map((point, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-900 border border-blue-400 flex items-center justify-center mt-1">
                      <div className="h-2 w-2 bg-blue-400 rounded-full"></div>
                    </div>
                    <p className="ml-3 text-gray-300">{point}</p>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="px-5 pb-5 flex flex-wrap gap-2">
                {['Graph Attention Networks', 'Thermal Management Systems', 'Generative Design', 'BEV Architecture'].map((tag, i) => (
                  <span key={i} className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-xs border border-blue-800">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Corner decoration */}
              <div className="absolute bottom-3 right-3 w-12 h-12 opacity-20 pointer-events-none">
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-blue-400"></div>
                <div className="absolute bottom-1 right-1 w-2 h-2 bg-blue-400 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
