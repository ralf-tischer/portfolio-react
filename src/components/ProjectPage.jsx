import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

const ProjectPage = () => {
    let { id } = useParams();
    const [projectHtml, setProjectHtml] = useState('');

    useEffect(() => {
        const loadProjectPage = async () => {
            try {
                const response = await fetch(`/portfolio-react/assets/projects/Project_${id}/ProjectPage_${id}.html`);
                const data = await response.text();
                setProjectHtml(data);
            } catch (error) {
                console.error(error);
            }
        };
        loadProjectPage();
    }, [id]);

    return (
        <>
            {ReactHtmlParser(projectHtml)}
        </>
    );
};

export default ProjectPage;