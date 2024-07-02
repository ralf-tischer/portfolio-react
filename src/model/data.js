const PROJECTS = [
    {
        id: 1,
        title: "Engineering Team Lead: Developing Railway Components",
        short: "Led an engineering team for over twenty years, optimizing processes and developing complex mechanical components for major railway projects.",
        img: "mech-eng-thumbnail.jpg",
        project_url: "/projects/mech-eng/mech-eng.html",
        links: [
            { "title": "Reference", "type": "www", "url": "https://www.wabteccorp.com/transit-rail/braking-systems/bogie-brake-equipment" }
        ],
        tags: ["mech eng", "team lead", "project mgmt", "agile", "railway"]
    },

    {
        id: 2,
        title: "Project Engineer: From Customer Requirement to Validated Product",
        short: "Began career as a project engineer, managing technical offers and leading product development for mechanical brake systems in railway projects.",
        img: "project-eng-thumbnail.jpg",
        project_url: "/projects/project-eng/project-eng.html",
        links: [],
        tags: ["project mgmt", "railway", "mech eng"]
    },
    
    {
        id: 3,
        title: "Product Management: Leading Product Development and Standardization",
        short: "Led product management and acted as a product manager, focusing on design and cost improvements, subcontracting, and product standardization.",
        img: "prod-man-thumbnail.png",
        project_url: "/projects/prod-man/prod-man.html",
        links: [
            { "title": "Reference", "type": "www", "url": "https://www.wabteccorp.com/transit-rail/braking-systems/bogie-brake-equipment" }
        ],
        tags: ["mech eng", "team lead", "project mgmt", "railway"]
    },

    {
        id: 4,
        title: "SharePoint Intranet: Building a Collaborative Hub",
        short: "Led a self-organized team to design and implement a local intranet site with Microsoft SharePoint, achieving high user satisfaction and ongoing engagement.",
        img: "intranet-thumbnail.png",
        project_url: "/projects/intranet/intranet.html",
        links: [],
        tags: ["sharepoint", "team lead", "agile", "frontend", "railway"]
    },
        
    {
        id: 5,
        title: "BOM Navigator: Simplifying Bill of Materials Management",
        short: "Python-based web application to simplify navigating and extracting data from complex bill of materials (BOMs). It automates data retrieval from an ERP system, allowing users to browse BOM structures and integrate historical sales data for informed decision-making.",
        img: "bom-nav-thumbmail.png",
        project_url: "/projects/bom-nav/bom-nav.html",
        links: [],
        tags: ["python", "flask", "sql", "html", "javascript", "backend", "frontend", "api", "mech eng", "railway"]
    },

    {
        id: 6,
        title: "Value Analysis and Value Engineering: Focusing on Customer Value",
        short: "Certified value analyst with expertise in value analysis projects, achieving significant product developments and cost reductions through advanced methodologies.",
        img: "vave-thumbnail.png",
        project_url: "/projects/vave/vave.html",
        links: [],
        tags: ["mech eng", "project mgmt", "railway"]
    },

    {
        id: 7,
        title: "Draw Start Player: Gamifying Decision-Making",
        short: "Interactive web-based tool for board gamers. It runs on mobile devices, using touch detection and visual effects to randomly select a starting player among multiple participants.",
        img: "start-player-video.gif",
        project_url: "/projects/start-player/start-player.html",
        links: [
            { "title": "Demo (needs touchscreen)", "type": "www", "url": "https://ralf-tischer.github.io/bgt/module1.html" },
            { "title": "GitHub repository", "type": "github", "url": "https://github.com/ralf-tischer/bgt" },
            { "title": "Making of", "type": "youtube", "url": "https://youtu.be/31NmYvYz69s" }
        ],
        tags: ["html", "javascript", "frontend"]
    },

    {
        id: 8,
        title: "Product Backlog UI: Building a React frontend for Agile Projects",
        short: "Responsive product backlog app using React, gaining deep insights into component-based architecture, state management, and responsive design.",
        img: "pl-ui-thumbnail.png",
        project_url: "/projects/pl-ui/pl-ui.html",
        links: [
            { "title": "Demo. Username: demo, Password: tischer", "type": "www", "url": "https://ralf-tischer.github.io/product-backlog-react-ui/" },
            { "title": "GitHub repository", "type": "github", "url": "https://github.com/ralf-tischer/product-backlog-react-ui" }
        ],
        tags: ["javascript", "react", "html", "api", "frontend", "agile"]
    },

    {
        id: 9,
        title: "Product Backlog API: Building a secure Flask backend for Database Access",
        short: "Secure backend for a product backlog app using SQL, Flask, and JWT tokens, enhancing experience with database management and API design.",
        img: "pl-api-thumbnail.png",
        project_url: "/projects/pl-api/pl-api.html",
        links: [
            { "title": "Demo. Username: demo, Password: tischer", "type": "www", "url": "https://ralf-tischer.github.io/product-backlog-react-ui/" },
            { "title": "GitHub repository", "type": "github", "url": "https://github.com/ralf-tischer/product-backlog-flask-api" }
        ],
        tags: ["python", "flask", "api", "sql", "backend"]
    },

    {
        id: 10,
        title: "Coding Cookbook: My Personal Programming Knowledge Base",
        short: "Comprehensive coding cookbook repository on GitHub to document and organize coding learnings and shortcuts.",
        img: "cookbook-thumbnail.gif",
        project_url: "/projects/cookbook/cookbook.html",
        links: [{ "title": "GitHub repository", "type": "github", "url": "https://github.com/ralf-tischer/coding-cookbook" }],
        tags: ["markdown", "python", "javascript", "vba"]
    },

    {
        id: 11,
        title: "Markdown TOC: Building an Automated Table of Contents",
        short: "Python command line tool to automatically generate a table of contents for markdown files, enhancing documentation practices.",
        img: "md-toc-thumbnail.png",
        project_url: "/projects/md-toc/md-toc.html",
        links: [{ "title": "GitHub repository", "type": "github", "url": "https://github.com/ralf-tischer/md-toc" }],
        tags: ["python", "markdown", "backend"]
    },

    {
        id: 12,
        title: "MeisterTask Automation: Streamlining Task Management with Python",
        short: "Python script leveraging the MeisterTask API to automate task creation from absence data in Excel. The script later evolved to handle data import and export between MeisterTask and various formats.",
        img: "meistertask-thumbnail.png",
        project_url: "/projects/meistertask/meistertask.html",
        links: [],
        tags: ["python", "api", "backend"]
    },

    {
        id: 13,
        title: "Artificial Intelligence: AI for Daily Tasks and Engineering Projects",
        short: "Embraced AI tools for daily tasks and pursued formal training to understand and create AI models, integrating AI projects into engineering work.",
        img: "ai-thumbnail.png",
        project_url: "/projects/ai/ai.html",
        links: [],
        tags: ["mech eng", "team lead", "python"]
    },
    
    {
        id: 14,
        title: "Catia VBA Refactoring: Breathing New Life into Legacy Code",
        short: "Successfully refactored a Catia VBA script using MVC architecture, improving performance and adding new functions to adapt to updated data structures.",
        img: "catia-thumbnail.png",
        project_url: "/projects/catia/catia.html",
        links: [],
        tags: ["vba", "cad", "backend", "frontend", "refactoring", "railway"]
    }

];

