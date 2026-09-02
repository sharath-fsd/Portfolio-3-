export const resumePath = `${import.meta.env.BASE_URL}output/pdf/Sarath-K-Resume.pdf`;

export const projects = [
  {
    number: "01",
    title: ["Beauty Parlour", "Management"],
    image: `${import.meta.env.BASE_URL}assets/projects/beauty-parlour-management.png`,
    imageAlt: "Dark appointment and service management dashboard concept",
    stack:
      "Java · Spring Boot · Spring Security · JWT · Hibernate/JPA · MySQL · Maven · REST APIs · React.js",
    experience: {
      role: "Self-employed Backend Developer",
      duration: "Client project · 7 months",
    },
    context: "Built and delivered for my aunt’s independently owned beauty parlour.",
    details: [
      "Developed RESTful backend services using Spring Boot and Spring MVC for service management and appointment booking.",
      "Implemented JWT authentication, authorization, and role-based access control using Spring Security.",
      "Built database persistence and CRUD functionality using Spring Data JPA, Hibernate, and MySQL.",
      "Integrated the React.js frontend with backend REST APIs using Axios for client-server communication.",
      "Tested and debugged REST API endpoints using Postman.",
    ],
    repository: "https://github.com/sharath-fsd/Beauty-Parlour-web-application-",
    repositoryLabel: "Open the Beauty Parlour Management System on GitHub",
  },
  {
    number: "02",
    title: ["E-Commerce", "Application"],
    image: `${import.meta.env.BASE_URL}assets/projects/ecommerce-shopping.png`,
    imageAlt: "Dark e-commerce operations and product dashboard concept",
    stack:
      "Java · Spring Boot · Spring Security · JWT · Hibernate/JPA · MySQL · Maven · REST APIs · React.js",
    details: [
      "Developed backend REST APIs for product management, CRUD operations, and frontend-backend communication.",
      "Implemented secure authentication and authorization using Spring Security and JWT.",
      "Designed relational entities and implemented database persistence using JPA, Hibernate, and MySQL.",
      "Tested backend APIs and application functionality using Postman.",
    ],
    repository: "https://github.com/sharath-fsd/e-commerce-website-project-with-Backend",
    repositoryLabel: "Open the E-Commerce Shopping Application on GitHub",
  },
  {
    number: "03",
    title: ["Car Rental", "Management"],
    image: `${import.meta.env.BASE_URL}assets/projects/car-rental-management.png`,
    imageAlt: "Dark vehicle fleet and rental management dashboard concept",
    stack: "Java · Spring Boot · Hibernate/JPA · MySQL · Maven · REST APIs",
    details: [
      "Developed RESTful backend services for vehicle and rental management using Java and Spring Boot.",
      "Implemented CRUD operations and relational database persistence using Spring Data JPA, Hibernate, and MySQL.",
      "Implemented authentication and authorization functionality for application access.",
      "Used SQL for database operations and integrated backend services with the web interface through REST APIs.",
    ],
    repository: "https://github.com/sharath-fsd/Car-Rental-Management-System-Project",
    repositoryLabel: "Open the Car Rental Management System on GitHub",
  },
];

export const capabilities = [
  {
    number: "01",
    icon: "code",
    title: "Java & OOP",
    description:
      "Collections, exception handling, multithreading, file handling, and core object-oriented principles.",
  },
  {
    number: "02",
    icon: "server",
    title: "Spring Boot",
    description:
      "REST API development with Spring MVC, Maven, CRUD operations, and MVC architecture.",
  },
  {
    number: "03",
    icon: "shield",
    title: "API Security",
    description:
      "Spring Security, JWT, OAuth2, authentication, authorization, and role-based access control.",
  },
  {
    number: "04",
    icon: "database",
    title: "Data Layer",
    description:
      "MySQL, PostgreSQL, SQL, relational database design, Hibernate/JPA, and Spring Data integration.",
  },
  {
    number: "05",
    icon: "terminal",
    title: "Testing & DevOps",
    description:
      "JUnit 5, Postman, Docker/containerized environments, Git, Maven, debugging, and CI/CD concepts.",
  },
  {
    number: "06",
    icon: "integration",
    title: "Integration & Scripting",
    description:
      "React.js, JavaScript ES6+, Axios, Python, frontend-backend integration, and AI API integrations.",
  },
];

