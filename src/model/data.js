const PROJECTS = [
    {   id: 1, 
        title: "Engineering Team Lead: Developing Railway Components", 
        short: "Led an engineering team for over twenty years, optimizing processes and developing complex mechanical components for major railway projects.",
        img: "mech-eng-thumbnail.jpg",
        project_url: "/projects/mech-eng/mech-eng.html"	,
        links: [],
        tags: ["mech eng", "team lead", "project mgmt", "agile"] },

    {   id: 2, 
        title: "BOM Navigator: Simplifying Bill of Materials Management", 
        short: "Python-based web application to simplify navigating and extracting data from complex bill of materials (BOMs). It automates data retrieval from an ERP system, allowing users to browse BOM structures and integrate historical sales data for informed decision-making.",
        img: "bom-nav-thumbmail.png",
        project_url: "/projects/bom-nav/bom-nav.html"	,
        links: [],
        tags: ["python", "flask", "sql", "html", "javascript", "backend", "frontend", "api", "mech eng", "office"] },
    
    {   id: 3, 
        title: "SharePoint Intranet: Building a Collaborative Hub", 
        short: "Led a self-organized team to design and implement a user-friendly intranet using Microsoft SharePoint. The platform streamlined information sharing, boosted user engagement, and earned a near-perfect rating in a user poll.",
        img: "intranet-thumbnail.png",
        project_url: "/projects/intranet/intranet.html"	,
        links: [],
        tags: ["sharepoint", "team lead", "agile", "frontend", "office"] },

    {   id: 4, 
        title: "Draw Start Player: Gamifying Decision-Making", 
        short: "Interactive web-based tool for board gamers. It runs on mobile devices, using touch detection and visual effects to randomly select a starting player among multiple participants.",
        img: "start-player-video.gif",
        project_url: "/projects/start-player/start-player.html"	,
        links: [{"title": "Demo (needs touchscreen)", "type": "www", "url": "https://ralf-tischer.github.io/bgt/module1.html"},
                {"title": "GitHub repository", "type": "github", "url": "https://github.com/ralf-tischer/bgt"}, 
                {"title": "Making of", "type": "youtube", "url": "https://youtu.be/31NmYvYz69s"}],
        tags: ["html", "javascript", "frontend", "fun"] },
        
    {   id: 5, 
        title: "Catia VBA Refactoring: Breathing New Life into Legacy Code", 
        short: "Successfully refactored a critical Catia VBA script using an MVC architecture to enhance performance and adapt to data structure changes.",
        img: "catia-thumbmail.png",
        project_url: "/project"	,
        links: [],
        tags: ["vba", "cad", "backend", "frontend", "refactoring", "office"] },

    {   id: 6, 
        title: "MeisterTask Automation: Streamlining Task Management with Python", 
        short: "Python script leveraging the MeisterTask API to automate task creation from absence data in Excel. The script later evolved to handle data import and export between MeisterTask and various formats.",
        img: "meistertask-thumbnail.png",
        project_url: "/project"	,
        links: [],
        tags: ["python", "api", "backend", "office"] },

    {   id: 7, 
        title: "Coding Cookbook: Building Your Personal Programming Knowledge Base", 
        short: "Developed a personal `Coding Cookbook` to document and organize learnings throughout my programming journey. This project evolved from a simple Google Doc to a structured Markdown file and ultimately a collaborative hub on GitHub.",
        img: "dummy.png",
        project_url: "/project"	,
        links: [],
        tags: ["markdown", "office", "fun"] },

    {   id: 8, 
        title: "Markdown TOC: Building an Automated Table of Contents", 
        short: "Python command-line script to automatically generate tables of contents for Markdown files. This project honed Python text parsing and file handling skills, while exploring the potential of AI for code evaluation.",
        img: "dummy.png",
        project_url: "/project"	,
        links: [],
        tags: ["python", "markdown", "backend", "office"] },
  
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
    { tag_short: "office", tag_long: "For professional use.", color_text: "black", color_bg: "#ddd" },
    { tag_short: "cad", tag_long: "Computer Aided Design.", color_text: "black", color_bg: "#ddd" },
    { tag_short: "fun", tag_long: "For personal use and fun.", color_text: "black", color_bg: "#ddd" },
    { tag_short: "frontend", tag_long: "Graphical user interface of an application.", color_text: "black", color_bg: "#ddd" },
    { tag_short: "backend", tag_long: "Server-side software part of an application.", color_text: "black", color_bg: "#ddd" },
    { tag_short: "refactoring", tag_long: "Restructuring code, while not changing its original functionality.", color_text: "black", color_bg: "#ddd" },
    { tag_short: "mech eng", tag_long: "Mechanical engineering.", color_text: "black", color_bg: "#ddd" },
    { tag_short: "team lead", tag_long: "Leading and developing a team.", color_text: "black", color_bg: "#ddd" },
    { tag_short: "project mgmt", tag_long: "Managing projects.", color_text: "black", color_bg: "#ddd" },
    { tag_short: "agile", tag_long: "Mindset to breaks projects down into dynamic phases.", color_text: "black", color_bg: "#ddd" }
]

exports.myProjects = PROJECTS;
exports.myTags = TAGS;

/*
export const getTagProperties = (tag_short) => {
    const tagData = TAGS.find(tag => tag.tag_short === tag_short);
    if (tagData) {
      return {
        tag_short: tag_short,
        tag_long: tagData.tag_long,
        color_text: tagData.color_text,
        color_bg: tagData.color_bg
      };
    } else {
      return null;
    }
  };
  */

// export default getTagProperties;


