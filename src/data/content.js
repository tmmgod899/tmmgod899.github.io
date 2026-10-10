/**
 * All portfolio content lives in this file.
 * Edit text, links, projects, and experience here — components read from it.
 *
 * Empty strings ('') for links are treated as "not added yet":
 * the UI shows a muted placeholder instead of a broken link.
 */

export const profile = {
  name: 'Abdulmjeed Homidan',
  shortName: 'Abdulmjeed',
  title: 'Data Analyst | SQL | Power BI | Machine Learning',
  location: 'Makkah · Jeddah · Riyadh, Saudi Arabia',
  intro:
    'Data Science graduate with practical experience in data analysis, visualization, dashboards, machine learning, and data-driven projects.',
  image: '/assets/profile.jpg',
  cv: '/assets/Abdulmjeed-Homidan-CV.pdf',
  cvFileName: 'Abdulmjeed-Homidan-CV.pdf',
};

export const contact = {
  email: 'abdulmjeedhomidan@gmail.com',
  linkedin: 'https://www.linkedin.com/in/abdulmjeed-homidan-4b895542b',
  github: 'https://github.com/tmmgod899',
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export const about = {
  paragraphs: [
    'I am a Data Science graduate from Umm Al-Qura University, College of Computing, with skills in data analysis, machine learning, data visualization, and statistical analysis. I use Python and data science tools to build data-driven solutions and interactive dashboards.',
    'I have worked on real-world projects involving healthcare-related data, operational data, dashboards, and data-driven decision support.',
    'I enjoy turning raw data into useful insights and building practical solutions that are easy for users to understand.',
  ],
  focus: [
    'Data Analysis',
    'Data Cleaning',
    'Visualization',
    'Dashboard Development',
    'Reporting',
    'Machine Learning',
  ],
};

export const experience = [
  {
    role: 'Automation Engineer',
    company: 'Alkan Construction & Communication Networks',
    companyShort: 'Alkan',
    location: 'Riyadh, Saudi Arabia · On-site',
    period: 'Sep 2026 – Present · Full-time',
    current: true,
    summary:
      'Working full-time at Alkan Construction & Communication Networks, applying statistical data analysis and data engineering in a professional environment.',
    tools: ['Statistical Data Analysis', 'Data Engineering'],
  },
  {
    role: 'Data Analyst Intern',
    company: 'International Medical Health Company (IMH)',
    location: 'Riyadh, Saudi Arabia · On-site',
    period: 'Mar 2025 – Aug 2025 · Full-time',
    summary:
      'Worked on the Ministry of Health oxygen tank monitoring project, which supplied and installed electronic monitoring sensors for large oxygen tanks in Saudi hospitals.',
    points: [
      'Analyzed and cleaned data related to the Ministry of Health oxygen tank monitoring project',
      'Developed interactive dashboards and data visualization solutions using Python, Pandas, Plotly, and Streamlit',
      'Monitored installation progress of electronic sensors across hospitals and healthcare clusters',
      'Prepared reports, certificates, and data summaries to support project tracking and decision-making',
      'Participated in meetings and site visits with project teams and Ministry of Health representatives',
    ],
    stats: [
      { value: '330', label: 'Target tanks' },
      { value: '69', label: 'Installed tanks' },
    ],
    tools: ['Python', 'Pandas', 'Plotly', 'Streamlit', 'Power BI', 'Excel'],
  },
];

export const activities = [
  {
    org: 'UQU Google Club',
    unit: 'College of Computing',
    role: 'Volunteer / Event Organizer',
    summary: 'Organized multiple technical events focused on programming and technology awareness.',
  },
  {
    org: 'Computing Club',
    unit: 'College of Computing',
    role: 'Technical Event Organizer / Volunteer',
    summary: 'Organized and supervised technical events inside and outside the college.',
  },
];

export const projects = {
  featured: {
    name: 'VitaVision',
    tagline: 'VitaVision.com – Health Analyzer',
    period: 'Sep 2025 – Aug 2026',
    url: 'https://www.vitavison.com/',
    github: '', // add your repository URL here
    description:
      'A data-driven health analysis system that analyzes vitamin and mineral laboratory results and classifies nutritional biomarkers as Deficient, Normal, or Excessive. It includes an interactive Streamlit dashboard for data visualization, analysis, and automated health reports.',
    approach:
      'Final classification is based on defined clinical reference ranges. Machine learning is used as a supporting experimental component.',
    nutrients: [
      'Zinc',
      'Vitamin A',
      'Vitamin C',
      'Vitamin D',
      'Vitamin E',
      'Vitamin K',
      'Magnesium',
      'Folate',
      'Ferritin',
      'Vitamin B12',
      'Vitamin B6',
      'Calcium',
    ],
    workflow: [
      'Data cleaning',
      'Exploratory data analysis',
      'Preprocessing',
      'Feature preparation',
      'Classification',
      'Visualization',
      'Automated health reports',
      'Web app development',
      'ML experimentation',
    ],
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit', 'Plotly'],
    experiment: {
      accuracy: '99.956%',
      samples: '16,074',
      classes: [
        { label: 'Deficient', count: 2459 },
        { label: 'Normal', count: 12078 },
        { label: 'Excessive', count: 1537 },
      ],
    },
  },
  others: [
    {
      name: 'Oxygen Tank Installation Monitoring Dashboard',
      context: 'Ministry of Health project · IMH',
      description:
        'A data analytics and dashboard project to monitor the installation of electronic monitoring sensors for large oxygen tanks in hospitals.',
      progress: { done: 69, total: 330, doneLabel: 'Installed tanks', totalLabel: 'Target tanks' },
      features: [
        'Installation progress tracking',
        'Status analysis',
        'Cluster analysis',
        'Difference analysis',
        'Reporting',
        'Data organization',
        'Interactive dashboard',
      ],
      tech: ['Python', 'Pandas', 'Excel', 'Power BI', 'R', 'Streamlit', 'GitHub'],
    },
    {
      name: 'Data Analysis Projects',
      context: 'Academic coursework · Umm Al-Qura University',
      description:
        'Applied statistical and machine learning methods across a series of academic analysis projects.',
      groups: [
        {
          title: 'Data Analysis 1',
          items: [
            'Linear Regression',
            'Nonlinear Regression',
            'Classification',
            'Clustering',
            'Anomaly Detection',
            'PCA',
          ],
        },
        {
          title: 'Data Analysis 2',
          text: 'Worked with three different data types, applying a suitable analysis method to each.',
        },
      ],
      tech: ['Python', 'Scikit-learn', 'Pandas'],
    },
  ],
};

export const education = {
  degree: 'Bachelor of Science in Data Science',
  university: 'Umm Al-Qura University',
  college: 'College of Computing',
  period: 'Aug 2022 – Aug 2026',
  status: 'Graduated',
  coursework: [
    'Data Analysis',
    'Machine Learning',
    'Statistics',
    'Database Systems',
    'Data Visualization',
    'Artificial Intelligence',
    'Programming',
    'Big Data & Data Processing',
  ],
};

export const skills = [
  { title: 'Programming & Data', items: ['Python', 'SQL', 'R', 'Pandas'] },
  {
    title: 'Machine Learning',
    items: ['Scikit-learn', 'Classification', 'Regression', 'Clustering', 'Anomaly Detection', 'PCA'],
  },
  {
    title: 'Visualization & Dashboards',
    items: ['Power BI', 'Plotly', 'Streamlit', 'Excel', 'Data Visualization'],
  },
  {
    title: 'Data Skills & Engineering',
    items: [
      'Data Analysis',
      'Data Cleaning',
      'Statistical Data Analysis',
      'Data Engineering',
      'Data Preprocessing',
      'Data Reporting',
      'Dashboard Development',
      'Data Organization',
    ],
  },
  {
    title: 'Professional Skills',
    items: [
      'Problem Solving',
      'Communication',
      'Teamwork',
      'Project Coordination',
      'Time Management',
      'Quick Learning',
      'Adaptability',
    ],
  },
];
