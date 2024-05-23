import React, { useState } from 'react';

const ProjectImg = ( { project } 
                ) => {
    
    const filePath = "/assets/img/" + project.img; 

    return (
        <>
            <img src={filePath} alt={project.title} width="150px" height="150px" ></img>
        </>
    );
}

export default ProjectImg;