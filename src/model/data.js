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
        title: "BOM Navigator: Simplifying Bill of Materials Management",
        short: "Python-based web application to simplify navigating and extracting data from complex bill of materials (BOMs). It automates data retrieval from an ERP system, allowing users to browse BOM structures and integrate historical sales data for informed decision-making.",
        img: "bom-nav-thumbmail.png",
        project_url: "/projects/bom-nav/bom-nav.html",
        links: [],
        tags: ["python", "flask", "sql", "html", "javascript", "backend", "frontend", "api", "mech eng", "railway"]
    },

    {
        id: 3,
        title: "SharePoint Intranet: Building a Collaborative Hub",
        short: "Led a self-organized team to design and implement a local intranet site with Microsoft SharePoint, achieving high user satisfaction and ongoing engagement.",
        img: "intranet-thumbnail.png",
        project_url: "/projects/intranet/intranet.html",
        links: [],
        tags: ["sharepoint", "team lead", "agile", "frontend", "railway"]
    },

    {
        id: 4,
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
        id: 5,
        title: "Catia VBA Refactoring: Breathing New Life into Legacy Code",
        short: "Successfully refactored a Catia VBA script using MVC architecture, improving performance and adding new functions to adapt to updated data structures.",
        img: "catia-thumbnail.png",
        project_url: "/projects/catia/catia.html",
        links: [],
        tags: ["vba", "cad", "backend", "frontend", "refactoring", "railway"]
    },

    {
        id: 6,
        title: "MeisterTask Automation: Streamlining Task Management with Python",
        short: "Python script leveraging the MeisterTask API to automate task creation from absence data in Excel. The script later evolved to handle data import and export between MeisterTask and various formats.",
        img: "meistertask-thumbnail.png",
        project_url: "/projects/meistertask/meistertask.html",
        links: [],
        tags: ["python", "api", "backend"]
    },

    {
        id: 7,
        title: "Coding Cookbook: My Personal Programming Knowledge Base",
        short: "Comprehensive coding cookbook repository on GitHub to document and organize coding learnings and shortcuts.",
        img: "cookbook-thumbnail.png",
        project_url: "/projects/cookbook/cookbook.html",
        links: [{ "title": "GitHub repository", "type": "github", "url": "https://github.com/ralf-tischer/coding-cookbook" }],
        tags: ["markdown"]
    },

    {
        id: 8,
        title: "Markdown TOC: Building an Automated Table of Contents",
        short: "Python command line tool to automatically generate a table of contents for markdown files, enhancing documentation practices.",
        img: "md-toc-thumbnail.png",
        project_url: "/projects/md-toc/md-toc.html",
        links: [{ "title": "GitHub repository", "type": "github", "url": "https://github.com/ralf-tischer/md-toc" }],
        tags: ["python", "markdown", "backend"]
    },

    {
        id: 9,
        title: "Product Backlog UI: Building a React frontend for Agile Projects",
        short: "Responsive product backlog app using React, gaining deep insights into component-based architecture, state management, and responsive design.",
        img: "pl-ui-thumbnail.png",
        project_url: "/projects/pl-ui/pl-ui.html",
        links: [
                { "title": "Demo", "type": "www", "url": "https://ralf-tischer.github.io/product-backlog-react-ui/" },
                { "title": "GitHub repository", "type": "github", "url": "https://github.com/ralf-tischer/product-backlog-react-ui" }
        ],
        tags: ["javascript", "react", "html", "api", "frontend", "agile"]
    },

    {
        id: 10,
        title: "Product Backlog API: Building a secure Flask backend for Database Access",
        short: "Secure backend for a product backlog app using SQL, Flask, and JWT tokens, enhancing experience with database management and API design.",
        img: "pl-api-thumbnail.png",
        project_url: "/projects/pl-api/pl-api.html",
        links: [
            { "title": "Demo", "type": "www", "url": "https://ralf-tischer.github.io/product-backlog-react-ui/" },
            { "title": "GitHub repository", "type": "github", "url": "https://github.com/ralf-tischer/product-backlog-flask-api" }
        ],
        tags: ["python", "flask", "api", "sql", "backend"]
    },

];


const TAGS = [
    { tag_short: "python", tag_long: "Programming language Python.", color_text: "black", color_bg: "#ddd" },
    { tag_short: "flask", tag_long: "A popular Python web framework.", color_text: "black", color_bg: "#ddd" },
    { tag_short: "sharepoint", tag_long: "Microsoft Sharepoint.", color_text: "black", color_bg: "#ddd" },
    { tag_short: "javascript", tag_long: "Web programming language Javascript.", color_text: "black", color_bg: "#ddd" },
    { tag_short: "html", tag_long: "Hypertext markup language.", color_text: "black", color_bg: "#ddd" },
    { tag_short: "vba", tag_long: "Microsoft Visual Basic for Applications.", color_text: "black", color_bg: "#ddd" },
    { tag_short: "markdown", tag_long: "Generic text format markdown, for example used in README.md.", color_text: "black", color_bg: "#ddd" },
    { tag_short: "react", tag_long: "Javascript library for web and native user interfaces.", color_text: "black", color_bg: "#ddd" },
    { tag_short: "sql", tag_long: "Structured Query Language for database creation and manipulation.", color_text: "black", color_bg: "#ddd" },
    { tag_short: "api", tag_long: "Application Programming Interface to allow communication between two applications.", color_text: "black", color_bg: "#ddd" },
    { tag_short: "cad", tag_long: "Computer Aided Design.", color_text: "black", color_bg: "#ddd" },
    { tag_short: "frontend", tag_long: "Graphical user interface of an application.", color_text: "black", color_bg: "#ddd" },
    { tag_short: "backend", tag_long: "Server-side software part of an application.", color_text: "black", color_bg: "#ddd" },
    { tag_short: "refactoring", tag_long: "Restructuring code, while not changing its original functionality.", color_text: "black", color_bg: "#ddd" },
    { tag_short: "mech eng", tag_long: "Mechanical engineering.", color_text: "black", color_bg: "#ddd" },
    { tag_short: "team lead", tag_long: "Leading and developing a team.", color_text: "black", color_bg: "#ddd" },
    { tag_short: "project mgmt", tag_long: "Managing projects.", color_text: "black", color_bg: "#ddd" },
    { tag_short: "agile", tag_long: "Mindset to breaks projects down into dynamic phases.", color_text: "black", color_bg: "#ddd" },
    { tag_short: "railway", tag_long: "Railway inductry.", color_text: "black", color_bg: "#ddd" }
]

const ALL_TAGS = ["python", "flask", "sharepoint", "javascript", "html", "vba", "markdown", "react", "sql", "api", "cad", "frontend", "backend", "refactoring", "mech eng", "team lead", "project mgmt", "agile", "railway"];

const CONTACT = [
    { "title": "LinkedIn", "type": "linkedin", "url": "https://www.linkedin.com/in/ralftischer/" },
    { "title": "GitHub", "type": "github", "url": "https://github.com/ralf-tischer/" },
    { "title": "Email", "type": "email", "url": "mailto:ralf.tischer.1969@gmail.com" }
];

exports.myProjects = PROJECTS;
exports.myTags = TAGS;
exports.mySkills = ALL_TAGS;
exports.myContact = CONTACT;

