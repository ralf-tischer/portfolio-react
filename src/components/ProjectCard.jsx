import React, { useState } from 'react';
import Tags from './Tags';

const ProjectCard = ( { key, 
                        project } 
                    ) => {
    return (
        <>
            <div>Project Card:</div>  
            <div>{project.title}</div>
            <div>{project.short}</div>
            <Tags tags={project.tags} />
        </>
    );
}

export default ProjectCard;