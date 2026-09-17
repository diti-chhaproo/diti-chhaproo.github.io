export const socials = {
  linkedin: 'https://www.linkedin.com/in/ditichhaproo/',
  github: 'https://github.com/diti-chhaproo',
  email: 'mailto:diti@illinois.edu'
};

export const tracks = {
  engineer: { volume: 'I', name: 'The Engineer', subtitle: 'A study in systems.', intro: 'Systems, hardware, manufacturing, and the craft of making complex things dependable.' },
  builder: { volume: 'II', name: 'The Product Manager', subtitle: 'An instinct to make.', intro: 'Products, AI, research, and the work of turning ambiguous needs into useful outcomes.' }
};

const takeaways = ['Clear constraints make stronger decisions possible.','Evidence should shape the next iteration.','The strongest systems make complexity understandable.'];

export const projects = [
  {
    slug:'manuloop', track:'engineer', artwork:'manuloop', title:'ManuLoop', subtitle:'DFM Co-pilot', category:'Manufacturing / AI', tools:'B-rep CAD · ML classification · NADCA 402', role:'Systems and ML engineer', timeline:'Dates forthcoming', context:'Die-cast aluminum EV parts',
    lead:'A closed-loop manufacturability analysis tool connecting', emphasis:'CAD geometry, feature classification, and engineering constraints.', summary:'A DFM analysis loop grounded in geometry and manufacturing rules.',
    problem:'Manufacturability constraints need to be evaluated against actual part geometry without producing false violations that weaken trust in the analysis.',
    approach:[['Classify geometry','Trained an ML model on 59,600 B-rep CAD models across 25 machining feature classes, reaching 99.24% test accuracy.'],['Encode constraints','Translated NADCA Publication 402 guidance into geometric DFM checks.'],['Validate the loop','Resolved a vertex-convergence false violation and tested the workflow against real GrabCAD production parts.']], artifacts:['Geometry classification workflow','DFM constraint results'], takeaways
  },
  {
    slug:'hdf-engineering', track:'engineer', artwork:'hdf-pipeline', title:'HDF Group', subtitle:'Verification Pipeline', category:'Systems / Data', tools:'HDF5 · Python · V&V · Traceability', role:'Product Systems Engineer intern', timeline:'Spring 2026 to present', context:'HDF Group',
    lead:'A verification-gated engineering pipeline built for', emphasis:'traceability, performance, and reliable rollout.', summary:'System requirements, validation gates, and performance analysis across HDF5 workflows.',
    problem:'A complex refactoring effort across 34 HDF5 modules needed measurable acceptance criteria, stronger validation coverage, and repeatable performance tests.',
    approach:[['Structure delivery','Led eight engineers across three phases and defined requirements, acceptance criteria, and validation gates.'],['Expand validation','Automated checks across 75,000+ records, increasing validation coverage from 68% to 96%.'],['Benchmark the system','Compared six workflow configurations and reduced cycle time by 42% and storage by 31%.']], artifacts:['Requirements and traceability matrix','Performance test dashboard'], takeaways
  },
  {
    slug:'furtados', track:'engineer', artwork:'solidworks-tolerance', title:'Furtados School of Music', subtitle:'Embedded MIDI System', category:'Hardware / Embedded', tools:'SolidWorks · Raspberry Pi · USB-MIDI · DIN-5', role:'Embedded Systems Engineering intern', timeline:'April 2025 to August 2025', context:'250,000+ user music product',
    lead:'Hardware delivery for an embedded MIDI experience balancing', emphasis:'space, latency, cost, and usability.', summary:'An embedded MIDI product designed around tight physical and system constraints.',
    problem:'The product needed a reliable hardware and software stack inside a 320 × 185 × 48 mm enclosure, under a $14K BOM target and a 60 ms latency constraint.',
    approach:[['Prototype the enclosure','Designed the enclosure in SolidWorks around the component and interface constraints.'],['Integrate the hardware','Assembled USB-MIDI and DIN-5 signal interfaces on Raspberry Pi.'],['Validate release readiness','Reviewed suppliers, resolved 15+ integration issues, and tested with 130+ pilot users.']], artifacts:['Enclosure and interface design','Pilot validation summary'], takeaways
  },
  {
    slug:'cms-inspection', track:'engineer', artwork:'gnn-thermal', title:'CMS Info Systems', subtitle:'Edge Inspection System', category:'Computer Vision / Systems', tools:'YOLOv5 · Jetson Nano · FMEA', role:'Systems Engineering intern', timeline:'June 2024 to August 2024', context:'70,000 endpoint deployment',
    lead:'Deployment readiness for an automated inspection system across', emphasis:'variable field conditions and edge hardware.', summary:'Detection thresholds, failure analysis, and deployment evidence at field scale.',
    problem:'A national-scale edge inspection system needed a defensible balance between detection accuracy, false positives, and real-time performance.',
    approach:[['Define failure modes','Applied FMEA to identify operational risks across variable conditions.'],['Calibrate the threshold','Reached 98% accuracy at a 3.8% false positive rate.'],['Verify edge performance','Confirmed 34 ms per frame performance on Jetson Nano and documented deployment readiness.']], artifacts:['FMEA and acceptance criteria','Edge benchmark results'], takeaways
  },
  {
    slug:'waste-management', track:'engineer', artwork:'bev-mbse', title:'Waste Management System', subtitle:'Conveyor and Systems Integration', category:'Mechanical / Systems', tools:'Fusion 360 · SysML · V&V', role:'Systems engineer', timeline:'September 2025 to present', context:'Autonomous waste management',
    lead:'A conveyor subsystem and system model connecting', emphasis:'mechanical design, software, sensing, and verification.', summary:'Subsystem design and verification across mechanical, software, and sensor layers.',
    problem:'Four interacting subsystems needed a shared model, measurable requirements, and a verification plan before fabrication and integration.',
    approach:[['Design the conveyor','Sized belt geometry, cleat spacing, and drive enclosures against throughput and clearance needs.'],['Model the system','Mapped four subsystems in SysML and planned cross-layer verification.'],['Verify and improve','Executed nine V&V procedures and achieved 23% mass reduction with 18% robustness improvement.']], artifacts:['SysML system model','Motion simulation and V&V plan'], takeaways
  },
  {
    slug:'ibc-engineering', track:'engineer', artwork:'hdf-pipeline', title:'Illinois Business Consulting', subtitle:'Manufacturing Systems Analysis', category:'Analytics / Systems', tools:'Power BI · Facilities planning · Constraint analysis', role:'Project manager', timeline:'September 2024 to present', context:'Global manufacturing client',
    lead:'Technical analysis used to evaluate', emphasis:'facilities, workforce, cost, and location tradeoffs.', summary:'A systems view of office location and manufacturing constraints.',
    problem:'A global manufacturing conglomerate needed to evaluate a new office location against facilities, manpower, and a $400K budget.',
    approach:[['Map the opportunity','Built cluster maps to compare candidate regions and operating contexts.'],['Model the constraints','Combined facilities, cost, and workforce variables in Power BI.'],['Support the decision','Synthesized tradeoffs for the location recommendation and supported a separate M&A engagement.']], artifacts:['Location cluster map','Cost and manpower model'], takeaways
  },
  {
    slug:'revamp', track:'builder', artwork:'revamp', title:'Revamp', subtitle:'Agentic AI Consulting Lab', category:'Product / Founding', tools:'PRD · RICE · Roadmaps · KPI dashboards', role:'Founder and lead', timeline:'Active', context:'Student AI consulting lab at UIUC',
    lead:'An agentic AI consulting and analytics lab built', emphasis:'from zero to 45 members and six client engagements.', summary:'A repeatable product delivery system built from the first discovery call.',
    problem:'Client needs arrived ambiguous, while multiple student teams needed a consistent way to scope, prioritize, and evaluate useful products.',
    approach:[['Discover the need','Ran 30+ stakeholder calls and converted ambiguous goals into MVP requirements.'],['Run delivery','Coordinated four workstreams through PRDs, sprint priorities, and roadmaps.'],['Use the evidence','Tracked adoption and delivery KPIs, reducing average delivery cycle time by 33%.']], artifacts:['Product roadmap and backlog','Engagement KPI dashboard'], takeaways
  },
  {
    slug:'hdf-product', track:'builder', artwork:'hdf-pipeline', title:'HDF Group', subtitle:'AI Refactoring Pipeline', category:'Product / AI', tools:'PRDs · Evaluation corpus · Release KPIs', role:'Product Systems Engineer intern', timeline:'Spring 2026 to present', context:'HDF Group through Revamp',
    lead:'A product and evaluation system for an AI-assisted pipeline serving', emphasis:'NASA, Boeing, and the HDF5 ecosystem.', summary:'Evaluation, release readiness, and review speed for an AI refactoring workflow.',
    problem:'Reliability and review-speed bottlenecks limited adoption, with low retrieval accuracy emerging as the primary blocker.',
    approach:[['Align the team','Translated stakeholder needs into requirements across eight engineers, 34 modules, and three phases.'],['Fix the blocker','Improved retrieval accuracy from 26% to 95% against a 44-PR evaluation corpus.'],['Standardize launch','Defined KPIs, dashboards, SOPs, and templates that saved 120+ engineering hours per rollout.']], artifacts:['Evaluation dashboard','Release readiness playbook'], takeaways
  },
  {
    slug:'whai', track:'builder', artwork:'revamp', title:'WHAI', subtitle:'LLM Orchestrator for Small Businesses', category:'Product / AI', tools:'PRD · User research · Shopify API', role:'Product strategy', timeline:'Dates forthcoming', context:'Chicago small businesses',
    lead:'Product strategy for a production LLM orchestrator grounded in', emphasis:'small-business workflow research.', summary:'Discovery, MVP definition, and adoption tracking for a small-business AI product.',
    problem:'Small businesses needed an AI workflow tool that addressed real operating failures instead of adding another disconnected interface.',
    approach:[['Research the workflow','Ran surveys with Chicago small businesses to identify critical workflow failures.'],['Define the product','Set the target problem, MVP scope, PRD, user stories, and sprint goals.'],['Prioritize and learn','Prioritized a Shopify API redesign and tracked adoption after launch.']], artifacts:['MVP product requirements','Workflow research synthesis'], takeaways
  },
  {
    slug:'ibc-product', track:'builder', artwork:'manuloop', title:'Illinois Business Consulting', subtitle:'GTM and Partnership Strategy', category:'Product / Strategy', tools:'ICP · Positioning · Pricing · Sales playbook', role:'Project manager', timeline:'September 2024 to present', context:'KPMG and FraterIT engagements',
    lead:'Strategy work connecting', emphasis:'customer definition, positioning, partnerships, and routes to market.', summary:'A GTM system and partnership framework delivered to client leadership.',
    problem:'Clients needed actionable partnership and growth systems, from university recruiting channels to a founder-ready go-to-market plan.',
    approach:[['Design partnerships','Created university frameworks spanning recruiting, case competitions, and research collaboration for KPMG.'],['Build the GTM system','Led a ten-person team across ICP, positioning, pricing, sales, and channels for FraterIT.'],['Deliver to leadership','Turned the analysis into a decision-ready playbook presented directly to the founder.']], artifacts:['University partnership framework','GTM strategy and sales playbook'], takeaways
  },
  {
    slug:'ai-nexus-healthcare', track:'builder', artwork:'gnn-thermal', title:'AI Nexus Healthcare', subtitle:'Healthcare AI Product', category:'Product / Healthcare', tools:'Product discovery · AI workflows', role:'Product work', timeline:'Details forthcoming', context:'Healthcare',
    lead:'A healthcare AI product case study focused on', emphasis:'turning a high-stakes workflow into a clear product system.', summary:'Healthcare product discovery and AI workflow design. Full case study coming soon.',
    problem:'Healthcare AI requires a clear user problem, careful workflow design, and measurable evidence before it can earn trust.',
    approach:[['Frame the workflow','Document the user, context, and decision that the product must support.'],['Define the product','Translate the opportunity into requirements and an evaluable workflow.'],['Prepare the evidence','Add the original project artifacts and measured outcomes as the work is cleared for publication.']], artifacts:['Healthcare workflow map','Product evaluation plan'], takeaways
  }
];
