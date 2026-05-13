const resumeData = {
  personal_info: {
    name: "Diti Chhaproo",
    phone: "+1 (217) 819-0564",
    email: "djc11@illinois.edu",
    linkedin: "linkedin.com/in/ditichhaproo"
  },
  education: {
    university: "University of Illinois Urbana-Champaign",
    degree: "BS in Systems Engineering and Design",
    minor: "Computer Science",
    honors: "James Scholar",
    graduation_date: "May 2028",
    gpa: "3.7/4.0",
    coursework: [
      "Statics & Mechanics of Materials",
      "Deterministic Models in Optimization",
      "Analysis of Data",
      "University Physics: Mechanics, E&M, Quantum",
      "Introduction to Electronics",
      "Introduction to Computing (C++)"
    ]
  },
  research: [
    {
      lab: "Engineering System Design Lab (ESDL)",
      advisor: "Prof. James Allison",
      role: "Research Assistant",
      duration: "September 2025 – Present",
      description: [
        "Building a graph attention network (3 heads, 2 layers) over 847-node thermal management system graphs to automate BEV architecture generation, replacing brute-force search across 150+ vehicle and 21,000+ aircraft configurations",
        "A 15-paper literature review on graph generation and NSC-based constraint modeling helped shrink the viable candidate space from 150+ configurations down to a tractable generative design scope, feeding directly into early TMS system requirements"
      ]
    }
  ],
  internships: [
    {
      company: "HDF Group",
      role: "Product Systems Engineer Intern",
      duration: "Spring 2026 – Present",
      description: [
        "Working as a Product Systems Engineer intern within the HDF ecosystem, contributing to systems-level product development and engineering workflows"
      ]
    },
    {
      company: "Furtados School of Music",
      role: "Embedded Systems Engineering Intern",
      duration: "April 2025 – August 2025",
      description: [
        "Architected a space-constrained embedded MIDI interface on Raspberry Pi inside a 320×185×48 mm enclosure — routing USB-MIDI and DIN-5 signal flow from hardware to a cloud grading service with under 60 ms end-to-end latency across a 250K+ user deployment",
        "Owned system requirements definition, led SolidWorks enclosure prototyping against a ₹4,200 BOM target, and validated the full hardware-software stack with 130+ users"
      ]
    },
    {
      company: "CMS Info Systems",
      role: "Systems Engineering Intern",
      duration: "June 2024 – August 2024",
      description: [
        "Designed and validated YOLOv5 detection threshold logic (post-NMS confidence 0.72) for an edge CV system monitoring 70K ATM CCTV feeds — achieving 98% accuracy and a 3.8% false positive rate at 34 ms/frame on Jetson Nano",
        "Validated system readiness through edge inference benchmarks, failure mode analysis, and rollout scoping, confirming the system was ready for distributed deployment across variable field conditions"
      ]
    }
  ],
  projects: [
    {
      title: "6-DOF Robotic Arm — Autonomous Waste Management",
      role: "Systems Engineer",
      duration: "September 2025 – Present",
      description: [
        "Implementing closed-loop PID control at 200 Hz in C++ for a Raspberry Pi-driven 6-DOF arm embedded in an autonomous waste management system",
        "Sole SE across mechanical design, embedded software, and systems integration — managing all three engineering layers end to end",
        "Cut structural mass by 23% and improved robustness by 18% through geometry and material trade-offs in Fusion360; documented architecture in SysML"
      ]
    },
    {
      title: "Illinois Business Consulting",
      role: "Project Manager",
      duration: "September 2024 – Present",
      description: [
        "Designed university partnership frameworks for KPMG and directed a cybersecurity growth engagement for FraterIT — owning program scoping and cross-functional stakeholder coordination on both",
        "Delivered structured requirements documentation and market segmentation analysis across both client engagements"
      ]
    },
    {
      title: "Orbital Playground",
      role: "Creator & Developer",
      duration: "May 2025 – June 2025",
      description: "Built a Python simulation toolkit for rocket propulsion and mission planning, spanning 150+ mission scenarios across multiple propulsion modes and destinations."
    },
    {
      title: "Goldman Sachs Possibilities Summit",
      role: "Selected Participant",
      duration: "January 2025",
      description: "Selected for the Goldman Sachs Women's Possibilities Summit (4% acceptance rate), gaining direct exposure to financial markets, leadership, and career development from industry leaders."
    },
    {
      title: "Project Kareeb",
      role: "Founder",
      duration: "May 2023 – August 2024",
      description: [
        "Developed a holistic curriculum for 25+ students from underserved communities, incorporating parental engagement and hands-on STEM experiments",
        "Led health and sex-education sessions alongside STEM tutoring, completing 70+ hours of community service"
      ]
    }
  ],
  publications: [
    {
      title: "Effect of tyre materials on self-balancing robot",
      authors: "Diti Chhaproo, Reetu Jain",
      date: "August 2023",
      publisher: "International Journal of Software & Hardware Research in Engineering (IJSHRE)"
    }
  ],
  skills: {
    technical: [
      "Python",
      "C++",
      "MATLAB",
      "SQL",
      "Raspberry Pi",
      "Arduino",
      "YOLOv5",
      "Docker",
      "LaTeX",
      "SysML"
    ],
    tools: [
      "Fusion360",
      "SolidWorks",
      "Git",
      "Tableau",
      "Excel",
      "AWS",
      "VS Code",
      "JIRA"
    ],
    methods: [
      "Systems Requirements Definition",
      "Verification & Validation",
      "Design Trade-off Analysis",
      "Failure Mode Analysis",
      "Hardware-Software Integration",
      "Technical Documentation"
    ]
  },
  honors: [
    "Goldman Sachs Possibilities Summit",
    "James Scholar — UIUC Honors Program",
    "Perplexity UIUC Campus Partner",
    "EKPHARSIS-II National Poetry Winner — 'Dali and I - his mighty dream'"
  ]
};

export default resumeData;
