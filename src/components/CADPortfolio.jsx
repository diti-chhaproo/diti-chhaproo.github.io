import GenerativeExpandable from './GenerativeExpandable';
export default CADPortfolio;
import React, { useState } from 'react';
const projects = [
  {
    id: 1,
  title: 'Self balancing robot',
    description: 'Designed a double-decker chassis and 3D modelled the DC motors for a self-balancing robot using Fusion 360. The chassis was designed to house all the electronics and provide stability. Click to expand.',
    date: 'Jan 2025',
  images: ['/assets/images/bot.png', '/assets/images/chassis.png'],
    modalMedia: [
      { type: 'image', src: '/assets/images/chassis.png', alt: 'Chassis' },
      { type: 'image', src: '/assets/images/bot.png', alt: 'Bot' },
      { type: 'pdf', src: '/assets/docs/self-balancing-robot.pdf', alt: 'Project PDF' }
    ]
  },
  {
    id: 2,
  title: 'Black and Decker Electrical Screwdriver',
    description: 'Worked with a team to reverse engineer and 3D model the Black and Decker 4V MAX cordless electrical screwdriver using Fusion 360. Modelled 8 parts, created functionality demo and generative design for the handle to optimize weight and strength. Modelled the orange handle using freeform. Click to expand.',
    date: 'Dec 2024',
    images: ['/assets/images/thumbnail.png'],
    modalMedia: [
  { type: 'image', src: '/assets/images/generative.png', alt: 'Generative Design' },
  { type: 'image', src: '/assets/images/orange.png', alt: 'Orange Handle' },
  { type: 'video', src: '/assets/videos/Functionality demo.mp4', alt: 'Functionality Demo' }
    ]
  },
  {
    id: 3,
    title: 'Conveyor Belt',
    description: 'Part of ongoing CAD work at UIUC\'s Civil Engineering department — running geometry and material trade-off analysis to optimize structural components for robustness and weight. Click to expand.',
    date: '2025',
    images: ['/assets/images/whole belt.png'],
    modalMedia: [
      { type: 'image', src: '/assets/images/whole belt.png', alt: 'Whole Belt' },
      { type: 'image', src: '/assets/images/face.png', alt: 'Belt Face' },
      { type: 'image', src: '/assets/images/robot.png', alt: 'Robot' },
    ]
  },
  // Add more projects as needed
];

function CADPortfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portfolio" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-block">
            <h2 className="text-3xl font-bold relative text-white">
              <span className="absolute -left-8 top-1/2 transform -translate-y-1/2">
                {/* Decorative dot left (smaller) */}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6" cy="6" r="4" fill="#3B82F6" />
                </svg>
              </span>
              CAD Portfolio
              <span className="absolute -right-8 top-1/2 transform -translate-y-1/2">
                {/* Decorative dot right (smaller) */}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6" cy="6" r="4" fill="#3B82F6" />
                </svg>
              </span>
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-content-center">
          {projects.map(project => (
            <div
              key={project.id}
              className="bg-gray-900 rounded-lg shadow-lg hover:shadow-blue-400/40 cursor-pointer p-4 border border-blue-800 transition-all duration-300 transform hover:scale-110"
              onClick={() => setSelectedProject(project)}
            >
              {project.images && project.images.length > 0 ? (
                <img src={project.images[0]} alt={project.title} className="w-full h-40 object-cover rounded mb-4 border border-blue-700 transition-all duration-300" />
              ) : (
                <div className="w-full h-40 rounded mb-4 border border-blue-700 bg-gradient-to-br from-gray-800 to-blue-950 flex items-center justify-center">
                  <span className="text-blue-400 text-sm font-mono">Coming Soon</span>
                </div>
              )}
              <h3 className="text-xl font-semibold text-blue-300 font-mono text-center">{project.title}</h3>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-gray-900 rounded-lg p-8 w-3/4 h-[95vh] flex flex-col relative border border-blue-700 shadow-lg overflow-y-auto">
              <div className="relative mb-6">
                <h3 className="text-2xl font-bold text-blue-400 font-mono text-center pt-2">{selectedProject.title}</h3>
                <button
                  className="absolute top-0 right-0 text-blue-400 hover:text-blue-600 text-2xl font-bold"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close"
                >
                  &times;
                </button>
                <div className="flex items-center mt-2 mb-2">
                  <div className="flex-1 border-t border-gray-700 mr-4"></div>
                  <span className="text-gray-400 text-sm">{selectedProject.date}</span>
                </div>
                <p className="mb-2 text-gray-300 text-center">{selectedProject.description}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {selectedProject.modalMedia
                  ? selectedProject.modalMedia.map((media, idx) => {
                      let content;
                      if (media.type === 'image') {
                        content = <GenerativeExpandable key={idx} src={media.src} alt={media.alt} />;
                      } else if (media.type === 'video' && media.src === '/assets/videos/Functionality demo.mp4') {
                        content = <GenerativeExpandable key={idx} src={media.src} alt={media.alt} isVideo={true} />;
                      } else if (media.type === 'pdf') {
                        content = <GenerativeExpandable key={idx} src={media.src} alt={media.alt} isPdf={true} />;
                      } else {
                        content = <video key={idx} src={media.src} controls className="w-full h-56 object-cover rounded border border-blue-700" />;
                      }
                      // Captions for all media
                      let caption = '';
                      if (media.src === '/assets/images/generative.png') caption = 'Generative Design';
                      if (media.src === '/assets/images/orange.png') caption = 'Orange Handle (Freeform)';
                      if (media.src === '/assets/videos/Functionality demo.mp4') caption = 'Functionality Demo';
                      if (media.src === '/assets/images/chassis.png') caption = 'Chassis';
                      if (media.src === '/assets/images/bot.png') caption = 'Bot';
                      if (media.src === '/assets/images/whole belt.png') caption = 'Whole Belt';
                      if (media.src === '/assets/images/face.png') caption = 'Belt Face';
                      if (media.src === '/assets/images/robot.png') caption = 'Robot';
                      if (media.type === 'pdf') caption = 'Project PDF';
                      return (
                        <div key={idx} className="flex flex-col items-center">
                          {content}
                          {caption && <span className="mt-2 text-sm text-blue-300 text-center">{caption}</span>}
                        </div>
                      );
                    })
                  : selectedProject.images.map((img, idx) => (
                      <img key={idx} src={img} alt="CAD" className="w-full h-56 object-cover rounded border border-blue-700" />
                    ))}
              </div>

            </div>
          </div>
        )}
      </div>
    </section>
  );
}
