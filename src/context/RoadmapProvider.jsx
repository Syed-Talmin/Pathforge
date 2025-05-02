import React, { useEffect, useState } from "react";
import { RaodmapContext } from "./RaodmapContext"; // upar wala context import karo

const RoadmapProvider = ({ children }) => {
  const [preRoadmap,setPreRoadmap] = useState([
    [
      "Frontend Developer",
      {
        "skill": "HTML & CSS",
        "topic": [
          {"name": "Semantic HTML and document structure", "isCompleted": false},
          {"name": "Forms and validation", "isCompleted": false},
          {"name": "Flexbox and Grid layouts", "isCompleted": false},
          {"name": "Responsive design principles", "isCompleted": false},
          {"name": "CSS Variables and custom properties", "isCompleted": false},
          {"name": "Animations and transitions", "isCompleted": false},
          {"name": "Accessibility best practices", "isCompleted": false},
          {"name": "Browser rendering behavior", "isCompleted": false}
        ],
        "duration": "5 weeks"
      },
      {
        "skill": "JavaScript Fundamentals",
        "topic": [
          {"name": "Variables, data types, and operators", "isCompleted": false},
          {"name": "Functions and scope", "isCompleted": false},
          {"name": "DOM manipulation", "isCompleted": false},
          {"name": "Event handling", "isCompleted": false},
          {"name": "Asynchronous JavaScript (Promises, async/await)", "isCompleted": false},
          {"name": "ES6+ features", "isCompleted": false},
          {"name": "Error handling and debugging", "isCompleted": false},
          {"name": "Browser APIs", "isCompleted": false}
        ],
        "duration": "6 weeks"
      },
      {
        "skill": "Version Control with Git",
        "topic": [
          {"name": "Initializing and cloning repositories", "isCompleted": false},
          {"name": "Staging, committing, and pushing changes", "isCompleted": false},
          {"name": "Branching and merging", "isCompleted": false},
          {"name": "Resolving merge conflicts", "isCompleted": false},
          {"name": "Using GitHub for collaboration", "isCompleted": false},
          {"name": "Creating and reviewing pull requests", "isCompleted": false},
          {"name": "Rebasing and history rewriting", "isCompleted": false},
          {"name": "Tagging and releases", "isCompleted": false}
        ],
        "duration": "3 weeks"
      },
      {
        "skill": "Modern Frontend Framework (React)",
        "topic": [
          {"name": "JSX and component structure", "isCompleted": false},
          {"name": "Props and state", "isCompleted": false},
          {"name": "Hooks (useState, useEffect, custom hooks)", "isCompleted": false},
          {"name": "Component lifecycle", "isCompleted": false},
          {"name": "Conditional rendering", "isCompleted": false},
          {"name": "Forms and controlled components", "isCompleted": false},
          {"name": "React Router for navigation", "isCompleted": false},
          {"name": "Context API and state management", "isCompleted": false}
        ],
        "duration": "7 weeks"
      },
      {
        "skill": "Package Management & Build Tools",
        "topic": [
          {"name": "NPM/Yarn basics", "isCompleted": false},
          {"name": "Installing and managing dependencies", "isCompleted": false},
          {"name": "Using scripts and running dev servers", "isCompleted": false},
          {"name": "Webpack and bundling basics", "isCompleted": false},
          {"name": "Babel and transpiling", "isCompleted": false},
          {"name": "Code splitting and optimization", "isCompleted": false},
          {"name": "Linting and formatting tools", "isCompleted": false},
          {"name": "Environment variables", "isCompleted": false}
        ],
        "duration": "4 weeks"
      },
      {
        "skill": "State Management (Redux or Alternatives)",
        "topic": [
          {"name": "State architecture and flow", "isCompleted": false},
          {"name": "Actions, reducers, and store", "isCompleted": false},
          {"name": "Middleware and async actions (Thunk)", "isCompleted": false},
          {"name": "Redux Toolkit usage", "isCompleted": false},
          {"name": "Connecting Redux with React", "isCompleted": false},
          {"name": "Debugging with Redux DevTools", "isCompleted": false},
          {"name": "Normalization and selectors", "isCompleted": false},
          {"name": "Comparing with alternatives like Zustand or Recoil", "isCompleted": false}
        ],
        "duration": "5 weeks"
      },
      {
        "skill": "Testing",
        "topic": [
          {"name": "Writing unit tests with Jest", "isCompleted": false},
          {"name": "Testing React components with Testing Library", "isCompleted": false},
          {"name": "Mocking API calls", "isCompleted": false},
          {"name": "End-to-end testing with Cypress", "isCompleted": false},
          {"name": "Snapshot testing", "isCompleted": false},
          {"name": "Testing async logic", "isCompleted": false},
          {"name": "CI integration of tests", "isCompleted": false},
          {"name": "Test coverage and best practices", "isCompleted": false}
        ],
        "duration": "4 weeks"
      },
      {
        "skill": "API Integration",
        "topic": [
          {"name": "Understanding RESTful APIs", "isCompleted": false},
          {"name": "Making HTTP requests with fetch/axios", "isCompleted": false},
          {"name": "Handling authentication tokens", "isCompleted": false},
          {"name": "Managing loading and error states", "isCompleted": false},
          {"name": "Consuming paginated and filtered data", "isCompleted": false},
          {"name": "Data transformation and normalization", "isCompleted": false},
          {"name": "GraphQL basics", "isCompleted": false},
          {"name": "Caching strategies", "isCompleted": false}
        ],
        "duration": "4 weeks"
      },
      {
        "skill": "Deployment & Performance Optimization",
        "topic": [
          {"name": "Hosting on Vercel/Netlify", "isCompleted": false},
          {"name": "Build and deploy pipelines", "isCompleted": false},
          {"name": "Code splitting and lazy loading", "isCompleted": false},
          {"name": "Image and asset optimization", "isCompleted": false},
          {"name": "Monitoring performance with Lighthouse", "isCompleted": false},
          {"name": "Web Vitals optimization", "isCompleted": false},
          {"name": "Progressive Web App (PWA) basics", "isCompleted": false},
          {"name": "SEO fundamentals for SPAs", "isCompleted": false}
        ],
        "duration": "4 weeks"
      },
      {
        "skill": "Soft Skills & Collaboration",
        "topic": [
          {"name": "Agile and Scrum basics", "isCompleted": false},
          {"name": "Working with designers and backend teams", "isCompleted": false},
          {"name": "Effective code reviews", "isCompleted": false},
          {"name": "Writing clean and maintainable code", "isCompleted": false},
          {"name": "Time and task management", "isCompleted": false},
          {"name": "Technical communication", "isCompleted": false},
          {"name": "Handling feedback and improvement", "isCompleted": false},
          {"name": "Building a portfolio and resume", "isCompleted": false}
        ],
        "duration": "3 weeks"
      },
      {
        "progress": 0,
        "id": 1
      }
    ],  
    [
      "Backend Developer",
      {
        "skill": "Programming Fundamentals (Python)",
        "topic": [
          {"name": "Data types and control structures", "isCompleted": false},
          {"name": "Functions and recursion", "isCompleted": false},
          {"name": "Object-oriented programming", "isCompleted": false},
          {"name": "Error handling and exceptions", "isCompleted": false},
          {"name": "Working with files and directories", "isCompleted": false},
          {"name": "Modules and packages", "isCompleted": false},
          {"name": "List/dictionary comprehensions", "isCompleted": false},
          {"name": "Virtual environments", "isCompleted": false}
        ],
        "duration": "5 weeks"
      },
      {
        "skill": "Databases and SQL",
        "topic": [
          {"name": "Relational database concepts", "isCompleted": false},
          {"name": "SQL queries (SELECT, INSERT, UPDATE, DELETE)", "isCompleted": false},
          {"name": "Joins and subqueries", "isCompleted": false},
          {"name": "Indexing and query optimization", "isCompleted": false},
          {"name": "Database schema design", "isCompleted": false},
          {"name": "Normalization & relationships", "isCompleted": false},
          {"name": "Transactions and ACID properties", "isCompleted": false},
          {"name": "Using PostgreSQL or MySQL", "isCompleted": false}
        ],
        "duration": "6 weeks"
      },
      {
        "skill": "APIs and Web Frameworks",
        "topic": [
          {"name": "RESTful API design principles", "isCompleted": false},
          {"name": "Setting up a backend server", "isCompleted": false},
          {"name": "Creating endpoints with Flask or Express", "isCompleted": false},
          {"name": "Handling GET, POST, PUT, DELETE requests", "isCompleted": false},
          {"name": "Using middleware", "isCompleted": false},
          {"name": "Serialization and JSON handling", "isCompleted": false},
          {"name": "API versioning and documentation", "isCompleted": false},
          {"name": "Request validation and error handling", "isCompleted": false}
        ],
        "duration": "6 weeks"
      },
      {
        "skill": "Authentication and Security",
        "topic": [
          {"name": "Session vs token-based auth", "isCompleted": false},
          {"name": "Implementing JWT authentication", "isCompleted": false},
          {"name": "OAuth2 and third-party logins", "isCompleted": false},
          {"name": "Password hashing and salting", "isCompleted": false},
          {"name": "Rate limiting and brute force protection", "isCompleted": false},
          {"name": "CORS and CSRF protection", "isCompleted": false},
          {"name": "Input validation and sanitization", "isCompleted": false},
          {"name": "Security headers and best practices", "isCompleted": false}
        ],
        "duration": "5 weeks"
      },
      {
        "skill": "Data Modeling and ORMs",
        "topic": [
          {"name": "Understanding object-relational mapping", "isCompleted": false},
          {"name": "Defining models and relationships", "isCompleted": false},
          {"name": "Migrations and schema updates", "isCompleted": false},
          {"name": "Using SQLAlchemy or Prisma", "isCompleted": false},
          {"name": "Querying with ORM methods", "isCompleted": false},
          {"name": "Model validation and constraints", "isCompleted": false},
          {"name": "Database seeding", "isCompleted": false},
          {"name": "Performance considerations", "isCompleted": false}
        ],
        "duration": "4 weeks"
      },
      {
        "skill": "Testing and Debugging",
        "topic": [
          {"name": "Unit testing with pytest or Mocha", "isCompleted": false},
          {"name": "Integration testing", "isCompleted": false},
          {"name": "Mocking and test doubles", "isCompleted": false},
          {"name": "Debugging techniques and tools", "isCompleted": false},
          {"name": "Code coverage measurement", "isCompleted": false},
          {"name": "Test-driven development (TDD)", "isCompleted": false},
          {"name": "CI test integration", "isCompleted": false},
          {"name": "Handling logs and tracebacks", "isCompleted": false}
        ],
        "duration": "4 weeks"
      },
      {
        "skill": "Caching and Performance Optimization",
        "topic": [
          {"name": "Understanding caching strategies", "isCompleted": false},
          {"name": "Using Redis or Memcached", "isCompleted": false},
          {"name": "Database query optimization", "isCompleted": false},
          {"name": "Profiling and benchmarking tools", "isCompleted": false},
          {"name": "Asynchronous processing", "isCompleted": false},
          {"name": "Implementing rate limiting", "isCompleted": false},
          {"name": "Lazy loading and pagination", "isCompleted": false},
          {"name": "Load testing basics", "isCompleted": false}
        ],
        "duration": "4 weeks"
      },
      {
        "skill": "Containerization and Deployment",
        "topic": [
          {"name": "Dockerfile creation", "isCompleted": false},
          {"name": "Docker Compose for multi-container apps", "isCompleted": false},
          {"name": "Container networking and volumes", "isCompleted": false},
          {"name": "Building and running containers", "isCompleted": false},
          {"name": "Deploying to cloud platforms (Heroku, AWS, etc.)", "isCompleted": false},
          {"name": "CI/CD pipeline basics", "isCompleted": false},
          {"name": "Environment variables and config", "isCompleted": false},
          {"name": "Monitoring and logs", "isCompleted": false}
        ],
        "duration": "5 weeks"
      },
      {
        "skill": "Message Queues and Background Jobs",
        "topic": [
          {"name": "Concept of message brokers", "isCompleted": false},
          {"name": "Using RabbitMQ or Kafka", "isCompleted": false},
          {"name": "Task queue setup with Celery or Bull", "isCompleted": false},
          {"name": "Handling retries and failures", "isCompleted": false},
          {"name": "Scheduled jobs (cron)", "isCompleted": false},
          {"name": "Decoupling heavy tasks from APIs", "isCompleted": false},
          {"name": "Worker concurrency and scaling", "isCompleted": false},
          {"name": "Use cases for queues", "isCompleted": false}
        ],
        "duration": "4 weeks"
      },
      {
        "progress": 0,
        "id": 2
      }
    ],
    [
      "MERN Stack Developer",
      {
        "skill": "HTML, CSS & JavaScript",
        "topic": [
          {"name": "Semantic HTML5 and accessibility", "isCompleted": false},
          {"name": "CSS Flexbox and Grid for layout", "isCompleted": false},
          {"name": "JavaScript variables, functions, and scope", "isCompleted": false},
          {"name": "DOM manipulation and event handling", "isCompleted": false},
          {"name": "JavaScript ES6+ features", "isCompleted": false},
          {"name": "Responsive design principles", "isCompleted": false},
          {"name": "Basic animations and transitions", "isCompleted": false},
          {"name": "Form validation and user input handling", "isCompleted": false}
        ],
        "duration": "6 weeks"
      },
      {
        "skill": "React.js",
        "topic": [
          {"name": "Component-based architecture", "isCompleted": false},
          {"name": "JSX syntax and rendering", "isCompleted": false},
          {"name": "State and props management", "isCompleted": false},
          {"name": "React Hooks (useState, useEffect, etc.)", "isCompleted": false},
          {"name": "React Router for routing", "isCompleted": false},
          {"name": "Form handling and validation", "isCompleted": false},
          {"name": "Context API and global state", "isCompleted": false},
          {"name": "Component lifecycle and performance", "isCompleted": false}
        ],
        "duration": "7 weeks"
      },
      {
        "skill": "Node.js",
        "topic": [
          {"name": "Node.js architecture and event loop", "isCompleted": false},
          {"name": "Creating servers with HTTP module", "isCompleted": false},
          {"name": "Working with file system and streams", "isCompleted": false},
          {"name": "Handling requests and responses", "isCompleted": false},
          {"name": "Asynchronous programming (callbacks, promises, async/await)", "isCompleted": false},
          {"name": "Environment variables and configuration", "isCompleted": false},
          {"name": "Error handling and debugging", "isCompleted": false},
          {"name": "Working with packages and NPM", "isCompleted": false}
        ],
        "duration": "6 weeks"
      },
      {
        "skill": "Express.js",
        "topic": [
          {"name": "Setting up Express server", "isCompleted": false},
          {"name": "Routing and middleware", "isCompleted": false},
          {"name": "Handling JSON and form data", "isCompleted": false},
          {"name": "Creating RESTful APIs", "isCompleted": false},
          {"name": "Error handling and status codes", "isCompleted": false},
          {"name": "Authentication middleware (JWT)", "isCompleted": false},
          {"name": "Integrating with MongoDB", "isCompleted": false},
          {"name": "Using CORS and Helmet for security", "isCompleted": false}
        ],
        "duration": "5 weeks"
      },
      {
        "skill": "MongoDB & Mongoose",
        "topic": [
          {"name": "MongoDB data modeling", "isCompleted": false},
          {"name": "CRUD operations with Mongo Shell", "isCompleted": false},
          {"name": "Defining schemas with Mongoose", "isCompleted": false},
          {"name": "Data validation and middleware", "isCompleted": false},
          {"name": "Relationship handling (ref, populate)", "isCompleted": false},
          {"name": "Query optimization and indexing", "isCompleted": false},
          {"name": "Aggregation framework basics", "isCompleted": false},
          {"name": "Database connection and config", "isCompleted": false}
        ],
        "duration": "6 weeks"
      },
      {
        "skill": "Authentication & Authorization",
        "topic": [
          {"name": "User registration and login flows", "isCompleted": false},
          {"name": "Password hashing with bcrypt", "isCompleted": false},
          {"name": "JWT-based authentication", "isCompleted": false},
          {"name": "Role-based access control", "isCompleted": false},
          {"name": "Protecting routes with middleware", "isCompleted": false},
          {"name": "Token expiration and refresh", "isCompleted": false},
          {"name": "OAuth2 and third-party logins", "isCompleted": false},
          {"name": "Session management strategies", "isCompleted": false}
        ],
        "duration": "5 weeks"
      },
      {
        "skill": "State Management in React",
        "topic": [
          {"name": "useState and useReducer for local state", "isCompleted": false},
          {"name": "Context API for global state", "isCompleted": false},
          {"name": "Redux fundamentals", "isCompleted": false},
          {"name": "Redux Toolkit setup", "isCompleted": false},
          {"name": "Managing async logic with redux-thunk", "isCompleted": false},
          {"name": "Connecting Redux with React", "isCompleted": false},
          {"name": "Debugging with Redux DevTools", "isCompleted": false},
          {"name": "Alternatives: Zustand, Recoil", "isCompleted": false}
        ],
        "duration": "5 weeks"
      },
      {
        "skill": "Testing & Debugging",
        "topic": [
          {"name": "Writing unit tests with Jest", "isCompleted": false},
          {"name": "Testing React components with Testing Library", "isCompleted": false},
          {"name": "API testing with Postman", "isCompleted": false},
          {"name": "Integration testing", "isCompleted": false},
          {"name": "Debugging Node and React apps", "isCompleted": false},
          {"name": "Using browser and server logs", "isCompleted": false},
          {"name": "End-to-end testing with Cypress", "isCompleted": false},
          {"name": "Code coverage and best practices", "isCompleted": false}
        ],
        "duration": "4 weeks"
      },
      {
        "skill": "Deployment & DevOps Basics",
        "topic": [
          {"name": "Deploying MERN app on Vercel/Render/Heroku", "isCompleted": false},
          {"name": "Environment variables and secrets", "isCompleted": false},
          {"name": "Build optimization for production", "isCompleted": false},
          {"name": "Using GitHub Actions for CI/CD", "isCompleted": false},
          {"name": "Docker basics and containerization", "isCompleted": false},
          {"name": "Cloud deployment (AWS EC2, S3)", "isCompleted": false},
          {"name": "Monitoring and logging tools", "isCompleted": false},
          {"name": "Database backups and recovery", "isCompleted": false}
        ],
        "duration": "6 weeks"
      },
      {
        "progress": 0,
        'id': 3
      }
    ],
    [
      "Data Science",
      {
        "skill": "Python Programming",
        "topic": [
          {"name": "Python syntax and data types", "isCompleted": false},
          {"name": "Control flow and loops", "isCompleted": false},
          {"name": "Functions and modules", "isCompleted": false},
          {"name": "List comprehensions and lambda functions", "isCompleted": false},
          {"name": "File handling and exceptions", "isCompleted": false},
          {"name": "Working with libraries (NumPy, Pandas)", "isCompleted": false},
          {"name": "Virtual environments and pip", "isCompleted": false},
          {"name": "Jupyter notebooks and IDEs", "isCompleted": false}
        ],
        "duration": "5 weeks"
      },
      {
        "skill": "Statistics & Probability",
        "topic": [
          {"name": "Descriptive statistics", "isCompleted": false},
          {"name": "Probability theory and distributions", "isCompleted": false},
          {"name": "Hypothesis testing", "isCompleted": false},
          {"name": "Confidence intervals", "isCompleted": false},
          {"name": "Bayesian thinking", "isCompleted": false},
          {"name": "Statistical significance", "isCompleted": false},
          {"name": "Correlation vs causation", "isCompleted": false},
          {"name": "Central Limit Theorem", "isCompleted": false}
        ],
        "duration": "6 weeks"
      },
      {
        "skill": "Data Manipulation with Pandas",
        "topic": [
          {"name": "Reading and writing CSV/Excel files", "isCompleted": false},
          {"name": "DataFrames and Series operations", "isCompleted": false},
          {"name": "Filtering and sorting data", "isCompleted": false},
          {"name": "Grouping and aggregation", "isCompleted": false},
          {"name": "Merging and joining datasets", "isCompleted": false},
          {"name": "Handling missing values", "isCompleted": false},
          {"name": "Datetime and categorical data", "isCompleted": false},
          {"name": "Data transformation and pivot tables", "isCompleted": false}
        ],
        "duration": "5 weeks"
      },
      {
        "skill": "Data Visualization",
        "topic": [
          {"name": "Basic plots with Matplotlib", "isCompleted": false},
          {"name": "Advanced visualizations with Seaborn", "isCompleted": false},
          {"name": "Interactive plots with Plotly", "isCompleted": false},
          {"name": "Correlation heatmaps", "isCompleted": false},
          {"name": "Customizing plot aesthetics", "isCompleted": false},
          {"name": "Multivariate visualizations", "isCompleted": false},
          {"name": "Dashboards with Streamlit", "isCompleted": false},
          {"name": "Visualizing distributions and trends", "isCompleted": false}
        ],
        "duration": "5 weeks"
      },
      {
        "skill": "Machine Learning",
        "topic": [
          {"name": "Supervised vs unsupervised learning", "isCompleted": false},
          {"name": "Linear and logistic regression", "isCompleted": false},
          {"name": "Decision trees and random forests", "isCompleted": false},
          {"name": "Clustering with K-Means", "isCompleted": false},
          {"name": "Model evaluation metrics", "isCompleted": false},
          {"name": "Cross-validation and hyperparameter tuning", "isCompleted": false},
          {"name": "Overfitting and regularization", "isCompleted": false},
          {"name": "Using scikit-learn", "isCompleted": false}
        ],
        "duration": "7 weeks"
      },
      {
        "skill": "SQL and Databases",
        "topic": [
          {"name": "Basic SQL syntax (SELECT, WHERE)", "isCompleted": false},
          {"name": "Joins and subqueries", "isCompleted": false},
          {"name": "GROUP BY and HAVING clauses", "isCompleted": false},
          {"name": "Window functions", "isCompleted": false},
          {"name": "Data filtering and transformation", "isCompleted": false},
          {"name": "Creating and modifying tables", "isCompleted": false},
          {"name": "Database normalization", "isCompleted": false},
          {"name": "Working with SQLite/PostgreSQL", "isCompleted": false}
        ],
        "duration": "5 weeks"
      },
      {
        "skill": "Data Cleaning & Preprocessing",
        "topic": [
          {"name": "Handling missing and duplicate values", "isCompleted": false},
          {"name": "Encoding categorical variables", "isCompleted": false},
          {"name": "Feature scaling and normalization", "isCompleted": false},
          {"name": "Outlier detection and treatment", "isCompleted": false},
          {"name": "Datetime feature engineering", "isCompleted": false},
          {"name": "Imputation strategies", "isCompleted": false},
          {"name": "Pipeline creation using sklearn", "isCompleted": false},
          {"name": "Automated EDA tools", "isCompleted": false}
        ],
        "duration": "5 weeks"
      },
      {
        "skill": "Model Deployment",
        "topic": [
          {"name": "Saving models with Pickle/Joblib", "isCompleted": false},
          {"name": "Creating REST API with Flask", "isCompleted": false},
          {"name": "Deploying models to Heroku/Render", "isCompleted": false},
          {"name": "Using Docker for model containers", "isCompleted": false},
          {"name": "Model versioning", "isCompleted": false},
          {"name": "Monitoring model performance", "isCompleted": false},
          {"name": "Streamlit for model demos", "isCompleted": false},
          {"name": "Serving models with FastAPI", "isCompleted": false}
        ],
        "duration": "6 weeks"
      },
      {
        "skill": "Deep Learning Fundamentals",
        "topic": [
          {"name": "Neural network basics", "isCompleted": false},
          {"name": "Activation functions", "isCompleted": false},
          {"name": "Backpropagation and optimization", "isCompleted": false},
          {"name": "Image classification with CNNs", "isCompleted": false},
          {"name": "Natural Language Processing basics", "isCompleted": false},
          {"name": "Working with TensorFlow/Keras", "isCompleted": false},
          {"name": "Transfer learning", "isCompleted": false},
          {"name": "Model evaluation and tuning", "isCompleted": false}
        ],
        "duration": "6 weeks"
      },
      {
        "progress": 0,
        'id': 4
      }
    ],
    [
      "Ethical Hacking",
      {
        "skill": "Linux and Command Line",
        "topic": [
          {"name": "Linux file system structure", "isCompleted": false},
          {"name": "Basic Linux commands", "isCompleted": false},
          {"name": "User and file permissions", "isCompleted": false},
          {"name": "Shell scripting basics", "isCompleted": false},
          {"name": "Network commands (ifconfig, netstat, etc.)", "isCompleted": false},
          {"name": "Package management (apt, yum)", "isCompleted": false},
          {"name": "Process and service management", "isCompleted": false},
          {"name": "System logging and auditing", "isCompleted": false}
        ],
        "duration": "5 weeks"
      },
      {
        "skill": "Networking Fundamentals",
        "topic": [
          {"name": "OSI and TCP/IP models", "isCompleted": false},
          {"name": "IP addressing and subnetting", "isCompleted": false},
          {"name": "Common protocols (HTTP, FTP, DNS, etc.)", "isCompleted": false},
          {"name": "MAC vs IP addresses", "isCompleted": false},
          {"name": "Network devices and topologies", "isCompleted": false},
          {"name": "Ports and services", "isCompleted": false},
          {"name": "Packet analysis with Wireshark", "isCompleted": false},
          {"name": "Firewalls and NAT", "isCompleted": false}
        ],
        "duration": "6 weeks"
      },
      {
        "skill": "Footprinting and Reconnaissance",
        "topic": [
          {"name": "Passive vs active reconnaissance", "isCompleted": false},
          {"name": "WHOIS and DNS enumeration", "isCompleted": false},
          {"name": "Social engineering basics", "isCompleted": false},
          {"name": "Google hacking and dorking", "isCompleted": false},
          {"name": "Scanning with Nmap", "isCompleted": false},
          {"name": "Banner grabbing and OS fingerprinting", "isCompleted": false},
          {"name": "Using Shodan for reconnaissance", "isCompleted": false},
          {"name": "Email harvesting techniques", "isCompleted": false}
        ],
        "duration": "5 weeks"
      },
      {
        "skill": "Vulnerability Analysis",
        "topic": [
          {"name": "Types of vulnerabilities", "isCompleted": false},
          {"name": "Vulnerability scanning tools (Nessus, OpenVAS)", "isCompleted": false},
          {"name": "CVEs and CVSS scoring", "isCompleted": false},
          {"name": "Manual vulnerability testing", "isCompleted": false},
          {"name": "Common misconfigurations", "isCompleted": false},
          {"name": "Web vulnerability scanning", "isCompleted": false},
          {"name": "Patch management strategies", "isCompleted": false},
          {"name": "Interpreting scan reports", "isCompleted": false}
        ],
        "duration": "6 weeks"
      },
      {
        "skill": "System Hacking",
        "topic": [
          {"name": "Password cracking techniques", "isCompleted": false},
          {"name": "Privilege escalation", "isCompleted": false},
          {"name": "Maintaining access with backdoors", "isCompleted": false},
          {"name": "Keyloggers and spyware basics", "isCompleted": false},
          {"name": "Clearing logs and covering tracks", "isCompleted": false},
          {"name": "Common exploits for Windows/Linux", "isCompleted": false},
          {"name": "Remote desktop and shell access", "isCompleted": false},
          {"name": "Metasploit for exploitation", "isCompleted": false}
        ],
        "duration": "6 weeks"
      },
      {
        "skill": "Web Application Hacking",
        "topic": [
          {"name": "OWASP Top 10 vulnerabilities", "isCompleted": false},
          {"name": "SQL injection and XSS", "isCompleted": false},
          {"name": "CSRF and IDOR attacks", "isCompleted": false},
          {"name": "Authentication bypass", "isCompleted": false},
          {"name": "Burp Suite for web testing", "isCompleted": false},
          {"name": "Command injection and RCE", "isCompleted": false},
          {"name": "Directory traversal", "isCompleted": false},
          {"name": "Security misconfiguration issues", "isCompleted": false}
        ],
        "duration": "7 weeks"
      },
      {
        "skill": "Wireless Network Hacking",
        "topic": [
          {"name": "Wireless encryption types (WEP, WPA2, WPA3)", "isCompleted": false},
          {"name": "Packet sniffing and injection", "isCompleted": false},
          {"name": "Aircrack-ng suite basics", "isCompleted": false},
          {"name": "Cracking Wi-Fi passwords", "isCompleted": false},
          {"name": "Man-in-the-middle attacks on Wi-Fi", "isCompleted": false},
          {"name": "Evil twin and rogue AP attacks", "isCompleted": false},
          {"name": "Bluetooth and NFC hacking", "isCompleted": false},
          {"name": "Wireless defense mechanisms", "isCompleted": false}
        ],
        "duration": "5 weeks"
      },
      {
        "skill": "Cryptography Basics",
        "topic": [
          {"name": "Symmetric vs asymmetric encryption", "isCompleted": false},
          {"name": "Hashing algorithms (MD5, SHA)", "isCompleted": false},
          {"name": "Public Key Infrastructure (PKI)", "isCompleted": false},
          {"name": "SSL/TLS protocols", "isCompleted": false},
          {"name": "Common cryptographic attacks", "isCompleted": false},
          {"name": "Encoding vs encryption vs hashing", "isCompleted": false},
          {"name": "Digital signatures and certificates", "isCompleted": false},
          {"name": "Using tools like GPG and OpenSSL", "isCompleted": false}
        ],
        "duration": "4 weeks"
      },
      {
        "skill": "Penetration Testing & Reporting",
        "topic": [
          {"name": "Planning and scoping a pentest", "isCompleted": false},
          {"name": "Rules of engagement", "isCompleted": false},
          {"name": "Hands-on labs and CTFs", "isCompleted": false},
          {"name": "Documenting findings", "isCompleted": false},
          {"name": "Risk assessment and mitigation", "isCompleted": false},
          {"name": "Creating executive and technical reports", "isCompleted": false},
          {"name": "Remediation and re-testing", "isCompleted": false},
          {"name": "Presentation of results", "isCompleted": false}
        ],
        "duration": "6 weeks"
      },
      {
        "progress": 0,
        'id': 5
      }
    ] 
    ,
  ])
  const [saveRoadmap,setSaveRoadmap] = useState(() => {
    const stored = localStorage.getItem('saveRoadmap');
    return stored ? JSON.parse(stored) : [];
  })

  const [isDark,setIsDark] = useState(() => {
    const stored = localStorage.getItem('isDark');
    return stored ? JSON.parse(stored) : false;
  })
  useEffect(() => {
    localStorage.setItem('saveRoadmap', JSON.stringify(saveRoadmap));
  }, [saveRoadmap]);

  useEffect(() => {
    localStorage.setItem('isDark', JSON.stringify(isDark));
  }, [isDark]);

  return (
    <RaodmapContext.Provider value={{preRoadmap,setPreRoadmap,setSaveRoadmap , saveRoadmap,isDark,setIsDark}}>
      {children}
    </RaodmapContext.Provider>
  );
};

export default RoadmapProvider;
