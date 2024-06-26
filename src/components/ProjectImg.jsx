import React, { useEffect } from 'react';

const ProjectImg = ({ project, setIsLandscape }) => {
    const filePath = process.env.PUBLIC_URL + "/assets/img/" + project.img;

    useEffect(() => {
        const img = new Image();
        img.src = filePath;
        img.onload = function() {
            setIsLandscape(this.width > 0.8 * this.height);
        }
    }, [filePath, setIsLandscape]);

    return (
        <img src={filePath} alt={project.title} className="image thumbnail"></img>
    );
}

export default ProjectImg;