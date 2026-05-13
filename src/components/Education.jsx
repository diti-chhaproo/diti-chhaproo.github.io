import React from 'react';
import { CircuitConnector, CircuitNode } from '../utils/CircuitElements';
import resumeData from '../data/resumeData';

const Education = () => {
  const { education } = resumeData;

  return (
    <section id="education" className="py-16 bg-gray-800/30 relative">
      <CircuitConnector 
        start={{ x: '30%', y: 0 }} 
        end={{ x: '70%', y: '100%' }}
        pathType="bezier"
      />
      
      <CircuitConnector 
        start={{ x: '70%', y: 0 }} 
        end={{ x: '30%', y: '100%' }}
        pathType="bezier"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-block">
            <h2 className="text-3xl font-bold relative">
              <CircuitNode size={6} className="absolute -left-8 top-1/2 transform -translate-y-1/2" />
              Education
              <CircuitNode size={6} className="absolute -right-8 top-1/2 transform -translate-y-1/2" />
            </h2>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg overflow-hidden shadow-lg relative">
            {/* Circuit trace decoration */}
            <div className="absolute top-0 left-0 w-20 h-20">
              <div className="absolute top-0 left-6 w-1 h-12 bg-blue-500/30"></div>
              <div className="absolute top-6 left-0 h-1 w-12 bg-blue-500/30"></div>
              <CircuitNode size={4} className="absolute top-6 left-6" />
            </div>
            
            <div className="p-6 md:p-8">
              <div className="flex items-center mb-4">
                <div className="mr-4 rounded-full bg-blue-500/20 p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v10" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">{education.university}</h3>
                  <p className="text-blue-400">{education.degree} | CS Minor | James Scholar</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-gray-800/50 p-4 rounded-md border border-gray-700">
                  <h4 className="text-lg font-semibold mb-2 text-gray-200">Program Details</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>Graduation: {education.graduation_date}</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <span>GPA: {education.gpa}</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/50 p-4 rounded-md border border-gray-700">
                  <h4 className="text-lg font-semibold mb-2 text-gray-200">Key Coursework</h4>
                  <ul className="space-y-1 text-gray-300">
                    {education.coursework.map((course, index) => (
                      <li key={index} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-700">
                <h4 className="text-lg font-semibold mb-4 text-gray-200">Focus Areas</h4>
                <div className="flex flex-wrap gap-2">
                  {['Systems Engineering & Design', 'Computer Science', 'Physics', 'Optimization', 'Data Analysis', 'Electronics'].map((area, index) => (
                    <span key={index} className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-800">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;