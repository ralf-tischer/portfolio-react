import React from 'react';

const ProjectTitle = ({ project, 
                        handleOpenProjectDetails } 
                        ) => {
    return (
        <>
            <div className='title-container'>
                <div className='title-content'>
                    <b>{project.title}</b>
                </div>
                <div className='title-content'>
                    <div 
                        className='button button-details' 
                        onClick={() => handleOpenProjectDetails(project.id)}
                        title='Click to view project details.'>Details</div>
                </div>
            </div>
        </>
    );
}

export default ProjectTitle;