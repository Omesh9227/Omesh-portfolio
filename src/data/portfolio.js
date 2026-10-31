// All site content lives here. Edit this file to update the portfolio —
// components only handle layout.

import profileImg from '../assets/profile.avif'
import dsaTrackerImg from '../assets/dsa-tracker.avif'

export const person = {
  name: 'Omesh Mandavi',
  role: 'Associate Software Development Engineer 2',
  company: 'Publicis Sapient',
  location: 'Gurgaon, Haryana, India',
  email: 'omeshmandavi750@gmail.com',
  phone: '+91 62617 45247',
  phoneHref: '+916261745247',
  photo: profileImg,
  intro:
    'Software engineer at Publicis Sapient. I build backend services in Java and Spring Boot, and I’ve solved more than a thousand algorithm problems along the way.',
  bio: [
    'I’m a software engineer with a strong foundation in data structures and algorithms and hands-on experience building scalable web applications. Day to day I work with Spring Boot, REST APIs, PostgreSQL and Docker, with React on the front end when a project needs it.',
    'I enjoy turning messy requirements into clean, well-tested services. Right now I’m going deeper into system design, cloud-native microservices on AWS, and building with generative AI.',
  ],
  focus: ['Microservices', 'System design', 'Generative AI', 'AWS'],
}

export const education = {
  degree: 'B.Tech, Computer Science and Engineering',
  school: 'National Institute of Technology, Raipur',
  years: '2021 – 2025',
}

export const socials = [
  { label: 'GitHub', handle: 'Omesh9227', href: 'https://github.com/Omesh9227' },
  { label: 'LinkedIn', handle: 'omesh-mandavi', href: 'https://www.linkedin.com/in/omesh-mandavi-b5a207203/' },
  { label: 'LeetCode', handle: 'Omesh_0112', href: 'https://leetcode.com/Omesh_0112/' },
  { label: 'CodeChef', handle: 'goforit07', href: 'https://www.codechef.com/users/goforit07' },
  { label: 'X', handle: '@omesh612', href: 'https://x.com/omesh612' },
  { label: 'Instagram', handle: 'omeshmandavi9227', href: 'https://www.instagram.com/omeshmandavi9227/' },
  { label: 'YouTube', handle: '@OmeshMandavi', href: 'https://www.youtube.com/@OmeshMandavi' },
]

export const experience = [
  {
    company: 'Publicis Sapient',
    location: 'Gurgaon',
    period: 'Jul 2025 – Present',
    roles: [
      { title: 'Associate Software Development Engineer 2', period: 'Oct 2026 – Present' },
      { title: 'Associate Software Development Engineer 1', period: 'Jan 2026 – Sep 2026' },
      { title: 'Trainee Engineer', period: 'Jul 2025 – Dec 2025' },
    ],
    points: [
      'Built Spring Boot microservices for ERS (Expense Reimbursement System) and PS BillGenie, secured with JWT and backed by PostgreSQL.',
      'Developed REST APIs, authentication modules and payment webhooks.',
      'Raised test coverage with JUnit and Mockito.',
      'Delivered in Agile sprints, with CI on Jenkins and deployments on AWS.',
    ],
    tech: ['Java', 'Spring Boot', 'Microservices', 'JWT', 'PostgreSQL', 'JUnit', 'Mockito', 'Jenkins', 'AWS'],
  },
  {
    company: 'The Sparks Foundation',
    location: 'Remote',
    period: 'May 2023 – Jul 2023',
    roles: [{ title: 'Software Engineer Intern (Web Development)' }],
    points: [
      'Built a responsive website promoting charitable programs, with Programs, Education, About Us and Join Us sections to drive engagement.',
      'Integrated Razorpay APIs to handle online donations securely.',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Razorpay'],
  },
]

export const community = [
  {
    title: 'Campus Ambassador',
    org: 'E-Cell, IIT Bombay',
    period: 'Jul 2022',
    text: 'Drove student engagement and promoted entrepreneurship programs on campus. Recognised at Bronze level.',
    link: 'https://drive.google.com/file/d/1-HAH_6u2O_Ge8Ip-UexyAN4E9eTgr9cy/view',
  },
  {
    title: 'Volunteer',
    org: 'CodeUtsava 5.0',
    period: 'Feb 2022 – Mar 2022',
    text: 'Supported execution, coordination and logistics for CodeUtsava 5.0, an initiative under the Ministry of Education’s Innovation Cell.',
  },
  {
    title: 'Internshala Student Partner',
    org: 'Internshala',
    period: 'Jul 2021 – Aug 2021',
    text: 'Campus ambassador for Internshala’s internship and training programs; ran online sessions helping students find internships.',
  },
]

export const projects = [
  {
    title: 'E-Commerce Platform',
    featured: true,
    status: 'In progress',
    summary:
      'An Amazon-style e-commerce backend built the way production teams do it: 16 Spring Boot microservices covering accounts, catalogue, cart, checkout, payments, shipping, reviews, search, recommendations and an admin dashboard.',
    details:
      'Spring Cloud Gateway in front, Eureka for service discovery, Config Server for central configuration, JWT auth, and PostgreSQL with full-text search. Built phase by phase on main / develop / feature branches.',
    tech: ['Java', 'Spring Boot', 'Spring Cloud Gateway', 'Eureka', 'Config Server', 'JWT', 'PostgreSQL', 'REST APIs'],
    diagram: 'ecommerce',
    roadmap: [
      { step: '16 backend services', done: true },
      { step: 'React storefront and admin panel' },
      { step: 'Prometheus and Grafana monitoring' },
      { step: 'Docker, Kubernetes and Jenkins' },
      { step: 'Deploy to GCP' },
    ],
    code: 'https://github.com/Omesh9227/ecommerce-platform',
  },
  {
    title: 'DSA Tracker',
    summary:
      'A full-stack app for organising DSA practice. Create topic tables, add problems with links, and track progress with full CRUD.',
    details: 'React front end on Vercel, Node.js and Express API on Render, PostgreSQL for storage.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Vercel', 'Render'],
    image: dsaTrackerImg,
    imageAlt: 'DSA Tracker app showing a form to create topic tables and a Tree table listing Binary Tree Inorder Traversal',
    demo: 'https://dsa-checklist-liard.vercel.app/',
    code: 'https://github.com/Omesh9227/dsa-checklist',
  },
  {
    title: 'Grocery Shopping Optimizer',
    summary:
      'An AI-powered, microservices-based app that automates pantry inventory, generates recipes from what you already have, builds smart shopping lists, and compares prices across platforms in real time.',
    details: 'Spring Boot services coordinated with Spring Cloud and Apache Kafka; price data gathered by web scraping.',
    tech: ['React', 'Spring Boot', 'Spring Cloud', 'Apache Kafka', 'PostgreSQL', 'MongoDB', 'Docker'],
    diagram: 'grocery',
    code: 'https://github.com/Omesh9227/grocery-shopping-optimizer',
  },
]

