const PROJECTS = [
    {   id: 1, 
        title: "BOM Navigator: Simplifying Bill of Materials Management", 
        short: "Python-based web application to simplify navigating and extracting data from complex bill of materials (BOMs). It automates data retrieval from an ERP system, allowing users to browse BOM structures and integrate historical sales data for informed decision-making.",
        description: "In 2023, I tackled the challenge of statically extracting Bill of Materials (BOM) data from Excel files. Recognizing the repetitive nature of the task, I opted to build a Python script, completing it within a few days. However, this ignited a passion to explore Python's full potential. I constructed a user-friendly web interface using HTML, JavaScript, and Flask. This interface allowed users to browse BOM structures by simply clicking item numbers. Additionally, nightly routines automatically retrieved data from the ERP system, keeping everything up-to-date. To further enhance functionality, I integrated an additional SQL database containing historical sales data, providing a more comprehensive view. Addressing the occasional faulty item number entry, I implemented a dedicated API service to rectify errors. This project became an invaluable business tool for myself and my engineering colleagues, streamlining daily workflows. It also served as a valuable learning experience, deepening my understanding of Flask, clean coding principles, Python classes, and effective code documentation practices (including docstrings and markdown). Furthermore, the project's utilization of Git provided valuable insights into efficient Git version control workflows.",		
        img: "bom-nav-thumbmail.png",
        project_url: "/project"	,
        status: "open",		
        links: {},
        tags: ["python", "flask", "sql", "html", "javascript", "markdown", "backend", "frontend", "api", "mech eng", "business tool"] },
    {   id: 2, 
        title: "SharePoint Intranet: Building a Collaborative Hub", 
        short: "Led a self-organized team to design and implement a user-friendly intranet using Microsoft SharePoint. The platform streamlined information sharing, boosted user engagement, and earned a near-perfect rating in a user poll.",
        description: "In early 2021, I spearheaded a self-organized working group tasked with developing a company intranet using Microsoft SharePoint. We began by collaboratively defining user needs through user stories. We then explored the potential of SharePoint and Office 365 to create a user-friendly and informative platform. The project progressed swiftly, and by mid-2021, we launched the intranet site to over 200 colleagues. To ensure user adoption, I conducted a live demonstration showcasing its functionalities. The site rapidly gained traction, attracting content contributions from various departments. Regular user feedback, including an impressive near-5/5 rating in a user poll, confirmed its positive impact on internal communication and collaboration. My role extended beyond the initial development phase. As of early 2024, I continue to maintain the site as an administrator, ensuring its ongoing relevance with fresh content.",		
        img: "dummy.png",
        project_url: "/project"	,
        status: "open",		
        links: {},
        tags: ["sharepoint", "team lead", "agile", "frontend", "business tool"] },
    {   id: 3, 
        title: "Draw Start Player: Gamifying Decision-Making", 
        short: "Interactive web-based tool for board gamers. It runs on mobile devices, using touch detection and visual effects to randomly select a starting player among multiple participants.",
        description: "An essential Catia VBA script responsible for automating the creation and population of file blocks within 2D drawings required a significant update due to a data structure modification.  Instead of applying minor changes, I seized the opportunity to completely refactor the script, leveraging the Model-View-Controller (MVC) architecture. This strategic refactoring unearthed several inefficiencies within the code, enabling me to significantly improve its performance. Furthermore, I introduced new functionalities to accommodate the evolving data structure requirements. While revisiting a more traditional language like VBA presented initial challenges, the project ultimately broadened my programming foundation. I  reinforced valuable problem-solving skills and gained a deeper understanding of how core software design principles can be universally applied, even in environments with limited tooling support.",		
        img: "dummy.png",
        project_url: "/project"	,
        status: "open",		
        links: {},
        tags: ["html", "javascript", "frontend", "fun"] },
    {   id: 4, 
        title: "Catia VBA Refactoring: Breathing New Life into Legacy Code", 
        short: "Successfully refactored a critical Catia VBA script using an MVC architecture to enhance performance and adapt to data structure changes.",
        description: "In late 2022, I embarked on a project to explore the potential of web technologies for mobile-like experiences. With board gamers in mind, I developed 'Draw Start Player`, a web tool that simplifies the process of choosing a starting player. This interactive tool utilizes HTML, CSS, and JavaScript to mimic a smartphone app. Players simply tap the screen with their fingertips, and the application initiates a countdown before randomly selecting a winner through engaging visual effects. This project served as a valuable learning experience. I delved into the fascinating world of touch detection within web development and explored the creation of captivating visual effects using HTML graphics. Furthermore, I gained practical experience with setting up and utilizing a GitHub repository for version control.",		
        img: "dummy.png",
        project_url: "/project"	,
        status: "open",		
        links: {},
        tags: ["vba", "cad", "refactoring", "business tool"] },
    {   id: 5, 
        title: "MeisterTask Automation: Streamlining Task Management with Python", 
        short: "Python script leveraging the MeisterTask API to automate task creation from absence data in Excel. The script later evolved to handle data import and export between MeisterTask and various formats.",
        description: "In 2022, I tackled the repetitive task of manually creating absence-related tasks in MeisterTask, a popular Kanban tool used by my team. To streamline this process, I developed a Python script that automates task creation based on data extracted from an Excel file containing team member absence periods. The script utilizes the MeisterTask API, allowing programmatic interaction with the platform. This automation significantly reduces manual effort and ensures consistent task creation. The project's scope expanded further, incorporating functionalities for importing tasks and additional information from MeisterTask into other formats. This project served as a springboard for deepening my technical expertise. I actively explored the use of Python classes to structure code effectively. Additionally, I gained practical experience in utilizing APIs for efficient data exchange with external platforms. Notably, the project instilled a strong foundation in Git workflows, a cornerstone of collaborative development practices.",		
        img: "dummy.png",
        project_url: "/project"	,
        status: "open",		
        links: {},
        tags: ["python", "backend", "business tool"] },
    {   id: 4, 
        title: "Catia VBA Refactoring: Breathing New Life into Legacy Code", 
        short: "Successfully refactored a critical Catia VBA script using an MVC architecture to enhance performance and adapt to data structure changes.",
        description: "In late 2022, I embarked on a project to explore the potential of web technologies for mobile-like experiences. With board gamers in mind, I developed 'Draw Start Player`, a web tool that simplifies the process of choosing a starting player. This interactive tool utilizes HTML, CSS, and JavaScript to mimic a smartphone app. Players simply tap the screen with their fingertips, and the application initiates a countdown before randomly selecting a winner through engaging visual effects. This project served as a valuable learning experience. I delved into the fascinating world of touch detection within web development and explored the creation of captivating visual effects using HTML graphics. Furthermore, I gained practical experience with setting up and utilizing a GitHub repository for version control.",		
        img: "dummy.png",
        project_url: "/project"	,
        status: "open",		
        links: {},
        tags: ["vba", "cad", "refactoring", "business tool"] },
    {   id: 5, 
        title: "MeisterTask Automation: Streamlining Task Management with Python", 
        short: "Python script leveraging the MeisterTask API to automate task creation from absence data in Excel. The script later evolved to handle data import and export between MeisterTask and various formats.",
        description: "In 2022, I tackled the repetitive task of manually creating absence-related tasks in MeisterTask, a popular Kanban tool used by my team. To streamline this process, I developed a Python script that automates task creation based on data extracted from an Excel file containing team member absence periods. The script utilizes the MeisterTask API, allowing programmatic interaction with the platform. This automation significantly reduces manual effort and ensures consistent task creation. The project's scope expanded further, incorporating functionalities for importing tasks and additional information from MeisterTask into other formats. This project served as a springboard for deepening my technical expertise. I actively explored the use of Python classes to structure code effectively. Additionally, I gained practical experience in utilizing APIs for efficient data exchange with external platforms. Notably, the project instilled a strong foundation in Git workflows, a cornerstone of collaborative development practices.",		
        img: "dummy.png",
        project_url: "/project"	,
        status: "open",		
        links: {},
        tags: ["python", "backend", "business tool"] },
    {   id: 6, 
        title: "Coding Cookbook: Building Your Personal Programming Knowledge Base", 
        short: "Developed a personal `Coding Cookbook` to document and organize learnings throughout my programming journey. This project evolved from a simple Google Doc to a structured Markdown file and ultimately a collaborative hub on GitHub.",
        description: "This ongoing project began in my early coding days as a personal repository for documenting my learnings. Initially, it existed as a simple document stored on Google Cloud. Recognizing the potential for increased organization and accessibility, I transitioned the information into a single Markdown file. This shift provided a more structured format for my notes, making them easier to navigate and review. As my coding skills matured, the desire for collaboration emerged. To foster a more interactive learning environment, I migrated the entire `Coding Cookbook` to a dedicated GitHub repository. This project transcends simple note-taking. It embodies my evolving approach to knowledge acquisition. By documenting my learnings, I solidify my understanding and facilitate future recall. Moreover, the transition to a GitHub repository opens doors for potential collaboration, allowing me to share my knowledge and learn from others in the coding community",		
        img: "dummy.png",
        project_url: "/project"	,
        status: "open",		
        links: {},
        tags: ["markdown", "business tool", "fun"] },
    {   id: 7, 
        title: "Markdown TOC: Building an Automated Table of Contents", 
        short: "Python command-line script to automatically generate tables of contents for Markdown files. This project honed Python text parsing and file handling skills, while exploring the potential of AI for code evaluation.",
        description: "Driven by a passion for well-structured Markdown files and the importance of clear documentation, I embarked on a side project in March 2024. The objective: develop a Python script that automatically generates tables of content within Markdown files, eliminating the need for manual creation. This command-line script serves as a valuable tool for developers seeking to enhance the organization and readability of their Markdown documents. It leverages Python's capabilities for text parsing and file manipulation, allowing it to identify headings within a Markdown file and generate a corresponding table of contents. Furthermore, this project presented an opportunity to delve into the realm of Artificial Intelligence (AI). I  experimented with using AI to assess the strengths and weaknesses of my script, seeking to optimize its performance and functionality. As an additional feature, the script incorporates the ability to handle external links, proving its utility for projects like my personal `Coding Cookbook.`",		
        img: "dummy.png",
        project_url: "/project"	,
        status: "open",		
        links: {},
        tags: ["python", "markdown", "backend", "business tool"] },
      ];

