import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectNavigation = ( project ) => {
    const navigate = useNavigate();

    const handleNavigateToProject = ( step ) => {

        const newProjectId = project.project.id + step;
        console.log("newProjectId: ", newProjectId);
        if (newProjectId > 0 && newProjectId <= 10) {
            navigate(`/id/${project.project.id + step}`);
        }
    };
    
    return (
        <div className='navbar'>
            <div 
                className='button button-details' 
                onClick={() => handleNavigateToProject(-1)}
                title='Click to navigate to previous project.'>
                    Previous Project
            </div>
            <div 
                className='button button-details' 
                onClick={() => handleNavigateToProject(+1)}
                title='Click to navigate to next project.'>
                    Next Project
            </div>
        </div>
    );
}

export default ProjectNavigation;