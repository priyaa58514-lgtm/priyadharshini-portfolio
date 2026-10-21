/**
 * Central portfolio data — generated from Priyadharshini's resume.
 * Every fact on the site comes from this file.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Priyadharshini',
  displayName: 'Priyadharshini',
  firstName: 'PRIYADHARSHINI',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A PRIYADHARSHINI ORIGINAL',
  role: 'B.Sc. CS/AI Student • Full-Stack Developer',
  tagline: ['AI Student', 'Full-Stack Developer', 'Python & Data Analytics'],
  intro:
    'Motivated B.Sc. Computer Science with Artificial Intelligence (CS/AI) student at Dwaraka Doss Goverdhan Doss Vaishnav College (CGPA 8.75) with a strong passion for software development, artificial intelligence, and emerging technologies. Experienced in data analytics, machine learning fundamentals, and building full-stack web applications with React, Node.js, and Django.',
  location: 'Chennai, Tamil Nadu',
  phone: '9360656502',
  email: 'priyaa58514@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com',
    github: 'https://github.com',
  },
  resumePdf: '/assets/Priyadharshini_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Priyadharshini',
  },
  interests: ['Artificial Intelligence', 'Data Analytics & ML', 'Full-Stack Web Development'],
};

export const education = [
  {
    school: 'Dwaraka Doss Goverdhan Doss Vaishnav College',
    place: 'Chennai, Tamil Nadu',
    degree: 'B.Sc. Computer Science with Artificial Intelligence (CS/AI)',
    period: '2025 – 2028',
    score: 'CGPA 8.75',
  },
];

export const experience = [
  {
    company: 'Interain AI',
    role: 'Data Analyst Intern',
    place: 'Chennai, Tamil Nadu',
    period: 'Jun 2026 – Jul 2026',
    points: [
      'Worked with structured datasets to explore data analysis concepts and identify patterns that improved decision-making insights.',
      'Performed data cleaning and preprocessing tasks, ensuring datasets were consistent, accurate, and analysis-ready.',
      'Assisted in creating clear reports and visual summaries to communicate findings in a structured manner.',
      'Gained exposure to data handling, analytics workflows, and introductory AI-related concepts across multiple domains.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'tn-healthcare-scheme-decoder',
    title: 'TN Healthcare Scheme Decoder',
    year: '2026',
    genre: 'AI Healthcare • Full-Stack • LLM & Geospatial',
    logline: 'An AI-powered web application that simplifies Tamil Nadu healthcare schemes into user-friendly information with location intelligence.',
    stack: ['React', 'Node.js', 'Express.js', 'Groq API', 'Overpass API', 'React Router'],
    build: [
      'Built an AI-powered web application that simplifies Tamil Nadu healthcare schemes into user-friendly information.',
      'Integrated the Groq API for intelligent query processing and rapid contextual response generation.',
      'Used the Overpass API for location-based data enhancement, improving contextual relevance and healthcare accessibility.',
      'Developed a full-stack system using React and Node.js with a responsive UI and smooth navigation via React Router.',
    ],
    features: [
      'AI-powered scheme simplification and natural language explanations',
      'Groq API integration for high-speed query processing',
      'Overpass API geospatial data for location-based healthcare insights',
      'Full-stack system using React and Node.js with responsive UI',
      'Smooth client-side routing via React Router',
    ],
    metrics: [
      { value: 'Groq API', label: 'Intelligent Query Processing' },
      { value: 'Overpass', label: 'Location-Based Enhancement' },
      { value: 'Special Mention', label: 'BuildX 2026 Hackathon' },
    ],
    palette: { from: '#20180a', via: '#5a451d', to: '#0a0a0a', accent: '#c6a15b' },
    motif: 'shield',
  },
  {
    id: 'contact-management-system',
    title: 'Contact Management System',
    year: '2025',
    genre: 'Full-Stack • Web Application • Django',
    logline: 'A full-stack web application to manage contacts with complete CRUD functionality, secure storage, and structured search.',
    stack: ['Django', 'Python', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    build: [
      'Developed a full-stack web application to manage contacts with complete CRUD (Create, Read, Update, Delete) functionality.',
      'Designed a responsive user interface using HTML, CSS, Bootstrap, and JavaScript for an improved user experience.',
      'Implemented the backend using Django for secure data storage and retrieval.',
      'Added search and structured categorization features for efficient contact management.',
    ],
    features: [
      'Complete CRUD (Create, Read, Update, Delete) contact lifecycle',
      'Responsive UI built with HTML, CSS, Bootstrap, and JavaScript',
      'Django backend for secure data storage and ORM queries',
      'Real-time search and structured categorization',
    ],
    metrics: [
      { value: 'CRUD', label: 'Complete Contact Lifecycle' },
      { value: 'Django', label: 'Secure Backend Storage' },
      { value: '100%', label: 'Responsive Design' },
    ],
    palette: { from: '#1a1916', via: '#464034', to: '#0a0a0a', accent: '#dfbf7a' },
    motif: 'flow',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'buildx-2026',
    title: 'Special Mention',
    org: 'BuildX 2026 Hackathon (24-Hour Virtual Hackathon) | Vernatech LLP',
    detail: 'Received Special Mention for developing an innovative AI-powered healthcare solution at the BuildX 2026 24-Hour Virtual Hackathon, recognized for the project’s creativity, technical implementation, and real-world impact.',
    laurel: 'BuildX 2026 Hackathon',
  },
  {
    id: 'hackforge-2025',
    title: 'Data Analytics Session',
    org: 'Brainstorming Agent Hackforge 2025 | Vaishnav College',
    detail: 'Recognized for active participation in the 2025 brainstorming agent hackforge session focused on analytical problem-solving and AI ideation.',
    laurel: 'Hackforge 2025',
  },
];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'Futuro Focus', name: 'Value-Added Course – Web App Development using Django (50 Hrs)' },
  { issuer: 'Vernatech LLP', name: 'Special Mention – BuildX 2026 Hackathon (24-Hr Virtual Hackathon)' },
  { issuer: 'Vaishnav College', name: 'Data Analytics Session – Brainstorming Agent Hackforge 2025' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    subtitle: 'Core development languages',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'SQL', mono: 'Sq' },
      { name: 'Java', mono: 'Jv' },
    ],
  },
  {
    id: 'analytics',
    title: 'Data Analytics & AI/ML',
    subtitle: 'Data intelligence & modeling',
    skills: [
      { name: 'Data Analysis', mono: 'Da', note: 'Basics' },
      { name: 'Data Cleaning', mono: 'Dc' },
      { name: 'Data Visualization', mono: 'Dv' },
      { name: 'Machine Learning', mono: 'Ml', note: 'Fundamentals' },
      { name: 'Artificial Intelligence', mono: 'Ai', note: 'Introductory' },
      { name: 'Deep Learning', mono: 'Dl', note: 'Basic Concepts' },
    ],
  },
  {
    id: 'web',
    title: 'Full Stack Web Dev',
    subtitle: 'Modern web engineering',
    skills: [
      { name: 'React.js', mono: 'Re' },
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'Django', mono: 'Dj' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'HTML5', mono: 'Ht' },
      { name: 'CSS3', mono: 'Cs' },
      { name: 'Bootstrap', mono: 'Bs' },
    ],
  },
  {
    id: 'tools',
    title: 'Databases & Tools',
    subtitle: 'Development environment',
    skills: [
      { name: 'MySQL', mono: 'My' },
      { name: 'MySQL Workbench', mono: 'Mw' },
      { name: 'Jupyter Notebook', mono: 'Jn' },
      { name: 'VS Code', mono: 'Vs' },
      { name: 'Antigravity IDE', mono: 'Ag' },
      { name: 'DrJava', mono: 'Dj' },
      { name: 'IDLE (Python)', mono: 'Id' },
    ],
  },
  {
    id: 'concepts',
    title: 'Programming Concepts',
    subtitle: 'Foundations & paradigms',
    skills: [
      { name: 'OOP', mono: 'Oo' },
      { name: 'Data Structures', mono: 'Ds' },
      { name: 'Functions', mono: 'Fn' },
      { name: 'Control Flow', mono: 'Cf' },
      { name: 'Exception Handling', mono: 'Eh' },
      { name: 'Database Queries', mono: 'Dq' },
    ],
  },
  {
    id: 'soft',
    title: 'Professional Skills',
    subtitle: 'Collaboration & problem solving',
    skills: [
      { name: 'Problem Solving', mono: 'Ps' },
      { name: 'Communication', mono: 'Cm' },
      { name: 'Team Collaboration', mono: 'Tc' },
      { name: 'Leadership', mono: 'Ld' },
      { name: 'Critical Thinking', mono: 'Ct' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Python: ['Contact Management System', 'Django 50-Hr Course', 'Interain AI Internship'],
  SQL: ['Database Queries', 'MySQL Workbench', 'Interain AI Internship'],
  Java: ['Object-Oriented Programming (OOP)', 'DrJava', 'Academic Coursework'],
  'React.js': ['TN Healthcare Scheme Decoder (BuildX 2026)'],
  'Node.js': ['TN Healthcare Scheme Decoder Backend API'],
  'Express.js': ['TN Healthcare Scheme Decoder REST API'],
  Django: ['Contact Management System', 'Value-Added Course (50 Hrs)'],
  'REST APIs': ['TN Healthcare Scheme Decoder', 'Groq & Overpass API Integrations'],
  JavaScript: ['TN Healthcare Scheme Decoder', 'Contact Management System'],
  HTML5: ['Contact Management System', 'TN Healthcare Scheme Decoder'],
  CSS3: ['Contact Management System', 'TN Healthcare Scheme Decoder'],
  Bootstrap: ['Contact Management System UI'],
  'Data Analysis': ['Interain AI Internship', 'Hackforge 2025'],
  'Data Cleaning': ['Interain AI Internship (Structured Datasets)'],
  'Data Visualization': ['Interain AI Internship (Visual Reports)'],
  'Machine Learning': ['B.Sc. CS/AI', 'TN Healthcare AI Scheme Decoder'],
  'Artificial Intelligence': ['B.Sc. CS/AI', 'BuildX 2026 Special Mention'],
  'Deep Learning': ['B.Sc. CS/AI'],
  MySQL: ['Contact Management System', 'MySQL Workbench'],
  'MySQL Workbench': ['Database Management'],
  'Jupyter Notebook': ['Data Preprocessing & Analysis'],
  'Antigravity IDE': ['Portfolio Series & Project Development'],
  'VS Code': ['Full-Stack Project Development'],
  OOP: ['Python & Java Programming'],
  'Data Structures': ['Academic Coursework & Problem Solving'],
  'Problem Solving': ['BuildX 2026 24-Hour Hackathon'],
  'Team Collaboration': ['BuildX 2026 Virtual Hackathon', 'Hackforge 2025'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const gold: Palette = { from: '#20180a', via: '#5a451d', to: '#0a0a0a', accent: '#c6a15b' };
const ivory: Palette = { from: '#1a1916', via: '#464034', to: '#0a0a0a', accent: '#dfbf7a' };
const warmGrey: Palette = { from: '#161618', via: '#38363b', to: '#0a0a0a', accent: '#b9b1a4' };
const amber: Palette = { from: '#1f1406', via: '#5e3e14', to: '#0a0a0a', accent: '#d4a853' };
const emerald: Palette = { from: '#0a1a14', via: '#1e4838', to: '#0a0a0a', accent: '#5ec29b' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Academic Genesis',
    period: '2025 – 2028',
    synopsis: 'B.Sc. Computer Science with Artificial Intelligence (CS/AI) at Dwaraka Doss Goverdhan Doss Vaishnav College, Chennai.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Entering Computer Science & AI',
        description: 'Enrolled in B.Sc. Computer Science with Artificial Intelligence (CS/AI) at Dwaraka Doss Goverdhan Doss Vaishnav College, Chennai — CGPA 8.75.',
        tags: ['B.Sc. CS/AI', 'DG Vaishnav College', 'CGPA 8.75', 'Chennai'],
        runtime: '2025 – 2028',
        palette: gold,
      },
      {
        code: 'S01 E02',
        title: 'Foundations of Programming',
        description: 'Mastered programming concepts: OOP, Data Structures, Functions, Control Flow, Loops, and SQL database queries across Python, Java, and SQL.',
        tags: ['Python', 'SQL', 'Java', 'OOP', 'Data Structures'],
        runtime: 'Academic',
        palette: ivory,
      },
    ],
  },
  {
    number: 2,
    title: 'Web Engineering & Development',
    period: '2025 – 2026',
    synopsis: 'Hands-on full-stack development, Django value-added specialization, and creating complete web solutions.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Django Intensive',
        description: 'Completed 50-hour Value-Added Course on Web App Development using Django with Futuro Focus, gaining deep mastery of backend architecture.',
        tags: ['Django', 'Futuro Focus', '50 Hours', 'Backend'],
        runtime: 'Nov – Dec 2025',
        palette: amber,
      },
      {
        code: 'S02 E02',
        title: 'Contact Management System',
        description: 'Built a full-stack web application with complete CRUD functionality, Django backend, and responsive Bootstrap interface.',
        tags: ['Django', 'Python', 'Bootstrap', 'CRUD'],
        runtime: '2025',
        palette: warmGrey,
      },
    ],
  },
  {
    number: 3,
    title: 'Industry Experience: Interain AI',
    period: 'Jun 2026 – Jul 2026',
    synopsis: 'Working as a Data Analyst Intern at Interain AI, Chennai — analyzing real datasets and building reporting pipelines.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Data Analyst Intern',
        description: 'Explored structured datasets, identified critical business patterns, and executed systematic data cleaning and preprocessing tasks.',
        tags: ['Interain AI', 'Data Cleaning', 'Chennai'],
        runtime: 'Jun – Jul 2026',
        palette: gold,
      },
      {
        code: 'S03 E02',
        title: 'Insights & AI Workflows',
        description: 'Created structured visual summaries and reports while gaining deep practical exposure to data analytics workflows and AI concepts.',
        tags: ['Analytics Workflows', 'Visualization', 'AI Concepts'],
        runtime: 'Interain AI',
        palette: emerald,
      },
    ],
  },
  {
    number: 4,
    title: 'Hackathons & AI Innovation',
    period: '2026',
    synopsis: 'Building TN Healthcare Scheme Decoder with modern AI APIs and earning Special Mention at BuildX 2026.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'TN Healthcare Scheme Decoder',
        description: 'Engineered an AI-powered web application that simplifies Tamil Nadu healthcare schemes using Groq API and Overpass API for location intelligence.',
        tags: ['React', 'Node.js', 'Groq API', 'Overpass API'],
        runtime: '2026 Project',
        palette: gold,
      },
      {
        code: 'S04 E02',
        title: 'BuildX 2026 Special Mention',
        description: 'Awarded Special Mention at the BuildX 2026 24-Hour Virtual Hackathon by Vernatech LLP for technical implementation and real-world impact.',
        tags: ['Special Mention', 'BuildX 2026', 'Vernatech LLP'],
        runtime: '24-Hr Hackathon',
        palette: amber,
      },
      {
        code: 'S04 E03',
        title: 'Agent Hackforge 2025',
        description: 'Active participant in the Data Analytics Session at Brainstorming Agent Hackforge 2025 held at Vaishnav College.',
        tags: ['Brainstorming', 'Hackforge 2025', 'Vaishnav College'],
        runtime: '2025',
        palette: warmGrey,
      },
    ],
  },
  {
    number: 5,
    title: 'The Next Frontier',
    period: 'Now streaming',
    synopsis: 'Continuously expanding horizons in AI, Machine Learning, and high-impact software systems.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'Expanding Horizons',
        description: 'Advancing skills in Deep Learning, Artificial Intelligence, and scalable full-stack software development.',
        tags: ['AI & ML', 'Deep Learning', 'Software Engineering'],
        runtime: 'In production',
        palette: gold,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Top Hackathon Award', title: 'Special Mention', detail: 'BuildX 2026 24-Hr Hackathon • Vernatech LLP', palette: gold },
  { label: 'AI Healthcare Project', title: 'TN Scheme Decoder', detail: 'Groq API + Overpass API + React & Node.js', palette: amber },
  { label: 'Academic Standing', title: 'CGPA 8.75', detail: 'B.Sc. Computer Science with Artificial Intelligence (CS/AI)', palette: gold },
  { label: 'Higher Education', title: 'B.Sc. CS/AI', detail: 'Dwaraka Doss Goverdhan Doss Vaishnav College (2025 – 2028)', palette: warmGrey },
  { label: 'Industry Experience', title: 'Interain AI', detail: 'Data Analyst Intern • Chennai (Jun – Jul 2026)', palette: ivory },
  { label: 'Full-Stack Project', title: 'Contact Management', detail: 'Full CRUD with Django, Python, Bootstrap & JS', palette: amber },
  { label: 'Core Languages', title: 'Python, SQL, Java', detail: 'Data Analytics, Backend & Object-Oriented Programming', palette: gold },
  { label: 'Specialized Training', title: 'Django 50 Hrs', detail: 'Value-Added Web App Course • Futuro Focus', palette: ivory },
  { label: 'Modern Web Stack', title: 'React & Node.js', detail: 'Express.js, REST APIs & Responsive Interfaces', palette: emerald },
  { label: 'Academic Forum', title: 'Hackforge 2025', detail: 'Brainstorming Agent Session • Vaishnav College', palette: warmGrey },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Sc. · CS/AI',
    lines: ['Dwaraka Doss Goverdhan Doss Vaishnav College, Chennai', '2025 – 2028 · B.Sc. Computer Science with Artificial Intelligence (CS/AI)'],
    chips: ['B.Sc. CS/AI', 'CGPA 8.75', 'Chennai'],
  },
  {
    kicker: 'Technical Stack',
    title: 'Python, SQL & Full Stack',
    lines: ['Python, SQL, Java · React.js, Node.js, Express.js, Django', 'MySQL, Jupyter Notebook, Antigravity IDE, VS Code'],
    chips: ['Python', 'SQL', 'React', 'Node.js', 'Django', 'MySQL'],
  },
  {
    kicker: 'Industry Experience',
    title: 'Data Analyst Intern',
    lines: ['Interain AI, Chennai · Jun 2026 – Jul 2026', 'Data cleaning, preprocessing, pattern identification & structured reporting'],
    chips: ['Data Analytics', 'Interain AI', 'Chennai'],
  },
  {
    kicker: 'Featured Projects',
    title: 'Two Featured Projects',
    lines: ['TN Healthcare Scheme Decoder — Groq API & Overpass API with React & Node', 'Contact Management System — Full CRUD with Django, Python & Bootstrap'],
  },
  {
    kicker: 'Recognition',
    title: 'Hackathon Award',
    lines: ['Special Mention — BuildX 2026 24-Hour Virtual Hackathon (Vernatech LLP)', 'Recognized for creative AI healthcare solution and technical impact'],
  },
  {
    kicker: 'Certifications',
    title: 'Specialized Training',
    lines: ['Value-Added Course: Web App Development using Django (50 Hrs) · Futuro Focus', 'Data Analytics Session · Brainstorming Agent Hackforge 2025'],
  },
];

export type ProfileId = 'priyadharshini' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'priyadharshini',
    name: 'Priyadharshini',
    blurb: 'The complete cinematic series',
    color: '#c6a15b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, education & experience first',
    color: '#dfbf7a',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, architecture & tech stack first',
    color: '#b9b1a4',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The narrative arc & awards first',
    color: '#e5ca8f',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & background', palette: gold },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Projects', card: 'My Projects', meta: `${projects.length} Projects • Full-Stack & AI`, palette: gold },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: ivory },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: warmGrey },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Achievements • ${certifications.length} Certifications`, palette: gold },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: ivory },
};
