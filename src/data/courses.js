// src/data/courses.js

// =====================================================
// COURSE IMAGES
// =====================================================
import dvpImage from '../assets/courses/dvp.png';
import daImage from '../assets/courses/da.png';
import dvsImage from '../assets/courses/dvs.png';
import fsdImage from '../assets/courses/fsd.png';
import uxImage from '../assets/courses/ux.png';
import dmImage from '../assets/courses/dm.png';

// =====================================================
// DATA VERSE PRO TOOLS
// =====================================================
import dvpPython from '../assets/frontend/dataversepro/PY.jpeg';
import dvpExcel from '../assets/frontend/dataversepro/EXCEL.jpeg';
import dvpSQL from '../assets/frontend/dataversepro/SQL.png';
import dvpNumpy from '../assets/frontend/dataversepro/NUMPY.png';
import dvpTableau from '../assets/frontend/dataversepro/TABLE.jpg';
import dvpJupyter from '../assets/frontend/dataversepro/JUPY.png';
import dvpColab from '../assets/frontend/dataversepro/COLOB.png';
import dvpGemini from '../assets/frontend/dataversepro/GEMNII.jpg';
import dvpChatGPT from '../assets/frontend/dataversepro/GPT.png';
import dvpPowerBI from '../assets/frontend/dataversepro/BI.png';
import dvpLooker from '../assets/frontend/dataversepro/LOOK.jpg';
import dvpJira from '../assets/frontend/dataversepro/JIRA.png';
import dvpSeaborn from '../assets/frontend/dataversepro/seaborn.svg';

// =====================================================
// DATA ANALYTICS TOOLS
// =====================================================
import daExcel from '../assets/frontend/dataanalytics/EXCEL.jpeg';
import daSQL from '../assets/frontend/dataanalytics/SQL.png';
import daPowerBI from '../assets/frontend/dataanalytics/PBI.png';
import daPython from '../assets/frontend/dataanalytics/PY.png';
import daStat from '../assets/frontend/dataanalytics/STAT.jpeg';

// =====================================================
// DEVSTACK TOOLS
// =====================================================
import devHTML from '../assets/frontend/devstack/html.svg';
import devCSS from '../assets/frontend/devstack/CSS.jpeg';
import devBootstrap from '../assets/frontend/devstack/BOOT.png';
import devJS from '../assets/frontend/devstack/js.jpg';
import devReact from '../assets/frontend/devstack/REACT.jpeg';
import devNode from '../assets/frontend/devstack/NODE.png';
import devExpress from '../assets/frontend/devstack/EXPRESS.png';
import devMongo from '../assets/frontend/devstack/MONGO.jpg';
import devGit from '../assets/frontend/devstack/GIT.png';
import devGitHub from '../assets/frontend/devstack/GITHUB.png';
import devJira from '../assets/frontend/devstack/JIRA.png';
import devJenkins from '../assets/frontend/devstack/JEN.png';
import devDocker from '../assets/frontend/devstack/DOCK.jpeg';

// =====================================================
// UI/UX TOOLS
// =====================================================
import uxFigma from '../assets/frontend/uxui/FIGMA.png';
import uxPhotoshop from '../assets/frontend/uxui/PS.png';
import uxIllustrator from '../assets/frontend/uxui/AI.png';
import uxBlender from '../assets/frontend/uxui/BLEN.png';
// import digitalMarketingDeck from "../assets/Decks/digital-marketing-syllabus.pdf";
// import uiuxGraphicDeck from "../assets/Decks/uiux-graphic-design-syllabus.pdf";
// import dataAnalyticsDeck from "../assets/Decks/data-analytics-syllabus.pdf";
// import dataVerseDeck from "../assets/Decks/data-verse-pro-syllabus.pdf";
// import devstackDeck from "../assets/Decks/devstack-engineer-syllabus.pdf";
// import mernDeck from "../assets/Decks/mer
// n-stack-syllabus.pdf";
// =====================================================
// DIGITAL MARKETING TOOLS
// =====================================================
import dmGoogleAds from '../assets/frontend/digitalmarketing/GAD.png';
import dmMeta from '../assets/frontend/digitalmarketing/META.png';
import dmHubspot from '../assets/frontend/digitalmarketing/HUB.png';
import dmShopify from '../assets/frontend/digitalmarketing/123.svg';
import dmWordPress from '../assets/frontend/digitalmarketing/WORD.png';
import dmCanva from '../assets/frontend/digitalmarketing/CANVA.png';
import dmMailchimp from '../assets/frontend/digitalmarketing/MAIL.png';
import dmElementor from '../assets/frontend/digitalmarketing/ELE.png';
import dmHrefs from '../assets/frontend/digitalmarketing/HREF.png';

// =====================================================
// COMPANY LOGOS
// =====================================================
import company1 from '../assets/companies/company1.jpeg';
import company2 from '../assets/companies/company2.jpeg';
import company3 from '../assets/companies/company3.jpeg';
import company4 from '../assets/companies/company4.jpeg';

