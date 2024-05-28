import React, { useEffect } from 'react';

const ProjectImg = ({ project, setIsLandscape }) => {
    const filePath = process.env.PUBLIC_URL + "/assets/img/" + project.img;
    const fileType = project.img.split('.').pop();

    useEffect(() => {
        const img = new Image();
        img.src = filePath;
        img.onload = function() {
            setIsLandscape(this.width > 0.8 * this.height);
        }
    }, [filePath, setIsLandscape]);

    return (
        <>
            {fileType === "mp4" 
                ? <video src={filePath} alt={project.title} className="project-img-preview" autoPlay muted></video>
                : <img src={filePath} alt={project.title} className="project-img-preview"></img>}
        </>
    );
}

export default ProjectImg;