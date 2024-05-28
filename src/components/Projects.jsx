import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Filter from './Filter';
import ProjectCard from './ProjectCard.jsx';
const { myProjects } = require('../model/data.js');

const Projects = () => {
  const [projects] = useState(myProjects);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const navigate = useNavigate();
  let { tags, ids } = useParams();

  const handleOpenProjectDetails = (id) => {
    navigate(`/id/${id}`);
  }

  // Convert tags and ids from string to array
  tags = tags ? tags.split(',') : [];
  ids = ids ? ids.split(',').map(Number) : [];

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
  }, [tags, ids, projects]);
  
  const handleTagDoubleClick = (tag) => {
    // Update the URL
    navigate(`/tags/${tag}`);
  }


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
            handleOpenProjectDetails={handleOpenProjectDetails}
            handleTagDoubleClick={handleTagDoubleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

