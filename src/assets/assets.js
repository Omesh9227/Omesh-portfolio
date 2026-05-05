import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaJava, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/profile.avif';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project7.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';


export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Programming Languages',
    icon: FaCode,
    description: 'Core programming languages I use for problem solving and backend development.',
    tags: ['C++', 'Java 8', 'Python']
  },
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['JavaScript', 'TypeScript', 'ReactJS', 'Tailwind CSS']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express', 'RESTful APIs']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase']
  },
  {
    title: 'Mobile Development',
    icon: FaMobileAlt,
    description: 'Building cross-platform mobile applications with modern tools.',
    tags: ['React Native'] // 'Flutter', 'Ionic', 'Swift']
  },
  {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    description: 'Deploying and managing applications in cloud environments.',
    tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'VSCode', 'IntelliJ', 'Webpack', 'Figma', 'Jest', 'Jira', 'Confluence']
  }
];



export const projects = [
  {
    title: "DSA Tracker",
    description: "A full-stack web application to manage and track DSA problems with categorized tables, task progress tracking, and CRUD operations.",
    image: projectImg1,
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Render", "Vercel"],
    icons: [FaReact, FaNodeJs, FaDatabase, FaCloud], 
    demo: "https://dsa-checklist-liard.vercel.app/",
    code: "https://github.com/Omesh9227/dsa-checklist",
  },
  {
    title: "Grocery Shopping Optimizer",
    description: "Developed an AI-powered microservices-based application to optimize grocery shopping by automating inventory tracking, generating personalized recipes using available ingredients, creating smart shopping lists, and performing real-time price comparison across multiple platforms using web scraping.",
    image: projectImg2,
    tech: ["React.js", "Spring Boot", "Spring Cloud", "PostgreSQL", "MongoDB", "Docker", "Apache Kafka"],
    icons: [FaReact, FaJava, FaDatabase],
    demo: "#",
    code: "https://github.com/Omesh9227/grocery-shopping-optimizer",
  }
  // {
  //   title: "Fitness Tracker",
  //   description: "A mobile app for tracking workouts, nutrition, and health metrics.",
  //   image: projectImg3,
  //   tech: ["React Native", "GraphQL", "MySQL", "Chart.js"],
  //   icons: [FaReact, FaDatabase],
  //   demo: "#",
  //   code: "#",
  // },
  // {
  //   title: "Portfolio Website",
  //   description: "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
  //   image: projectImg4,
  //   tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Markdown"],
  //   icons: [FaReact, FaCloud],
  //   demo: "#",
  //   code: "#",
  // },
  // {
  //   title: "Chat App",
  //   description: "A real-time chat application with group messaging, emojis, and file sharing.",
  //   image: projectImg5,
  //   tech: ["Socket.IO", "React", "Node.js", "MongoDB"],
  //   icons: [FaReact, FaNodeJs, FaDatabase ],
  //   demo: "#",
  //   code: "#",
  // },
  // {
  //   title: "AI Image Generator",
  //   description: "Generate images using AI prompts powered by OpenAI's DALL·E model and Cloudinary.",
  //   image: projectImg6,
  //   tech: ["React", "OpenAI API", "Cloudinary", "Tailwind CSS"],
  //   icons: [FaRobot, FaReact, FaCloud],
  //   demo: "#",
  //   code: "#",
  // }
];


export const workData = [
  {
    role: "Associate Software Development Engineer 1",
    company: "Publicis Sapient",
    duration: "July 2025 - Present",
    description:
      "Worked on ERS and PS BillGenie at Publicis Sapient, building microservices using Spring Boot, JWT, and PostgreSQL. Developed REST APIs, authentication modules, and payment webhooks, improved test coverage with JUnit and Mockito, and contributed to Agile delivery using Jenkins and AWS.",
    tech: ["Spring Boot", "JWT", "PostgreSQL", "Microservices", "JUnit", "Mockito", "AWS", "Jenkins"],
    color: "purple"
  },
  {
    role: "Software Engineer Intern",
    company: "The Spark Foundation",
    duration: "May 2023 - Jul 2023",
    description:
      "During my internship at The Spark Foundation as a Web Developer Intern, I developed a responsive website aimed at promoting charitable programs and enabling online donations. The platform included key sections such as Programs, Education, About Us, and Join Us to enhance user engagement and awareness. I worked with HTML, CSS, and JavaScript to build an interactive front-end interface and integrated Razorpay APIs to securely handle online payment transactions.",
    tech: ["HTML", "CSS", "JavaScript", "ReactJS"],
    color: "purple"
  },
  {
    role: "Volunteer",
    company: "CodeUtsava 5.0",
    duration: "Feb 2022 - Mar 2022",
    description:
      "Contributed as a volunteer for CodeUtsava 5.0, an initiative under MoE’s Innovation Cell, Government of India. Assisted in event execution, coordination, and logistics, gaining hands-on experience in managing large-scale technical events.",
    tech: ["Event Management", "Coordination", "Team Collaboration"],
    color: "purple"
  },
  {
    role: "Student Internship",
    company: "Internshala",
    duration: "Jul 2021 - Aug 2021",
    description:
      "As an Internshala Student Partner (ISP), I acted as the campus ambassador to promote Internshala’s internship and training programs among students. My responsibilities included creating awareness about internship opportunities, encouraging peers to upskill through online training programs, and organizing interactive online sessions to guide students in finding their dream internships",
    tech: ["Marketing", "Communication", "Leadership"],
    color: "blue"
  }
];

