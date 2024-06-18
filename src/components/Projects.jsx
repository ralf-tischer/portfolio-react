import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Filter from './Filter';
import ProjectCard from './ProjectCard.jsx';
const { myProjects } = require('../model/data.js');

const Projects = () => {
  const [projects] = useState(myProjects);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const navigate = useNavigate();
  const params = useParams();

  const handleOpenProjectDetails = (id) => {
    navigate(`/id/${id}`);
  }

  useEffect(() => {
    let { tags, ids } = params;

    // Convert tags and ids from string to array
    tags = tags ? tags.split(',') : [];
    ids = ids ? ids.split(',').map(Number) : [];

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
  }, [params, projects]);
  
  const handleTagClick = (tag) => {
    // Update the URL
    navigate(`/tags/${tag}`);
  }

  const handleFilter = (filteredProjects) => {
    setFilteredProjects(filteredProjects);
  };
  
  return (
    <div>
      <h2>Projects</h2>
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
            handleTagClick={handleTagClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

