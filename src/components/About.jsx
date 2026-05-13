import React from 'react';
import { CircuitConnector, CircuitNode } from '../utils/CircuitElements';

const About = () => {
  return (
    <section id="about" className="py-16 relative">
      <CircuitConnector 
        start={{ x: '10%', y: 0 }} 
        end={{ x: '10%', y: '100%' }} 
        includeNodes={true} 
        nodePositions={[0.2, 0.8]}
      />
      
      <CircuitConnector 
        start={{ x: '90%', y: 0 }} 
        end={{ x: '90%', y: '100%' }} 
        includeNodes={true}
        nodePositions={[0.3, 0.7]}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center">
          <div className="inline-block mb-8">
            <h2 className="text-3xl font-bold relative">
              <CircuitNode size={6} className="absolute -left-8 top-1/2 transform -translate-y-1/2" />
              About Me
              <CircuitNode size={6} className="absolute -right-8 top-1/2 transform -translate-y-1/2" />
            </h2>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 md:p-8 max-w-3xl mx-auto shadow-lg relative overflow-hidden">
            {/* Circuit trace decoration */}
            <div className="absolute top-0 left-0 w-16 h-16">
              <div className="absolute top-0 left-4 w-1 h-8 bg-blue-500/30"></div>
              <div className="absolute top-4 left-0 h-1 w-8 bg-blue-500/30"></div>
            </div>
            
            <div className="absolute bottom-0 right-0 w-16 h-16">
              <div className="absolute bottom-0 right-4 w-1 h-8 bg-blue-500/30"></div>
              <div className="absolute bottom-4 right-0 h-1 w-8 bg-blue-500/30"></div>
            </div>
            
            <p className="text-gray-300 mb-4">
              I'm a Systems Engineering and Design student at the University of Illinois Urbana-Champaign, with a CS minor and James Scholar standing. I'm drawn to the space where hardware, software, and system-level thinking intersect — particularly in embedded systems, autonomous platforms, and computational design.
            </p>

            <p className="text-gray-300 mb-4">
              My work spans research, engineering internships, and hands-on project leadership. I've built embedded MIDI interfaces under tight latency and BOM constraints, validated edge computer vision systems at scale, and am currently developing a 6-DOF robotic arm as the sole systems engineer on the project.
            </p>

            <p className="text-gray-300">
              At the ESDL research lab, I apply graph neural networks to automate thermal architecture generation for electric vehicles — bridging machine learning and systems design. Outside of technical work, I write, and my poem 'Dali and I - his mighty dream' won at EKPHARSIS-II nationally.
            </p>

            <div className="mt-6 pt-6 border-t border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Technical Skills</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8 text-gray-300 text-base">
                <ul className="space-y-2 list-disc pl-5">
                    <li>Python &amp; C++</li>
                    <li>MATLAB &amp; SQL</li>
                    <li>Raspberry Pi &amp; Arduino</li>
                    <li>YOLOv5 &amp; Docker</li>
                    <li>SysML &amp; LaTeX</li>
                  </ul>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Fusion360 &amp; SolidWorks</li>
                    <li>Git &amp; JIRA</li>
                    <li>AWS &amp; Tableau</li>
                    <li>Systems Requirements &amp; V&amp;V</li>
                    <li>Failure Mode Analysis</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;