const TAGS = [
    { tag_short: "python", tag_long: "The first tag is python", color_text: "white", color_bg: "#222" },
    { tag_short: "flask", tag_long: "The second tag", color_text: "white", color_bg: "#222" },
    { tag_short: "sharepoint", tag_long: "The second tag", color_text: "white", color_bg: "#222" },
    { tag_short: "javascript", tag_long: "The second tag", color_text: "white", color_bg: "#222" },
    { tag_short: "html", tag_long: "The second tag", color_text: "white", color_bg: "#222" },
    { tag_short: "vba", tag_long: "The second tag", color_text: "white", color_bg: "#222" },
    { tag_short: "markdown", tag_long: "The second tag", color_text: "white", color_bg: "#222" },
    { tag_short: "react", tag_long: "The second tag", color_text: "white", color_bg: "#222" },
    { tag_short: "sql", tag_long: "The second tag", color_text: "white", color_bg: "#222" },
    { tag_short: "api", tag_long: "The second tag", color_text: "white", color_bg: "#222" },
    { tag_short: "business tool", tag_long: "The second tag", color_text: "black", color_bg: "#aaa" },
    { tag_short: "cad", tag_long: "The second tag", color_text: "black", color_bg: "#aaa" },
    { tag_short: "fun", tag_long: "The second tag", color_text: "black", color_bg: "#aaa" },
    { tag_short: "frontend", tag_long: "The second tag", color_text: "white", color_bg: "#888" },
    { tag_short: "backend", tag_long: "The second tag", color_text: "white", color_bg: "#888" },
    { tag_short: "refactoring", tag_long: "The second tag", color_text: "white", color_bg: "#888" },
    { tag_short: "mech eng", tag_long: "The second tag", color_text: "black", color_bg: "#ddd" },
    { tag_short: "team lead", tag_long: "The second tag", color_text: "black", color_bg: "#ddd" },
    { tag_short: "agile", tag_long: "The third tag", color_text: "black", color_bg: "#ddd" }
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