export const githubRepos = 'https://github.com/Omesh9227?tab=repositories'

export const codingProfiles = [
  {
    platform: 'LeetCode',
    href: 'https://leetcode.com/Omesh_0112/',
    rating: '1914',
    tier: 'Knight',
    facts: [
      ['Problems solved', '1,057+'],
      ['Percentile', 'Top 4%'],
      ['Badges', '17'],
    ],
  },
  {
    platform: 'CodeChef',
    href: 'https://www.codechef.com/users/goforit07',
    rating: '1650+',
    tier: '3 Star',
    facts: [
      ['Highest rating', '1681'],
      ['Division', 'Div 2'],
      ['Rated contests', '15+'],
    ],
  },
]

export const contestResults = [
  { event: 'LeetCode Weekly Contest 399', result: 'Global rank 633', field: 'of 31,000+' },
  { event: 'CodeChef Starters 135 (Div 2)', result: 'Global rank 239', field: 'of 3,500+' },
  { event: 'AlgoUniversity CodeRush, 2024', result: 'Rank 33', field: 'of 500+' },
  { event: 'CODATHON 2022, inter-NIT', result: 'Participant', field: '' },
]

export const skills = [
  { group: 'Languages', items: ['Java', 'C++', 'Python', 'JavaScript', 'TypeScript', 'SQL'] },
  { group: 'Backend', items: ['Spring Boot', 'Spring Cloud', 'Microservices', 'REST APIs', 'JWT', 'Apache Kafka', 'Node.js', 'Express'] },
  { group: 'Frontend', items: ['React', 'Tailwind CSS', 'React Native'] },
  { group: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase'] },
  { group: 'Cloud & DevOps', items: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD'] },
  { group: 'Testing & tools', items: ['JUnit', 'Mockito', 'Jest', 'Git', 'IntelliJ IDEA', 'VS Code', 'Jira', 'Confluence', 'Figma'] },
]

export const certifications = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    detail: 'CLF-C02',
    year: '2025',
    link: 'https://www.credly.com/badges/d2155827-887f-47d4-abe4-f4d5c99be4a6',
  },
  {
    title: 'AWS Partner: Generative AI Essentials',
    issuer: 'Amazon Web Services',
    detail: 'LLMs, prompt engineering, Amazon Bedrock',
    year: '2025',
    link: 'https://www.credly.com/badges/ee0e70ab-0522-422a-8f74-cfc4a88c6a03',
  },
  {
    title: 'AWS Partner Accreditation (Technical)',
    issuer: 'Amazon Web Services',
    detail: 'Cloud concepts, services and architecture',
    year: '2025',
    link: 'https://www.credly.com/badges/56d66250-c720-40da-a944-b198b49fdaa7',
  },
  {
    title: 'Java Full Stack Developer',
    issuer: 'Publicis Sapient',
    detail: 'Java, Spring Boot, React, microservices',
    year: '2025',
    link: 'https://drive.google.com/file/d/1u1FwbbUNe9gcb70EKPA6co2ljtwq3oC6/view',
  },
  {
    title: 'Graph Theory Programming Camp',
    issuer: 'AlgoUniversity',
    detail: 'Graph algorithms for competitive programming',
    year: '2024',
    link: 'https://drive.google.com/file/d/1-jCswH2cWpEU4Am5PN5s4vezcm5w84rd/view',
  },
  {
    title: 'Mastering DSA using C and C++',
    issuer: 'Udemy',
    detail: 'Data structures and algorithms',
    year: '2023',
    link: 'https://drive.google.com/file/d/1aLoN1kB5m1_zZ3e7uxC495pcc6gnmzDE/view',
  },
  {
    title: 'SQL Programming',
    issuer: 'Online certification',
    detail: 'Joins, indexing, query optimisation',
    year: '2023',
    link: 'https://drive.google.com/file/d/1N2Y3MdwCSnapBAjGJgEzrQgxVfcXn1_a/view',
  },
]

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'coding', label: 'Coding' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]
