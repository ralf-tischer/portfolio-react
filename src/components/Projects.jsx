import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectCard from './ProjectCard.jsx';
const { myProjects } = require('../model/data.js');

const Projects = ({ ids, tags, handleTagClick }) => {
  const [projects] = useState(myProjects);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const navigate = useNavigate();

  const handleOpenProjectDetails = (id) => {
    navigate(`/id/${id}`);
  }

  useEffect(() => {
    let filtered = projects;
  
    // Filter by tags
    if (tags.length > 0) {
      filtered = filtered.filter(project => tags.every(tag => project.tags.includes(tag)));
    }
  
    // Filter by ids
    if (ids.length > 0) {
      filtered = ids.map(id => projects.find(project => project.id === id)).filter(Boolean);
    }
  
    setFilteredProjects(filtered);
  }, [projects, ids, tags]);
  
  /*
  const handleTagClick = (tag) => {
    // Update the URL
    //navigate(`/tags/${tag}`);
    handleTagClick(tag);
  }
    */

  /*
  const handleFilter = (filteredProjects) => {
    setFilteredProjects(filteredProjects);
  };
  */
  
  return (
    <div>
      <h2>Projects</h2>
      <div className='projects'>
        {filteredProjects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project}
            handleOpenProjectDetails={handleOpenProjectDetails}
            handleTagClick={handleTagClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