export const technologies = [
  ["Jv", "Java"],
  ["SB", "Spring Boot"],
  ["SS", "Spring Security"],
  ["{ }", "REST APIs"],
  ["JPA", "Hibernate / JPA"],
  ["SQL", "MySQL / SQL"],
  ["PG", "PostgreSQL"],
  ["JWT", "JWT / OAuth2"],
  ["MVN", "Maven"],
  ["DK", "Docker"],
  ["CI", "CI/CD Concepts"],
  ["Git", "Git / GitHub"],
  ["TST", "Postman / JUnit 5"],
  ["Rx", "React / Axios"],
  ["Py", "Python / AI APIs"],
];

export const certifications = [
  {
    number: "01",
    title: "Spring Framework for Java Development",
    issuer: "SkillUp / Coursera · 2026",
    url: "https://coursera.org/verify/ER7O70IQJQRE",
  },
  {
    number: "02",
    title: "Java App Development: Fundamentals, OOP & File I/O",
    issuer: "SkillUp / Coursera · 2026",
    url: "https://coursera.org/verify/BC8MZ8KS1VPQ",
  },
  {
    number: "03",
    title: "Object-Oriented Programming in Java",
    issuer: "IBM / Coursera",
    url: "https://coursera.org/verify/WKWD8SMAZASM",
  },
  {
    number: "04",
    title: "Introduction to HTML, CSS, & JavaScript",
    issuer: "IBM / Coursera",
    url: "https://coursera.org/verify/H1MGPEGF3GQS",
  },
  {
    number: "05",
    title: "React.js for Beginners",
    issuer: "Mind Luster",
  },
];

export const strengths = [
  {
    number: "01",
    title: "LeetCode 200+",
    description: "DSA problems completed through consistent algorithm and problem-solving practice.",
    url: "https://leetcode.com/u/dW5Hu0XQfj/",
  },
  {
    number: "02",
    title: "REST APIs",
    description: "Backend API design, CRUD workflows, validation, and frontend integration.",
  },
  {
    number: "03",
    title: "Secure",
    description: "JWT authentication, authorization, Spring Security, and role-based access.",
  },
  {
    number: "04",
    title: "Persist",
    description: "Relational data modeling and MySQL integration through Hibernate/JPA.",
  },
  {
    number: "05",
    title: "Test & ship",
    description: "Postman, JUnit 5, Maven, Docker, Git, debugging, and Agile development.",
  },
];

export const interests = [
  ["🎮", "Gaming", "Strategic and puzzle games for problem-solving skills."],
  ["🎬", "Anime", "Exploring Japanese animation, storytelling, and art styles."],
  ["👨‍🍳", "Cooking", "Experimenting with international cuisines and healthy meals."],
  ["🎵", "Music", "Playing guitar and discovering new musical genres."],
  ["🌍", "Traveling", "Exploring new cultures, places, and experiences."],
];

export const socialLinks = [
  {
    icon: "instagram",
    label: "instagram.com/_sharath001_",
    url: "https://www.instagram.com/_sharath001_?igsi=MXU2OHF5M3g1N3MxMw==",
  },
  {
    icon: "linkedin",
    label: "linkedin.com/in/sarath-k-2005-",
    url: "https://linkedin.com/in/sarath-k-2005-/",
  },
  {
    icon: "github",
    label: "github.com/sharath-fsd",
    url: "https://github.com/sharath-fsd",
  },
  {
    icon: "mail",
    label: "sharathk09122005@gmail.com",
    url: "mailto:sharathk09122005@gmail.com",
  },
  {
    icon: "leetcode",
    label: "leetcode.com/u/dW5Hu0XQfj/",
    url: "https://leetcode.com/u/dW5Hu0XQfj/",
  },
];
