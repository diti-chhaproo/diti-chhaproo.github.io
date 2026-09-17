export const socials = {
  linkedin: 'https://www.linkedin.com/in/ditichhaproo/',
  github: 'https://github.com/diti-chhaproo',
  email: 'mailto:ditichhaproo@gmail.com',
  schoolEmail: 'mailto:djc11@illinois.edu'
};

export const tracks = {
  engineer: { volume: 'I', name: 'The Engineer', subtitle: 'A study in systems.', intro: 'Systems, hardware, manufacturing, and the craft of making complex things dependable.' },
  builder: { volume: 'II', name: 'The Product Manager', subtitle: 'An instinct to make.', intro: 'Products, AI, research, and the work of turning ambiguous needs into useful outcomes.' },
  product: { volume: 'II', name: 'The Product Manager', subtitle: 'An instinct to make.', intro: 'Products, AI, research, and the work of turning ambiguous needs into useful outcomes.' }
};

export const projects = [
  {
    slug: 'manuloop',
    track: 'engineer',
    artwork: 'manuloop-dashboard.png',
    visuals: ['manuloop-dashboard.png', 'manuloop-workflow.png', 'manuloop-block-definition.png', 'manuloop-context.png', 'manuloop-requirements.png'],
    title: 'ManuLoop',
    subtitle: 'Closed-loop DFM analysis for manufactured parts',
    category: 'Manufacturing / AI',
    tools: 'Python · SolidWorks · ML · NADCA',
    role: 'Solo engineer',
    timeline: 'Apr 2026 to Jul 2026',
    context: 'Solo capstone project',
    lead: 'A system that automatically flags manufacturability violations in CAD models,',
    emphasis: 'closing the loop between design and production before tooling is committed.',
    summary: 'ML classification pipeline trained on 59,600 CAD models to identify machining features and check die-casting manufacturability constraints automatically.',
    problem: 'Manufacturability reviews are manual, slow, and often happen too late: after tooling decisions have already been made. The challenge was building a system that could flag violations directly from raw CAD geometry, without human review.',
    approach: [
      ['Train the classifier', 'Trained an ML model on 59,600 B-rep CAD models across 25 machining feature classes, achieving 99.24% test accuracy. Extended to handle real-world multi-body STEP assemblies beyond synthetic training data.'],
      ['Encode the constraints', 'Encoded NADCA Publication 402 manufacturability constraints as geometric DFM checks against the classified geometry. Resolved a false-violation bug at vertex convergences via root cause analysis.'],
      ['Validate end-to-end', 'Validated the full pipeline against real GrabCAD production parts to confirm generalization beyond training data. Documented findings for engineering handoff.']
    ],
    artifacts: ['Pre-build activity diagram', 'Pre-build block definition diagram', 'Pre-build context diagram', 'Pre-build requirements diagram'],
    takeaways: [
      'Real-world CAD assemblies don’t look like synthetic training data: extending the pipeline required deliberate effort.',
      'Root cause analysis on the false-violation bug revealed a geometric edge case at vertex convergences that wouldn’t have been caught by testing alone.',
      'Manufacturability feedback is most valuable early: the system was designed to integrate at the design stage, not post-tooling.'
    ]
  },
  {
    slug: 'esdl-research',
    track: 'engineer',
    artwork: 'research-gnn.png',
    report: '/assets/docs/research-summer-project.pdf',
    title: 'Thermal Architecture Generation',
    subtitle: 'Automating thermal system design for EVs and aircraft',
    category: 'AI / Systems Engineering',
    tools: 'Python · PyTorch · GNN · VAE · NetworkX',
    role: 'Research Assistant',
    timeline: 'Sep 2025 to Present',
    context: 'University research, Engineering System Design Lab, Prof. James Allison',
    lead: 'A GNN+VAE generation pipeline that replaces manual enumeration of thermal management system architectures,',
    emphasis: 'producing 100% feasible configurations across thousands of candidates automatically.',
    summary: 'Automated thermal architecture generation for electric vehicles and aircraft using graph neural networks, replacing brute-force enumeration across 21,000+ configurations with a validated generative pipeline.',
    problem: 'Manual enumeration of thermal management system architectures for EVs and aircraft is infeasible at scale: thousands of candidate configurations, each requiring constraint validation. The challenge was automating generation while guaranteeing feasibility.',
    approach: [
      ['Reverse-engineer the constraints', 'Extracted constraint rules from existing validation logic rather than defining them manually, enabling the pipeline to learn what makes a configuration feasible.'],
      ['Build the generation pipeline', 'Designed a GNN+VAE architecture to generate graph-structured thermal system configurations, producing 100% feasible and connected outputs across 4 tested algorithms for 150+ EV and 21,000+ aircraft candidates.'],
      ['Validate at scale', 'Built a 500-trial validation harness benchmarking structural diversity across 200 configurations per method. Iterated on algorithm design based on feasibility rate and diversity metrics. Publication in progress.']
    ],
    artifacts: ['Thermal architecture graph comparison'],
    takeaways: [
      'Reverse-engineering constraint rules from validation logic was faster and more accurate than defining them from scratch.',
      'Structural diversity matters as much as feasibility: a pipeline that produces valid but repetitive configurations isn’t useful.',
      'Publication-quality research requires a validation harness rigorous enough to catch edge cases across hundreds of trials.'
    ]
  },
  {
    slug: 'awms',
    track: 'engineer',
    artwork: 'whole belt.png',
    visuals: ['whole belt.png', 'whole belt.png', 'face.png', 'robot.png'],
    title: 'Autonomous Waste Management System',
    subtitle: 'Physical autonomous sorting system for civil engineering',
    category: 'Systems Engineering / Mechanical',
    tools: 'Fusion360 · SysML · V&V · Python',
    role: 'Systems engineer',
    timeline: 'Sep 2025 to Present',
    context: 'UIUC Civil & Environmental Engineering',
    lead: 'A physical autonomous waste sorting system designed, modeled, and validated',
    emphasis: 'from requirements through fabrication across 4 integrated subsystems.',
    summary: 'Full-system SysML model and physical conveyor design for an autonomous waste management robot, achieving 23% mass reduction and 18% robustness improvement through trade-off analysis and V&V testing.',
    problem: 'Autonomous waste management systems require tight integration between mechanical, software, and sensor subsystems: and design decisions in one domain cascade through the others. The challenge was managing that complexity from requirements through fabrication.',
    approach: [
      ['Model the system', 'Modeled the full system in SysML across 4 subsystems as the sole systems engineer, defining requirements, interface specifications, and V&V planning before any physical work began.'],
      ['Design the conveyor', 'Designed the conveyor subsystem in Fusion360, sizing belt geometry, cleat spacing, and drive enclosures against throughput and clearance requirements. Validated via motion simulation before fabrication.'],
      ['Test and optimize', 'Executed 9 V&V procedures across mechanical, software, and sensor integration layers. Applied material trade-off analysis to achieve 23% mass reduction and 18% robustness improvement.']
    ],
    artifacts: ['Complete conveyor CAD model', 'Conveyor belt face', 'Robot assembly CAD model'],
    takeaways: [
      'Modeling first: SysML upfront caught interface mismatches before fabrication made them expensive.',
      'Simulation before fabrication saved multiple physical iterations on the conveyor design.',
      'Trade-off analysis on materials had a bigger impact on mass and robustness than any single design change.'
    ]
  },
  {
    slug: 'hdf-group-eng',
    track: 'engineer',
    artwork: 'hdf-architecture.png',
    nda: true,
    title: 'HDF Group: Validation Pipeline',
    subtitle: 'Manufacturing data traceability and process validation at scale',
    category: 'Systems Engineering / Data',
    tools: 'Python · HDF5 · SQL · Dashboards',
    role: 'Product Engineer Intern',
    timeline: 'Mar 2026 to Aug 2026',
    context: 'HDF Group, serving NASA and Boeing',
    lead: 'A verification-gated data pipeline built to catch process variation and defects across 180K+ manufacturing records,',
    emphasis: 'replacing manual review with automated traceability across 34 modules.',
    summary: 'Led an 8-engineer team to analyze 2.4 TB of manufacturing data, build automated validation checks, and benchmark 6 workflow configurations: reducing cycle time by 42% and saving 120 engineering hours per rollout.',
    problem: 'Manufacturing and inspection records for NASA and Boeing were growing faster than manual review could handle. Process variation and recurring defect patterns were going undetected until late in the workflow, increasing rework cost and rollout risk.',
    approach: [
      ['Analyze the data', 'Analyzed 180K+ manufacturing and inspection records across 2.4 TB of HDF5 data to identify process variation and recurring defect patterns, supporting root-cause investigations across production workflows.'],
      ['Automate validation', 'Developed automated traceability and process-validation checks across 75K+ records, increasing validation coverage from 68% to 96% and reducing manual review effort significantly.'],
      ['Benchmark and document', 'Benchmarked 6 manufacturing-data workflow configurations against throughput, latency, storage utilization, and failure rate. Reduced engineering analysis cycle time by 42% and storage requirements by 31%. Created SOPs, KPI dashboards, and validation templates standardizing delivery across 3 rollout phases.']
    ],
    artifacts: ['Automated validation pipeline', 'KPI dashboards', 'Workflow benchmark results', 'SOPs and validation templates'],
    takeaways: [
      'At 2.4 TB scale, automation isn’t a nice-to-have: manual review was already failing before the project started.',
      'Benchmarking 6 configurations against multiple metrics revealed non-obvious tradeoffs between throughput and storage.',
      'Standardizing delivery via SOPs and templates compounded the time savings across every subsequent rollout.'
    ]
  },
  {
    slug: 'hdf-group-pm',
    track: 'product',
    artwork: 'hdf-architecture.png',
    nda: true,
    title: 'HDF Group: Pipeline PM',
    subtitle: 'Driving adoption for a NASA and Boeing validation pipeline',
    category: 'Product Management / Data',
    tools: 'Python · Dashboards · SOPs · KPI tracking',
    role: 'Product Engineer Intern',
    timeline: 'Mar 2026 to Aug 2026',
    context: 'HDF Group, serving NASA and Boeing',
    lead: 'Identified the adoption blockers in a pipeline serving NASA and Boeing, translated stakeholder needs into requirements,',
    emphasis: 'and drove the changes that moved accuracy from 26% to 95%.',
    summary: 'Led 8 engineers across 3 rollout phases, diagnosed low retrieval accuracy as the primary adoption blocker, and defined release KPIs and validation templates that saved 120+ engineering hours per rollout.',
    problem: 'A pipeline serving NASA and Boeing had low adoption because retrieval accuracy was too unreliable for production use. Stakeholders didn’t have clear requirements, validation was inconsistent, and there was no structured way to track delivery across phases.',
    approach: [
      ['Identify the blockers', 'Ran stakeholder interviews to identify reliability and review-speed as the core adoption blockers. Translated those needs into requirements and acceptance criteria across 8 engineers, 34 modules, and 3 rollout phases.'],
      ['Drive the fix', 'Diagnosed low retrieval accuracy as the primary blocker and coordinated validation changes across the engineering team. Improved accuracy from 26% to 95% measured against a 44-PR evaluation corpus.'],
      ['Standardize delivery', 'Defined release KPIs, built dashboards and SOPs, and created validation templates that standardized delivery across all 3 phases and saved 120+ engineering hours per rollout.']
    ],
    artifacts: ['Requirements and acceptance criteria', 'KPI dashboards', 'SOPs and validation templates'],
    takeaways: [
      'Low adoption was a product problem masquerading as a technical one: the accuracy issue was known but unacted on until it was framed as a blocker.',
      'Measuring accuracy against a fixed evaluation corpus gave the team an objective target, not just a feel.',
      'Standardized delivery templates created compounding returns: each rollout cost less than the one before.'
    ]
  },
  {
    slug: 'furtados-eng',
    track: 'engineer',
    artwork: 'furtados-workshop.png',
    nda: true,
    title: 'Furtados: Embedded MIDI Hardware',
    subtitle: 'Design-to-production integration for a 250K+ user music product',
    category: 'Systems Engineering / Hardware',
    tools: 'SolidWorks · Raspberry Pi · USB-MIDI · DIN-5',
    role: 'Embedded Systems Engineering Intern',
    timeline: 'Apr 2025 to Aug 2025',
    context: 'Furtados School of Music',
    lead: 'Led design-to-production integration as the sole systems engineer on an embedded MIDI product,',
    emphasis: 'shipping to 250K+ users within a $14K BOM target and 60ms latency constraint.',
    summary: 'Prototyped SolidWorks enclosure, assembled USB-MIDI and DIN-5 interfaces on Raspberry Pi, coordinated 5+ suppliers, resolved 15+ integration issues, and validated with 130+ pilot users.',
    problem: 'An embedded MIDI product serving 250K+ users needed to be designed, sourced, and validated across electrical and mechanical constraints: within a $14K BOM target and 60ms end-to-end latency. No single engineer had owned the full hardware stack before.',
    approach: [
      ['Design the enclosure', 'Prototyped a space-constrained enclosure in SolidWorks within a 320×185×48 mm footprint. Sized for fit, assembly, and manufacturability across all internal components.'],
      ['Build the hardware', 'Soldered and assembled USB-MIDI and DIN-5 signal interfaces on Raspberry Pi. Coordinated with electrical and mechanical PMs to ensure subsystem compatibility within the latency constraint.'],
      ['Validate and ship', 'Conducted supplier drawing reviews and bid analysis across 5+ vendors, resolving 15+ launch-critical integration issues. Validated hardware-software integration with 130+ pilot users, improving feedback accuracy by 35%.']
    ],
    artifacts: ['SolidWorks enclosure prototype', 'Hardware assembly', 'Supplier qualification results', 'User validation report'],
    takeaways: [
      'Manufacturability constraints on the enclosure revealed fit issues that wouldn’t have surfaced until final assembly.',
      'Supplier drawing reviews caught 15+ integration issues before release: most of which would have been expensive post-production.',
      '130+ pilot users gave signal that the hardware feedback loop was working correctly before full deployment.'
    ]
  },
  {
    slug: 'furtados-pm',
    track: 'product',
    artwork: 'furtados-workshop.png',
    nda: true,
    title: 'Furtados: MIDI Product PM',
    subtitle: 'Full product development cycle for a 250K+ user music experience',
    category: 'Product Management / Hardware',
    tools: 'User research · User stories · Supplier coordination · Acceptance criteria',
    role: 'Product Management Intern',
    timeline: 'Apr 2025 to Aug 2025',
    context: 'Furtados School of Music',
    lead: 'Led the full product development cycle from discovery through launch for an embedded MIDI experience serving 250K+ users,',
    emphasis: 'balancing usability, latency, hardware constraints, and a $14K BOM target across 3 cross-functional teams.',
    summary: 'Ran discovery with 130+ users, translated findings into 20+ user stories, and partnered with engineering, QA, and 5+ suppliers to close 15+ launch-critical issues before shipping.',
    problem: 'A 250K+ user product needed to ship on a fixed BOM target and latency constraint, with no prior PM ownership of the full hardware-to-software stack. User feedback loops were slow and integration issues were surfacing late.',
    approach: [
      ['Discover the problems', 'Conducted discovery and pilot testing with 130+ users to identify the highest-friction integration and usability issues. Translated findings into 20+ prioritized user stories and design changes.'],
      ['Drive the roadmap', 'Balanced usability, latency, hardware constraints, and a $14K BOM target across 3 cross-functional teams. Made explicit tradeoff decisions on each constraint as the sole PM.'],
      ['Close to launch', 'Partnered with engineering, QA, and 5+ suppliers to close 15+ launch-critical integration issues. Defined acceptance criteria and validated release readiness before deployment. Improved feedback accuracy by 35%.']
    ],
    artifacts: ['User research synthesis', 'Prioritized user stories', 'Launch acceptance criteria', 'Release validation report'],
    takeaways: [
      '130+ pilot users caught feedback loop failures that would have shipped otherwise.',
      'Making BOM and latency tradeoffs explicit up front prevented scope creep mid-cycle.',
      'Supplier coordination at the PM level, not just engineering, closed issues 2x faster.'
    ]
  },
  {
    slug: 'cms-eng',
    track: 'engineer',
    artwork: 'cms-illustration.svg',
    hideImages: true,
    thumbnail: 'cms-illustration.svg',
    nda: true,
    title: 'CMS Info Systems: Inspection System',
    subtitle: 'Field-scale deployment validation across 70K endpoints',
    category: 'Systems Engineering',
    tools: 'Python · FMEA · Edge hardware · Data analysis',
    role: 'Systems Engineering Intern',
    timeline: 'Jun 2024 to Aug 2024',
    context: 'CMS Info Systems',
    lead: 'Validated field-scale deployment of an automated inspection system across 70K endpoints,',
    emphasis: 'achieving 98% accuracy at 3.8% FPR on edge hardware.',
    summary: 'Applied FMEA to define failure modes, calibrated detection threshold logic through structured data analysis, and produced documentation confirming deployment readiness across variable operating conditions.',
    problem: 'An automated inspection system needed to be deployed across 70K endpoints with variable operating conditions. The challenge was confirming readiness without being able to test every environment: and defining what “good enough” accuracy actually meant.',
    approach: [
      ['Define failure modes', 'Applied FMEA to systematically identify failure modes across the deployment environment and confirm readiness criteria before calibration began.'],
      ['Calibrate the threshold', 'Ran structured data analysis to calibrate detection threshold logic, balancing accuracy against false positive rate. Selected a threshold achieving 98% accuracy at 3.8% FPR on Jetson Nano edge hardware.'],
      ['Document and ship', 'Produced deployment documentation confirming distributed readiness across variable field conditions. Findings supported the production rollout decision.']
    ],
    artifacts: ['FMEA failure mode analysis', 'Threshold calibration results', 'Deployment readiness documentation'],
    takeaways: [
      'FMEA before calibration ensured the right failure modes were being measured, not just the convenient ones.',
      'The accuracy/FPR tradeoff required an explicit decision: there was no threshold that optimized both.',
      'Deployment documentation at scale requires structure, not just results: the format mattered as much as the findings.'
    ]
  },
  {
    slug: 'cms-pm',
    track: 'product',
    artwork: 'cms-illustration.svg',
    hideImages: true,
    thumbnail: 'cms-illustration.svg',
    nda: true,
    title: 'CMS Info Systems: Deployment PM',
    subtitle: 'Defining launch criteria for a 70K-endpoint rollout',
    category: 'Product Management',
    tools: 'Data analysis · Acceptance criteria · FMEA',
    role: 'Product Development Intern',
    timeline: 'Jun 2024 to Aug 2024',
    context: 'CMS Info Systems',
    lead: 'Defined launch acceptance criteria for a 70K-endpoint deployment,',
    emphasis: 'balancing detection performance against user friction to select the right threshold.',
    summary: 'Scoped acceptance criteria, made the accuracy vs. false-positive-rate tradeoff decision, and produced documentation supporting the production rollout decision.',
    problem: 'A 70K-endpoint automated inspection system needed clear launch criteria: but “good enough” accuracy wasn’t defined. The risk of setting it too high was delayed deployment; too low was user friction from false positives.',
    approach: [
      ['Define the tradeoff', 'Scoped launch acceptance criteria by mapping the accuracy vs. false-positive-rate tradeoff against actual user impact. Made the explicit decision to prioritize accuracy at 98% with a 3.8% FPR.'],
      ['Validate the decision', 'Ran structured data analysis to confirm the threshold held across variable operating conditions on edge hardware. Produced documentation supporting the rollout decision.'],
      ['Ship with confidence', 'Supported the production rollout decision with evidence-backed documentation confirming readiness across the full 70K-endpoint deployment.']
    ],
    artifacts: ['Launch acceptance criteria', 'Threshold analysis', 'Rollout readiness documentation'],
    takeaways: [
      'Acceptance criteria without a defined tradeoff framework aren’t criteria: they’re just aspirations.',
      'The user friction cost of a false positive was higher than the accuracy cost of a true negative.',
      'Evidence-backed documentation was what made the rollout decision feel safe, not just the number.'
    ]
  },
  {
    slug: 'revamp',
    track: 'product',
    artwork: 'revamp',
    title: 'Revamp',
    subtitle: 'Agentic AI consulting lab at UIUC',
    category: 'Product Leadership / AI',
    tools: 'Agile · KPI tracking · Discovery · Roadmap',
    role: 'Founder & Director',
    timeline: 'Aug 2025 to Present',
    context: 'UIUC student organization',
    lead: 'Built a 45-member agentic AI consulting lab from scratch,',
    emphasis: 'delivering across 6 client engagements with 4 concurrent workstreams and a 33% reduction in delivery cycle time.',
    summary: 'Grew Revamp from 0 to 45 members, ran 30+ discovery calls, tracked delivery KPIs across 6 engagements, and built the operating infrastructure to make delivery repeatable.',
    problem: 'Student consulting organizations typically lack the infrastructure to deliver consistently: each engagement is ad hoc, handoffs fail, and client quality varies wildly. The challenge was building something that could scale without becoming bureaucratic.',
    approach: [
      ['Build the operating model', 'Designed sprint cycles, project intake, and client delivery infrastructure to standardize execution. Applied RICE prioritization to sequence roadmap decisions across all active engagements.'],
      ['Run discovery at scale', 'Ran 30+ discovery and stakeholder calls, converting ambiguous client needs into MVP requirements and sprint priorities. Kept scope tight enough to ship.'],
      ['Measure and iterate', 'Tracked adoption and delivery KPIs across 6 engagements. Used post-launch data to reprioritize features and reduce average delivery cycle time by 33%.']
    ],
    artifacts: ['Operating model', 'Client delivery infrastructure', 'KPI tracking system'],
    takeaways: [
      'The operating model was the product: without it, quality would have degraded as we scaled.',
      '30+ discovery calls taught me that ambiguous client problems aren’t unique: most compress into a small set of failure modes.',
      'A 33% cycle time reduction came from reducing handoff friction, not from working faster.'
    ]
  },
  {
    slug: 'stealth-startup',
    nda: true,
    hideImages: true,
    thumbnail: 'stealth-illustration.svg',
    track: 'product',
    artwork: 'stealth-illustration.svg',
    title: 'San Francisco - Stealth Startup',
    subtitle: 'LLM orchestrator agent for small businesses',
    category: 'Product Management / AI',
    tools: 'PRDs · User research · Agile · Shopify API',
    role: 'Product Manager',
    timeline: 'Feb 2025 to May 2025',
    context: 'San Francisco stealth startup',
    lead: 'Defined the product strategy and drove the full PM cycle for a production LLM orchestrator agent,',
    emphasis: 'taking activation from 52% to 74% and 4-week retention from 34% to 52%.',
    summary: 'Ran 50+ customer interviews with Chicago SMBs, prioritized a Shopify API redesign based on findings, and tracked post-launch metrics that confirmed the changes worked.',
    problem: 'The product was live but SMB users were dropping off before completing their first workflow. Activation was at 52%, time-to-first-value was 12 minutes, and nobody had done structured user research to understand why.',
    approach: [
      ['Find the problem', 'Ran 50+ customer interviews with Chicago SMBs to identify where workflows were failing. Surfaced that the Shopify API integration was the highest-friction point in the critical path.'],
      ['Prioritize and ship', 'Defined MVP scope for the integration redesign, wrote user stories and PRD, and ran sprint planning with engineering. Tracked the redesign through to production.'],
      ['Measure the outcome', 'Ran quantitative analysis on feature performance across 150+ beta users. Activation went from 52% to 74%, time-to-first-value dropped from 12 min to 4 min, agent task success improved from 72% to 93%, and 4-week retention went from 34% to 52%.']
    ],
    artifacts: ['User research synthesis', 'PRD and user stories', 'Post-launch metrics dashboard'],
    takeaways: [
      '50 interviews were enough to identify the highest-leverage problem: more would have been diminishing returns.',
      'Time-to-first-value was the leading indicator that predicted retention: fixing it moved both.',
      'Quantitative validation post-launch is what separated this from a guess.'
    ]
  },
  {
    slug: 'ibc',
    nda: true,
    hideImages: true,
    track: 'product',
    artwork: 'ibc-team.jpg',
    thumbnail: 'ibc-team.jpg',
    title: 'Illinois Business Consulting',
    subtitle: 'Big 4, MNC division, and cybersecurity startup engagements',
    category: 'Project Management / Strategy',
    tools: 'Power BI · GTM frameworks · Market research · Stakeholder management',
    role: 'Project Manager',
    timeline: 'Sep 2024 to May 2025',
    context: 'Illinois Business Consulting, UIUC',
    lead: 'Led three distinct client engagements spanning Big 4 talent pipeline design, MNC division office location analysis, and cybersecurity startup full GTM strategy,',
    emphasis: 'each requiring different analytical frameworks and stakeholder management approaches.',
    summary: 'Designed university partnership frameworks for Big 4, built Power BI cluster maps and facilities models for a $400K MNC division office location decision, and led a 10-person team to deliver a full GTM strategy for cybersecurity startup.',
    problem: 'Three structurally different problems: Big 4 needed a repeatable framework for university partnerships; MNC division needed data-driven office location analysis under a $400K budget constraint; cybersecurity startup needed a GTM strategy from scratch with no prior market research.',
    approach: [
      ['Big 4', 'Designed university partnership frameworks architecting recruiting pipelines, case competition sponsorship models, and research collaboration structures to formalize their academic talent pipeline.'],
      ['MNC division', 'Led technical analysis for new office location: built cluster maps, facilities planning models, and cost/manpower constraint analyses in Power BI against a $400K budget.'],
      ['cybersecurity startup', 'Led a 10-person team through ICP definition, competitive positioning, pricing strategy, sales playbook, and channel strategy. Delivered a prioritized market-entry strategy directly to the founder.']
    ],
    artifacts: ['Big 4 partnership framework', 'MNC division Power BI cluster maps', 'cybersecurity startup GTM strategy and playbook'],
    takeaways: [
      'Framework design for Big 4 required understanding what they actually valued in university partnerships, not just what they asked for.',
      'The MNC division location decision depended more on manpower constraints than cost: the Power BI model made that visible.',
      'A 10-person team on an ambiguous problem needs a structure for disagreement, not just for execution.'
    ]
  }
];
