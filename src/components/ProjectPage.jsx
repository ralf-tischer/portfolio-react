import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import Tags from './Tags';

const { myProjects } = require('../model/data.js');

const ProjectPage = ({ handleTagClick }) => {
    let { id } = useParams();
    const [projectHtml, setProjectHtml] = useState('');

    useEffect(() => {
        const loadProjectPage = async () => {
            try {
                const response = await fetch(`/portfolio-react/assets/projects/Project_${id}/ProjectPage_${id}.html`);
                const data = await response.text();
                setProjectHtml(data);
            } catch (error) {
                // Render error message
                setProjectHtml(`<h1>Error loading project page</h1><p>${error.message}</p>`); 
                console.error(error);
            }
        };
        loadProjectPage();
    }, [id]);

    //Get project with project.id = id from myProjects
    const project = myProjects.find(project => project.id === parseInt(id));

    return (
        <div className='detail'>
            <h1>
                {project.title}
            </h1>
            <h2>
                Summary
            </h2>
            <p>
                {project.short}
            </p>
            <Tags tags={project.tags} />
            {ReactHtmlParser(projectHtml)}
        </div>
    );
};

export default ProjectPage;