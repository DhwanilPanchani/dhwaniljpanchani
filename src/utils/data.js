// src/utils/data.js
export const personalInfo = {
    name: "Dhwanil Panchani",
    title: "Software Engineer & ML Engineer",
    email: "dhwanilpanchani@gmail.com",
    phone: "+1 (857) 398-5166",
    location: "Boston, MA",
    bio: "A skilled Software Engineer with a Master's degree in Information Systems from Northeastern University and a proven interest in Machine Learning and Data Science. My technical expertise extends across multiple programming languages and frameworks, enabling me to develop innovative and effective solutions. Throughout my academic and project experience, I have successfully contributed to full-stack web applications and machine learning systems, consistently seeking opportunities to apply my skills to complex problems.",
    resumeUrl: "/assets/resume.pdf",
    socialLinks: {
      github: "https://github.com/DhwanilPanchani",
      linkedin: "https://www.linkedin.com/in/dhwanilpanchani/",
    }
  };
  
  export const skills = {
    languages: [
      { name: "Python", level: 90, icon: "/assets/skills/python.jpg" },
      { name: "Java", level: 88, icon: "/assets/skills/java.jpg" },
      { name: "JavaScript", level: 85, icon: "/assets/skills/javascript.jpg" },
      { name: "TypeScript", level: 80, icon: "/assets/skills/typescript.svg" },
      { name: "SQL", level: 85, icon: "/assets/skills/sql.jpg" },
      { name: "HTML/CSS", level: 82, icon: "/assets/skills/html5.jpg" },
      { name: "C#", level: 75, icon: "/assets/skills/csharp.jpg" },
      { name: "C++", level: 72, icon: "/assets/skills/cpp.png" },
    ],
    frameworks: [
      { name: "React.js", level: 85, icon: "/assets/skills/react.jpg" },
      { name: "Express.js", level: 82, icon: "/assets/skills/express.jpg" },
      { name: "Node.js", level: 80, icon: "/assets/skills/nodejs.jpg" },
      { name: "Django", level: 78, icon: "/assets/skills/django.png" },
      { name: "Flask", level: 80, icon: "/assets/skills/flask.png" },
      { name: "Spring Boot", level: 75, icon: "/assets/skills/springboot.png" },
      { name: "TensorFlow", level: 82, icon: "/assets/skills/tensorflow.jpg" },
      { name: "PyTorch", level: 78, icon: "/assets/skills/pytorch.png" },
    ],
    tools: [
      { name: "Docker", level: 85, icon: "/assets/skills/docker.png" },
      { name: "Kubernetes", level: 80, icon: "/assets/skills/kubernetes.png" },
      { name: "AWS", level: 82, icon: "/assets/skills/aws.jpg" },
      { name: "Git", level: 88, icon: "/assets/skills/git.png" },
      { name: "CI/CD", level: 80, icon: "/assets/skills/jenkins.jpg" },
      { name: "MongoDB", level: 78, icon: "/assets/skills/mongodb.png" },
      { name: "MySQL", level: 85, icon: "/assets/skills/mysql.png" },
      { name: "PostgreSQL", level: 82, icon: "/assets/skills/postgresql.png" },
    ]
  };
  
  export const experiences = [
    {
      title: "Software  Engineer",
      company: "TechVizor",
      location: "Surat, India",
      period: "Aug 2021 - Jul 2023",
      // description: [
      //   "Led a team of 5 developers to design and implement 3 Java applications, delivering 10+ key functionalities and UIs",
      //   "Conducted 15+ code reviews, identifying 20+ optimizations and resolving 30+ bugs, improving software robustness by 40% and performance by 25%",
      //   "Collaborated in Agile environments, delivering high-quality code on schedule while adhering to coding standards"
      // ],
      logo: "/assets/companies/techvizor2.png"
    },
    {
      title: "Software Engineer Intern",
      company: "TechVizor",
      location: "Surat, India",
      period: "May 2021 - Jul 2021",
      // description: [
      //   "Analyzed datasets with 1M+ records, engineered 50+ features, and improved model accuracy by 20% through exploratory data analysis on 5+ projects",
      //   "Optimized hyperparameters for 5 ML models, boosting predictive performance by 15% and reducing error rates by 10%",
      //   "Presented 50+ data visualizations to cross-functional teams, driving 10+ data-driven decisions that increased operational efficiency by 20%"
      // ],
      logo: "/assets/companies/techvizor2.png"
    }
  ];
  
  export const education = [
    {
      degree: "Master of Science in Information Systems",
      institution: "Northeastern University",
      location: "Boston, MA",
      period: "Sept 2023 - May 2025",
      // description: "Relevant Coursework: Data Science & ML, GenAI, DSA, Web Design, Application Engineering, Parallel ML(HPC)",
      logo: "/assets/education/neu.png",
      diploma: "/assets/northeastern-diploma.pdf" 
    },
    {
      degree: "Bachelor of Engineering in Computer Engineering",
      institution: "Gujarat Technological University",
      location: "Gujarat, India",
      period: "Jul 2019 - May 2023",
      logo: "/assets/education/gtu.jpg"
    }
  ];
  
  export const projects = [
    {
      id: 1,
      title: " Walmart Sales Analysis",
      description: "Enhanced predictive accuracy with advanced ML techniques for retail sales prediction.",
      image: "/assets/projects/walmart.jpg",
      tags: ["Python", "Machine Learning algorithms", "TensorFlow", "Time Series Analysis"],
      codeLink: "https://github.com/DhwanilPanchani/Walmart-Sales-Analysis",
      category: "data"
    },
    {
      id: 2,
      title: "Skin Disease Classification using Parallel Deep Learning",
      description: "Explores high-performance deep learning techniques for large-scale skin disease classification using EfficientNet-B3 architecture with distributed training optimization.",
      image: "/assets/projects/skin.jpg",
      tags: ["Python", "DDP", "CUDA", "NCCL", "Deep Learning, Pytorch"],
      codeLink: "https://github.com/DhwanilPanchani/Skin-Disease-Classification-using-Parallel-Deep-Learning",
      category: "ml"
    },
    {
      id: 3,
      title: "MERN Stack Job Hiring Platform",
      description: "Built a fully responsive job platform with role-based access, enabling CRUD operations for 100+ job listings and user profiles via RESTful APIs. Implemented secure authentication and designed 8+ responsive pages with React.js.",
      image: "/assets/projects/mern.jpg",
      tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Authentication"],
      codeLink: "https://github.com/dhwanil-panchani/job-platform",
      category: "fullstack"
    },
    {
      id: 4,
      title: "Secure Hotel Management System",
      description: "A full-stack application featuring encryption and role-based access control.",
      image: "/assets/projects/hotel.jpg",
      tags: ["Java", "SpringBoot", "MongoDB", "JWT", "Swing UI"],
      codeLink: "https://github.com/DhwanilPanchani/Full-Stack-Hotel-Management-System",
      category: "fullstack"
    },
    {
      id: 5,
      title: "Space Exploration Database System Design",
      description: "A comprehensive database management system project developed for space exploration missions.",
      image: "/assets/projects/space1.jpg",
      tags: ["SQL", "Java", "Power BI", "SwingUI", "MySQL"],
      codeLink: "https://github.com/DhwanilPanchani/CosmoPlan-DMDD",
      category: "data"
    },
    {
      id: 6,
      title: "Custom Diffusion Model for Image Generation (Flickr & CIFAR Datasets)",
      description: "A custom implementation of diffusion probabilistic models trained on CIFAR-10 and Flickr datasets for high-quality image generation and synthesis.",
      image: "/assets/projects/cnn.jpg",
      tags: ["TensorFlow", "Keras", "CNN", "Deep Learning", "Python"],
      codeLink: "https://github.com/DhwanilPanchani/Generative-AI-Projects",
      category: "ml"
    }
  ];