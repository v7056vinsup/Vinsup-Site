// src/data/syllabus2026.js
// =====================================================
// 2026 SYLLABUS REFRESH
// Source of truth: the "Shareable" syllabus decks (Final Out / Shareable).
// Each entry is merged over the matching course in courses.js by slug.
// Brochures live in /public/brochures and are downloaded after the enquiry form.
// =====================================================

const AREA = "Coimbatore";

export const syllabus2026 = {
  /* ---------------------------------------------------
     AI & DATA SCIENCE CAREER ACCELERATOR
  --------------------------------------------------- */
  "data-verse-pro": {
    title: "AI & Data Science Career Accelerator",
    badge: "Trending Course",
    short:
      "From Excel & SQL to ML, Deep Learning and GenAI.",
    hours: 200,
    whyCareer:
      "Data science and Generative AI are now core skills in every industry. This program takes you from spreadsheets and SQL to machine learning, deep learning, LLMs, RAG and AI agents, and finishes with a deployed, recruiter-ready capstone.",
    syllabusPdf: "/brochures/vinsup-ai-data-science-career-accelerator-syllabus.pdf",
    toolNames: [
      "Excel", "Google Sheets", "MySQL", "Power BI", "Looker Studio", "Tableau",
      "Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "SciPy", "Statsmodels",
      "scikit-learn", "XGBoost", "LightGBM", "TensorFlow", "Keras", "PyTorch",
      "Hugging Face Transformers", "Streamlit", "LangChain", "LangGraph", "MLflow",
      "Ollama", "ChatGPT", "Claude", "Gemini", "Copilot", "Perplexity", "Cursor",
      "AI2SQL", "Text2SQL.ai", "Julius", "Mockaroo"
    ],
    highlights: [
      { icon: "clock", value: "200 Hours", label: "Live Instructor-Led Sessions" },
      { icon: "calendar", value: "13 Modules", label: "Excel to GenAI & MLOps" },
      { icon: "ai", value: "Generative AI", label: "LLMs, RAG, AI Agents, MCP" },
      { icon: "projects", value: "5 Mini Projects", label: "+ End-to-End Capstone" },
      { icon: "tech", value: "Deploy Models", label: "FastAPI, Streamlit, Docker" },
      { icon: "target", value: "Guaranteed Interviews", label: "Interview Opportunity Program" },
      { icon: "mentor", value: "Expert Mentors", label: "Industry Practitioners" },
      { icon: "offline", value: "Coimbatore Campus", label: "Classroom + Online" }
    ],
    modules: [
      { title: "Foundations", topics: ["Data Science Landscape and Lifecycle", "Environment Setup"] },
      { title: "Excel for Data Analysis", topics: ["Excel Basics, Data Entry and Formatting", "Formulas and Functions", "Lookup and Logical Functions", "Data Cleaning and Power Query", "Pivot Tables and Pivot Charts", "Charts and Excel Dashboards", "Advanced Excel", "Excel Project"] },
      { title: "SQL for Data Analysis", topics: ["Database Concepts and Setup", "Querying Data", "Aggregates and Grouping", "Joins", "Set Operations and Subqueries", "CTEs and Advanced Subqueries", "Window Functions", "DDL, DML, Constraints and Normalisation", "Views, Indexes and Optimisation", "SQL Project"] },
      { title: "Power BI", topics: ["Power BI Introduction and Data Connection", "Power Query Transformations", "Data Modelling", "DAX Basics", "DAX Time Intelligence and Advanced DAX", "Visuals and Report Design", "Power BI Service, Publishing and Security", "Power BI Project"] },
      { title: "Python for Data Analysis", topics: ["Python Basics", "Control Flow and Loops", "Functions, Modules and Comprehensions", "Data Structures", "File Handling, Errors and OOP Basics", "NumPy: Arrays and Operations", "NumPy: Broadcasting and Simulation", "Pandas: Series and DataFrames", "Pandas: Data Cleaning", "Pandas: GroupBy, Merge and Reshape", "Pandas: Time Series and Advanced", "Matplotlib", "Seaborn", "EDA Project", "Data Acquisition: APIs and Web Scraping", "Python Project"] },
      { title: "Looker Studio & Tableau", topics: ["Looker Studio Basics", "Looker Studio Advanced", "Dashboard Design and Data Storytelling", "Tableau Basics", "Tableau Advanced", "Tableau Dashboard Design and Publishing"] },
      { title: "Statistics and Math for ML", topics: ["Descriptive Statistics", "Probability", "Distributions and Central Limit Theorem", "Sampling, Confidence Intervals and Hypothesis Testing"] },
      { title: "Machine Learning", topics: ["ML Introduction and Workflow", "Preprocessing and Feature Engineering", "Linear Regression", "Regularisation and Regression Metrics", "Logistic Regression", "Classification Metrics and Class Imbalance", "KNN and Naive Bayes", "Decision Trees", "Random Forest and Bagging", "Boosting", "Support Vector Machines", "Clustering and PCA", "Model Selection, Tuning and Pipelines", "ML Projects"] },
      { title: "Deep Learning", topics: ["Neural Network Fundamentals", "Keras, TensorFlow and PyTorch Basics", "Training Deep Networks", "Convolutional Neural Networks", "Computer Vision: Transfer Learning", "RNN, LSTM and Time-Series Forecasting", "Deep Learning Project"] },
      { title: "Natural Language Processing", topics: ["Text Preprocessing, Bag of Words and TF-IDF", "Word Embeddings and Text Classification", "Transformers and Attention", "Hugging Face for NLP", "NLP Project"] },
      { title: "Generative AI", topics: ["LLM Fundamentals", "Prompt Engineering", "LLM APIs and Local Models", "Embeddings and Vector Databases", "RAG: Build a Pipeline", "RAG: Evaluation and Improvement", "Fine-Tuning Walkthrough", "AI Agents: Tools and Function Calling", "AI Agents: LangGraph, MCP and Multi-Agent", "GenAI Apps and Responsible AI"] },
      { title: "Deployment and MLOps", topics: ["Deploying Models with FastAPI and Streamlit Cloud", "Docker and Cloud Deployment", "MLOps Basics"] },
      { title: "Capstone and Career Guidance", topics: ["Capstone Strategy, Data and Modelling", "Capstone Build and Deploy", "Capstone Documentation, Portfolio and Case Study", "Presentation and Career Guidance"] }
    ],
    projects: [
      { title: "Capstone: End-to-End BI to AI Product", desc: "One real business problem taken from raw data through SQL/Excel cleaning, Python analysis, a BI dashboard, a trained ML or GenAI model and a deployed, documented application." },
      { title: "Customer Churn Prediction", desc: "A full ML classification pipeline: preprocessing, model comparison, tuning and evaluation." },
      { title: "Image Classifier with Transfer Learning", desc: "A fine-tuned CNN on a public image dataset using a pretrained backbone." },
      { title: "Product Review Analyser (NLP)", desc: "Sentiment, topic and summary extraction from real customer reviews using Hugging Face pipelines." },
      { title: "Document Q&A Bot (RAG)", desc: "A retrieval-augmented chatbot that answers questions from uploaded documents." },
      { title: "Deployed ML Model API", desc: "A trained model served through FastAPI, containerised and deployed to a free cloud tier." }
    ],
    roles: ["Data Analyst", "Junior Data Scientist", "BI Analyst", "Machine Learning Engineer", "GenAI / AI Engineer", "Data Science Trainee"],
    seo: {
      title: `Data Science Course in ${AREA} with Generative AI | Vinsup Skill Academy`,
      description: `200-hour Data Science & Generative AI course in ${AREA}: Python, SQL, Power BI, Machine Learning, Deep Learning, NLP, LLMs, RAG and AI Agents with live projects, internship and placement support.`,
      keywords: `data science course in coimbatore, data science training coimbatore, generative ai course coimbatore, machine learning course coimbatore, AI course coimbatore, data science institute coimbatore with placement`
    },
    faq: [
      { q: "Which is the best data science course in Coimbatore for freshers?", a: "Vinsup Skill Academy's AI & Data Science Career Accelerator is a 200-hour classroom and online program at our Ganapathy, Coimbatore campus. It starts from Excel and SQL and builds up to Machine Learning, Deep Learning, NLP and Generative AI, with five mini projects, an end-to-end capstone, internship and placement support." },
      { q: "Does this data science course cover Generative AI, RAG and AI agents?", a: "Yes. Module 11 is fully dedicated to Generative AI: LLM fundamentals, prompt engineering, LLM APIs and local models (Ollama), embeddings and vector databases, building and evaluating RAG pipelines, a fine-tuning walkthrough, and AI agents with function calling, LangGraph and MCP." },
      { q: "Do I need coding knowledge to join?", a: "No. Python, SQL and statistics are taught from scratch. The course is designed for students, fresh graduates and career switchers, including learners from non-IT backgrounds." },
      { q: "What tools will I learn?", a: "Excel, Google Sheets, MySQL, Power BI, Looker Studio, Tableau, Python, NumPy, Pandas, Matplotlib, Seaborn, scikit-learn, XGBoost, LightGBM, TensorFlow, Keras, PyTorch, Hugging Face, LangChain, LangGraph, Streamlit, MLflow and Ollama, plus AI assistants like ChatGPT, Claude, Gemini, Copilot and Cursor." },
      { q: "What projects will I build?", a: "A capstone that takes one business problem from raw data to a deployed AI application, plus mini projects in churn prediction, image classification with transfer learning, NLP review analysis, a RAG document Q&A bot and a deployed FastAPI model." },
      { q: "Is placement support included?", a: "Yes. Through our Job Readiness Program (JRP) and Interview Opportunity Program (IOP) you get soft-skills and aptitude training, portfolio building, internship, AI mock interviews, resume support and guaranteed interview opportunities." },
      { q: "What jobs can I get after this course?", a: "Data Analyst, Junior Data Scientist, BI Analyst, Machine Learning Engineer (entry), GenAI / AI Engineer (entry) and Data Science Trainee roles." },
      { q: "Where are the classes held?", a: "Classroom sessions are held at Vinsup Skill Academy, 148 Gopalasamy Koil Street, Sridevi Nagar, Ganapathy, Coimbatore 641006. Online sessions are also available." }
    ]
  },

  /* ---------------------------------------------------
     AI-READY DATA ANALYTICS
  --------------------------------------------------- */
  "data-analytics": {
    title: "AI-Ready Data Analytics",
    short:
      "Excel, SQL, Power BI & Python, powered by AI.",
    whyCareer:
      "Every business decision now runs on data. Analysts who can clean data in Excel, query it in SQL, model it in Power BI and automate it with Python and AI tools are hired across IT, finance, healthcare, retail and e-commerce.",
    syllabusPdf: "/brochures/vinsup-ai-ready-data-analytics-syllabus.pdf",
    toolNames: [
      "Excel", "MySQL", "Power BI", "Looker Studio", "Python", "NumPy", "Pandas",
      "Matplotlib", "Seaborn", "GitHub", "ChatGPT", "Claude", "Gemini", "Copilot",
      "Perplexity", "AI2SQL", "Vanna AI", "Text2SQL.ai", "Julius", "Mockaroo", "Faker"
    ],
    highlights: [
      { icon: "clock", value: "7 Modules", label: "Excel to Python Analytics" },
      { icon: "tech", value: "Advanced DAX", label: "Power BI Enterprise Analytics" },
      { icon: "ai", value: "AI for SQL", label: "AI2SQL, Vanna AI, Julius" },
      { icon: "projects", value: "8 Mini Projects", label: "+ Industry Capstone" },
      { icon: "target", value: "Guaranteed Interviews", label: "Interview Opportunity Program" },
      { icon: "calendar", value: "LeetCode & HackerRank", label: "Coding Profile Mastery" },
      { icon: "mentor", value: "Expert Mentors", label: "Industry Practitioners" },
      { icon: "offline", value: "Coimbatore Campus", label: "Classroom + Online" }
    ],
    modules: [
      { title: "Advanced Microsoft Excel & Spreadsheet Automation", topics: ["Excel Fundamentals & Navigation", "Formulas, Logic & References", "Modern Lookup & Dynamic Reference Functions", "Data Cleaning, Date/Text Functions & Dynamic Arrays", "Pivot Tables & Interactive Executive Dashboards", "Macros & VBA Automation Basics"] },
      { title: "Relational Databases & Enterprise SQL (MySQL)", topics: ["Database Architecture & DDL", "DML, DQL, Filtering & Aggregation", "Built-in SQL Functions & Conditional Logic", "Relational Joins, Set Operations & Subqueries", "Window Functions & Database Normalization", "CTEs (Standard & Recursive), Views & Temporary Tables", "Transactions (TCL), Security (DCL) & Indexing Optimization", "Stored Procedures, Functions & Triggers"] },
      { title: "Power BI Enterprise Analytics & Advanced DAX", topics: ["Power BI Architecture, Power Query & Data Modeling", "Visualizations, Interactions & UI Storyboarding", "DAX Foundations, Evaluation Contexts & Calculations", "CALCULATE Engine, Modifiers & Iterator Functions", "Advanced DAX: Time Intelligence & Dynamic Measures", "Power BI Service, Governance & Row-Level Security"] },
      { title: "Google Looker Studio (Cloud BI)", topics: ["Looker Studio Fundamentals & Cloud Connectors", "Interactive Controls, Data Blending & Calculated Fields"] },
      { title: "Python Core & Advanced Programming", topics: ["Python Core Foundations & Environment", "Control Flow & Advanced Data Structures", "Functions, Parameters, Return Values & Scope", "Lambda Functions, Higher-Order Functions & Recursion", "File Handling & Standard I/O"] },
      { title: "Python Data Science Libraries", topics: ["NumPy (Numerical Computing)", "Pandas (Data Wrangling & Manipulation)", "Matplotlib & Seaborn (Visual Storytelling)"] },
      { title: "Enterprise Capstone, Coding Profiles & Career Readiness", topics: ["Enterprise Capstone Project Execution", "Competitive Coding Profile Mastery (LeetCode & HackerRank)", "Professional Portfolio, ATS Resume & Mock Interviews"] }
    ],
    projects: [
      { title: "Capstone (choose one)", desc: "Software development & engineering analysis, pharmacy sales & stock analysis, banking transaction pattern analysis, airline passenger & route analysis, or network & system performance analytics." },
      { title: "Excel", desc: "Customer behaviour analysis." },
      { title: "SQL", desc: "Advanced relational intelligence for modern care, and relational database architecture & demand intelligence for Amazon." },
      { title: "Power BI", desc: "OTT & entertainment media analysis, and food & beverages analysis." },
      { title: "Python", desc: "Customer churn exploratory data analyzer, and financial portfolio risk & scenario simulator." }
    ],
    roles: ["Data Analyst", "BI Analyst", "Business Analyst", "Finance Analyst", "MIS Analyst", "SQL Developer", "Operations Analyst", "Marketing Analyst", "Product Analyst"],
    seo: {
      title: `Data Analytics Course in ${AREA} | Power BI, SQL, Python & AI | Vinsup`,
      description: `Job-oriented Data Analytics course in ${AREA}: Advanced Excel & VBA, MySQL, Power BI with advanced DAX, Looker Studio, Python and AI tools. Live projects, internship and placement support.`,
      keywords: `data analytics course in coimbatore, data analyst course coimbatore, power bi training coimbatore, sql course coimbatore, excel training coimbatore, business analytics course coimbatore`
    },
    faq: [
      { q: "Which is the best data analytics course in Coimbatore?", a: "Vinsup Skill Academy's AI-Ready Data Analytics course, taught at our Ganapathy, Coimbatore campus and online, covers Advanced Excel with VBA, enterprise SQL on MySQL, Power BI with advanced DAX, Looker Studio and Python, with AI tools built into every module and a placement-focused capstone." },
      { q: "Will I learn Power BI and advanced DAX?", a: "Yes. A full module covers Power BI architecture, Power Query, data modeling, DAX evaluation contexts, the CALCULATE engine, iterator functions, time intelligence, dynamic measures, Power BI Service, governance and row-level security." },
      { q: "Which AI tools are included?", a: "ChatGPT, Claude, Gemini, Copilot and Perplexity for productivity, plus analytics-specific tools like AI2SQL, Vanna AI, Text2SQL.ai and Julius, and Mockaroo/Faker for generating practice datasets." },
      { q: "Do I need a technical background?", a: "No. The course starts with Excel fundamentals and builds up step by step. Graduates from commerce, arts, science and engineering backgrounds can join." },
      { q: "What projects are included?", a: "Mini projects in Excel, SQL, Power BI and Python (customer behaviour, OTT media, food & beverages, churn EDA, portfolio risk simulation) and one industry capstone such as pharmacy sales, banking transactions or airline route analysis." },
      { q: "Is placement assistance provided?", a: "Yes. You get soft-skills and aptitude training, LeetCode & HackerRank profile building, an ATS-friendly resume, mock interviews, internship and guaranteed interview opportunities through our IOP." },
      { q: "What jobs can I apply for?", a: "Data Analyst, BI Analyst, Business Analyst, Finance Analyst, MIS Analyst, SQL Developer, Operations Analyst, Marketing Analyst and Product Analyst roles." }
    ]
  },

  /* ---------------------------------------------------
     AI-INTEGRATED MERN STACK  (replaces the old "frontend" page)
  --------------------------------------------------- */
  "mern-stack": {
    title: "AI-Integrated MERN Stack",
    badge: "Popular",
    navVisible: true,
    category: "dev",
    short:
      "Full-stack JavaScript with AI-assisted development.",
    whyCareer:
      "MERN is the most in-demand JavaScript full-stack combination for startups and product companies. Pair it with AI-assisted development and you ship faster than traditional developers.",
    syllabusPdf: "/brochures/vinsup-ai-integrated-mern-stack-syllabus.pdf",
    toolNames: [
      "HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "REST API",
      "MongoDB", "Mongoose", "MongoDB Atlas", "MongoDB Compass", "Postman", "Git",
      "GitHub", "VS Code", "Cursor", "Cline", "Blackbox AI", "Google Antigravity"
    ],
    highlights: [
      { icon: "clock", value: "13 Modules", label: "HTML to Deployment" },
      { icon: "ai", value: "AI-Assisted Dev", label: "Cursor, Cline, Antigravity" },
      { icon: "tech", value: "Full Stack", label: "React, Node, Express, MongoDB" },
      { icon: "projects", value: "10 Mini Projects", label: "+ Capstone MERN App" },
      { icon: "calendar", value: "CI/CD", label: "Production Deployment" },
      { icon: "target", value: "Guaranteed Interviews", label: "Interview Opportunity Program" },
      { icon: "mentor", value: "Expert Mentors", label: "Working Developers" },
      { icon: "offline", value: "Coimbatore Campus", label: "Classroom + Online" }
    ],
    modules: [
      { title: "Development Environment & Version Control", topics: ["Setting Up the Developer Environment", "Git Version Control Fundamentals", "GitHub & Collaborative Workflows"] },
      { title: "HTML: Structure & Semantics", topics: ["HTML Document Fundamentals", "Semantic HTML & Accessibility"] },
      { title: "CSS: Styling & Layout", topics: ["CSS Fundamentals", "Modern Layout Systems", "Advanced CSS & Preprocessing"] },
      { title: "JavaScript: Core & Advanced Programming", topics: ["JavaScript Fundamentals", "Data Structures & DOM Manipulation", "Asynchronous JavaScript", "Modern JavaScript (ES6+) & Modules"] },
      { title: "React: Front-End Framework", topics: ["React Fundamentals", "State & Lifecycle with Hooks", "Forms, Events & Component Communication", "Routing & Application Structure", "Connecting React to APIs"] },
      { title: "Node.js & Express.js: Backend Development", topics: ["Node.js Fundamentals", "Building Servers with Express.js", "Server-Side Architecture Patterns"] },
      { title: "MongoDB & Mongoose: Database Layer", topics: ["MongoDB Fundamentals", "MongoDB Atlas & MongoDB Compass", "Mongoose ODM"] },
      { title: "REST API Design & Development", topics: ["REST API Principles", "Building a Full REST API", "Testing & Documenting APIs with Postman"] },
      { title: "Authentication & Security", topics: ["Authentication Fundamentals", "Implementing Auth in the MERN Stack", "Application Security Best Practices"] },
      { title: "AI-Assisted Development Workflow", topics: ["AI Coding Assistants Landscape", "Cursor (AI-Native Code Editor)", "Cline & Blackbox AI", "Google Antigravity", "Building a Practical AI-Augmented Workflow"] },
      { title: "Full-Stack Integration & Project Architecture", topics: ["Connecting the MERN Stack End-to-End", "State, Data Flow & Error Handling Across the Stack"] },
      { title: "Deployment & DevOps Basics", topics: ["Preparing an Application for Production", "Deploying the Backend & Database", "Deploying the Frontend & CI/CD"] },
      { title: "Capstone Project & Career Readiness", topics: ["Capstone MERN Application", "GitHub Portfolio & Technical Presentation", "Interview & Job Readiness"] }
    ],
    projects: [
      { title: "Capstone (choose one)", desc: "Multi-vendor e-commerce platform, real-time collaborative workspace & chat, learning management & course streaming system, healthcare appointment & teleconsultation portal, or project management & issue tracker." },
      { title: "HTML5, Modern CSS & Tailwind", desc: "Interactive responsive portfolio & blog." },
      { title: "Core JavaScript (ES6+)", desc: "Vanilla JS state-driven expense tracker." },
      { title: "Async JS & Fetch API", desc: "Interactive GitHub profile & repo finder." },
      { title: "React & Hooks", desc: "Custom component library (design system)." },
      { title: "React State Management", desc: "Cryptocurrency live tracker & watchlist (Redux/Zustand)." },
      { title: "Node.js, Express & MongoDB", desc: "Scalable RESTful API for a blog engine with auth, file uploads and real-time features." }
    ],
    roles: ["Junior Frontend Developer", "Junior Backend Developer", "Full-Stack MERN Developer", "React.js / UI Engineer", "Backend / API Engineer", "Freelance MERN Developer"],
    seo: {
      title: `MERN Stack Course in ${AREA} with AI Tools | Full Stack Training | Vinsup`,
      description: `Full stack MERN course in ${AREA}: HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, REST APIs, auth and deployment, plus AI coding with Cursor, Cline and Google Antigravity. Projects, internship and placement support.`,
      keywords: `mern stack course in coimbatore, full stack developer course coimbatore, react js course coimbatore, node js training coimbatore, web development course coimbatore, full stack training with placement coimbatore`
    },
    faq: [
      { q: "Which is the best full stack / MERN course in Coimbatore?", a: "Vinsup Skill Academy's AI-Integrated MERN Stack course in Ganapathy, Coimbatore covers the complete stack, from HTML, CSS and JavaScript to React, Node.js, Express and MongoDB, with REST APIs, authentication, CI/CD deployment and a full module on AI-assisted development." },
      { q: "Which AI coding tools will I learn?", a: "Cursor (AI-native code editor), Cline, Blackbox AI and Google Antigravity, and how to build a practical AI-augmented development workflow without losing core coding skills." },
      { q: "Do I need prior coding experience?", a: "No. The course starts with the developer environment, Git and HTML, and builds up module by module." },
      { q: "What will I build?", a: "Ten mini projects (portfolio, expense tracker, GitHub finder, component library, crypto tracker, REST APIs) and a capstone MERN application such as a multi-vendor e-commerce platform, LMS, or healthcare portal." },
      { q: "Will I learn deployment?", a: "Yes. You prepare apps for production, deploy the backend and database (MongoDB Atlas) and the frontend, and set up CI/CD." },
      { q: "Is placement support provided?", a: "Yes. GitHub portfolio and technical presentation, interview preparation, internship and guaranteed interview opportunities through our IOP." },
      { q: "What jobs can I apply for?", a: "Junior Frontend Developer, Junior Backend Developer, Full-Stack MERN Developer, React.js / UI Engineer, Backend / API Engineer, and freelance MERN work." }
    ]
  },

  /* ---------------------------------------------------
     AI-POWERED UI/UX & GRAPHIC DESIGN
  --------------------------------------------------- */
  "ui-ux-design": {
    title: "AI-Powered UI/UX & Graphic Design",
    short:
      "Figma, AI design tools & the Adobe suite.",
    whyCareer:
      "Every app, website and product needs designers who understand users. With AI design tools you can go from research to high-fidelity prototype faster, and graphic design skills open up branding and marketing roles too.",
    syllabusPdf: "/brochures/vinsup-ai-uiux-graphic-design-syllabus.pdf",
    toolNames: [
      "Figma", "FigJam", "Miro", "Maze", "Photoshop", "Illustrator", "InDesign",
      "Affinity Designer", "CorelDRAW", "HTML", "CSS", "Bootstrap", "Behance",
      "Claude", "Google Stitch", "Uizard", "Relume", "Framer AI"
    ],
    highlights: [
      { icon: "clock", value: "9 Modules", label: "UX, UI & Graphic Design" },
      { icon: "ai", value: "AI Design Tools", label: "Stitch, Uizard, Relume, Framer AI" },
      { icon: "tech", value: "Figma Mastery", label: "Variables, Prototyping, Dev Mode" },
      { icon: "projects", value: "12 Mini Projects", label: "+ 5 Capstone Options" },
      { icon: "calendar", value: "Adobe Suite", label: "Photoshop, Illustrator, InDesign" },
      { icon: "target", value: "Guaranteed Interviews", label: "Interview Opportunity Program" },
      { icon: "mentor", value: "Portfolio Ready", label: "Case Studies on Behance" },
      { icon: "offline", value: "Coimbatore Campus", label: "Classroom + Online" }
    ],
    modules: [
      { title: "UX Foundations & Design Thinking", topics: ["Introduction to Design", "Introduction to UX/UI & the Design Industry", "UX Research Fundamentals", "User Personas, Journey Mapping & Empathy Tools", "Research & Collaboration in Miro", "Usability Testing & Validation"] },
      { title: "Information Architecture & Wireframing", topics: ["Information Architecture", "User Flows & Task Flows", "FigJam for Collaborative Ideation"] },
      { title: "Visual & UI Design Fundamentals", topics: ["Design Principles & Visual Hierarchy", "Typography for Digital Interfaces", "Color Theory & Accessibility", "Iconography & Imagery", "Design Systems & Component Thinking"] },
      { title: "Figma Mastery", topics: ["Figma Interface & File Management", "Core Drawing & Layout Tools", "Components, Variants & Styles", "Advanced Figma: Variables, Interactive Components & Dev Mode", "Prototyping in Figma", "Collaboration & Handoff"] },
      { title: "AI-Powered Design Tools", topics: ["AI in the Modern Design Workflow", "Claude for Design & Product Workflows", "AI Wireframing & UI Generation (Google Stitch, Uizard, Galileo AI)", "AI Website & Layout Tools (Relume, Framer AI)"] },
      { title: "Web Design & Front-End Foundations", topics: ["Responsive Web Design Principles", "HTML Fundamentals", "CSS Fundamentals", "Bootstrap Framework", "Design-to-Web Handoff"] },
      { title: "Graphic Design Suite", topics: ["Adobe Photoshop (Raster & Photo Editing)", "Adobe Illustrator (Vector Graphics)", "Affinity Designer (Vector & Raster Alternative)", "Adobe InDesign (Layout & Publishing)", "Branding & Visual Identity"] },
      { title: "CorelDRAW for UI/UX Designers", topics: ["CorelDRAW Fundamentals", "Icons, Illustrations and UI Assets", "Layout, Export and Handoff"] },
      { title: "Portfolio, Case Studies & Career Readiness", topics: ["Building UX/UI Case Studies", "Portfolio Platform & Presentation", "Job Readiness & Interview Preparation"] }
    ],
    projects: [
      { title: "Capstone (choose one)", desc: "UX case study, mobile app design, e-commerce website, banking app redesign, or a personal / business website." },
      { title: "Figma", desc: "Login & sign-up flow, and landing page design." },
      { title: "HTML & CSS", desc: "Personal portfolio website." },
      { title: "Photoshop", desc: "Social media posts, brochure / flyer design and product advertisement." },
      { title: "Illustrator", desc: "Logo design & branding, business card design and packaging design." },
      { title: "InDesign", desc: "Magazine design and infographic design." }
    ],
    roles: ["UI Designer", "UX Designer", "Product Designer", "UX Researcher", "Graphic Designer"],
    seo: {
      title: `UI UX Design Course in ${AREA} with AI | Graphic Design Training | Vinsup`,
      description: `UI/UX and graphic design course in ${AREA}: UX research, Figma, AI design tools (Google Stitch, Uizard, Relume, Framer AI), Photoshop, Illustrator, InDesign and CorelDRAW. Portfolio projects, internship and placement support.`,
      keywords: `ui ux design course in coimbatore, ui ux course coimbatore, figma training coimbatore, graphic design course coimbatore, web design course coimbatore, product design course coimbatore`
    },
    faq: [
      { q: "Which is the best UI/UX design course in Coimbatore?", a: "Vinsup Skill Academy's AI-Powered UI/UX & Graphic Design course in Ganapathy, Coimbatore combines UX research, Figma mastery and AI design tools with the Adobe suite and CorelDRAW, so you graduate with both product-design and graphic-design portfolio pieces." },
      { q: "Which AI design tools are taught?", a: "Claude for design and product workflows, Google Stitch, Uizard and Galileo AI for AI wireframing and UI generation, and Relume and Framer AI for websites and layouts." },
      { q: "Do I need drawing or coding skills?", a: "No. The course starts from design fundamentals. HTML, CSS and Bootstrap basics are taught so you can hand off designs to developers confidently." },
      { q: "Will I build a portfolio?", a: "Yes. You build UX/UI case studies, mini projects in Figma, Photoshop, Illustrator and InDesign, and one capstone such as a banking app redesign or e-commerce website, presented on a portfolio platform like Behance." },
      { q: "Is graphic design included?", a: "Yes. Photoshop, Illustrator, Affinity Designer, InDesign, CorelDRAW and branding & visual identity are all covered." },
      { q: "Is placement support available?", a: "Yes. Portfolio reviews, interview preparation, internship and guaranteed interview opportunities through our IOP." },
      { q: "What jobs can I apply for?", a: "UI Designer, UX Designer, Product Designer, UX Researcher and Graphic Designer." }
    ]
  },

  /* ---------------------------------------------------
     AI & DIGITAL MARKETING
  --------------------------------------------------- */
  "digital-marketing": {
    title: "AI & Digital Marketing",
    short:
      "SEO, AEO, Google & Meta Ads with AI tools.",
    hours: 100,
    whyCareer:
      "Businesses of every size now win customers online. Marketers who can run SEO, paid ads, automation and analytics, and use AI to do it faster, are in demand at agencies, brands and startups, and can also freelance.",
    syllabusPdf: "/brochures/vinsup-ai-digital-marketing-syllabus.pdf",
    toolNames: [
      "Google Ads", "Meta Ads Manager", "Meta Business Suite", "GA4", "Google Tag Manager",
      "Google Search Console", "Looker Studio", "WordPress", "Elementor", "Rank Math",
      "Yoast SEO", "Semrush", "Ahrefs", "Screaming Frog", "Ubersuggest", "Google Trends",
      "Google Keyword Planner", "GTmetrix", "Canva", "YouTube Studio", "LinkedIn Campaign Manager",
      "X Ads", "Later", "Shopify", "Razorpay", "Google Merchant Center", "Mailchimp", "Brevo",
      "HubSpot", "WhatsApp Business API", "AiSensy", "Hotjar", "HeyGen", "InVideo AI"
    ],
    highlights: [
      { icon: "clock", value: "100 Hours", label: "Live Instructor-Led Sessions" },
      { icon: "calendar", value: "12 Modules", label: "Foundations to Capstone" },
      { icon: "ai", value: "SEO, AEO & GEO", label: "Rank in Google and AI Answers" },
      { icon: "tech", value: "Google & Meta Ads", label: "Search, PMax, Shopping, Leads" },
      { icon: "projects", value: "Live Capstones", label: "Real Websites, Ads & GBP" },
      { icon: "target", value: "Guaranteed Interviews", label: "Interview Opportunity Program" },
      { icon: "mentor", value: "Expert Mentors", label: "Agency Practitioners" },
      { icon: "offline", value: "Coimbatore Campus", label: "Classroom + Online" }
    ],
    modules: [
      { title: "Foundations and AI Setup", topics: ["Digital Marketing Introduction", "Digital Marketing Channels", "AI and Prompt Engineering for Marketers"] },
      { title: "Website and WordPress", topics: ["Hosting and WordPress Setup", "Theme, Editor and Navigation", "Essential Plugins"] },
      { title: "SEO, AEO and GEO", topics: ["SEO Foundations and Keyword Research", "On-Page SEO", "Off-Page and Local SEO", "Technical SEO and Search Console", "AEO and GEO", "Website Audit and Core Web Vitals"] },
      { title: "Design, Content and Video Marketing", topics: ["Canva Design Fundamentals", "Canva Magic Studio and Social Creatives", "Content Strategy and Planning", "Copywriting and Persuasion", "AI Content and Blog Writing", "YouTube and Video Content"] },
      { title: "Google Ads", topics: ["Google Ads Theory and Account Structure", "Keyword Research and Planning", "Search Campaigns", "Display Campaigns", "Video and Demand Gen Campaigns", "Merchant Center and Shopping Campaigns", "Performance Max and App Campaigns"] },
      { title: "Social Media and Meta Ads", topics: ["Social Landscape and Profile Optimisation", "Meta Business Suite", "Meta Ads Manager Foundations", "Awareness and Engagement Campaigns", "Traffic and Lead Campaigns", "Sales and App Promotion Campaigns", "LinkedIn, X Ads and SMO Tools"] },
      { title: "Email, Automation, WhatsApp, Influencer and Affiliate", topics: ["Email Marketing", "CRM and Marketing Automation", "WhatsApp Marketing", "Influencer and Affiliate Marketing"] },
      { title: "E-Commerce with Shopify", topics: ["Shopify Store Build", "Shopify Launch"] },
      { title: "Analytics, Attribution and Optimisation", topics: ["UTM and Campaign Tracking", "GA4 and Marketing Attribution", "Automated Reporting", "Competitor Digital Marketing Analysis", "Landing Page, CRO and Behavioural Analytics"] },
      { title: "AI Analytics and AI Optimisation", topics: ["AI Analytics and Visibility", "AI Ad Optimisation Tools"] },
      { title: "Advanced Practice Labs and Growth", topics: ["Google Ads Optimisation Lab", "Meta Ads Optimisation Lab", "Marketplace and Retail Media", "Growth Marketing and Marketing Psychology"] },
      { title: "Capstone and Career Guidance", topics: ["Capstone Strategy and Build", "Capstone Launch, Optimisation and Reporting", "Career Guidance, Presentation and Final Assessment"] }
    ],
    projects: [
      { title: "WordPress Website", desc: "Build a professional WordPress website for an online education platform with Elementor and plugins." },
      { title: "Instagram & Facebook Marketing", desc: "Create and manage optimised Instagram and Facebook accounts for a cloud computing company." },
      { title: "Google Business Profile", desc: "Create and optimise a Google Business Profile for a sports & turf booking platform: services, photos, posts, reviews and Maps visibility." },
      { title: "Keywords & SEO Blog", desc: "Keyword research and an SEO-optimised blog for a digital payment platform." },
      { title: "Competitor Analysis", desc: "A detailed competitor analysis report for a beauty & fashion e-commerce brand." }
    ],
    roles: ["Digital Marketing Executive", "SEO Executive", "Social Media Executive", "Performance Marketing Executive", "Google Ads Specialist", "Meta Ads Specialist", "Content Marketing Executive", "Digital Marketing Analyst"],
    seo: {
      title: `Digital Marketing Course in ${AREA} with AI | SEO, Google & Meta Ads | Vinsup`,
      description: `100-hour AI-powered digital marketing course in ${AREA}: SEO, AEO & GEO, Google Ads, Meta Ads, WordPress, Shopify, email & WhatsApp automation and GA4. Live projects, certifications, internship and placement support.`,
      keywords: `digital marketing course in coimbatore, digital marketing training coimbatore, seo course coimbatore, google ads course coimbatore, social media marketing course coimbatore, digital marketing institute coimbatore with placement`
    },
    faq: [
      { q: "Which is the best digital marketing course in Coimbatore?", a: "Vinsup Skill Academy's AI & Digital Marketing course is a 100-hour, 12-module program at our Ganapathy, Coimbatore campus and online. It covers SEO, AEO & GEO, Google Ads, Meta Ads, WordPress, Shopify, email, WhatsApp and CRM automation and GA4, with AI built into every module and live capstone projects." },
      { q: "What are AEO and GEO, and are they covered?", a: "Answer Engine Optimisation (AEO) and Generative Engine Optimisation (GEO) are how brands get featured in AI answers from ChatGPT, Gemini, Perplexity and Google AI Overviews. Both are covered in the SEO module along with technical SEO and Core Web Vitals." },
      { q: "Will I run real Google Ads and Meta Ads campaigns?", a: "Yes. You build Search, Display, Video, Demand Gen, Shopping and Performance Max campaigns in Google Ads, and awareness, traffic, lead and sales campaigns in Meta Ads Manager, followed by dedicated optimisation labs." },
      { q: "Which tools will I learn?", a: "Google Ads, Meta Ads Manager, GA4, Google Tag Manager, Search Console, Looker Studio, WordPress, Elementor, Rank Math, Yoast, Semrush, Ahrefs, Screaming Frog, Canva, Shopify, Mailchimp, Brevo, HubSpot, WhatsApp Business API, AiSensy, Hotjar and AI tools like HeyGen and InVideo AI." },
      { q: "Do I need a technical background?", a: "No. The course starts with foundations and AI setup. Students, graduates, business owners and career switchers can all join." },
      { q: "Can I freelance or start an agency after this course?", a: "Yes. You finish with a live website, managed social accounts, a Google Business Profile and ad campaigns you can show clients, along with career and freelancing guidance." },
      { q: "What jobs can I apply for?", a: "Digital Marketing Executive, SEO Executive, Social Media Executive, Performance Marketing Executive, Google Ads Specialist, Meta Ads Specialist, Content Marketing Executive and Digital Marketing Analyst." }
    ]
  }
};

// Old route slugs that should keep working (e.g. links already shared or indexed)
export const courseAliases = {
  "mern-stack": ["frontend", "AI integrated frontend"]
};
