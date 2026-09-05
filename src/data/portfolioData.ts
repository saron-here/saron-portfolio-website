import { ProjectItem, ExperienceItem, EducationItem, CertificationItem, AchievementItem } from '../types';

export const PERSONAL_INFO = {
  name: "SARON SIFANA S",
  displayName: "SARON SIFANA",
  title: "MBA — BUSINESS ANALYTICS & FINANCE",
  headline: "Turning data, financial insight and business problems into practical solutions.",
  location: "Chennai, India",
  linkedin: "https://linkedin.com/in/saron-sifana",
  linkedinHandle: "linkedin.com/in/saron-sifana",
  summary: "MBA candidate specializing in Business Analytics and Finance with expertise in business intelligence, financial research, project coordination, and dashboard development. Proficient in Power BI, Excel, Python, and Tableau to improve business performance through data-driven insights.",
  languages: [
    { name: "English", level: "Professional Working" },
    { name: "Tamil", level: "Native" },
    { name: "Japanese", level: "NAT-Test N5 Certified" },
    { name: "Arabic", level: "Elementary" },
  ],
};

export const PROJECTS: ProjectItem[] = [
  {
    id: "power-bi-bi-dashboard",
    number: "01",
    title: "Power BI Executive BI Dashboard",
    category: "BUSINESS INTELLIGENCE & ANALYTICS",
    subtitle: "Enterprise Sales, Profit & Regional KPI Intelligence",
    shortDescription: "Developed interactive multi-dimensional dashboards tracking 15+ KPIs, reducing manual reporting effort by 40% with deep regional, segment, and category decomposition.",
    fullOverview: "Designed and deployed a comprehensive Power BI reporting suite that aggregates over $2M in sales, 38K units, and 5,000+ orders. Features dynamic slicing across Central, East, South, and West territories, cross-filtering by customer segment (Consumer, Corporate, Home Office), and automated profit variance diagnostics.",
    problem: "Executives and regional sales directors relied on fragmented spreadsheets, resulting in slow decision-making, 20+ hours of repetitive weekly reporting, and delayed visibility into low-margin product categories.",
    solution: "Built a centralized data pipeline with star-schema modeling in Power BI. Implemented automated DAX measures, dynamic YoY trend charts, discount vs. profit correlation analysis, and intuitive multi-select slicers.",
    tools: ["Power BI", "DAX", "Data Modeling", "Excel Advanced", "Data Visualization", "KPI Tracking"],
    metrics: [
      { label: "Total Sales Tracked", value: "$2.0M+" },
      { label: "Total Profit Analyzed", value: "$286K" },
      { label: "Manual Effort Reduction", value: "40%" },
      { label: "Active KPIs", value: "15+" }
    ],
    tags: ["Power BI", "KPI Reporting", "Sales Analytics", "Executive Dashboard", "DAX"],
    visualType: "powerbi",
    accentColor: "#FF3B30"
  },
  {
    id: "hiremind-ai",
    number: "02",
    title: "HireMind AI — Talent Analytics Platform",
    category: "AI & WORKFORCE ANALYTICS",
    subtitle: "Automated Resume Screening & Predictive Fit Scoring",
    shortDescription: "AI-driven recruiting intelligence tool that analyzes applicant profiles, extracts key competencies, and predicts role alignment using natural language processing.",
    fullOverview: "A smart workforce analytics platform designed to solve hiring bottlenecks. HireMind AI ingests candidate resumes, extracts structured technical and soft skills, cross-evaluates against role specifications, and delivers objective match scores alongside automated interview question suggestions.",
    problem: "HR talent teams spend an average of 4-6 minutes manually scanning each resume, leading to subjective bias, high candidate drop-off, and elongated hiring cycles.",
    solution: "Engineered an intelligent NLP pipeline in Python with entity recognition and semantic embeddings to evaluate skills, experience weightings, and educational credentials systematically.",
    tools: ["Python", "NLP", "Machine Learning", "Streamlit / Web UI", "Pandas", "Scikit-Learn"],
    metrics: [
      { label: "Screening Speedup", value: "70%" },
      { label: "Match Precision", value: "92%" },
      { label: "Processing Time", value: "< 2s / CV" },
      { label: "Evaluation Criteria", value: "12+ Dimensions" }
    ],
    tags: ["Python", "NLP", "Talent Analytics", "Predictive Modeling", "HR Tech"],
    visualType: "ai",
    accentColor: "#FF5638"
  },
  {
    id: "novitech-ai-analytics",
    number: "03",
    title: "AI Chatbot & Facial Recognition Automation",
    category: "AI AUTOMATION & MACHINE LEARNING",
    subtitle: "Python Automation & Computer Vision Solutions (Novitech)",
    shortDescription: "Engineered automated conversational agents and computer vision facial identification models using Python, TensorFlow, and OpenCV.",
    fullOverview: "Developed during the Novitech AI & Data Analytics program. Combines intelligent NLP dialogue handling with high-precision biometric face detection pipelines, demonstrating end-to-end deployment of automated machine learning solutions.",
    problem: "Traditional service operations and access control require constant human oversight, resulting in high latency, human error, and operational overhead.",
    solution: "Created modular Python scripts integrating OpenCV haar cascades/deep neural nets for real-time facial verification alongside a contextual intent-classification chatbot.",
    tools: ["Python", "TensorFlow", "OpenCV", "Data Processing", "NLTK", "Computer Vision"],
    metrics: [
      { label: "Facial Verification Accuracy", value: "96.4%" },
      { label: "Response Latency", value: "< 250ms" },
      { label: "Automated Workflows", value: "2 End-to-End" },
      { label: "Dataset Processed", value: "1,000+ Samples" }
    ],
    tags: ["Python", "TensorFlow", "Computer Vision", "Chatbot", "Novitech"],
    visualType: "ai",
    accentColor: "#E8322B"
  },
  {
    id: "apexstock-finance",
    number: "04",
    title: "ApexStock Financial & Equity Research",
    category: "FINANCIAL MODELING & EQUITY RESEARCH",
    subtitle: "Algorithmic Valuation, Risk Metrics & Market Intelligence",
    shortDescription: "Quantitative financial analysis engine performing stock market valuation, equity research ratios, risk-return modeling, and portfolio optimization.",
    fullOverview: "A structured financial analytics suite built to support informed investment decisions. Incorporates discounted cash flow (DCF) models, Sharpe ratio calculations, volatility indexing, and automated technical momentum indicators across market sectors.",
    problem: "Retail investors and junior analysts struggle with consolidating disparate market feeds, balance sheet metrics, and valuation models into clear actionable investment theses.",
    solution: "Developed automated Excel / Python financial templates combining time-series historical price movements with fundamental financial statement ratios for rapid valuation.",
    tools: ["Financial Analysis", "Equity Research", "Excel Advanced", "Python", "Valuation Modeling", "Stock Market Analysis"],
    metrics: [
      { label: "Financial Ratios Tracked", value: "25+" },
      { label: "Valuation Models", value: "DCF & Comparables" },
      { label: "Risk Assessment", value: "Sharpe & Beta" },
      { label: "Asset Classes", value: "Equities & Mutual Funds" }
    ],
    tags: ["Finance", "Equity Research", "Financial Modeling", "Stock Market", "Portfolio Analysis"],
    visualType: "finance",
    accentColor: "#B51F24"
  },
  {
    id: "visioneye-ai",
    number: "05",
    title: "VisionEye AI — Quality Control Pipeline",
    category: "COMPUTER VISION & AUTOMATION",
    subtitle: "Automated Visual Inspection & Metric Logging",
    shortDescription: "Computer vision solution for automated anomaly detection, object counting, and operational quality assurance logging.",
    fullOverview: "Designed to bridge operational floor metrics with data intelligence. VisionEye AI processes continuous image frames to detect deviations, count items in high-throughput environments, and stream status KPIs directly into operational monitoring systems.",
    problem: "Manual visual inspection in manufacturing and inventory management suffers from fatigue-related inaccuracies and lacks real-time digitized logging.",
    solution: "Applied lightweight convolutional neural network models to process optical feeds, flag defective units in real time, and generate hourly throughput analytics.",
    tools: ["Python", "OpenCV", "TensorFlow", "Image Processing", "Analytics Logging"],
    metrics: [
      { label: "Detection Accuracy", value: "95.8%" },
      { label: "Processing FPS", value: "30 FPS" },
      { label: "Error Reduction", value: "35%" },
      { label: "Data Pipeline", value: "Real-time Stream" }
    ],
    tags: ["Computer Vision", "Python", "Quality Assurance", "Operations", "AI"],
    visualType: "vision",
    accentColor: "#FF5638"
  },
  {
    id: "aurabmi-health-analytics",
    number: "06",
    title: "AuraBMI Health & Metrics Intelligence",
    category: "HEALTH ANALYTICS & UX",
    subtitle: "Interactive Demographic Health Indicator Modeling",
    shortDescription: "Interactive biometric calculator and demographic health distribution analyzer providing categorized risk stratification and wellness insights.",
    fullOverview: "A sleek, responsive health analytics interface that translates raw biometric inputs (height, weight, age, activity level) into comprehensive metabolic profiles, risk percentiles, and personalized lifestyle recommendations.",
    problem: "Most health metrics calculators provide dry, single-number outputs without contextual benchmarks or actionable guidance.",
    solution: "Built a dynamic visualization system with interactive gauge meters, population distribution comparisons, and structured nutritional guidelines.",
    tools: ["JavaScript / TypeScript", "Data Visualization", "Tailwind CSS", "Statistical Modeling"],
    metrics: [
      { label: "User Satisfaction", value: "98%" },
      { label: "Computation Latency", value: "Instantaneous" },
      { label: "Health Indicators", value: "BMI, BMR, TDEE" },
      { label: "Risk Categories", value: "5 Tiers" }
    ],
    tags: ["Health Analytics", "Data Visualization", "Interactive Modeling", "UX"],
    visualType: "health",
    accentColor: "#FF3B30"
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "mcube-academy",
    company: "Mcube Academy",
    role: "Business Analytics & Finance Intern",
    period: "15 Jun 2026 – 15 Jul 2026",
    location: "Chennai, India",
    badge: "Recent Internship",
    points: [
      "Developed 20+ comprehensive financial awareness materials and research modules supporting stock market and mutual fund education.",
      "Coordinated project documentation, milestone progress tracking, and stakeholder reporting, significantly improving project visibility.",
      "Conducted detailed equity and market research to synthesize complex financial principles into intuitive, data-driven frameworks.",
      "Assisted in preparing analytical presentations and executive summaries for investment training programs."
    ]
  },
  {
    id: "ambika-cotton-mills",
    company: "Ambika Cotton Mills",
    role: "Operations Intern",
    period: "2025",
    location: "Tamil Nadu, India",
    badge: "Industrial Operations",
    points: [
      "Streamlined operational documentation using standardized reporting formats, improving record accuracy by 40%.",
      "Analyzed daily production records and supported inventory reporting across multi-stage manufacturing workflows.",
      "Collaborated with production supervisors to identify workflow bottlenecks and recommend data-backed inventory optimizations.",
      "Maintained structured operational ledgers for throughput auditing and raw material dispatch schedules."
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "MBA in Business Analytics & Finance",
    institution: "St. Joseph's Institute of Technology",
    period: "2025 – 2027",
    score: "CGPA: 9 / 10",
    highlight: "Specializing in Business Intelligence, Financial Modeling, and Data Analytics"
  },
  {
    degree: "B.Com (Computer Applications)",
    institution: "NPR Arts & Science College",
    period: "2022 – 2025",
    score: "CGPA: 7.9 / 10",
    highlight: "Core foundation in commerce, accounting principles, and computational software"
  },
  {
    degree: "Higher Secondary Education",
    institution: "St. Joseph's Matric. Hr. Sec School",
    period: "Completed",
    score: "97%",
    highlight: "Academic excellence in commerce and mathematics"
  }
];

export const SKILLS = [
  {
    category: "Business Analytics & BI",
    description: "Translating multi-source enterprise data into clear, decision-ready visual intelligence.",
    skills: ["KPI Reporting", "Business Intelligence", "Executive Dashboarding", "Data Visualization", "Operational Metrics", "Requirements Gathering"]
  },
  {
    category: "Financial Analysis & Research",
    description: "Deep quantitative analysis, equity research, and structured investment modeling.",
    skills: ["Financial Analysis", "Equity Research", "Stock Market Analysis", "Mutual Fund Research", "Valuation Modeling", "Risk-Return Analysis"]
  },
  {
    category: "Technical Tools & Languages",
    description: "Modern tools and programming frameworks for analytics, scripting, and visualization.",
    skills: ["Power BI", "Microsoft Excel (Advanced / VLOOKUP / Pivot)", "Python", "Tableau", "DAX", "SQL Basics", "TensorFlow Basics"]
  },
  {
    category: "Core Competencies",
    description: "Professional capabilities driving effective cross-functional execution.",
    skills: ["Project Coordination", "Stakeholder Communication", "Standardized Documentation", "Problem Solving", "Continuous Learning"]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "novitech-ai",
    title: "Artificial Intelligence & Data Analytics",
    issuer: "NoviTech R&D Pvt Ltd",
    credentialBadge: "AI & ML Certification",
    category: "AI & Data"
  },
  {
    id: "fism-stock",
    title: "Foundation in Stock Market (FISM)",
    issuer: "Financial Markets Institute",
    credentialBadge: "Capital Markets & Equity",
    category: "Finance"
  },
  {
    id: "nptel-ei",
    title: "NPTEL Emotional Intelligence",
    issuer: "IIT Kharagpur",
    credentialBadge: "Elite + Silver (75%)",
    category: "Professional"
  },
  {
    id: "japanese-nat",
    title: "Japanese NAT-Test N5",
    issuer: "Senmon Kyouiku Publishing Co., Ltd.",
    credentialBadge: "Certified Japanese Proficiency",
    category: "Language"
  },
  {
    id: "forage-analytics",
    title: "Data Analytics Job Simulation",
    issuer: "Forage Simulation",
    credentialBadge: "Practical Analytics & Strategy",
    category: "AI & Data"
  },
  {
    id: "forage-private-bank",
    title: "Private Bank Job Simulation",
    issuer: "Forage Simulation",
    credentialBadge: "Wealth Management & Advisory",
    category: "Finance"
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: "Student Coordinator — National Symposium",
    organization: "St. Joseph's Institute of Technology",
    description: "Led and coordinated academic events, panel discussions, and student competitions during the prestigious national-level management symposium.",
    category: "Leadership & Coordination"
  },
  {
    title: "UN Sustainable Development Goals Initiative Member",
    organization: "SDG Academic Chapter",
    description: "Active contributor to sustainability initiatives, researching and promoting practical ESG and green-business practices within campus projects.",
    category: "Sustainability & Social Impact"
  },
  {
    title: "National DAKSHA Business Quiz Finalist",
    organization: "DAKSHA National Business Conclave",
    description: "Competed and recognized among 500+ participants across top institutions nationwide in rigorous rounds of business case analysis and market trivia.",
    category: "Business Acumen & Competition"
  }
];
