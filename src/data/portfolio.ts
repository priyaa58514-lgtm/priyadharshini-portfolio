/**
 * Central portfolio data — generated from Priyadharshini's latest resume.
 * Every fact on the site comes from this file.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Priyadharshini',
  displayName: 'Priyadharshini',
  firstName: 'PRIYADHARSHINI',
  seriesTag: 'P ORBIT',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'THE ORBIT OF PRIYADHARSHINI',
  role: 'B.Sc. CS/AI Student • Full-Stack Developer',
  tagline: ['AI Student', 'Full-Stack Developer', 'Python & Data Analytics'],
  intro:
    'Motivated B.Sc. Computer Science with Artificial Intelligence student and aspiring Full Stack Developer passionate about transforming innovative ideas into impactful digital experiences. Eager to combine web development skills, AI-driven thinking, and creative problem-solving to build intuitive applications that address real-world challenges while exploring emerging technologies and continuously growing as a developer.',
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
    degree: 'Bachelor of Science in Computer Science with Artificial Intelligence',
    period: '2025 – 2028',
    score: 'CGPA: 7.78',
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
      'Integrated the Groq API for intelligent query processing and response generation.',
      'Used the Overpass API for location-based data enhancement, improving contextual relevance.',
      'Developed a full-stack system using React and Node.js with a responsive UI and smooth navigation via React Router.',
    ],
    features: [
      'AI-powered scheme simplification and natural language explanations',
      'Groq API integration for intelligent query processing and rapid response generation',
      'Overpass API geospatial data for location-based healthcare scheme enhancements',
      'Full-stack system using React and Node.js with responsive UI and smooth navigation',
      'Client-side routing and structured scheme explorer via React Router',
    ],
    metrics: [
      { value: 'Groq API', label: 'Intelligent Query Processing' },
      { value: 'Overpass', label: 'Location-Based Data Enhancement' },
      { value: 'Special Mention', label: 'BuildX 2026 Hackathon' },
    ],
    palette: { from: '#20180a', via: '#5a451d', to: '#0a0a0a', accent: '#c6a15b' },
    motif: 'shield',
  },
  {
    id: 'schemematch-ai',
    title: 'SchemeMatch AI',
    year: '2026',
    genre: 'AI Government Scheme Matching • Full-Stack • Groq API & SQLite',
    logline: 'An AI-driven scheme-matching system to help marginalized entrepreneurs identify suitable government schemes based on their needs and eligibility.',
    stack: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'SQLite', 'Groq API'],
    build: [
      'Proposed an AI-driven scheme-matching system to help marginalized entrepreneurs identify suitable government schemes based on their needs and eligibility.',
      'Designed an explainable, rule-based recommendation approach to improve transparency and user trust.',
      'Planned an AI layer for natural-language interaction and an SQLite database for structured scheme information.',
      'Explored multilingual accessibility and location-based assistance for improved usability.',
    ],
    features: [
      'Explainable, rule-based recommendation approach to improve transparency and user trust',
      'AI layer for natural-language query interaction powered by Groq API',
      'Structured scheme database with SQLite for fast, reliable scheme retrieval',
      'Full-stack architecture built with React, Tailwind CSS, Node.js and Express.js',
      'Multilingual accessibility and location-based assistance exploration',
    ],
    metrics: [
      { value: 'Groq API', label: 'Natural-Language Interaction' },
      { value: 'SQLite', label: 'Structured Scheme DB' },
      { value: 'Rule-Based', label: 'Explainable AI Engine' },
    ],
    palette: { from: '#0a1a14', via: '#1e4838', to: '#0a0a0a', accent: '#5ec29b' },
    motif: 'tenants',
  },
  {
    id: 'contact-management-system',
    title: 'Contact Management System',
    year: '2025',
    genre: 'Full-Stack • Web Application • Django',
    logline: 'A full-stack web application to manage contacts with complete CRUD functionality, responsive interface, and secure storage.',
    stack: ['Django', 'Python', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    build: [
      'Developed a full-stack web application to manage contacts with complete CRUD (Create, Read, Update, Delete) functionality.',
      'Designed a responsive user interface using HTML, CSS, Bootstrap, and JavaScript for an improved user experience.',
      'Implemented the backend using Django for secure data storage and retrieval.',
      'Added search and structured categorization features for efficient contact management.',
    ],
    features: [
      'Complete CRUD (Create, Read, Update, Delete) contact lifecycle management',
      'Responsive user interface using HTML, CSS, Bootstrap, and JavaScript',
      'Backend implemented with Django for secure data storage and retrieval',
      'Fast search and structured categorization features for efficient organization',
    ],
    metrics: [
      { value: 'CRUD', label: 'Complete Contact Lifecycle' },
      { value: 'Django', label: 'Secure Data Storage & Retrieval' },
      { value: 'Responsive', label: 'HTML, CSS, Bootstrap & JS' },
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

export type Certification = { issuer: string; name: string; period?: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'Futuro Focus', name: 'Value-Added Course – Web App Development using Django (50 Hrs)', period: 'Nov – Dec 2025' },
  { issuer: 'Vernatech LLP', name: 'Special Mention – BuildX 2026 Hackathon (24-Hr Virtual Hackathon)', period: 'Jun 2026' },
  { issuer: 'Udemy', name: 'Complete DBMS: ER Modeling, SQL and Concurrency Control', period: 'Jul 2026' },
  { issuer: 'Vaishnav College', name: 'Data Analytics Session – Brainstorming Agent Hackforge 2025', period: '2025' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    subtitle: 'Core development languages',
    skills: [
      { name: 'Python', mono: 'Py' },
      { name: 'SQL', mono: 'Sq' },
      { name: 'Java', mono: 'Jv' },
    ],
  },
  {
    id: 'dsa',
    title: 'Data Structures & Algorithms',
    subtitle: 'Core algorithmic foundations',
    skills: [
      { name: 'Arrays', mono: 'Ar' },
      { name: 'Stacks', mono: 'St' },
      { name: 'Queues', mono: 'Qu' },
      { name: 'Linked Lists', mono: 'Ll' },
      { name: 'Trees', mono: 'Tr' },
      { name: 'Searching', mono: 'Se' },
      { name: 'Sorting', mono: 'So' },
    ],
  },
  {
    id: 'analytics',
    title: 'Data Analytics & AI/ML',
    subtitle: 'Data intelligence & machine learning',
    skills: [
      { name: 'Data Analysis', mono: 'Da' },
      { name: 'Data Cleaning', mono: 'Dc' },
      { name: 'Data Visualization', mono: 'Dv' },
      { name: 'Machine Learning Fundamentals', mono: 'Ml' },
      { name: 'Artificial Intelligence', mono: 'Ai' },
      { name: 'Deep Learning Basics', mono: 'Dl' },
    ],
  },
  {
    id: 'web',
    title: 'Web Development',
    subtitle: 'Modern web engineering & APIs',
    skills: [
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'React.js', mono: 'Re' },
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'Django', mono: 'Dj' },
    ],
  },
  {
    id: 'tools',
    title: 'Databases & Tools',
    subtitle: 'Development environments & database tools',
    skills: [
      { name: 'MySQL', mono: 'My' },
      { name: 'MySQL Workbench', mono: 'Mw' },
      { name: 'Jupyter Notebook', mono: 'Jn' },
      { name: 'Visual Studio Code', mono: 'Vs' },
      { name: 'IDLE', mono: 'Id' },
      { name: 'DrJava', mono: 'Dj' },
      { name: 'Antigravity IDE', mono: 'Ag' },
    ],
  },
  {
    id: 'concepts',
    title: 'Programming Concepts',
    subtitle: 'Foundations & paradigms',
    skills: [
      { name: 'Object-Oriented Programming (OOP)', mono: 'Oo' },
      { name: 'Functions', mono: 'Fn' },
      { name: 'Control Flow', mono: 'Cf' },
      { name: 'Exception Handling', mono: 'Eh' },
      { name: 'Loops', mono: 'Lp' },
      { name: 'Database Queries', mono: 'Dq' },
    ],
  },
  {
    id: 'soft',
    title: 'Soft Skills',
    subtitle: 'Collaboration & analytical leadership',
    skills: [
      { name: 'Communication', mono: 'Cm' },
      { name: 'Problem Solving', mono: 'Ps' },
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
  SQL: ['Complete DBMS (Udemy)', 'Database Queries', 'MySQL Workbench', 'Interain AI Internship'],
  Java: ['Object-Oriented Programming (OOP)', 'DrJava', 'Academic Coursework'],
  Arrays: ['Data Structures & Algorithms', 'Academic Problem Solving'],
  Stacks: ['Data Structures & Algorithms', 'Academic Coursework'],
  Queues: ['Data Structures & Algorithms', 'Academic Coursework'],
  'Linked Lists': ['Data Structures & Algorithms', 'Academic Coursework'],
  Trees: ['Data Structures & Algorithms', 'Academic Problem Solving'],
  Searching: ['Algorithms & Problem Solving', 'Search in Contact Management'],
  Sorting: ['Algorithms & Data Structures'],
  'Data Analysis': ['Interain AI Internship', 'Hackforge 2025 Session'],
  'Data Cleaning': ['Interain AI Internship (Structured Datasets)'],
  'Data Visualization': ['Interain AI Internship (Visual Reports & Summaries)'],
  'Machine Learning Fundamentals': ['B.Sc. CS/AI', 'TN Healthcare Scheme Decoder'],
  'Artificial Intelligence': ['B.Sc. CS/AI', 'TN Healthcare Scheme Decoder', 'SchemeMatch AI', 'BuildX 2026 Special Mention'],
  'Deep Learning Basics': ['B.Sc. CS/AI Academic Curriculum'],
  HTML: ['Contact Management System', 'TN Healthcare Scheme Decoder', 'SchemeMatch AI'],
  CSS: ['Contact Management System', 'TN Healthcare Scheme Decoder'],
  JavaScript: ['TN Healthcare Scheme Decoder', 'Contact Management System'],
  'React.js': ['TN Healthcare Scheme Decoder (BuildX 2026)', 'SchemeMatch AI'],
  'Node.js': ['TN Healthcare Scheme Decoder Backend API', 'SchemeMatch AI Backend'],
  'Express.js': ['TN Healthcare Scheme Decoder REST API', 'SchemeMatch AI API'],
  'REST APIs': ['TN Healthcare Scheme Decoder', 'Groq & Overpass API Integrations'],
  Django: ['Contact Management System', 'Value-Added Course (50 Hrs)'],
  MySQL: ['Complete DBMS (Udemy)', 'Database Queries', 'MySQL Workbench'],
  'MySQL Workbench': ['Database Management & ER Modeling'],
  'Jupyter Notebook': ['Data Preprocessing & Analysis Workflows'],
  'Visual Studio Code': ['Full-Stack Project Development'],
  IDLE: ['Python Scripting & Prototyping'],
  DrJava: ['Java Object-Oriented Development'],
  'Antigravity IDE': ['P ORBIT & Project Development'],
  'Object-Oriented Programming (OOP)': ['Python & Java Programming'],
  Functions: ['Python, JavaScript & Backend APIs'],
  'Control Flow': ['Algorithm Implementation & Business Logic'],
  'Exception Handling': ['Django & Node.js Robust API Development'],
  Loops: ['Data Processing & Algorithmic Iterations'],
  'Database Queries': ['Complete DBMS (Udemy)', 'MySQL & SQLite', 'Django ORM'],
  Communication: ['Interain AI Reporting', 'BuildX 2026 Hackathon Presentation'],
  'Problem Solving': ['BuildX 2026 24-Hour Hackathon', 'SchemeMatch AI'],
  'Team Collaboration': ['BuildX 2026 Virtual Hackathon', 'Hackforge 2025'],
  Leadership: ['BuildX 2026 Hackathon Ideation', 'Academic Project Direction'],
  'Critical Thinking': ['Data Analytics Insights', 'Explainable AI Decision Logic'],
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
    synopsis: 'B.Sc. Computer Science with Artificial Intelligence at Dwaraka Doss Goverdhan Doss Vaishnav College, Chennai.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Entering Computer Science & AI',
        description: 'Enrolled in Bachelor of Science in Computer Science with Artificial Intelligence at Dwaraka Doss Goverdhan Doss Vaishnav College, Chennai — CGPA: 7.78.',
        tags: ['B.Sc. CS/AI', 'DG Vaishnav College', 'CGPA: 7.78', 'Chennai'],
        runtime: '2025 – 2028',
        palette: gold,
      },
      {
        code: 'S01 E02',
        title: 'Foundations of Programming & DSA',
        description: 'Mastered programming concepts: OOP, DSA (Arrays, Stacks, Queues, Linked Lists, Trees, Searching, Sorting), Functions, Control Flow, and SQL database queries across Python, Java, and SQL.',
        tags: ['Python', 'SQL', 'Java', 'OOP', 'DSA'],
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
        description: 'Created structured visual summaries and reports while gaining practical exposure to data analytics workflows and AI concepts.',
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
        title: 'SchemeMatch AI',
        description: 'Designed an explainable AI-driven scheme-matching platform to help marginalized entrepreneurs identify government schemes with Groq API and SQLite.',
        tags: ['SchemeMatch AI', 'Groq API', 'SQLite', 'React'],
        runtime: '2026 Project',
        palette: emerald,
      },
      {
        code: 'S04 E04',
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
    title: 'Database Mastery & The Next Frontier',
    period: 'Now streaming',
    synopsis: 'Completed Udemy DBMS certification and continuously expanding horizons in AI, Machine Learning, and scalable full-stack software systems.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'Complete DBMS Certification',
        description: 'Earned certification in Complete DBMS: ER Modeling, SQL and Concurrency Control via Udemy (Jul 2026).',
        tags: ['DBMS', 'SQL', 'ER Modeling', 'Udemy'],
        runtime: 'Jul 2026',
        palette: amber,
      },
      {
        code: 'S05 E02',
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
  { label: 'AI Scheme Matcher', title: 'SchemeMatch AI', detail: 'Explainable AI & Groq API for Entrepreneurs', palette: emerald },
  { label: 'Academic Standing', title: 'CGPA: 7.78', detail: 'DG Vaishnav College · B.Sc. CS/AI (2025 – 2028)', palette: warmGrey },
  { label: 'Industry Experience', title: 'Interain AI', detail: 'Data Analyst Intern • Chennai (Jun – Jul 2026)', palette: ivory },
  { label: 'Full-Stack Project', title: 'Contact Management', detail: 'Full CRUD with Django, Python, Bootstrap & JS', palette: amber },
  { label: 'Core Languages', title: 'Python, SQL, Java', detail: 'Data Analytics, Backend & Object-Oriented Programming', palette: gold },
  { label: 'Database Certification', title: 'Complete DBMS', detail: 'ER Modeling, SQL & Concurrency Control • Udemy (Jul 2026)', palette: ivory },
  { label: 'Specialized Training', title: 'Django 50 Hrs', detail: 'Value-Added Web App Course • Futuro Focus', palette: emerald },
  { label: 'Academic Forum', title: 'Hackforge 2025', detail: 'Brainstorming Agent Session • Vaishnav College', palette: warmGrey },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Sc. · CS/AI',
    lines: ['Dwaraka Doss Goverdhan Doss Vaishnav College, Chennai', '2025 – 2028 · Bachelor of Science in Computer Science with Artificial Intelligence'],
    chips: ['B.Sc. CS/AI', 'DG Vaishnav College', 'CGPA: 7.78', 'Chennai'],
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
    title: 'Three Featured Projects',
    lines: ['TN Healthcare Scheme Decoder — Groq API & Overpass API with React & Node', 'SchemeMatch AI — AI Scheme Matching for Entrepreneurs with SQLite & Groq API', 'Contact Management System — Full CRUD with Django, Python & Bootstrap'],
  },
  {
    kicker: 'Recognition',
    title: 'Hackathon Award',
    lines: ['Special Mention — BuildX 2026 24-Hour Virtual Hackathon (Vernatech LLP)', 'Recognized for creative AI healthcare solution and technical impact'],
  },
  {
    kicker: 'Certifications',
    title: 'Specialized Credentials',
    lines: ['Complete DBMS: ER Modeling, SQL & Concurrency Control · Udemy (Jul 2026)', 'Value-Added Course: Web App Development using Django (50 Hrs) · Futuro Focus', 'Data Analytics Session · Brainstorming Agent Hackforge 2025'],
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
    blurb: 'The complete cinematic showcase',
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
