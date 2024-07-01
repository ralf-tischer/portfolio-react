import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import Links from './Links.jsx';
import Tags from './Tags.jsx';
import ProjectNavigation from './ProjectNavigation.jsx';

const { myProjects } = require('../model/data.js');

const ProjectPage = ({ handleTagClick }) => {
    let { id } = useParams();
    const [projectHtml, setProjectHtml] = useState('');
    const project = myProjects.find(project => project.id === parseInt(id));

    const getMinMaxId = () => {
        let minId = myProjects[0].id;
        let maxId = myProjects[0].id;

        myProjects.forEach(project => {
            if (project.id < minId) {
                minId = project.id;
            }
            if (project.id > maxId) {
                maxId = project.id;
            }
        });
        return { minId, maxId };
    };

    useEffect(() => {
        const loadProjectPage = async () => {
            try {
                const response = await fetch('/portfolio-react/assets/' + project.project_url);
                const data = await response.text();
                setProjectHtml(data);
            } catch (error) {
                setProjectHtml(`<h1>Error loading project page</h1><p>${error.message}</p>`);
                console.error(error);
            }
        };
        loadProjectPage();
    }, [id, project]);

    const { minId, maxId } = getMinMaxId();

    return (
        <div className='detail'>
            <h1>{project.title}</h1>

            <h2>Summary</h2>
            <p>
                {project.short}
            </p>

            <h2>Tags</h2>
            <Tags
                tags={project.tags}
                clickable={true}
                starred={true}
                handleTagClick={handleTagClick}
            />

            <h2>Project Details</h2>
            {ReactHtmlParser(projectHtml)}

            {project && project.links && project.links.length > 0 &&
                <>
                    <h2>Links</h2>
                    <Links
                        links={project.links} />
                </>}

            <ProjectNavigation
                project={project}
                minId={minId}
                maxId={maxId}
            />
        </div>
    );
};

export default ProjectPage;