// =====================================================
// COURSES DATA
// =====================================================
const courses = [
  /* =====================================================
     DATA VERSE PRO
  ====================================================== */
  {
    slug: "data-verse-pro",
    title: "Data Scientist  with Gen AI Architect",
    category: "data",
    badge: "Trending Course",
    trustImage: dvpImage,
    trustImageAlt: "Industry aligned data engineering curriculum",

    short: "A complete data analytics + engineering career program.",
    duration: "2.5 Months",
    hours: 250,
    mode: "Online + Offline",
    language: "English / Tamil",
    rating: "4.8 / 5",
    learners: "5000+ Learners",

    whyCareer:
      "Data engineering and analytics form the backbone of modern AI-driven and data-powered products.",

    whoCanStudy: [
      { title: "Students & Fresh Graduates", desc: "Build strong data foundations." },
      { title: "Working Professionals", desc: "Upskill into high-demand data roles." },
      { title: "Career Switchers", desc: "Move from non-IT backgrounds." },
      { title: "Tech Enthusiasts", desc: "Work with real-world tools." }
    ],

    tools: [
      { name: "Python", img: dvpPython },
      { name: "Excel", img: dvpExcel },
      { name: "Python", img: dvpPython },
      { name: "SQL", img: dvpSQL },
      { name: "Pandas", img: dvpPython },
      { name: "Numpy", img: dvpNumpy },
      { name: "Tableau", img: dvpTableau },
      { name: "Jupyter", img: dvpJupyter },
      { name: "Google - Colob", img: dvpColab },
      { name: "Gemini", img: dvpGemini },
      { name: "ChatGPT", img: dvpChatGPT },
      { name: "PowerBI", img: dvpPowerBI },
      { name: "Looker Studio", img: dvpLooker },
      { name: "JIRA", img: dvpJira },
      { name: "Seaborn", img: dvpSeaborn }
    ],

    highlights: [
      {
        icon: "clock",
        value: "250+ Hours",
        label: "Live Interactive Sessions"
      },
      {
        icon: "calendar",
        value: "2 Months",
        label: "Weekday Classes"
      },
      {
        icon: "ai",
        value: "AI-Driven",
        label: "Personal Tech Assistant"
      },
      {
        icon: "offline",
        value: "6 Days",
        label: "Offline Immersion Program"
      },
      {
        icon: "projects",
        value: "7 Hands-On Projects",
        label: "2+ Capstones Projects"
      },
      {
        icon: "target",
        value: "Ace the Interview",
        label: "Targeted Prep for Tech & Product Roles"
      },
      {
        icon: "mentor",
        value: "Flagship Mentors",
        label: "From Leading Tech Companies"
      },
      {
        icon: "tech",
        value: "Cutting-Edge Tech",
        label: "OpenAI, Gemini, RAG"
      }
    ],

    modules: [
      { title: "Excel", topics: ["Advanced Functions", "Pivot Tables", "Dashboards"] },
      { title: "SQL", topics: ["Queries & Filtering", "Joins", "Aggregations"] },
      { title: "Power BI", topics: ["Data Modeling", "DAX Basics", "Reports & Dashboards"] },
      { title: "Python", topics: ["Python Basics", "Data Analysis", "Visualization"] },
      { title: "Google Colab / Jupyter Notebook", topics: ["Notebook Environment", "Running Code", "Data Exploration"] },
      { title: "NumPy", topics: ["Arrays", "Mathematical Operations", "Broadcasting"] },
      { title: "Pandas", topics: ["DataFrames", "Data Cleaning", "Aggregation"] },
      { title: "Seaborn", topics: ["Statistical Plots", "EDA Visualizations", "Styling"] },
      { title: "Statistics", topics: ["Descriptive Statistics", "Probability", "Hypothesis Testing"] },
      { title: "Tableau", topics: ["Calculated Fields", "Dashboards", "Data Storytelling"] },
      { title: "Machine Learning", topics: ["Regression", "Classification", "Model Evaluation"] },
      { title: "Jira", topics: ["Agile Basics", "Issue Tracking", "Sprint Management"] },
      { title: "AI Tools - GPT, Gemini, Copilot", topics: ["Prompt Engineering", "Code Assistance", "Productivity Use Cases"] },
      { title: "n8n (Automation)", topics: ["Workflow Automation", "API Integrations", "Data Pipelines"] },
      { title: "Github", topics: ["Version Control", "Repositories & Branches", "Collaboration"] }
    ],

    syllabusPdf: "/Data Verse Pro Syllabus Brochure.pdf",

    projects: "Build production-grade ETL pipelines and analytics systems.",

    roles: ["Data Engineer", "ETL Developer", "BI Analyst", "ML Ops Engineer"],

    companies: [company1, company2, company3],

    faq: [
  { 
    q: "What makes Data Verse Pro the best data science and data engineering course in 2026?", 
    a: "Data Verse Pro is a comprehensive 250-hour program designed for the modern AI-driven workplace. Unlike basic theory courses, it focuses on trending technologies like Generative AI, Predictive Analytics, and Machine Learning. The curriculum combines Python, SQL, Power BI, Tableau, and advanced data engineering tools with real-world projects, making you job-ready for Data Analyst, Data Engineer, Data Scientist, and BI Analyst positions in top companies." 
  },
  { 
    q: "Does Data Verse Pro provide training on AI tools and machine learning algorithms?", 
    a: "Yes. Data Verse Pro offers in-depth training on artificial intelligence (AI) and machine learning (ML) algorithms. You'll gain hands-on experience with industry-standard tools including TensorFlow, Pandas, Scikit-learn, NumPy, and AI platforms like ChatGPT, Gemini, and Copilot. This prepares you for high-paying roles in the AI and Data Science industry." 
  },
  { 
    q: "Is Data Verse Pro a job-oriented certification course with placement assistance?", 
    a: "Yes. Data Verse Pro is 100% job-oriented and includes an industry-recognized Data Science Certification from Vinsup Skill Academy. We provide dedicated placement assistance including resume building, mock interviews, portfolio preparation, and direct referrals to reputed companies hiring Data Engineers, ETL Developers, and ML Ops Engineers." 
  },
  { 
    q: "Do I need coding or programming experience to join Data Verse Pro?", 
    a: "No prior coding experience is required. Data Verse Pro teaches Python programming, SQL, and statistics from scratch. The course is designed for fresh graduates, students, working professionals, and career switchers from non-IT backgrounds who want to build strong data engineering and analytics foundations." 
  },
  { 
    q: "What real-world projects and capstone assignments are included in Data Verse Pro?", 
    a: "Data Verse Pro includes 7+ hands-on projects and 2+ capstone projects replicating real business problems. Projects include customer churn prediction, sales forecasting, ETL pipeline development, AI chatbot creation, and data visualization dashboards. These live projects build a strong portfolio for showcasing your data engineering skills to employers." 
  },
  { 
    q: "What tools and technologies are covered in the Data Verse Pro curriculum?", 
    a: "You'll learn Python, Excel, SQL, Pandas, NumPy, Seaborn, Power BI, Tableau, Looker Studio, Jupyter Notebook, Google Colab, Machine Learning, Statistics, JIRA, n8n automation, GitHub, and AI tools like ChatGPT and Gemini. This comprehensive tech stack prepares you for modern data engineering and analytics roles." 
  },
  { 
    q: "Is Data Verse Pro suitable for students, freshers, and working professionals?", 
    a: "Absolutely. Data Verse Pro is designed for students building data foundations, fresh graduates starting data careers, working professionals upskilling into high-demand data roles, and career switchers transitioning from non-tech backgrounds into data science and data engineering." 
  },
  { 
    q: "How long is the Data Verse Pro course and what is the class schedule?", 
    a: "Data Verse Pro is a 2.5-month intensive program with 250+ hours of live interactive sessions. Classes are conducted on weekdays in both online and offline modes. The program includes a 6-day offline immersion program for hands-on practice and networking with industry experts." 
  },
  { 
    q: "What job roles can I apply for after completing Data Verse Pro?", 
    a: "Graduates of Data Verse Pro are qualified for roles including Data Engineer, ETL Developer, Business Intelligence (BI) Analyst, Data Analyst, Data Scientist, ML Ops Engineer, Analytics Engineer, and Database Developer across industries like IT, finance, healthcare, e-commerce, and consulting." 
  },
  { 
    q: "Does Data Verse Pro include AI-driven learning and mentorship from industry experts?", 
    a: "Yes. Data Verse Pro features AI-driven personal tech assistants for 24/7 learning support, flagship mentors from leading tech companies like Google, Microsoft, and Amazon, and hands-on guidance on cutting-edge technologies including OpenAI, Gemini, and RAG (Retrieval-Augmented Generation) systems." 
  }
]
  },

  /* =====================================================
     DATA ANALYTICS
  ====================================================== */
  {
    slug: "data-analytics",
    title: "Data Analytics",
    category: "data",
    badge: "Popular",
    trustImage: daImage,
    trustImageAlt: "Industry aligned data engineering curriculum",

    short: "Learn Excel, SQL, Power BI & Python.",
    duration: "1.5 Months",
    hours: 100,
    mode: "Offline + Online",
    language: "English / Tamil",
    rating: "4.9 / 5",
    learners: "2000+ Learners",

    whyCareer:
      "Data analytics helps businesses make smarter decisions using insights.",

    whoCanStudy: [
      { title: "Students & Freshers", desc: "Kickstart analytics careers." },
      { title: "Working Professionals", desc: "Upgrade analytical skills." }
    ],

    tools: [
      { name: "Excel", img: daExcel },
      { name: "SQL", img: daSQL },
      { name: "Power BI", img: daPowerBI },
      { name: "Python", img: daPython },
      { name: "Statistics", img: daStat }
    ],

    highlights: [
      {
        icon: "clock",
        value: "100+ Hours",
        label: "Live Interactive Sessions"
      },
      {
        icon: "calendar",
        value: "1 Months",
        label: "Weekday Classes"
      },
      {
        icon: "ai",
        value: "AI-Driven",
        label: "Personal Tech Assistant"
      },
      {
        icon: "Offline",
        value: "10 Days",
        label: "SoftSkills Preparation"
      },
      {
        icon: "projects",
        value: "5 Projects",
        label: "1+ AI Capstones"
      },
      {
        icon: "target",
        value: "Interview Ready",
        label: "Tech & Product Roles"
      },
      {
        icon: "mentor",
        value: "Flagship Mentors",
        label: "Industry Experts"
      },
      {
        icon: "tech",
        value: "Cutting-Edge Tech",
        label: "OpenAI, Gemini, RAG"
      }
    ],

    modules: [
      { title: "Excel", topics: ["Advanced Functions", "Pivot Tables", "Dashboards"] },
      { title: "SQL", topics: ["Queries & Filtering", "Joins", "Aggregations"] },
      { title: "Power BI", topics: ["Data Modeling", "DAX Basics", "Reports & Dashboards"] },
      { title: "Python", topics: ["Python Basics", "Data Analysis", "Visualization"] },
      { title: "Pandas", topics: ["Data Structures", "Data Cleaning", "Data Manipulation"] },
      { title: "Seaborn", topics: ["Statistical Plots", "Categorical Plots", "Advanced Visualization"] },
      { title: "Statistics", topics: ["Descriptive Statistics", "Probability & Distributions", "Inferential Statistics"] }
    ],

    syllabusPdf: "/Data Analytics Syllabus Brochure.pdf",
    projects: "Analyze real datasets and build dashboards.",

    roles: ["Data Analyst", "Business Analyst"],

    companies: [company1],

    faq: [
  { 
    q: "Which is the best data analytics course for beginners?", 
    a: "Vinsup Skill Academy provides a beginner-friendly data analytics course with hands-on training and real-time projects." 
  },
  { 
    q: "What skills are covered in the data analytics course?", 
    a: "Excel, SQL, Power BI, Python basics, data visualization, and business analytics concepts." 
  },
  { 
    q: "Is data analytics a good career option in India?", 
    a: "Yes, data analytics is one of the fastest-growing career fields with high demand across industries." 
  },
  { 
    q: "Do you provide placement support for data analytics?", 
    a: "Yes, we offer placement assistance, resume building, and interview preparation." 
  },
  { 
    q: "Is coding mandatory to learn data analytics?", 
    a: "No. Coding is taught from fundamentals and gradually introduced." 
  },
  { 
    q: "Who can join this data analytics course?", 
    a: "Students, graduates, working professionals, and career switchers can join." 
  },
  { 
    q: "Is this course suitable for non-technical students?", 
    a: "Yes, the course is designed for both technical and non-technical backgrounds." 
  },
  { 
    q: "Are real-time projects included?", 
    a: "Yes, students work on real-world datasets and business case studies." 
  },
  { 
    q: "Is this course available online?", 
    a: "Yes, both online and offline learning options are available." 
  },
  { 
    q: "What job roles can I apply for after completing data analytics training?", 
    a: "Students can apply for roles like Data Analyst, Business Analyst, Reporting Analyst, and Junior Data Scientist." 
  }
]
  },

  /* =====================================================
     DEVSTACK – FULLSTACK + DEVOPS
  ====================================================== */
  {
    slug: "devstack-fullstack-devops",
    title: "DevStack – Fullstack with DevOps",
    category: "dev",
    badge: "Hot Program",
    trustImage: dvsImage,
    trustImageAlt: "Industry aligned data engineering curriculum",

    short: "Master MERN stack with DevOps tools.",
    duration: "2.5 Months",
    hours: 250,
    mode: "Online + Offline",
    language: "English",
    rating: "4.8 / 5",
    learners: "1500+ Learners",

    whyCareer:
      "Fullstack developers with DevOps skills are among the highest-paid IT professionals.",

    whoCanStudy: [
      { title: "Students", desc: "Learn development from scratch." },
      { title: "Developers", desc: "Upgrade with DevOps skills." }
    ],

    tools: [
      { name: "HTML", img: devHTML },
      { name: "CSS", img: devCSS },
      { name: "Bootstrap", img: devBootstrap },
      { name: "JavaScript", img: devJS },
      { name: "React.js", img: devReact },
      { name: "Node.js", img: devNode },
      { name: "Express.js", img: devExpress },
      { name: "MongoDB", img: devMongo },
      { name: "Git", img: devGit },
      { name: "GitHub", img: devGitHub },
      { name: "Jira", img: devJira },
      { name: "Jenkins", img: devJenkins },
      { name: "Docker", img: devDocker }
    ],

    highlights: [
      {
        icon: "clock",
        value: "300+ Hours",
        label: "Live + Recorded Sessions"
      },
      {
        icon: "calendar",
        value: "9 Months",
        label: "Weekend Classes"
      },
      {
        icon: "ai",
        value: "AI-Driven",
        label: "Personal Tech Assistant"
      },
      {
        icon: "offline",
        value: "4 Days",
        label: "Offline Immersion"
      },
      {
        icon: "projects",
        value: "15 Projects",
        label: "3+ AI Capstones"
      },
      {
        icon: "target",
        value: "Interview Ready",
        label: "Tech & Product Roles"
      },
      {
        icon: "mentor",
        value: "Flagship Mentors",
        label: "Industry Experts"
      },
      {
        icon: "tech",
        value: "Cutting-Edge Tech",
        label: "OpenAI, Gemini, RAG"
      }
    ],

    modules: [
      { title: "HTML", topics: ["Elements & Attributes", "Forms & Tables", "Semantic HTML"] },
      { title: "CSS", topics: ["Flexbox", "Grid", "Responsive Design"] },
      { title: "Bootstrap", topics: ["Grid System", "Components", "Customization"] },
      { title: "JavaScript", topics: ["Variables & Functions", "DOM Manipulation", "ES6 Features"] },
      { title: "React.js", topics: ["Components & Props", "State & Hooks", "Routing"] },
      { title: "Node.js", topics: ["Event Loop", "File System", "Modules"] },
      { title: "Express.js", topics: ["Routing", "Middleware", "REST APIs"] },
      { title: "MongoDB", topics: ["CRUD Operations", "Schema Design", "Aggregation"] },
      { title: "Git", topics: ["Version Control Basics", "Branching", "Merging"] },
      { title: "GitHub", topics: ["Repositories", "Pull Requests", "GitHub Actions"] },
      { title: "Jira", topics: ["Issue Tracking", "Sprint Management", "Kanban Boards"] },
      { title: "Jenkins", topics: ["CI Pipelines", "Build Automation", "Deployment Jobs"] },
      { title: "Docker", topics: ["Images & Containers", "Dockerfile", "Docker Compose"] }
    ],

    syllabusPdf: "/Devstack Engineer Syllabus Brochure.pdf",
    projects: "Build and deploy fullstack applications.",

    roles: [
      "Frontend Developer",
      "Backend Developer",
      "Fullstack Developer",
      "MERN Stack Developer",
      "JavaScript Developer",
      "Web Developer",
      "DevOps Engineer",
      "Cloud Engineer",
      "Software Engineer",
      "Application Developer"
    ],

    companies: [company2],

    faq: [
  { 
    q: "What is DevStack and why is it the best fullstack development course with DevOps?", 
    a: "DevStack is a comprehensive 250-hour program combining MERN Stack development (MongoDB, Express.js, React.js, Node.js) with DevOps tools like Docker, Jenkins, and GitHub. It's designed to create industry-ready fullstack developers with deployment skills, making graduates among the highest-paid IT professionals in the software development field." 
  },
  { 
    q: "Is DevStack suitable for beginners with no coding experience?", 
    a: "Yes. DevStack starts from fundamentals teaching HTML, CSS, JavaScript, and progressively advances to React.js, Node.js, Express.js, MongoDB, and DevOps tools. The course is perfect for students learning development from scratch, as well as existing developers upgrading with DevOps and fullstack skills." 
  },
  { 
    q: "What technologies and tools will I learn in the DevStack course?", 
    a: "You'll master HTML5, CSS3, Bootstrap, JavaScript (ES6+), React.js, Node.js, Express.js, MongoDB, Git, GitHub, JIRA, Jenkins CI/CD, Docker containerization, REST APIs, and deployment practices. This complete MERN Stack + DevOps toolkit prepares you for modern web development roles." 
  },
  { 
    q: "Does DevStack provide hands-on projects and real-world application development?", 
    a: "Absolutely. DevStack includes 15+ hands-on projects and 3+ AI-powered capstone projects. You'll build and deploy fullstack applications, create REST APIs, implement CI/CD pipelines, containerize applications with Docker, and develop production-ready web solutions that demonstrate your fullstack development capabilities." 
  },
  { 
    q: "Is DevStack a job-oriented course with placement support and certification?", 
    a: "Yes. DevStack is 100% job-oriented with placement assistance, interview preparation, resume building, and portfolio development. You receive an industry-recognized certification from Vinsup Skill Academy. Our career support helps you secure positions as Frontend Developer, Backend Developer, Fullstack Developer, MERN Stack Developer, or DevOps Engineer." 
  },
  { 
    q: "What is the duration and class schedule for DevStack training?", 
    a: "DevStack is a 2.5-month intensive program with 300+ hours including live and recorded sessions. Weekend classes are available for working professionals. The program includes a 4-day offline immersion for hands-on DevOps practice and collaborative fullstack development projects." 
  },
  { 
    q: "What job roles can I apply for after completing DevStack?", 
    a: "DevStack graduates qualify for Frontend Developer, Backend Developer, Fullstack Developer, MERN Stack Developer, JavaScript Developer, Web Developer, DevOps Engineer, Cloud Engineer, Software Engineer, and Application Developer roles in startups, product companies, and IT services firms." 
  },
  { 
    q: "Does DevStack include training on modern DevOps practices and deployment?", 
    a: "Yes. You'll learn complete DevOps workflows including version control with Git/GitHub, CI/CD pipeline creation with Jenkins, Docker containerization, automated testing, deployment strategies, and production environment management. This DevOps expertise makes you valuable for end-to-end application development and deployment." 
  },
  { 
    q: "Will I learn React.js and Node.js for fullstack JavaScript development?", 
    a: "Absolutely. DevStack provides comprehensive training on React.js for frontend development (components, props, state, hooks, routing) and Node.js with Express.js for backend development (REST APIs, middleware, authentication, database integration). You'll master JavaScript fullstack development from frontend to backend to database." 
  },
  { 
    q: "Does DevStack include AI tools and mentorship from industry experts?", 
    a: "Yes. DevStack features AI-driven personal tech assistants for coding support, flagship mentors from leading tech companies, training on cutting-edge AI tools like OpenAI, Gemini, and RAG systems, and guidance on using AI for productivity in software development. You'll learn modern development practices used by top tech companies." 
  }
]
  },

  /* =====================================================
     FRONT-END DEVELOPMENT
  ====================================================== */
  {
    slug: "frontend",
    title: "Front-end Development",
    category: "dev",
    trustImage: fsdImage,
    trustImageAlt: "Industry aligned data engineering curriculum",

    short: "Learn HTML, CSS, JavaScript & React.",
    duration: "1.5 Months",
    hours: 150,
    mode: "Online + Classroom",
    language: "English / Tamil",
    rating: "4.6 / 5",
    learners: "1200+ Learners",

    whyCareer:
      "Frontend developers create engaging and user-friendly interfaces.",

    whoCanStudy: [
      { title: "Beginners", desc: "Start from scratch." },
      { title: "Designers", desc: "Transition into frontend roles." }
    ],

    highlights: [
      {
        icon: "clock",
        value: "100+ Hours",
        label: "Live Interactive Sessions"
      },
      {
        icon: "calendar",
        value: "1 Months",
        label: "Weekday Classes"
      },
      {
        icon: "ai",
        value: "AI-Driven",
        label: "Personal Tech Assistant"
      },
      {
        icon: "offline",
        value: "10 Days",
        label: "SoftSkills Preparation"
      },
      {
        icon: "projects",
        value: "5 Projects",
        label: "1+ AI Capstones"
      },
      {
        icon: "target",
        value: "Interview Ready",
        label: "Tech & Product Roles"
      },
      {
        icon: "mentor",
        value: "Flagship Mentors",
        label: "Industry Experts"
      },
      {
        icon: "tech",
        value: "Cutting-Edge Tech",
        label: "OpenAI, Gemini, RAG"
      }
    ],

    tools: [
      { name: "HTML", img: devHTML },
      { name: "CSS", img: devCSS },
      { name: "Bootstrap", img: devBootstrap },
      { name: "JavaScript", img: devJS },
      { name: "React.js", img: devReact }
    ],

    modules: [
      { title: "HTML", topics: ["Elements & Attributes", "Forms & Tables", "Semantic HTML"] },
      { title: "CSS", topics: ["Flexbox", "Grid", "Responsive Design"] },
      { title: "Bootstrap", topics: ["Grid System", "Components", "Customization"] },
      { title: "JavaScript", topics: ["Variables & Functions", "DOM Manipulation", "ES6 Features"] },
      { title: "React.js", topics: ["Components & Props", "State & Hooks", "Routing"] }
    ],

    syllabusPdf: "/MERN Stack Syllabus Brochure.pdf",
    projects: "Build responsive websites and React apps.",

    roles: ["Frontend Developer", "UI Developer"],

    companies: [company3],

    faq: [
  { 
    q: "What is the best front end development course for beginners?", 
    a: "Vinsup Skill Academy offers a practical front end development course covering HTML, CSS, JavaScript, and modern frameworks." 
  },
  { 
    q: "Do I need coding knowledge to join this course?", 
    a: "No prior coding experience is required." 
  },
  { 
    q: "What technologies are taught in this course?", 
    a: "HTML5, CSS3, JavaScript, Bootstrap, responsive design, and UI frameworks." 
  },
  { 
    q: "Is this a job-oriented front end course?", 
    a: "Yes, the course is designed to make students industry-ready." 
  },
  { 
    q: "Are real projects included in training?", 
    a: "Yes, students build live websites and professional portfolios." 
  },
  { 
    q: "Does Vinsup Skill Academy provide placement assistance?", 
    a: "Yes, we offer placement support and interview preparation." 
  },
  { 
    q: "Is this course suitable for students and freshers?", 
    a: "Yes, it is ideal for students, freshers, and career changers." 
  },
  { 
    q: "Is online training available?", 
    a: "Yes, we provide online and offline classes." 
  },
  { 
    q: "How can front end development help in a tech career?", 
    a: "Front end development opens career opportunities in web development, UI development, and software development roles." 
  },
  { 
    q: "Will I create my own portfolio website during training?", 
    a: "Yes, students create professional portfolio websites as part of the course." 
  }
]
  },

  /* =====================================================
     UI / UX DESIGN
  ====================================================== */
  {
    slug: "ui-ux-design",
    title: "UI / UX Design",
    category: "design",
    trustImage: uxImage,
    trustImageAlt: "Industry aligned data engineering curriculum",

    short: "Design user-centric digital products.",
    duration: "1.5 Months",
    hours: 150,
    mode: "Online + Offline",
    language: "English & Tamil",
    rating: "4.7 / 5",
    learners: "900+ Learners",

    whyCareer:
      "UI/UX designers shape the digital experiences used by millions.",

    whoCanStudy: [
      { title: "Design Enthusiasts", desc: "Start a design career." },
      { title: "Developers", desc: "Add design skills." }
    ],

    tools: [
      { name: "Figma", img: uxFigma },
      { name: "Adobe Photoshop", img: uxPhotoshop },
      { name: "Adobe Illustrator", img: uxIllustrator },
      { name: "Blender", img: uxBlender }
    ],

    highlights: [
      {
        icon: "clock",
        value: "150+ Hours",
        label: "Live Interactive Sessions"
      },
      {
        icon: "calendar",
        value: "2 Months",
        label: "Weekday Classes"
      },
      {
        icon: "ai",
        value: "AI-Driven",
        label: "Personal Tech Assistant"
      },
      {
        icon: "offline",
        value: "10 Days",
        label: "SoftSkills Preparation"
      },
      {
        icon: "projects",
        value: "5 Projects",
        label: "1+ AI Capstones"
      },
      {
        icon: "target",
        value: "Interview Ready",
        label: "Tech & Product Roles"
      },
      {
        icon: "mentor",
        value: "Flagship Mentors",
        label: "Industry Experts"
      },
      {
        icon: "tech",
        value: "Cutting-Edge Tech",
        label: "OpenAI, Gemini, RAG"
      }
    ],

    modules: [
      {
        title: "UX Fundamentals",
        topics: ["What is UX & UI?", "Design Thinking Process", "User-Centered Design", "UX vs UI"]
      },
      {
        title: "User Research",
        topics: ["User Research Methods", "Stakeholder Interviews", "User Personas", "Empathy Mapping"]
      },
      {
        title: "Information Architecture",
        topics: ["User Flows", "Site Maps", "Card Sorting", "Content Structuring"]
      },
      {
        title: "Wireframing",
        topics: ["Low-Fidelity Wireframes", "High-Fidelity Wireframes", "Layout Principles", "Design Grids"]
      },
      {
        title: "UI Design Principles",
        topics: ["Color Theory", "Typography", "Spacing & Alignment", "Visual Hierarchy"]
      },
      {
        title: "Design Tools",
        topics: ["Figma Basics", "Auto Layout", "Components & Variants", "Design Systems"]
      },
      {
        title: "Prototyping",
        topics: ["Interactive Prototypes", "Micro Interactions", "Transitions & Animations", "Usability Testing"]
      },
      {
        title: "Responsive & Mobile Design",
        topics: ["Mobile-First Design", "Responsive Layouts", "iOS & Android Guidelines", "Accessibility Basics"]
      },
      {
        title: "Branding & Visual Design",
        topics: ["Logo Design Basics", "Icon Design", "Style Guides", "Design Consistency"]
      },
      {
        title: "Portfolio & Case Studies",
        topics: ["Case Study Structure", "UX Storytelling", "Portfolio Presentation", "Client Pitching"]
      }
    ],

    syllabusPdf: "/_UIUX & Graphic Design Syllabus Brochure.pdf",
    projects: "Design mobile and web interfaces.",

    roles: ["UI Designer", "UX Designer"],

    companies: [company4],

    faq: [
  { 
    q: "Which is the best UX UI design course for beginners?", 
    a: "Vinsup Skill Academy offers a comprehensive UX UI design course with practical and project-based training." 
  },
  { 
    q: "Is UX UI design suitable for non-designers?", 
    a: "Yes, this course starts from fundamentals and is beginner-friendly." 
  },
  { 
    q: "What tools are taught in UX UI training?", 
    a: "Figma, Adobe XD, wireframing, prototyping, and user research tools." 
  },
  { 
    q: "Is this course job-oriented?", 
    a: "Yes, it focuses on real-world design projects and portfolio creation." 
  },
  { 
    q: "Do you provide placement support?", 
    a: "Yes, we offer placement assistance and career guidance." 
  },
  { 
    q: "Is coding required for UX UI design?", 
    a: "No coding knowledge is required." 
  },
  { 
    q: "Is this course available online?", 
    a: "Yes, online and offline training options are available." 
  },
  { 
    q: "Will I build a design portfolio?", 
    a: "Yes, students create industry-ready design portfolios." 
  },
  { 
    q: "Who can join this UX UI course?", 
    a: "Students, freshers, designers, and professionals can join." 
  },
  { 
    q: "What career opportunities are available after UX UI training?", 
    a: "Students can become UX Designers, UI Designers, Product Designers, and Interaction Designers." 
  }
]
  },

  /* =====================================================
     DIGITAL MARKETING
  ====================================================== */
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    category: "marketing",
    trustImage: dmImage,
    trustImageAlt: "Industry aligned data engineering curriculum",

    short: "Master SEO, Ads, Social Media & Analytics.",
    duration: "2.5 Months",
    hours: 120,
    mode: "Online + Offline",
    language: "English / Tamil",
    rating: "4.6 / 5",
    learners: "800+ Learners",

    whyCareer:
      "Digital marketing helps businesses grow online and reach the right audience.",

    whoCanStudy: [
      { title: "Students", desc: "Start a marketing career." },
      { title: "Business Owners", desc: "Grow your brand online." }
    ],

    highlights: [
      {
        icon: "clock",
        value: "300+ Hours",
        label: "Live + Recorded Sessions"
      },
      {
        icon: "calendar",
        value: "9 Months",
        label: "Weekend Classes"
      },
      {
        icon: "ai",
        value: "AI-Driven",
        label: "Personal Tech Assistant"
      },
      {
        icon: "offline",
        value: "4 Days",
        label: "Offline Immersion"
      },
      {
        icon: "projects",
        value: "15 Projects",
        label: "3+ AI Capstones"
      },
      {
        icon: "target",
        value: "Interview Ready",
        label: "Tech & Product Roles"
      },
      {
        icon: "mentor",
        value: "Flagship Mentors",
        label: "Industry Experts"
      },
      {
        icon: "tech",
        value: "Cutting-Edge Tech",
        label: "OpenAI, Gemini, RAG"
      }
    ],

    tools: [
      { name: "Google Analytics", img: dmGoogleAds },
      { name: "Google Ads", img: dmGoogleAds },
      { name: "Meta Ads Manager", img: dmMeta },
      { name: "Hubspot", img: dmHubspot },
      { name: "Shopify", img: dmShopify },
      { name: "WordPress", img: dmWordPress },
      { name: "Canva", img: dmCanva },
      { name: "Mailchimp", img: dmMailchimp },
      { name: "Elementor", img: dmElementor },
      { name: "Hrefs", img: dmHrefs }
    ],

    modules: [
      {
        title: "Digital Marketing Foundations",
        topics: ["Introduction to Digital Marketing", "Marketing Funnel & Buyer Journey", "Industry Trends & AI in Marketing"]
      },
      {
        title: "Website Creation & Optimization",
        topics: ["WordPress Setup & Basics", "Landing Pages & UX", "Website Speed & Mobile Optimization"]
      },
      {
        title: "Search Engine Optimization (SEO)",
        topics: ["Keyword Research", "On-Page & Off-Page SEO", "Local SEO & Google Business Profile"]
      },
      {
        title: "Social Media & Content Marketing",
        topics: ["Content Strategy & Copywriting", "Instagram, Facebook & LinkedIn Marketing", "Organic Growth Techniques"]
      },
      {
        title: "Paid Advertising (Google & Meta Ads)",
        topics: ["Google Ads Fundamentals", "Meta Ads (Facebook & Instagram)", "Audience Targeting & Retargeting"]
      },
      {
        title: "Analytics & Performance Tracking",
        topics: ["Google Analytics 4", "Conversion & Event Tracking", "Performance Reporting"]
      },
      {
        title: "Freelancing & Career Preparation",
        topics: ["Email Marketing Basics", "Freelancing Platforms & Client Handling", "Resume, Portfolio & Interview Prep"]
      }
    ],

    syllabusPdf: "/_Digital Marketing Syllabus Brochure.pdf",
    projects: "Run live ad campaigns and SEO projects.",

    roles: ["Digital Marketer", "SEO Executive"],

    companies: [company1],

    faq: [
  { 
    q: "What is the best digital marketing course for beginners in India?", 
    a: "Vinsup Skill Academy offers one of the best digital marketing courses for beginners, covering SEO, Google Ads, social media marketing, and real-time projects." 
  },
  { 
    q: "Is this a job-oriented digital marketing course?", 
    a: "Yes. Our digital marketing course is 100% job-oriented with live campaigns, practical tools, and placement assistance." 
  },
  { 
    q: "Do I need prior experience to learn digital marketing?", 
    a: "No prior experience is required. This course is designed for students, freshers, and working professionals." 
  },
  { 
    q: "Does Vinsup Skill Academy provide placement support for digital marketing?", 
    a: "Yes, we provide placement guidance, interview preparation, and resume building support." 
  },
  { 
    q: "Is this digital marketing course online or offline?", 
    a: "We offer flexible learning options including online and offline classes." 
  },
  { 
    q: "What tools will I learn in digital marketing?", 
    a: "You will learn SEO tools, Google Ads, Google Analytics, Meta Ads, email marketing tools, and AI-based marketing platforms." 
  },
  { 
    q: "How long does it take to become a digital marketing professional?", 
    a: "With consistent learning and practical exposure, students can become job-ready within a few months." 
  },
  { 
    q: "Is certification provided after completion?", 
    a: "Yes, students receive an industry-recognized certification from Vinsup Skill Academy." 
  },
  { 
    q: "Why choose Vinsup Skill Academy for digital marketing training?", 
    a: "We offer expert trainers, live projects, industry-relevant curriculum, and career-focused training." 
  },
  {
    q: "Can I start freelancing or a digital marketing agency after this course?",
    a: "Yes, this course prepares students for freelancing, agency work, and entrepreneurship opportunities."
  }
]
  },

  /* =====================================================
     MERN STACK
  ====================================================== */
  {
    slug: "mern-stack",
    title: "MERN Stack Development",
    category: "dev",
    badge: "Popular",
    navVisible: false,
    short: "MongoDB, Express, React & Node.js full-stack development.",
    duration: "3 Months",
    hours: 200,
    mode: "Online + Offline",
    language: "English / Tamil",
    rating: "4.7 / 5",
    learners: "1200+ Learners",
    whyCareer: "MERN Stack is the most in-demand JavaScript full-stack framework powering thousands of startups and product companies.",
    whoCanStudy: [
      { title: "Students & Fresh Graduates", desc: "Build complete web applications from scratch." },
      { title: "Front-end Developers", desc: "Add backend skills to become a full-stack developer." },
      { title: "Backend Developers", desc: "Master React to handle both sides of development." },
      { title: "Career Switchers", desc: "Enter web development with one comprehensive stack." }
    ],
    tools: [
      { name: "MongoDB", img: devMongo },
      { name: "Express.js", img: devExpress },
      { name: "React", img: devReact },
      { name: "Node.js", img: devNode },
      { name: "JavaScript", img: devJS },
      { name: "HTML", img: devHTML },
      { name: "CSS", img: devCSS },
      { name: "Git", img: devGit },
      { name: "GitHub", img: devGitHub }
    ],
    highlights: [
      { icon: "clock", value: "200+ Hours", label: "Live Interactive Sessions" },
      { icon: "calendar", value: "3 Months", label: "Structured Learning Path" },
      { icon: "ai", value: "Full-Stack JS", label: "End-to-End Development" },
      { icon: "projects", value: "5 Projects", label: "Real-World Applications" },
      { icon: "target", value: "Job Ready", label: "Interview Preparation" },
      { icon: "mentor", value: "Expert Mentors", label: "Industry Practitioners" },
      { icon: "offline", value: "Hybrid Mode", label: "Online + Offline Classes" },
      { icon: "tech", value: "Modern Stack", label: "Industry-Standard Tools" }
    ],
    modules: [
      { title: "HTML & CSS Fundamentals", topics: ["Semantic HTML", "CSS Flexbox & Grid", "Responsive Design"] },
      { title: "JavaScript ES6+", topics: ["Arrow Functions", "Promises & Async/Await", "Destructuring"] },
      { title: "React.js", topics: ["Components & Props", "Hooks", "State Management with Redux"] },
      { title: "Node.js", topics: ["Server Setup", "Event Loop", "File System & Streams"] },
      { title: "Express.js", topics: ["REST APIs", "Middleware & Routing", "Error Handling"] },
      { title: "MongoDB & Mongoose", topics: ["CRUD Operations", "Schema Design", "Aggregation"] },
      { title: "Authentication & Security", topics: ["JWT Tokens", "bcrypt Hashing", "Role-Based Access"] },
      { title: "Deployment", topics: ["Docker Basics", "Vercel & Render", "CI/CD with GitHub"] }
    ],
    roles: ["MERN Stack Developer", "Full-Stack JavaScript Developer", "React Developer", "Node.js Developer"],
    companies: [company1, company2, company3],
    faq: [
      { q: "What is the MERN Stack course about?", a: "Our MERN Stack course covers MongoDB, Express.js, React, and Node.js — the complete JavaScript stack for building modern full-stack web applications." },
      { q: "Do I need prior programming knowledge?", a: "Basic understanding of HTML/CSS is helpful but not required. We start from fundamentals and progress to advanced topics." },
      { q: "What projects will I build?", a: "You'll build 5 real-world projects including an e-commerce platform, task management app, and social network with full authentication." },
      { q: "How long is the course?", a: "The course is 3 months long with 200+ hours of live sessions, project work, and mentorship." },
      { q: "Will I get placement support?", a: "Yes. We provide resume building, mock interviews, and placement assistance for all eligible students." }
    ]
  },

  /* =====================================================
     DEVOPS ENGINEERING
  ====================================================== */
  {
    slug: "devops-engineering",
    title: "DevOps Engineering",
    category: "dev",
    badge: "Trending Course",
    navVisible: false,
    short: "CI/CD, Docker, Kubernetes & cloud automation pipelines.",
    duration: "2.5 Months",
    hours: 180,
    mode: "Online + Offline",
    language: "English / Tamil",
    rating: "4.8 / 5",
    learners: "800+ Learners",
    whyCareer: "DevOps engineers are among the highest-paid professionals, bridging the gap between development and operations in cloud-native companies.",
    whoCanStudy: [
      { title: "Software Developers", desc: "Add DevOps skills to accelerate deployments." },
      { title: "System Administrators", desc: "Transition into modern cloud DevOps roles." },
      { title: "Fresh Graduates", desc: "Start a high-paying DevOps career from scratch." },
      { title: "IT Professionals", desc: "Upskill with CI/CD and cloud automation." }
    ],
    tools: [
      { name: "Docker", img: devDocker },
      { name: "Jenkins", img: devJenkins },
      { name: "Git", img: devGit },
      { name: "GitHub", img: devGitHub },
      { name: "JIRA", img: devJira },
      { name: "Linux", img: dvpPython },
      { name: "Python", img: dvpPython },
      { name: "YAML/Shell", img: devBootstrap }
    ],
    highlights: [
      { icon: "clock", value: "180+ Hours", label: "Hands-On Lab Sessions" },
      { icon: "calendar", value: "2.5 Months", label: "Intensive Program" },
      { icon: "ai", value: "Cloud-Native", label: "Industry DevOps Practices" },
      { icon: "projects", value: "4 Pipelines", label: "Real CI/CD Projects" },
      { icon: "target", value: "Certified", label: "DevOps Engineer Track" },
      { icon: "mentor", value: "Expert Mentors", label: "Practicing DevOps Engineers" },
      { icon: "offline", value: "Hybrid Mode", label: "Online + Offline Classes" },
      { icon: "tech", value: "Modern Tools", label: "Docker, Jenkins, K8s" }
    ],
    modules: [
      { title: "Linux & Shell Scripting", topics: ["Linux Commands", "Bash Scripting", "File & Process Management"] },
      { title: "Version Control with Git", topics: ["Branching Strategies", "Pull Requests", "Git Workflows"] },
      { title: "CI/CD with Jenkins", topics: ["Pipeline Creation", "Build Automation", "Testing Integration"] },
      { title: "Docker & Containers", topics: ["Docker Images", "Compose", "Container Networking"] },
      { title: "Kubernetes", topics: ["Pods & Deployments", "Services & Ingress", "Scaling & Rollouts"] },
      { title: "Cloud Basics (AWS/GCP)", topics: ["EC2 & S3", "Cloud Networking", "IAM & Security"] },
      { title: "Monitoring & Logging", topics: ["Prometheus & Grafana", "ELK Stack", "Alerting"] },
      { title: "Infrastructure as Code", topics: ["Terraform Basics", "Ansible Playbooks", "IaC Best Practices"] }
    ],
    roles: ["DevOps Engineer", "Site Reliability Engineer", "Cloud Engineer", "Build & Release Engineer"],
    companies: [company1, company2, company3],
    faq: [
      { q: "What is DevOps Engineering?", a: "DevOps is a practice that combines development and operations to speed up software delivery through automation, CI/CD pipelines, and cloud tools." },
      { q: "Do I need programming experience?", a: "Basic knowledge of any programming language is helpful. We cover scripting from scratch in the course." },
      { q: "What tools will I learn?", a: "You will learn Docker, Jenkins, Kubernetes, Terraform, Ansible, Git, and cloud platforms like AWS and GCP." },
      { q: "What jobs can I get after this course?", a: "Graduates can apply for DevOps Engineer, SRE, Cloud Engineer, and Build & Release Engineer positions." },
      { q: "Is certification provided?", a: "Yes, you receive a Vinsup Skill Academy DevOps certification upon successful completion." }
    ]
  },

  /* =====================================================
     CYBER SECURITY
  ====================================================== */
  {
    slug: "cyber-security",
    title: "Cyber Security",
    category: "security",
    badge: "Popular",
    navVisible: false,
    short: "Network security, threat analysis & defensive security fundamentals.",
    duration: "2 Months",
    hours: 150,
    mode: "Online + Offline",
    language: "English / Tamil",
    rating: "4.7 / 5",
    learners: "600+ Learners",
    whyCareer: "With cybercrime rising globally, companies urgently need certified security professionals to protect critical infrastructure and data.",
    whoCanStudy: [
      { title: "IT Professionals", desc: "Strengthen your security knowledge and expertise." },
      { title: "Network Engineers", desc: "Specialize in securing network infrastructure." },
      { title: "Fresh Graduates", desc: "Enter one of the fastest-growing IT fields." },
      { title: "System Administrators", desc: "Add defensive security to your skill set." }
    ],
    tools: [
      { name: "Python", img: dvpPython },
      { name: "Linux", img: dvpPython },
      { name: "SQL", img: dvpSQL },
      { name: "Wireshark", img: dvpJupyter },
      { name: "Metasploit", img: dvpChatGPT },
      { name: "JIRA", img: dvpJira },
      { name: "GitHub", img: devGitHub }
    ],
    highlights: [
      { icon: "clock", value: "150+ Hours", label: "Lab-Based Sessions" },
      { icon: "calendar", value: "2 Months", label: "Focused Security Track" },
      { icon: "ai", value: "Threat Intel", label: "Real Attack Simulations" },
      { icon: "projects", value: "3 Projects", label: "Capture The Flag & Audits" },
      { icon: "target", value: "Certified", label: "Security Analyst Track" },
      { icon: "mentor", value: "Expert Mentors", label: "Practicing Security Engineers" },
      { icon: "offline", value: "Hybrid Mode", label: "Online + Offline Classes" },
      { icon: "tech", value: "Industry Tools", label: "Wireshark, Metasploit & More" }
    ],
    modules: [
      { title: "Security Fundamentals", topics: ["CIA Triad", "Threats & Vulnerabilities", "Security Policies"] },
      { title: "Networking for Security", topics: ["TCP/IP & Protocols", "Firewalls & IDS/IPS", "VPNs & Proxies"] },
      { title: "Linux Security", topics: ["User Permissions", "Hardening Techniques", "Log Analysis"] },
      { title: "Web Application Security", topics: ["OWASP Top 10", "SQL Injection", "XSS & CSRF"] },
      { title: "Network Traffic Analysis", topics: ["Wireshark", "Packet Analysis", "Intrusion Detection"] },
      { title: "Penetration Testing Basics", topics: ["Recon & Enumeration", "Exploitation Basics", "Reporting"] },
      { title: "Incident Response", topics: ["Detection & Containment", "Forensic Basics", "Recovery Plans"] },
      { title: "Compliance & Governance", topics: ["ISO 27001 Basics", "GDPR Overview", "Risk Management"] }
    ],
    roles: ["Cyber Security Analyst", "Security Operations Center (SOC) Analyst", "Network Security Engineer", "Information Security Analyst"],
    companies: [company1, company2, company3],
    faq: [
      { q: "What is Cyber Security?", a: "Cyber Security involves protecting systems, networks, and data from digital attacks, unauthorized access, and damage using defensive and monitoring techniques." },
      { q: "Do I need an IT background?", a: "Basic IT knowledge helps but we start from fundamentals. Students from all backgrounds are welcome." },
      { q: "What tools will I learn?", a: "You will learn Wireshark, Metasploit, Linux security tools, Python scripting, and SIEM platforms." },
      { q: "What jobs can I apply for?", a: "Graduates can apply for SOC Analyst, Security Analyst, Network Security Engineer, and Cyber Security Consultant positions." },
      { q: "Is certification provided?", a: "Yes, you receive a Vinsup Skill Academy Cyber Security certification upon completion." }
    ]
  },

  /* =====================================================
     MOBILE APP DEVELOPMENT
  ====================================================== */
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    category: "dev",
    badge: "Popular",
    navVisible: false,
    short: "React Native & cross-platform mobile application development.",
    duration: "2.5 Months",
    hours: 160,
    mode: "Online + Offline",
    language: "English / Tamil",
    rating: "4.7 / 5",
    learners: "700+ Learners",
    whyCareer: "Mobile apps drive billions in revenue globally. React Native lets you build iOS and Android apps with one codebase, making you twice as valuable.",
    whoCanStudy: [
      { title: "Web Developers", desc: "Extend your skills to mobile platforms." },
      { title: "JavaScript Developers", desc: "Build iOS & Android apps with React Native." },
      { title: "Fresh Graduates", desc: "Enter mobile development from day one." },
      { title: "Entrepreneurs", desc: "Build your own mobile product or startup." }
    ],
    tools: [
      { name: "React Native", img: devReact },
      { name: "JavaScript", img: devJS },
      { name: "Node.js", img: devNode },
      { name: "HTML", img: devHTML },
      { name: "CSS", img: devCSS },
      { name: "Git", img: devGit },
      { name: "GitHub", img: devGitHub }
    ],
    highlights: [
      { icon: "clock", value: "160+ Hours", label: "Live Interactive Sessions" },
      { icon: "calendar", value: "2.5 Months", label: "Structured Learning Path" },
      { icon: "ai", value: "Cross-Platform", label: "iOS & Android Together" },
      { icon: "projects", value: "4 Apps", label: "Production-Ready Projects" },
      { icon: "target", value: "Job Ready", label: "App Developer Track" },
      { icon: "mentor", value: "Expert Mentors", label: "Experienced App Developers" },
      { icon: "offline", value: "Hybrid Mode", label: "Online + Offline Classes" },
      { icon: "tech", value: "React Native", label: "Industry-Standard Framework" }
    ],
    modules: [
      { title: "JavaScript & ES6+", topics: ["Modern Syntax", "Closures & Callbacks", "Async/Await"] },
      { title: "React Fundamentals", topics: ["JSX", "Props & State", "Lifecycle Methods"] },
      { title: "React Native Setup", topics: ["Environment Setup", "Expo Workflow", "Core Components"] },
      { title: "UI & Styling", topics: ["StyleSheet API", "Flexbox Layout", "Custom Components"] },
      { title: "Navigation", topics: ["Stack Navigation", "Tab Navigation", "Drawer Navigation"] },
      { title: "State Management", topics: ["Context API", "Redux Toolkit", "AsyncStorage"] },
      { title: "APIs & Backend", topics: ["REST API Integration", "Axios & Fetch", "Firebase Integration"] },
      { title: "Publishing Apps", topics: ["Google Play Store", "Apple App Store", "App Optimization"] }
    ],
    roles: ["React Native Developer", "Mobile App Developer", "Cross-Platform Developer", "Flutter Developer (Intro)"],
    companies: [company1, company2, company3],
    faq: [
      { q: "What is React Native?", a: "React Native is a JavaScript framework by Meta that lets you build native iOS and Android apps using a single codebase." },
      { q: "Do I need to know JavaScript?", a: "We teach JavaScript from ES6 basics, so prior experience is helpful but not required." },
      { q: "Will I build real apps?", a: "Yes. You'll build 4 complete apps including a weather app, e-commerce app, and social feed." },
      { q: "Can I publish apps to app stores?", a: "Yes. The course covers publishing to both Google Play Store and Apple App Store." },
      { q: "Is placement support provided?", a: "Yes. We provide placement support, resume guidance, and interview preparation for mobile developer roles." }
    ]
  },

  /* =====================================================
     SOFTWARE TESTING
  ====================================================== */
  {
    slug: "software-testing",
    title: "Software Testing",
    category: "dev",
    badge: "Popular",
    navVisible: false,
    short: "Manual & automation testing with Selenium, JIRA & Python.",
    duration: "2 Months",
    hours: 130,
    mode: "Online + Offline",
    language: "English / Tamil",
    rating: "4.6 / 5",
    learners: "900+ Learners",
    whyCareer: "Quality Assurance engineers are essential in every software company. Test automation skills with Python and Selenium make you indispensable.",
    whoCanStudy: [
      { title: "Fresh Graduates", desc: "Start a QA career with solid automation skills." },
      { title: "Manual Testers", desc: "Upgrade to automation testing for better roles." },
      { title: "Developers", desc: "Learn testing to write better, bug-free code." },
      { title: "Non-IT Professionals", desc: "Transition into QA — a beginner-friendly IT role." }
    ],
    tools: [
      { name: "Python", img: dvpPython },
      { name: "Selenium", img: dvpChatGPT },
      { name: "JIRA", img: dvpJira },
      { name: "SQL", img: dvpSQL },
      { name: "Excel", img: dvpExcel },
      { name: "Git", img: devGit },
      { name: "GitHub", img: devGitHub }
    ],
    highlights: [
      { icon: "clock", value: "130+ Hours", label: "Live Practical Sessions" },
      { icon: "calendar", value: "2 Months", label: "Complete QA Program" },
      { icon: "ai", value: "Automation", label: "Selenium + Python" },
      { icon: "projects", value: "3 Projects", label: "Live Testing Projects" },
      { icon: "target", value: "Certified", label: "QA Engineer Track" },
      { icon: "mentor", value: "Expert Mentors", label: "Senior QA Engineers" },
      { icon: "offline", value: "Hybrid Mode", label: "Online + Offline Classes" },
      { icon: "tech", value: "Industry Tools", label: "JIRA, Selenium, Postman" }
    ],
    modules: [
      { title: "Software Testing Fundamentals", topics: ["SDLC & STLC", "Testing Types", "Test Planning"] },
      { title: "Manual Testing", topics: ["Test Case Writing", "Bug Reporting", "Regression Testing"] },
      { title: "JIRA for QA", topics: ["Bug Tracking", "Sprint Management", "Test Cycles"] },
      { title: "Python for Automation", topics: ["Python Basics", "OOP for Testing", "File Handling"] },
      { title: "Selenium WebDriver", topics: ["Browser Automation", "Locators & XPath", "Test Scripts"] },
      { title: "API Testing", topics: ["Postman Basics", "REST API Testing", "Assertions"] },
      { title: "SQL for Testing", topics: ["Database Queries", "Data Validation", "DB Testing Techniques"] },
      { title: "Agile & CI Integration", topics: ["Agile QA Practices", "Jenkins Integration", "Test Reporting"] }
    ],
    roles: ["Software Tester", "QA Engineer", "Test Automation Engineer", "Quality Analyst"],
    companies: [company1, company2, company3],
    faq: [
      { q: "What is Software Testing?", a: "Software Testing is the process of evaluating a software application to identify bugs, gaps, or missing requirements against the original requirements." },
      { q: "Do I need coding knowledge?", a: "No prior coding is needed. We teach Python from scratch specifically for testing automation." },
      { q: "What is the difference between manual and automation testing?", a: "Manual testing involves humans executing test cases while automation uses scripts (Selenium + Python) to run tests automatically and repeatedly." },
      { q: "What tools will I learn?", a: "You will learn Selenium, Python, JIRA, Postman, SQL, and basic CI/CD integration with Jenkins." },
      { q: "Is this course for freshers?", a: "Yes, this is one of the most beginner-friendly IT courses and freshers from any background can join." }
    ]
  },

  /* =====================================================
     AI AUTOMATION ENGINEERING
  ====================================================== */
  {
    slug: "ai-automation-engineering",
    title: "AI Automation Engineering",
    category: "data",
    badge: "Trending Course",
    navVisible: false,
    short: "Build AI agents, workflow automation & LLM-powered applications.",
    duration: "2.5 Months",
    hours: 180,
    mode: "Online + Offline",
    language: "English / Tamil",
    rating: "4.9 / 5",
    learners: "500+ Learners",
    whyCareer: "AI Automation is the fastest-growing skill in 2025. Companies are replacing manual workflows with AI agents — and they need engineers who can build them.",
    whoCanStudy: [
      { title: "Python Developers", desc: "Build LLM apps and AI pipelines." },
      { title: "Data Analysts", desc: "Automate repetitive data workflows with AI." },
      { title: "Business Analysts", desc: "Deploy no-code/low-code AI automation tools." },
      { title: "Fresh Graduates", desc: "Enter the AI automation field from the ground up." }
    ],
    tools: [
      { name: "Python", img: dvpPython },
      { name: "ChatGPT", img: dvpChatGPT },
      { name: "Gemini AI", img: dvpGemini },
      { name: "Power BI", img: dvpPowerBI },
      { name: "Jupyter", img: dvpJupyter },
      { name: "SQL", img: dvpSQL },
      { name: "Git", img: devGit }
    ],
    highlights: [
      { icon: "clock", value: "180+ Hours", label: "Live AI Sessions" },
      { icon: "calendar", value: "2.5 Months", label: "AI Engineering Track" },
      { icon: "ai", value: "LLM-Powered", label: "Build Real AI Agents" },
      { icon: "projects", value: "5 AI Projects", label: "Automation Pipelines" },
      { icon: "target", value: "Future-Ready", label: "AI Job Market Focus" },
      { icon: "mentor", value: "Expert Mentors", label: "AI Practitioners" },
      { icon: "offline", value: "Hybrid Mode", label: "Online + Offline Classes" },
      { icon: "tech", value: "Cutting-Edge", label: "GPT, Gemini, n8n, LangChain" }
    ],
    modules: [
      { title: "Python for AI", topics: ["Data Structures", "Libraries Overview", "API Integration"] },
      { title: "Prompt Engineering", topics: ["Prompt Design", "Chain-of-Thought", "Few-Shot Learning"] },
      { title: "LangChain Basics", topics: ["Chains & Agents", "Memory Management", "RAG Systems"] },
      { title: "OpenAI & Gemini APIs", topics: ["API Integration", "Function Calling", "Multi-Modal AI"] },
      { title: "n8n Workflow Automation", topics: ["Visual Pipelines", "API Triggers", "AI-Powered Workflows"] },
      { title: "Vector Databases", topics: ["Embeddings", "Pinecone & Weaviate", "Semantic Search"] },
      { title: "AI App Deployment", topics: ["FastAPI", "Streamlit Dashboards", "Cloud Deployment"] },
      { title: "Capstone AI Projects", topics: ["AI Chatbot", "Document Summarizer", "AI Email Automation"] }
    ],
    roles: ["AI Automation Engineer", "LLM Engineer", "Prompt Engineer", "AI Solutions Architect"],
    companies: [company1, company2, company3],
    faq: [
      { q: "What is AI Automation Engineering?", a: "AI Automation Engineering involves building systems that use Large Language Models (LLMs) and AI tools to automate business processes, data pipelines, and user interactions." },
      { q: "Do I need AI/ML experience?", a: "No. We start from Python basics and build up to LLM applications step by step." },
      { q: "What AI tools will I learn?", a: "You will learn ChatGPT, Gemini, LangChain, n8n, OpenAI APIs, vector databases, and Streamlit." },
      { q: "What kind of projects will I build?", a: "You'll build 5 AI projects including an AI chatbot, document summarizer, email automation agent, and a RAG-based knowledge system." },
      { q: "Is this the right course for 2025?", a: "Absolutely. AI Automation is the top in-demand skill in 2025 with massive salary premiums for engineers who can build real AI systems." }
    ]
  },

  /* =====================================================
     PYTHON FULLSTACK
  ====================================================== */
  {
    slug: "python-fullstack",
    title: "Python Full Stack Development",
    category: "dev",
    badge: "Popular",
    navVisible: false,
    short: "Django, Flask, React & PostgreSQL for full-stack Python development.",
    duration: "3 Months",
    hours: 210,
    mode: "Online + Offline",
    language: "English / Tamil",
    rating: "4.7 / 5",
    learners: "1000+ Learners",
    whyCareer: "Python is the world's most popular programming language. Python Full Stack developers command high salaries across web, data, and AI domains.",
    whoCanStudy: [
      { title: "Python Beginners", desc: "Go from basics to building full web applications." },
      { title: "Data Analysts", desc: "Add web development to your Python skills." },
      { title: "Fresh Graduates", desc: "Build production-grade Python web apps." },
      { title: "Career Switchers", desc: "Transition into backend development with Python." }
    ],
    tools: [
      { name: "Python", img: dvpPython },
      { name: "HTML", img: devHTML },
      { name: "CSS", img: devCSS },
      { name: "JavaScript", img: devJS },
      { name: "SQL", img: dvpSQL },
      { name: "Docker", img: devDocker },
      { name: "Git", img: devGit },
      { name: "GitHub", img: devGitHub }
    ],
    highlights: [
      { icon: "clock", value: "210+ Hours", label: "Live Interactive Sessions" },
      { icon: "calendar", value: "3 Months", label: "Complete Python Track" },
      { icon: "ai", value: "Full-Stack", label: "Frontend to Backend" },
      { icon: "projects", value: "4 Projects", label: "Production-Grade Apps" },
      { icon: "target", value: "Job Ready", label: "Python Developer Track" },
      { icon: "mentor", value: "Expert Mentors", label: "Senior Python Developers" },
      { icon: "offline", value: "Hybrid Mode", label: "Online + Offline Classes" },
      { icon: "tech", value: "Django & React", label: "Modern Tech Stack" }
    ],
    modules: [
      { title: "Python Fundamentals", topics: ["OOP Concepts", "Modules & Packages", "Exception Handling"] },
      { title: "HTML, CSS & Bootstrap", topics: ["Semantic Markup", "Responsive Design", "Bootstrap Components"] },
      { title: "JavaScript Basics", topics: ["DOM Manipulation", "Event Handling", "Fetch API"] },
      { title: "React.js Frontend", topics: ["Components & Hooks", "State Management", "API Integration"] },
      { title: "Django Framework", topics: ["MVC Architecture", "ORM & Models", "Django REST Framework"] },
      { title: "Flask Framework", topics: ["Micro-Services", "Blueprints", "Flask APIs"] },
      { title: "PostgreSQL & SQL", topics: ["Schema Design", "Queries & Joins", "Migrations"] },
      { title: "Deployment", topics: ["Docker & Nginx", "AWS EC2 Basics", "CI/CD Pipelines"] }
    ],
    roles: ["Python Full Stack Developer", "Django Developer", "Backend Developer", "Python Web Developer"],
    companies: [company1, company2, company3],
    faq: [
      { q: "What is Python Full Stack Development?", a: "Python Full Stack Development covers both frontend (HTML, CSS, React) and backend (Django, Flask, PostgreSQL) development using Python as the primary backend language." },
      { q: "Do I need prior Python knowledge?", a: "No. We start from Python fundamentals and build up to complete full-stack web applications." },
      { q: "Which framework is better: Django or Flask?", a: "Both are covered. Django is better for large-scale apps while Flask is great for microservices and APIs. You'll learn when to use each." },
      { q: "What projects will I build?", a: "You'll build 4 projects including a blog platform, REST API, e-commerce backend, and a full-stack web app with Django + React." },
      { q: "Will I get placement support?", a: "Yes. We provide placement assistance, resume building, and interview preparation for Python developer roles." }
    ]
  },

  /* =====================================================
     PYTHON WITH DATABASE
  ====================================================== */
  {
    slug: "python-with-database",
    title: "Python with Database",
    category: "data",
    badge: "Popular",
    navVisible: false,
    short: "Python + MySQL, PostgreSQL & MongoDB for data-driven applications.",
    duration: "1.5 Months",
    hours: 100,
    mode: "Online + Offline",
    language: "English / Tamil",
    rating: "4.6 / 5",
    learners: "800+ Learners",
    whyCareer: "Virtually every application uses databases. Python + Database skills are in demand across startups, enterprises, and data teams worldwide.",
    whoCanStudy: [
      { title: "Python Beginners", desc: "Learn how to build data-driven applications." },
      { title: "Database Administrators", desc: "Add Python scripting to automate database tasks." },
      { title: "Data Analysts", desc: "Automate SQL queries with Python for faster analysis." },
      { title: "Fresh Graduates", desc: "Develop strong backend data management skills." }
    ],
    tools: [
      { name: "Python", img: dvpPython },
      { name: "SQL", img: dvpSQL },
      { name: "MongoDB", img: devMongo },
      { name: "Excel", img: dvpExcel },
      { name: "Pandas", img: dvpNumpy },
      { name: "Power BI", img: dvpPowerBI },
      { name: "Git", img: devGit }
    ],
    highlights: [
      { icon: "clock", value: "100+ Hours", label: "Focused Learning" },
      { icon: "calendar", value: "1.5 Months", label: "Compact Intensive Program" },
      { icon: "ai", value: "Data-Driven", label: "Python + DB Integration" },
      { icon: "projects", value: "3 Projects", label: "Real Database Applications" },
      { icon: "target", value: "Job Ready", label: "Database Developer Track" },
      { icon: "mentor", value: "Expert Mentors", label: "Database Engineers" },
      { icon: "offline", value: "Hybrid Mode", label: "Online + Offline Classes" },
      { icon: "tech", value: "SQL & NoSQL", label: "MySQL, PostgreSQL, MongoDB" }
    ],
    modules: [
      { title: "Python Essentials for DB", topics: ["Variables & Data Types", "Functions & Loops", "File Handling"] },
      { title: "MySQL Fundamentals", topics: ["DDL & DML Commands", "Joins & Aggregations", "Stored Procedures"] },
      { title: "Python + MySQL", topics: ["MySQL Connector", "CRUD with Python", "Transaction Handling"] },
      { title: "PostgreSQL", topics: ["Advanced Queries", "Indexing & Optimization", "Triggers & Views"] },
      { title: "Python + PostgreSQL", topics: ["psycopg2 Library", "ORM with SQLAlchemy", "Connection Pooling"] },
      { title: "MongoDB (NoSQL)", topics: ["Document Model", "CRUD Operations", "Aggregation Pipelines"] },
      { title: "Python + MongoDB", topics: ["PyMongo", "Schema Validation", "Data Migration"] },
      { title: "Data Automation", topics: ["Pandas + SQL", "Automated Reports", "ETL Basics with Python"] }
    ],
    roles: ["Python Database Developer", "Backend Developer", "Data Engineer (Junior)", "Database Administrator"],
    companies: [company1, company2, company3],
    faq: [
      { q: "What databases are covered?", a: "The course covers MySQL, PostgreSQL (relational/SQL) and MongoDB (NoSQL), giving you a well-rounded database skill set." },
      { q: "Do I need SQL knowledge before joining?", a: "No. We start from SQL fundamentals within the course and connect them to Python programming." },
      { q: "Why learn Python with databases?", a: "Python + databases is the backbone of most backend systems. This combination powers web apps, data pipelines, and automation systems." },
      { q: "What projects will I build?", a: "You'll build 3 projects: a student management system, inventory tracker, and an automated data reporting tool." },
      { q: "Is this course suitable for data analysts?", a: "Yes. Data analysts can use Python + SQL to automate their workflows, making them 10x more efficient." }
    ]
  },

  /* =====================================================
     ETHICAL HACKING
  ====================================================== */
  {
    slug: "ethical-hacking",
    title: "Ethical Hacking",
    category: "security",
    badge: "Trending Course",
    navVisible: false,
    short: "Penetration testing, exploitation techniques & security auditing.",
    duration: "2 Months",
    hours: 140,
    mode: "Online + Offline",
    language: "English / Tamil",
    rating: "4.8 / 5",
    learners: "500+ Learners",
    whyCareer: "Ethical hackers (Penetration Testers) are among the most in-demand and highest-paid cybersecurity professionals. Companies pay top salaries to those who can find vulnerabilities before real attackers do.",
    whoCanStudy: [
      { title: "Cyber Security Students", desc: "Advance from theory to hands-on hacking skills." },
      { title: "IT Professionals", desc: "Add offensive security to your defensive expertise." },
      { title: "Fresh Graduates", desc: "Enter the most exciting and well-paid security field." },
      { title: "Network Engineers", desc: "Learn to test and harden networks you administer." }
    ],
    tools: [
      { name: "Python", img: dvpPython },
      { name: "Kali Linux", img: dvpPython },
      { name: "Metasploit", img: dvpChatGPT },
      { name: "Wireshark", img: dvpJupyter },
      { name: "SQL", img: dvpSQL },
      { name: "JavaScript", img: devJS },
      { name: "GitHub", img: devGitHub }
    ],
    highlights: [
      { icon: "clock", value: "140+ Hours", label: "Lab-Intensive Sessions" },
      { icon: "calendar", value: "2 Months", label: "Offensive Security Track" },
      { icon: "ai", value: "Hands-On Hacking", label: "Real Penetration Tests" },
      { icon: "projects", value: "4 CTF Labs", label: "Capture The Flag Exercises" },
      { icon: "target", value: "CEH Aligned", label: "Industry Certification Track" },
      { icon: "mentor", value: "Expert Mentors", label: "Certified Ethical Hackers" },
      { icon: "offline", value: "Hybrid Mode", label: "Online + Offline Classes" },
      { icon: "tech", value: "Kali & Metasploit", label: "Industry-Standard Tools" }
    ],
    modules: [
      { title: "Ethical Hacking Fundamentals", topics: ["Hacker Mindset", "Phases of Hacking", "Legal & Ethical Framework"] },
      { title: "Footprinting & Reconnaissance", topics: ["OSINT Techniques", "Google Dorking", "Network Scanning"] },
      { title: "Scanning & Enumeration", topics: ["Nmap Scanning", "Service Enumeration", "Vulnerability Assessment"] },
      { title: "System Hacking", topics: ["Password Cracking", "Privilege Escalation", "Maintaining Access"] },
      { title: "Web Application Hacking", topics: ["OWASP Top 10", "SQLi & XSS Exploitation", "Burp Suite"] },
      { title: "Network Hacking", topics: ["Man-in-the-Middle", "ARP Poisoning", "Wi-Fi Security Testing"] },
      { title: "Metasploit Framework", topics: ["Modules & Payloads", "Exploitation", "Post-Exploitation"] },
      { title: "Reporting & Career", topics: ["Penetration Test Reports", "Bug Bounty Programs", "CEH Exam Prep"] }
    ],
    roles: ["Ethical Hacker", "Penetration Tester", "Bug Bounty Hunter", "Security Consultant"],
    companies: [company1, company2, company3],
    faq: [
      { q: "What is Ethical Hacking?", a: "Ethical Hacking (Penetration Testing) is the practice of legally probing systems, networks, and applications for vulnerabilities with permission, to help organizations fix them before real attackers exploit them." },
      { q: "Is Ethical Hacking legal?", a: "Ethical hacking is completely legal when done with written permission from the organization. Our course focuses entirely on authorized, legal penetration testing." },
      { q: "What tools will I learn?", a: "You will learn Kali Linux, Metasploit, Nmap, Wireshark, Burp Suite, and Python scripting for offensive security." },
      { q: "Can I get certified as an Ethical Hacker?", a: "Our course aligns with CEH (Certified Ethical Hacker) exam objectives. Upon completion you receive a Vinsup certification and guidance for CEH." },
      { q: "What jobs can I apply for?", a: "You can apply for Ethical Hacker, Penetration Tester, Bug Bounty Hunter, Security Consultant, and Red Team Engineer positions." }
    ]
  }
];

export default courses;