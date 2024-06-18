import React from 'react';
import { useNavigate } from 'react-router-dom';
import Tags from './Tags.jsx';
const { mySkills } = require('../model/data.js');

const Introduction = () => {
    const navigate = useNavigate();

    const handleTagClick = (tag) => {
        // Update the URL
        navigate(`/tags/${tag}`);
    }

    return (
        <div className='detail'>
            <h1>Introduction</h1>

            <div className='project-card mission nowrap'>
                <h2>My Mission</h2>
                <div className='project-card mission no-border'>

                    <div className="image-container content">
                        <img className="image profile" width="50px" src="/portfolio-react/assets/img/profile.jpg" alt="My profile in ACSII art" />
                    </div>
                    <div className='content'>
                        I am a mechanical engineer leading teams and managing projects. 
                        I solve complex problems by mechanical engineering, processes or team development and software engineering.
                    </div>
                </div>
            </div>

            <div className='project-card mission nowrap'>
                <h2>Skills and Experiences</h2>
                <div className='content'>
                    Click on a skill to see the projects I have worked on:
                </div>
                <Tags
                    tags={mySkills}
                    clickable={true}
                    starred={true}
                    handleTagClick={handleTagClick}
                />

            </div>

            <div className='project-card mission nowrap'>
                <h2>Projects</h2>
                <div
                    className='button'
                    onClick={() => navigate('/projects/')}>
                    Click here for an overview of my projects.
                </div>
            </div>

            <div className='project-card mission nowrap'>
                <h2>Contact</h2>

                <div
                    className='button'
                    onClick={() => navigate('/contact/')}>
                    Click here to get in touch with me.
                </div>
            </div>

        </div>
    );
};

export default Introduction;

