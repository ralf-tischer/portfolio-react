import React from 'react';

const ProjectTitle = ( { project } 
                ) => {
    return (
        <>
            <div className='project-title-box'>
                <div className='project-title-content'>
                    <b>{project.title}</b>
                </div>
                <div className='project-title-content'>
                    <div className='project-button project-button-details' title='Click to view project details.'>Details</div>
                </div>
            </div>
        </>
    );
}

export default ProjectTitle;