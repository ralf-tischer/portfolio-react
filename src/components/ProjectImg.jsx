import React, { useState } from 'react';

const ProjectImg = ( { project } 
                ) => {
    
    const filePath = process.env.PUBLIC_URL + "/assets/img/projects/" + project.img; 

    return (
        <>
            <img src={filePath} alt={project.title} className="project-img-prview"></img>
        </>
    );
}

export default ProjectImg;