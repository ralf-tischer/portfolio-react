import React, { useState } from 'react';
import Filter from './Filter';
import ProjectCard from './ProjectCard.jsx';
const { myProjects } = require('../model/data.js');

const Projects = () => {
  const [projects, setProjects] = useState(myProjects);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleTagDoubleClick = (tag) => {
    const filteredProjects = projects.filter(project => project.tags.includes(tag));
    setFilteredProjects(filteredProjects);
  };
  
  const handleFilter = (filteredProjects) => {
    setFilteredProjects(filteredProjects);
  };
  
  return (
    <div>
      <h1>Projects</h1>
      <Filter 
        projects={projects} 
        onFilter={handleFilter} 
      />
      <div className='projects'>
        {filteredProjects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            handleTagDoubleClick={handleTagDoubleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

