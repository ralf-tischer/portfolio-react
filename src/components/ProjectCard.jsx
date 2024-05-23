import React, { useState } from 'react';
import ProjectTitle from './ProjectTitle';
import ProjectShort from './ProjectShort';
import ProjectImg from './ProjectImg';
import Tags from './Tags';

const ProjectCard = ( { key, 
                        project } 
                    ) => {
    return (
        <div className='project-card'>
            <ProjectTitle project={project} />
            <div className='project-img-box'>
                <div className='project-img-content'>
                    <ProjectImg project={project} />
                </div>

                <div className='project-img-content'>
                    <ProjectShort project={project} />
                </div>
            </div>
            <div><Tags tags={project.tags} /></div>
        </div>
    );
}

export default ProjectCard;