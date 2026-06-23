// ─── Personal Info ────────────────────────────────────────────────────────────
export const personal = {
  name: 'Vrashabh Joshi',
  role: 'Software Developer',
  tagline: 'Building clean and efficient digital experiences.',
  email: 'vrashabh.joshi24@gmail.com',
  location: 'Dublin, IL',
  availability: 'Full-time / Freelance',
  bio: [
    "Hi, I'm Vrashabh — a Full-Stack Software Engineer with 2+ years of experience building high-performance backend systems and responsive web applications. I specialise in .NET, Java, and cloud-native architectures, with a strong foundation in secure software engineering from my MSc at Dublin City University.",
    "I enjoy working across the stack — from designing scalable APIs to crafting clean front-end interfaces — and I'm always looking for ways to ship better, faster, and more reliably.",
    "Outside of work, you'll find me tinkering with side projects, exploring new frameworks, or watching Football.",
  ],
  // Social links — update these with your actual profiles
  github: 'https://github.com/vrush0938',
  linkedin: 'https://www.linkedin.com/in/vrashabh-joshi/',
  // Place your CV at src/assets/cv.pdf
  cvPath: 'assets/Resume.pdf',
};

// ─── Experience ───────────────────────────────────────────────────────────────
export interface Experience {
  company: string;
  role: string;
  city: string;
  startDate: string;
  endDate: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    company: 'Intelliswift (an LTTS company) · Client: Tenerity / cxLoyalty',
    role: 'Software Developer',
    city: 'Pune, IN',
    startDate: 'June 2022',
    endDate: 'August 2024',
    description:
      'Built and maintained scalable backend services and REST APIs in .NET Core (C#) for the Tenerity Helix loyalty platform, standardising API contracts and cutting release cycle time by 40%. Developed customer-facing loyalty workflows end-to-end, integrating Angular/TypeScript frontends directly against .NET APIs. Supported Azure DevOps CI/CD pipelines, reducing manual deployment time by 25%. Owned production incidents for live Visa/Mastercard loyalty modules — root-cause analysis, debugging, and release validation — improving service reliability and cutting post-release defect rates by 20%. Optimised SQL Server queries across 5M+ customer records, achieving sub-second response times through indexing and schema redesign.',
  },
  {
    company: 'Intelliswift (an LTTS company)',
    role: 'Intern',
    city: 'Pune, IN',
    startDate: ' 2023',
    endDate: 'Jan 2024',
    description:
      'Designed and built a full-stack Pizza Ordering System using React, Node.js/C#, and MSSQL, deployed on AWS (EC2, S3). Implemented comprehensive unit and regression testing to ensure system reliability and code quality.Gained hands-on experience with the full development lifecycle — from requirements understanding to deployment — working with Bitbucket, Agile workflows, and company infrastructure practices. Collaborated with engineering teams in sprint planning and code reviews.',
  },
];

// ─── Skills ───────────────────────────────────────────────────────────────────
export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Backend',
    skills: [
      'C# / .NET Core',
      'Java / Spring Boot',
      'REST APIs',
      'Microservices',
      'FastAPI / Python',
      'Go',
      'Node.js',
    ],
  },
  {
    category: 'Frontend',
    skills: [
      'Angular',
      'React / Vite',
      'TypeScript',
      'JavaScript (ES6+)',
      'HTML5 / CSS3',
      'SCSS',
    ],
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      'AWS (EC2, S3, RDS)',
      'Azure DevOps',
      'Docker / Kubernetes',
      'Kafka',
      'CI/CD Pipelines',
      'Git / GitHub',
      'Linux',
    ],
  },
  {
    category: 'Database & Data',
    skills: [
      'SQL (MSSQL, PostgreSQL)',
      'NoSQL (MongoDB)',
      'Query Optimization',
      'Schema Design',
    ],
  },
  {
    category: 'Software Engineering',
    skills: [
      'Agile / Scrum',
      'Unit Testing / Integration Testing',
      'Code Reviews',
      'Secure Software Engineering',
      'Problem Solving',
    ],
  },
];
