import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectNavigation = ({ project, minId, maxId }) => {
    const navigate = useNavigate();

    const handleNavigateToProject = ( step ) => {
        const newProjectId = project.id + step;
        console.log("newProjectId: ", newProjectId);
        if (newProjectId >= minId && newProjectId <= maxId) {
            navigate(`/id/${newProjectId}`);
        }
    };
    
    console.log("project.id, minId, maxId: ", project.id, minId, maxId);
    
    return (
        <div className={ project.id > minId ? 'navbar' : 'navbar align-right' }>
            { project.id > minId &&  
            <div 
                className='button button-details' 
                onClick={() => handleNavigateToProject(-1)}
                title='Click to navigate to previous project.'>
                    Previous Project
            </div>
            }

            { project.id < maxId &&
            <div 
                className='button button-details'
                onClick={() => handleNavigateToProject(+1)}
                title='Click to navigate to next project.'>
                    Next Project
            </div>
            } 
        </div>
    );
}

export default ProjectNavigation;