export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedIn: string;
  summary: string;
  available: string;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  dates: string;
  metrics: string[];
  bullets: string[];
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  url?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export const personalInfo: PersonalInfo = {
  name: "Akhil Yadav",
  title: "Controls Design Engineer | EPMS and BMS | IEC 61511 | Data Centers",
  location: "Berlin, Germany",
  email: "akhil20698@gmail.com",
  phone: "+4917672678553",
  linkedIn: "https://linkedin.com/in/akhilyad",
  summary:
    "Automation and Controls Engineer with 5+ years delivering EPC projects in regulated environments. Served as Design Authority for a USD 250M offshore EPC and a 350 MWp solar portfolio, driving OEM and in-house teams to zero open items at handover. Core expertise spans ABB 800xA DCS migrations and SCADA/HMI design, augmented by strategic PyPSA energy system modeling.",
  available: "Available immediately · Open to relocation",
};

export const experience: Experience[] = [
  {
    company: "ib vogt GmbH",
    role: "Controls and Electrical Systems Engineer — EPC Solar",
    location: "Berlin, Germany",
    dates: "Apr 2025 – Sep 2025",
    metrics: ["18% NCR cut", "35% OTD up", "6 sites", "680+ I/O", "42 panels"],
    bullets: [
      "Design authority for SLDs, control schematics and 33kV MV drawings (42 panels, 680+ I/O); caught errors pre-construction, avoiding a 2-week delay.",
      "Coordinated in-house and OEM teams (Huawei, SMA, KACO) across 6 EPC sites; resolved commissioning RFIs to lift on-time delivery 35%.",
      "Led site engineering across electrical, controls and SCADA scope, delivering 6 concurrent sites to handover.",
      "Authored SOPs, RFQs and commissioning protocols; tracked KPIs in Power BI and procurement in SAP.",
    ],
  },
  {
    company: "ABB Energy Industries",
    role: "Product Engineer — Process Automation",
    location: "Bengaluru, India",
    dates: "Jan 2023 – Sep 2024",
    metrics: ["MTBF +43%", "HMI effort −25%", "38 defects fixed", "1,200+ signals", "USD 12M"],
    bullets: [
      "Led ABB 800xA migration of 45+ legacy P14 modules to IEC 61131-3; owned fault detection and alarm rationalisation, raising MTBF 43%.",
      "Designed SCADA/HMI graphics for 6 process stages in 800xA using object-based engineering, cutting build effort 25%.",
      "Ran FAT/SAT and commissioning on 3 projects (USD 12M); cleared 38 defects across 1,200+ signals for zero critical defects at go-live.",
      "Configured fault-tolerant 800xA with HAC redundancy, Historian and OPC; built alarm strategy to NAMUR NE 107.",
    ],
  },
  {
    company: "Yokogawa India Ltd.",
    role: "Project Engineer — EPC Automation (Offshore)",
    location: "Bengaluru, India",
    dates: "Sep 2020 – Dec 2022",
    metrics: ["99.7% uptime", "35% defect cut", "93% first-pass", "USD 250M", "1,850+ loops"],
    bullets: [
      "Led DCS engineering on a USD 250M Qatar Energy offshore EPC; integrated 355 RTUs and Yokogawa CENTUM VP across 4 platforms (N+1) for 99.7% uptime.",
      "Directed 14 FATs, 8 SATs and 1,850+ loop checks; standardised procedures fleet-wide for a 93% first-pass rate and 35% fewer defects.",
      "Authored 180+ ISA sheets, 65 BOMs and 3,200+ cable schedules; reviewed SLDs for ESD, fire & gas and HVAC to IEC 61511 with zero rework.",
      "Coordinated 8 OEM vendors (Emerson, Honeywell, ABB) across India and Qatar; led bid reviews and resolved 38 quality exceptions.",
      "Developed FBD and ladder logic for ESD, fire & gas and HVAC; built multi-layer comms (IEC 61850, DNP3, OPC), resolving tag-mapping and IP conflicts at pre-FAT.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Offshore Wind Scenario Modelling (Dogger Bank)",
    description:
      "Developed scenario and sensitivity analysis to predict energy output against demand fluctuations and assess investment strategies for offshore wind financing.",
    tech: ["Excel", "Financial Modelling", "Sensitivity Analysis", "Offshore Wind"],
    url: "https://docs.google.com/spreadsheets/d/16kuogiz568CArvaD8rarbTpXbpB7gqw6FpeSNKOvMBE/edit?usp=sharing",
  },
  {
    name: "Dual-Source Qualification (ib Vogt GmbH)",
    description:
      "Led cross-functional supplier qualification eliminating single-source risk on a critical sub-assembly — delivered 6 weeks ahead of schedule, directly reducing supply chain exposure.",
    tech: ["SAP Ariba", "Supplier Management", "Risk Mitigation", "Cross-Functional"],
  },
  {
    name: "Power BI Procurement Dashboard (On-Site)",
    description:
      "Designed and deployed live KPI dashboard adopted by Supply Chain leadership — replaced manual Excel tracking, saving 200+ hours annually.",
    tech: ["Power BI", "DAX", "KPI Design", "Supply Chain"],
  },
  {
    name: "Green Hydrogen Cost Modelling",
    description:
      "Thesis project modelling green hydrogen LCOH across 9 countries using PyPSA with 8,760 hourly dispatch steps. Key finding: a 1% rise in financing cost (WACC) cancels a 10% gain in renewable output.",
    tech: ["PyPSA", "Python", "Energy Economics", "Excel"],
  },
  {
    name: "Satellite Power System Fault Detection",
    description:
      "Developed a deep learning-based fault detection system for satellite power systems using PCA + DNN on NASA ADAPT data, achieving 99.75% accuracy versus SVM and MLP baselines. Built a working hardware model for real sensor validation.",
    tech: ["Python", "TensorFlow", "PCA", "DNN", "Hardware-in-the-Loop"],
  },
  {
    name: "Gas Leak Detection ML Pipeline",
    description:
      "Published research on machine learning algorithms for gas leak detection in industrial environments. Springer Singapore 2020. DOI-linked publication covering feature engineering and classifier optimisation.",
    tech: ["Python", "Scikit-learn", "Signal Processing", "Research"],
    url: "https://www.researchgate.net/publication/345485153_A_Comparative_Study_of_Machine_Learning_Algorithms_for_Gas_Leak_Detection",
  },
  {
    name: "ABB 800xA DCS Migration",
    description:
      "Led migration of 45+ legacy ProControl P14 control modules to ABB 800xA, converting C-based logic to IEC 61131-3 Structured Text. Configured HAC redundancy, Historian and OPC communications.",
    tech: ["ABB 800xA", "IEC 61131-3", "HAC", "OPC", "NAMUR NE 107"],
  },
  {
    name: "Offshore Platform DCS Integration",
    description:
      "End-to-end DCS engineering for a $250M Qatar Energy offshore EPC: integrated 355 RTUs, 12 PLCs and Yokogawa CENTUM VP across 4 platforms with N+1 redundancy, achieving 99.7% uptime.",
    tech: ["Yokogawa CENTUM VP", "IEC 61131-3", "Modbus", "IEC 61850", "SCADA"],
  },
];

export const skills: SkillCategory[] = [
  {
    category: "DCS & Automation",
    items: [
      "ABB 800xA",
      "Yokogawa CENTUM VP",
      "IEC 61131-3 (ST, FBD, Ladder)",
      "SCADA/HMI Design",
      "Object-Based Engineering",
      "NAMUR NE 107",
      "HAC Redundancy",
      "OPC DA/AE/UA",
      "Modbus TCP/RTU",
      "IEC 61850",
    ],
  },
  {
    category: "Project Engineering",
    items: [
      "SLD Review",
      "Control Schematics",
      "ISA Sheets",
      "BOMs",
      "FDS / MRB Index",
      "I/O Lists",
      "Design Authority",
      "PyPSA Modelling",
      "PCA + DNN",
    ],
  },
  {
    category: "Commissioning",
    items: [
      "FAT / SAT",
      "Loop Checks",
      "Pre-Commissioning",
      "RFI Resolution",
      "Alarm Rationalisation",
      "Defect Density Reduction",
      "99.7–99.9% Uptime Delivery",
    ],
  },
  {
    category: "Team & Vendor Coordination",
    items: [
      "8 OEM Vendors",
      "6 Concurrent Sites",
      "Cross-Discipline Teams",
      "SOPs & Training",
      "Technical Bid Reviews",
      "Corrective Action",
    ],
  },
  {
    category: "Tools & Software",
    items: [
      "AutoCAD",
      "SAP Ariba / ERP",
      "Power BI",
      "MS Project",
      "MS Excel (Advanced)",
      "Python",
    ],
  },
];