export const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "2025",
    code: "CLF-C02",
    description:
      "Validated understanding of AWS cloud concepts, services, security, and pricing models.",
    link: "https://www.credly.com/badges/d2155827-887f-47d4-abe4-f4d5c99be4a6"
  },
  {
    title: "AWS Partner Accreditation (Technical)",
    issuer: "Amazon Web Services",
    date: "2025",
    code: "AWS",
    description:
      "Validated foundational AWS knowledge including cloud concepts, services, and architecture basics.",
    link: "https://www.credly.com/badges/56d66250-c720-40da-a944-b198b49fdaa7/linked_in_profile"
  },
  {
    title: "AWS Partner : Generative AI Essentials",
    issuer: "Amazon Web Services",
    date: "2025",
    code: "GenAI",
    description:
      "Learned fundamentals of Generative AI, including LLMs, prompt engineering, and AWS AI services like Bedrock for building scalable AI applications.",
    link: "https://www.credly.com/badges/ee0e70ab-0522-422a-8f74-cfc4a88c6a03"
  },
  {
    title: "Java Full Stack Developer",
    issuer: "Publicis Sapient",
    date: "2025",
    code: "PS Training",
    description:
      "Built scalable applications using Java, Spring Boot, React, and microservices architecture.",
    link: "https://drive.google.com/file/d/1u1FwbbUNe9gcb70EKPA6co2ljtwq3oC6/view"
  },
  {
    title: "Graph Theory Programming Camp",
    issuer: "AlgoUniversity",
    date: "2024",
    code: "Graph",
    description:
      "Gained strong understanding of graph algorithms and competitive programming techniques.",
    link: "https://drive.google.com/file/d/1-jCswH2cWpEU4Am5PN5s4vezcm5w84rd/view"
  },
  {
    title: "Mastering DSA using C & C++",
    issuer: "Udemy",
    date: "2023",
    code: "DSA",
    description:
      "Learned core data structures and algorithms with hands-on problem solving in C/C++.",
    link: "https://drive.google.com/file/d/1aLoN1kB5m1_zZ3e7uxC495pcc6gnmzDE/view"
  },
  {
    title: "SQL Programming Certification",
    issuer: "Online Certification",
    date: "2023",
    code: "SQL",
    description:
      "Learned database querying, joins, indexing, and performance optimization.",
    link: "https://drive.google.com/file/d/1N2Y3MdwCSnapBAjGJgEzrQgxVfcXn1_a/view"
  },
  {
    title: "Campus Ambassador Program",
    issuer: "E-Cell, IIT Bombay",
    date: "Jul 2022",
    code: "CA Bronze",
    description:
      "Served as Campus Ambassador, driving student engagement, promoting entrepreneurship programs, and contributing to outreach initiatives organized by E-Cell IIT Bombay.",
    credentialId: "ecell2021",
    link: "https://drive.google.com/file/d/1-HAH_6u2O_Ge8Ip-UexyAN4E9eTgr9cy/view"
  }
];

export const achievements = [
  {
    title: "LeetCode Knight (1900+ Rating)",
    issuer: "LeetCode",
    date: "2025",
    description:
      "Achieved 1900+ rating (Knight). Secured Global Rank 633 among 31,000+ participants in Weekly Contest 399.",
    icon: "trophy"
  },
  {
    title: "CodeChef 3-Star (1650+ Rating)",
    issuer: "CodeChef",
    date: "2025",
    description:
      "Reached 1650+ rating (3-Star). Secured Global Rank 239 among 3500+ participants in Starters 135 (Div 2).",
    icon: "trophy"
  },
  {
    title: "Top 33 - CodeRush Challenge",
    issuer: "AlgoUniversity",
    date: "2024",
    description:
      "Ranked 33rd out of 500+ participants in the CodeRush coding challenge.",
    icon: "code"
  },
  {
    title: "CODATHON 2022 Participant",
    issuer: "Inter NIT Competition",
    date: "2022",
    description:
      "Participated in Inter NIT coding competition CODATHON 2022.",
    icon: "code"
  },
  {
    title: "Volunteer - CodeUtsava 5.0",
    issuer: "TCP",
    date: "2022",
    description:
      "Volunteered in organizing CodeUtsava 5.0, contributing to event coordination and execution.",
    icon: "brain"
  }
];

export const codingProfiles = [
  {
    platform: "LeetCode",
    rating: 1900,
    max: 2500,
    level: "Knight",
    color: "from-yellow-400 to-orange-500"
  },
  {
    platform: "CodeChef",
    rating: 1650,
    max: 2000,
    level: "3-Star",
    color: "from-blue-400 to-indigo-500"
  }
];
