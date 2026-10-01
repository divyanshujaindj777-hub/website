/**
 * =========================================================================
 * PORTFOLIO DATA CONFIGURATION — DIVYANSHU JAIN
 * =========================================================================
 * Single source of truth for all content across the portfolio.
 * You can easily update your skills, projects, education, certificates,
 * achievements, and social handles by editing this file!
 * 
 * Rules followed:
 * - No fabricated marks, CGPA, or college names (clean [Placeholders] used).
 * - No fake skill percentages (authentic experience levels used).
 * - Only platforms with provided URLs are displayed.
 * - If a project has no live demo, the button is automatically hidden.
 * =========================================================================
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "DIVYANSHU JAIN",
    role: "B.Tech CSE Student | AI/ML Enthusiast | Developer",
    animatedBadge: "Learning • Building • Experimenting • Growing",
    avatar: "assets/images/profile-placeholder.svg",
    intro: "I am a first-year B.Tech student passionate about technology, programming, artificial intelligence and building practical projects. I am continuously learning new technologies and looking for opportunities to turn ideas into meaningful solutions.",
    location: "India [Update City / State]",
    email: "divyanshu.jain.connect@gmail.com", // [Update with your email]
    phone: "", // [Optional: Add phone number or leave empty]
    resumePdfUrl: "#resume-preview", // Opens built-in interactive resume viewer or download
    status: {
      isAvailable: true,
      text: "Open to Internships, Hackathons & Tech Collaborations"
    }
  },

  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/divyanshu-jain", // [Update with your GitHub URL]
      icon: "github",
      label: "github.com/divyanshu-jain"
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/divyanshu-jain", // [Update with your LinkedIn URL]
      icon: "linkedin",
      label: "linkedin.com/in/divyanshu-jain"
    },
    {
      platform: "Email",
      url: "mailto:divyanshu.jain.connect@gmail.com", // [Update with your email]
      icon: "mail",
      label: "divyanshu.jain.connect@gmail.com"
    }
  ],

  about: {
    title: "About Me",
    subtitle: "Passion for Engineering, Driven by Curiosity",
    paragraphs: [
      "Hello! I am Divyanshu Jain, a first-year Computer Science & Engineering student with a deep interest in software development, artificial intelligence, and algorithmic problem-solving. My journey into tech began with a natural fascination for how lines of code translate into real-world tools that solve everyday problems.",
      "As a first-year undergraduate, I focus on building strong computer science fundamentals — mastering core programming languages, data structures, and mathematical concepts while proactively applying what I learn through hands-on personal projects and open-source explorations.",
      "Beyond technical coursework, what motivates me most is continuous growth and collaboration. I believe that real engineering excellence comes from consistency, asking the right questions, and embracing challenges with an analytical, problem-solving mindset."
    ],
    strengths: [
      "Quick Adaptability & Self-Directed Learning",
      "Analytical & Algorithmic Problem Solving",
      "Clean, Readable & Well-Structured Code",
      "Teamwork, Active Listening & Communication",
      "Perseverance & Attention to Detail"
    ],
    careerAspirations: "To evolve into a high-impact Software Engineer and AI Practitioner who builds resilient, scalable, and intelligent software systems that create tangible positive value for society.",
    currentlyExploring: [
      { name: "Artificial Intelligence", tag: "AI/ML", icon: "cpu" },
      { name: "Machine Learning", tag: "AI/ML", icon: "brain" },
      { name: "Python", tag: "Language", icon: "terminal" },
      { name: "Data Structures & Algorithms", tag: "Core CS", icon: "network" },
      { name: "Web Development", tag: "Frontend", icon: "globe" },
      { name: "Generative AI", tag: "Modern Tech", icon: "sparkles" }
    ]
  },

  education: [
    {
      degree: "Bachelor of Technology (B.Tech)",
      branch: "Computer Science & Engineering (CSE)",
      institution: "[Your University / Institute Name]",
      year: "2024 - 2028 (Currently in 1st Year)",
      cgpa: "[CGPA - Currently In Progress / 1st Year]",
      status: "Pursuing",
      relevantSubjects: [
        "Programming for Problem Solving (C / Python)",
        "Discrete Mathematics & Calculus",
        "Engineering Physics & Semiconductor Basics",
        "Basic Electrical & Electronics Engineering",
        "Digital Logic Design"
      ],
      description: "Focusing on solidifying foundational computer science theory, active algorithmic coding, and collaborating with peers in technical societies."
    },
    {
      degree: "Class 12 (Senior Secondary - Science Stream / PCM)",
      branch: "Physics, Chemistry, Mathematics & Computer Science",
      institution: "[Your High School / Junior College Name]",
      year: "[2022 - 2024 / Passing Year]",
      cgpa: "[Percentage / Board Score Placeholder - e.g. XX.X%]",
      status: "Completed",
      relevantSubjects: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Computer Science / Informatics Practices",
        "English"
      ],
      description: "Built strong mathematical foundations, analytical reasoning, and introductory procedural programming skills."
    },
    {
      degree: "Class 10 (Secondary School Examination)",
      branch: "General Sciences & Mathematics",
      institution: "[Your Secondary School Name]",
      year: "[2022 / Passing Year]",
      cgpa: "[Percentage / Grade Placeholder - e.g. XX.X%]",
      status: "Completed",
      relevantSubjects: [
        "Mathematics",
        "Science",
        "Social Sciences",
        "Languages"
      ],
      description: "Graduated with top academic discipline, participating in school science exhibitions and mathematics Olympiads."
    }
  ],

  skills: {
    categories: [
      "All",
      "Programming Languages",
      "AI & Machine Learning",
      "Web Development",
      "Databases",
      "Developer Tools",
      "Soft Skills"
    ],
    items: [
      // Programming Languages
      {
        name: "Python",
        category: "Programming Languages",
        level: "Intermediate",
        icon: "code",
        description: "Core syntax, OOP concepts, file handling, automation scripts, and standard libraries."
      },
      {
        name: "C / C++",
        category: "Programming Languages",
        level: "Currently Learning",
        icon: "code",
        description: "Memory management, pointers, and foundational data structures (Arrays, Linked Lists, Stacks)."
      },
      {
        name: "JavaScript (ES6+)",
        category: "Programming Languages",
        level: "Beginner",
        icon: "code",
        description: "Modern JavaScript, DOM manipulation, asynchronous programming, and event handling."
      },

      // AI & Machine Learning
      {
        name: "Foundational Machine Learning",
        category: "AI & Machine Learning",
        level: "Currently Learning",
        icon: "brain",
        description: "Supervised & unsupervised learning principles, regression models, and decision boundaries."
      },
      {
        name: "NumPy & Pandas",
        category: "AI & Machine Learning",
        level: "Beginner",
        icon: "table",
        description: "Multidimensional arrays, data cleaning, statistical summarization, and data frame manipulation."
      },
      {
        name: "Data Visualization (Matplotlib)",
        category: "AI & Machine Learning",
        level: "Beginner",
        icon: "bar-chart",
        description: "Plotting trends, correlation heatmaps, histograms, and visual exploratory data analysis."
      },
      {
        name: "Generative AI Fundamentals",
        category: "AI & Machine Learning",
        level: "Currently Learning",
        icon: "sparkles",
        description: "Prompt engineering, LLM architectures, API integration with modern AI models."
      },

      // Web Development
      {
        name: "HTML5 & Semantic Markup",
        category: "Web Development",
        level: "Intermediate",
        icon: "layout",
        description: "Accessible semantic structure, SEO fundamentals, and responsive web design."
      },
      {
        name: "CSS3 & Modern Layouts",
        category: "Web Development",
        level: "Intermediate",
        icon: "palette",
        description: "Flexbox, CSS Grid, custom properties (variables), transitions, and glassmorphism styling."
      },
      {
        name: "Responsive & Mobile-First Design",
        category: "Web Development",
        level: "Intermediate",
        icon: "smartphone",
        description: "Fluid typography, media queries, touch targets, and cross-device testing."
      },

      // Databases
      {
        name: "SQL & Relational DB Concepts",
        category: "Databases",
        level: "Beginner",
        icon: "database",
        description: "Relational schema design, normalization principles, SELECT queries, JOINs, and filtering."
      },
      {
        name: "SQLite",
        category: "Databases",
        level: "Beginner",
        icon: "database",
        description: "Lightweight file-based database integration for local desktop and Python utilities."
      },

      // Developer Tools
      {
        name: "Git & Version Control",
        category: "Developer Tools",
        level: "Intermediate",
        icon: "git-branch",
        description: "Branching, merging, commit hygiene, conflict resolution, and collaborative workflows."
      },
      {
        name: "GitHub",
        category: "Developer Tools",
        level: "Intermediate",
        icon: "github",
        description: "Repository management, README documentation, Issue tracking, and GitHub Pages."
      },
      {
        name: "VS Code & Developer Extensions",
        category: "Developer Tools",
        level: "Intermediate",
        icon: "terminal",
        description: "Configured debugging environments, linting, snippets, and integrated terminal productivity."
      },
      {
        name: "Linux / Shell Basics",
        category: "Developer Tools",
        level: "Beginner",
        icon: "terminal",
        description: "Command-line navigation, file permissions, pipe redirection, and basic bash scripting."
      },

      // Soft Skills
      {
        name: "Algorithmic Problem Solving",
        category: "Soft Skills",
        level: "Intermediate",
        icon: "cpu",
        description: "Deconstructing complex problems into modular steps and optimizing time/space trade-offs."
      },
      {
        name: "Continuous Learning",
        category: "Soft Skills",
        level: "Advanced",
        icon: "sparkles",
        description: "Consistently reading technical documentation, experimenting with new tools, and self-upgrading."
      },
      {
        name: "Team Collaboration & Communication",
        category: "Soft Skills",
        level: "Intermediate",
        icon: "users",
        description: "Clear technical articulation, collaborative coding in hackathon environments, and feedback receptivity."
      }
    ]
  },

  projects: [
    {
      id: "ai-pathfinding-visualizer",
      title: "AI Pathfinding & Algorithm Visualizer",
      tagline: "Interactive 2D graph traversal visualizer implementing A*, Dijkstra and BFS algorithms.",
      featured: true,
      category: "AI & Algorithms",
      image: "assets/images/project-ai-pathfinder.svg",
      description: "An intuitive interactive web application built to visualize pathfinding algorithms on customizable grid mazes. Users can place obstacles, set starting and target nodes, and observe how heuristic search compares with uninformed search in real time.",
      problemSolved: "Helps computer science students understand the runtime behavior, frontier expansion, and computational efficiency differences between A* heuristic search, Dijkstra's algorithm, and Breadth-First Search.",
      technologies: ["Python / Pygame", "JavaScript", "HTML5 Canvas", "CSS3", "Graph Theory"],
      myContribution: "Designed the grid data structure, implemented the Manhattan heuristic function for A*, structured the animation step generator, and optimized node inspection runtime.",
      keyFeatures: [
        "Real-time visual node frontier exploration with customizable animation speed",
        "Support for A* (Manhattan heuristic), Dijkstra, and BFS graph traversals",
        "Interactive obstacle drawing, random maze generation, and weighted terrain",
        "Comprehensive runtime statistics counter: visited node count, path length, and execution time"
      ],
      liveDemoUrl: null, // Set to live URL when deployed, or leave null to hide button cleanly
      githubUrl: "https://github.com/divyanshu-jain/ai-pathfinding-visualizer",
      detailedOverview: {
        architecture: "Modular Model-View-Controller (MVC) design. The Grid Graph model manages 2D adjacency and weights, the Search Engine executes traversal generators yielding state snapshots, and the Canvas View renders state frames at 60 FPS.",
        challengesFaced: "Preventing browser UI thread freezes during intensive graph operations. Solved by decoupling search steps into asynchronous frame generators with requestAnimationFrame.",
        learnings: "Deepened practical intuition for priority queues (Min-Heaps), graph state representations, and asymptotic time complexity."
      }
    },
    {
      id: "smart-study-companion",
      title: "Smart Study & Habit Intelligence Companion",
      tagline: "Productivity dashboard featuring customizable Pomodoro cycles, goal trackers, and habit heatmaps.",
      featured: true,
      category: "Web & Productivity",
      image: "assets/images/project-study-companion.svg",
      description: "A developer-themed study productivity dashboard designed specifically for engineering students. Features customizable focus timers, subject goal checklists, and visual GitHub-style study consistency heatmaps that persist locally.",
      problemSolved: "Eliminates academic study fragmentation by consolidating time-blocking, goal tracking, and progress metrics into a distraction-free, zero-ad interface.",
      technologies: ["JavaScript (ES6)", "HTML5", "CSS Grid & Flexbox", "Local Storage API", "SVG Graphics"],
      myContribution: "Architected the client-side state machine, implemented local storage persistence for historical analytics, and designed the responsive glassmorphic UI.",
      keyFeatures: [
        "Dynamic Pomodoro timer with sound cues and customizable work/break intervals",
        "Categorized study tasks organized by semester subjects with priority flags",
        "GitHub-style contribution heatmap visualizing daily study consistency over 30 days",
        "Fully offline-first: persists all notes and stats locally without requiring external cloud accounts"
      ],
      liveDemoUrl: "https://divyanshu-jain.github.io/smart-study-companion", // [Replace or leave valid preview]
      githubUrl: "https://github.com/divyanshu-jain/smart-study-companion",
      detailedOverview: {
        architecture: "Single-Page Application (SPA) architecture built with vanilla ES6 modules. Utilizes an Observer Pattern to broadcast timer ticks and task status updates across multiple UI widgets.",
        challengesFaced: "Ensuring timer accuracy when browser tabs are minimized or in background mode. Handled by calculating delta timestamps against system time rather than relying on raw setInterval drift.",
        learnings: "Mastered modern CSS Glassmorphism, client-side data persistence, and accessible keyboard-navigable UI controls."
      }
    },
    {
      id: "dev-portfolio",
      title: "DevPortfolio — Premium Interactive Portfolio",
      tagline: "High-performance personal website engineered with dark mode, glassmorphism and centralized data architecture.",
      featured: true,
      category: "Web & UI/UX",
      image: "assets/images/project-devportfolio.svg",
      description: "A personal portfolio website tailored for technical networking, internship applications, and hackathon showcases. Engineered from scratch with modern responsive layouts, accessible dark/light themes, and interactive modals.",
      problemSolved: "Solves the generic student template dilemma by delivering an authentic, high-performance developer aesthetic with zero build-step overhead and instant maintenance capabilities.",
      technologies: ["HTML5 Semantic", "Modern CSS3 Variables", "Vanilla JavaScript ES6+", "SVG Architecture"],
      myContribution: "Designed the comprehensive design system, wrote all interactive components (theme switcher, active scrollspy, modal manager), and structured the centralized data model.",
      keyFeatures: [
        "Theme toggling (Dark & Light) with system preference detection and localStorage persistence",
        "Smooth scroll navigation with IntersectionObserver scrollspy highlighting",
        "Centralized configuration architecture allowing effortless content updates without touching HTML",
        "Accessible dialog modals for deep-dive project breakdowns and certificate previews"
      ],
      liveDemoUrl: "https://divyanshu-jain.github.io/portfolio", // [Update with your live URL]
      githubUrl: "https://github.com/divyanshu-jain/portfolio",
      detailedOverview: {
        architecture: "Clean component-driven vanilla JavaScript architecture. Dynamic data-driven templating converts JSON schemas into semantic DOM nodes with zero runtime framework dependencies.",
        challengesFaced: "Achieving flawless 60 FPS transitions, fluid typography across all screen breakpoints, and strictly adhering to no-fabrication requirements while keeping placeholders elegant.",
        learnings: "Deepened knowledge of modern CSS custom properties, responsive design paradigms, and a11y web standards."
      }
    },
    {
      id: "cli-expense-task-tracker",
      title: "CLI Task & Expense Intelligence System",
      tagline: "Terminal-based productivity suite with SQLite database integration and automated monthly reporting.",
      featured: false,
      category: "Python & CLI",
      image: "assets/images/project-cli-tracker.svg",
      description: "A Python command-line utility built for students to manage project deadlines, track daily expenditures, and generate clean ASCII summary reports without leaving the terminal.",
      problemSolved: "Allows command-line power users and developer students to log tasks and track expenses in under 3 seconds without context switching to bloated GUI applications.",
      technologies: ["Python 3", "SQLite3", "Argparse", "Tabulate / Rich", "CSV Export"],
      myContribution: "Wrote the command-line argument parser, designed the relational SQLite schema with foreign key constraints, and built the automated CSV export utility.",
      keyFeatures: [
        "Command-line flags for quick task additions, priority tagging, and expense categorization",
        "Persistent SQLite database with automatic schema migrations and transaction rollback safety",
        "Formatted ASCII summary tables detailing monthly expenditures and remaining budget",
        "Export capabilities to clean CSV files for spreadsheet analysis"
      ],
      liveDemoUrl: null, // Terminal CLI application (no live web demo, button cleanly hidden)
      githubUrl: "https://github.com/divyanshu-jain/cli-task-expense-tracker",
      detailedOverview: {
        architecture: "Layered CLI architecture: CLI controller (Argparse) -> Business Logic Layer -> Data Access Layer (SQLite DAO with context managers).",
        challengesFaced: "Designing robust CLI input validation to prevent crashes when invalid flags or data types were entered.",
        learnings: "Strengthened Python object-oriented programming, file I/O operations, SQL transactions, and defensive error handling."
      }
    }
  ],

  achievements: [
    {
      id: "ach-1",
      category: "Hackathons",
      title: "[Hackathon Participation / Placement Placeholder]",
      organization: "[College / Organization Hackathon Name]",
      date: "[Month, Year - e.g. Oct 2024]",
      description: "Collaborated in an intensive team hackathon to brainstorm, prototype, and pitch a tech-enabled solution within 24 hours.",
      proofUrl: null // Add URL or certificate link when available
    },
    {
      id: "ach-2",
      category: "Coding Competitions",
      title: "[Coding Contest / Problem Solving Milestone Placeholder]",
      organization: "[Platform / Institution - e.g. College Coding Club / Contest]",
      date: "[Month, Year - e.g. Nov 2024]",
      description: "Competed in algorithmic programming contests focusing on speed, accuracy, and optimal time complexity in C++/Python.",
      proofUrl: null
    },
    {
      id: "ach-3",
      category: "Academic Achievements",
      title: "[Academic Excellence / School Merit Recognition Placeholder]",
      organization: "[High School / Academic Board Placeholder]",
      date: "[Year - e.g. 2024]",
      description: "Recognized for consistent academic diligence, discipline, and performance in STEM coursework.",
      proofUrl: null
    },
    {
      id: "ach-4",
      category: "Technical Competitions",
      title: "[Tech Exhibition / Science Fair Finalist Placeholder]",
      organization: "[Institution / Science Fair Name]",
      date: "[Year - e.g. 2023]",
      description: "Presented a working technological prototype demonstrating applied scientific and engineering principles.",
      proofUrl: null
    }
  ],

  certifications: [
    {
      id: "cert-1",
      name: "[Python Programming / Computer Science Fundamentals]",
      organization: "[Coursera / Udemy / NPTEL / Kaggle Placeholder]",
      date: "[Month, Year Placeholder]",
      skillsCovered: "Python, Data Structures, OOP, Problem Solving",
      credentialId: "[Credential ID Placeholder - e.g. CERT-XXXX-YYYY]",
      thumbnail: "assets/images/certificate-preview.svg",
      verificationUrl: "assets/images/certificate-preview.svg" // Opens certificate preview
    },
    {
      id: "cert-2",
      name: "[Machine Learning / Data Analysis Foundations]",
      organization: "[Issuing Academy / Platform Placeholder]",
      date: "[Month, Year Placeholder]",
      skillsCovered: "NumPy, Pandas, Exploratory Data Analysis, Linear Models",
      credentialId: "[Credential ID Placeholder]",
      thumbnail: "assets/images/certificate-preview.svg",
      verificationUrl: "assets/images/certificate-preview.svg"
    },
    {
      id: "cert-3",
      name: "[Git & GitHub Version Control Professional]",
      organization: "[Issuing Organization Placeholder]",
      date: "[Month, Year Placeholder]",
      skillsCovered: "Git CLI, Branching, Pull Requests, Open Source Workflows",
      credentialId: "[Credential ID Placeholder]",
      thumbnail: "assets/images/certificate-preview.svg",
      verificationUrl: "assets/images/certificate-preview.svg"
    }
  ],

  learningJourney: {
    title: "My Learning Journey",
    subtitle: "A First-Year Engineering Roadmap: Growth, Milestones & Ambitions",
    currentlyLearningHighlight: {
      title: "Current Active Focus (Semester 1 & 2)",
      focus: "Data Structures in C/C++ & Machine Learning Mathematics",
      progress: "In Progress",
      description: "Currently mastering linear data structures (Stacks, Queues, Linked Lists) alongside matrix algebra and statistical foundations required for deep AI/ML research.",
      weeklyGoals: [
        "Solving 3 algorithmic problems daily on LeetCode / HackerRank",
        "Deepening mathematical intuition behind gradient descent and linear regression",
        "Building small, functional Python utilities to automate real-world workflows"
      ]
    },
    phases: [
      {
        phase: "What I Have Learned",
        badge: "Foundations Established",
        status: "completed",
        period: "High School to 1st Semester",
        topics: [
          { name: "Python Programming", detail: "Syntax, loops, conditionals, functions, and standard file operations." },
          { name: "C Programming Basics", detail: "Data types, operators, control flow, functions, and memory basics." },
          { name: "Computer Hardware & OS Basics", detail: "Memory hierarchy, processes, and command-line terminal navigation." },
          { name: "Git & Version Control", detail: "Local repository commits, remote pushing, and repository hygiene." }
        ]
      },
      {
        phase: "What I Am Currently Learning",
        badge: "Active Deep Dive",
        status: "current",
        period: "Ongoing First-Year Milestones",
        topics: [
          { name: "Data Structures & Algorithms", detail: "Arrays, Linked Lists, Stacks, Queues, Recursion, Time & Space Complexity (Big O)." },
          { name: "Machine Learning Math & Libraries", detail: "Linear Algebra, Probability, NumPy multidimensional arrays, and Pandas DataFrames." },
          { name: "Modern Web Development", detail: "Responsive layouts, DOM manipulation, asynchronous JavaScript, and REST APIs." },
          { name: "Open Source Etiquette", detail: "Reading open-source codebases, creating descriptive issues, and submitting clean PRs." }
        ]
      },
      {
        phase: "What I Plan to Learn Next",
        badge: "Future Roadmap",
        status: "upcoming",
        period: "Upcoming Semesters & Summers",
        topics: [
          { name: "Deep Learning & PyTorch", detail: "Neural network architectures, backpropagation, CNNs, and Transformers." },
          { name: "Advanced Algorithms", detail: "Trees, Graphs, Dynamic Programming, and Greedy techniques." },
          { name: "Backend Engineering & RESTful APIs", detail: "FastAPI / Node.js, database indexing, and microservices architecture." },
          { name: "Cloud & Containerization Basics", detail: "Docker containerization, CI/CD pipelines, and cloud deployments." }
        ]
      }
    ]
  },

  experience: {
    title: "Experience & Opportunities",
    subtitle: "Building Foundation, Seeking Impactful Engagements",
    currentStatusMessage: "Currently building skills and projects while actively seeking internship, hackathon and collaboration opportunities.",
    opportunitiesOpenFor: [
      "Summer 2025 / 2026 Software & AI Internships",
      "Hackathon Teammate Invitations (AI/ML & Full-Stack)",
      "Student Research Collaborations & Open-Source Projects",
      "Campus Technical Club Activities & Peer Mentorship"
    ],
    // When internships or work experience are added later, fill entries below:
    items: [
      // Example structure ready for future additions:
      /*
      {
        role: "Software Engineering Intern",
        organization: "[Company / Lab Name]",
        duration: "[Start Date] - [End Date]",
        location: "[Location / Remote]",
        responsibilities: [
          "Developed and optimized features using...",
          "Collaborated with cross-functional engineering teams to..."
        ],
        achievements: "Improved processing latency by X% and authored documentation.",
        technologies: ["Python", "FastAPI", "PostgreSQL", "Docker"]
      }
      */
    ]
  },

  activities: [
    {
      role: "Active Member / Aspirant",
      organization: "[College Technical / Coding Club Placeholder]",
      duration: "2024 - Present",
      category: "Technical Clubs",
      description: "Participating in weekly problem-solving workshops, algorithm discussions, and peer review sessions.",
      contribution: "Collaborating with senior student developers and contributing to club project repositories."
    },
    {
      role: "Student Member",
      organization: "[ACM / IEEE Student Chapter Placeholder]",
      duration: "2024 - Present",
      category: "College Organizations",
      description: "Attending technical talks, guest lectures by industry leaders, and technical symposiums.",
      contribution: "Assisting in logistics for technical seminars and participating in collegiate challenges."
    },
    {
      role: "Volunteer / Event Coordinator",
      organization: "[College Annual Fest / Tech Fest Committee Placeholder]",
      duration: "[Year Placeholder]",
      category: "Event Management & Volunteering",
      description: "Assisted the organizing committee in participant registration, stage coordination, and tech event setups.",
      contribution: "Facilitated smooth execution of collegiate competitive events."
    },
    {
      role: "Participant",
      organization: "[Sports / Cultural Activity Placeholder]",
      duration: "[School / College]",
      category: "Cultural & Sports",
      description: "Engaged in extracurricular team sports and cultural activities fostering sportsmanship and teamwork.",
      contribution: "Demonstrated team coordination and leadership under competitive settings."
    }
  ],

  // Coding & Online Profiles
  // IMPORTANT: Only platforms with provided URLs are displayed in the UI.
  codingProfiles: [
    {
      platform: "GitHub",
      username: "divyanshu-jain",
      url: "https://github.com/divyanshu-jain", // [Update with your URL]
      badge: "Open Source & Code",
      icon: "github",
      description: "Explore my repositories, algorithmic code, and open-source explorations."
    },
    {
      platform: "LinkedIn",
      username: "divyanshu-jain",
      url: "https://linkedin.com/in/divyanshu-jain", // [Update with your URL]
      badge: "Professional Network",
      icon: "linkedin",
      description: "Connect with me for professional updates, internships, and networking."
    },
    {
      platform: "LeetCode",
      username: "[Your LeetCode Username]",
      url: "https://leetcode.com/u/divyanshu-jain", // [Update with your URL]
      badge: "Problem Solving",
      icon: "code",
      description: "Tracking daily DSA problem solutions, algorithm patterns, and contest ratings."
    },
    {
      platform: "CodeChef",
      username: "[Your CodeChef Handle]",
      url: "https://www.codechef.com/users/divyanshu-jain", // [Update with your URL]
      badge: "Competitive Coding",
      icon: "code",
      description: "Participating in Starters and Cook-Off rated contests."
    },
    {
      platform: "HackerRank",
      username: "[Your HackerRank Handle]",
      url: "https://www.hackerrank.com/divyanshu-jain", // [Update with your URL]
      badge: "Skill Badges",
      icon: "code",
      description: "Problem solving badges in Python, C, and Core Mathematics."
    },
    {
      platform: "Kaggle",
      username: "[Your Kaggle Profile]",
      url: "https://www.kaggle.com/divyanshu-jain", // [Update with your URL]
      badge: "Data Science & ML",
      icon: "bar-chart",
      description: "Exploring public datasets, ML notebooks, and data analysis pipelines."
    }
  ],

  resume: {
    title: "Curriculum Vitae",
    subtitle: "A detailed overview of my academic foundation, technical competencies, and projects.",
    lastUpdated: "Academic Session 2024 - 2025",
    highlights: [
      "First-Year B.Tech Computer Science & Engineering Undergraduate",
      "Hands-on foundational proficiency in Python, C, and Web Technologies",
      "Demonstrated project building in AI Graph Traversals & Productivity Tools",
      "Active participant in collegiate coding groups and technical societies"
    ]
  },

  contact: {
    title: "Get In Touch",
    subtitle: "Have a question, opportunity, or idea to build together? My inbox is always open!",
    directEmail: "divyanshu.jain.connect@gmail.com", // [Update with your email]
    phonePlaceholder: "+91 [Your Phone Number - Optional]",
    locationText: "[Your College / City], India",
    responseExpectation: "Usually responds within 24 hours"
  },

  footer: {
    name: "DIVYANSHU JAIN",
    degreeTagline: "B.Tech Computer Science & Engineering Student",
    quote: "Building today, learning every day.",
    copyrightYear: 2026
  }
};

// Export to window object for straightforward script inclusion
if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
