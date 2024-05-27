import React, { useState } from 'react';
import ProjectTitle from './ProjectTitle';
import ProjectShort from './ProjectShort';
import ProjectImg from './ProjectImg';
import Tags from './Tags';

const ProjectCard = ({  key, 
                        project, 
                        handleTagDoubleClick} 
                    ) => {
    const [isLandscape, setIsLandscape] = useState(false);

    return (
        <div className='project-card'>
            <ProjectTitle project={project} />
            <div className={isLandscape ? 'project-img-box landscape' : 'project-img-box'}>
                <div className='project-img-content'>
                    <ProjectImg project={project} setIsLandscape={setIsLandscape} />
                </div>

                <div className='project-img-content'>
                    <ProjectShort project={project} />
                </div>
            </div>
            <div><Tags 
                tags={project.tags}
                handleTagDoubleClick={handleTagDoubleClick} /></div>
        </div>
    );
}

export default ProjectCard;