const TAGS = [
    { tag_short: "python", tag_long: "Programming language Python.", color_text: "black", color_bg: "#ddd", myLevel: 4 },
    { tag_short: "flask", tag_long: "A popular Python web framework.", color_text: "black", color_bg: "#ddd", myLevel: 4 },
    { tag_short: "sharepoint", tag_long: "Microsoft Sharepoint.", color_text: "black", color_bg: "#ddd", myLevel: 3 },
    { tag_short: "javascript", tag_long: "Web programming language Javascript.", color_text: "black", color_bg: "#ddd", myLevel: 3 },
    { tag_short: "html", tag_long: "Hypertext markup language.", color_text: "black", color_bg: "#ddd", myLevel: 4 },
    { tag_short: "vba", tag_long: "Microsoft Visual Basic for Applications.", color_text: "black", color_bg: "#ddd", myLevel: 3 },
    { tag_short: "markdown", tag_long: "Generic text format markdown, for example used in README.md.", color_text: "black", color_bg: "#ddd", myLevel: 4 },
    { tag_short: "react", tag_long: "Javascript library for web and native user interfaces.", color_text: "black", color_bg: "#ddd", myLevel: 3 },
    { tag_short: "sql", tag_long: "Structured Query Language for database creation and manipulation.", color_text: "black", color_bg: "#ddd", myLevel: 4 },
    { tag_short: "api", tag_long: "Application Programming Interface to allow communication between two applications.", color_text: "black", color_bg: "#ddd", myLevel: 3 },
    { tag_short: "cad", tag_long: "Computer Aided Design.", color_text: "black", color_bg: "#ddd", myLevel: 3 },
    { tag_short: "frontend", tag_long: "Graphical user interface of an application.", color_text: "black", color_bg: "#ddd", myLevel: 3 },
    { tag_short: "backend", tag_long: "Server-side software part of an application.", color_text: "black", color_bg: "#ddd", myLevel: 4 },
    { tag_short: "refactoring", tag_long: "Restructuring code, while not changing its original functionality.", color_text: "black", color_bg: "#ddd", myLevel: 3 },
    { tag_short: "mech eng", tag_long: "Mechanical engineering.", color_text: "black", color_bg: "#ddd", myLevel: 5 },
    { tag_short: "team lead", tag_long: "Leading and developing a team.", color_text: "black", color_bg: "#ddd", myLevel: 5 },
    { tag_short: "project mgmt", tag_long: "Managing projects.", color_text: "black", color_bg: "#ddd", myLevel: 5 },
    { tag_short: "agile", tag_long: "Mindset to breaks projects down into dynamic phases.", color_text: "black", color_bg: "#ddd", myLevel: 4 },
    { tag_short: "railway", tag_long: "Railway inductry.", color_text: "black", color_bg: "#ddd", myLevel: 5 }
]

const ALL_TAGS = ["mech eng", "team lead", "project mgmt", "railway", "python", "javascript", "html", "markdown", "frontend", "backend", "flask", "react", "sql", "sharepoint", "vba", "api", "cad", "refactoring", "agile"];

const CONTACT = [
    { "title": "LinkedIn", "type": "linkedin", "url": "https://www.linkedin.com/in/ralftischer/" },
    { "title": "GitHub", "type": "github", "url": "https://github.com/ralf-tischer/" },
    { "title": "Email", "type": "email", "url": "mailto:ralf.tischer.1969@gmail.com" }
];

exports.myProjects = PROJECTS;
exports.myTags = TAGS;
exports.mySkills = ALL_TAGS;
exports.myContact = CONTACT;

