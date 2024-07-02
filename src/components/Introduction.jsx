import React from 'react';
import Tags from './Tags.jsx';
const { mySkills } = require('../model/data.js');

const Introduction = ({ handleTagClick }) => {

    return (
        <div className='detail'>
            <h1>Ralf Tischer - Portfolio</h1>

            <h2>My Mission</h2>
            <div className='project-card mission nowrap'>
                <div className='project-card mission no-border'>

                    <div className="image-container content">
                        <img className="image profile" width="50px" src="/portfolio-react/assets/img/profile.jpg" alt="My profile in ACSII art" />
                    </div>
                    <div className='content'>
                    I am a mechanical engineer who leads teams and manages projects. 
                    I solve complex problems through mechanical engineering, process optimization, team development, and software engineering. 
                    My primary field of application over the last 25 years has been the development of subcomponents for railway vehicles.
                    </div>
                </div>
            </div>

            <h2>Skills and Experiences</h2>
            <div className='project-card mission nowrap'>
                <div className='content'>
                    Here are some of my skills with my personal rating.
                    Click on a tag and navigate to the projects I have worked on related to that skill.
                </div>
                <Tags
                    tags={mySkills}
                    clickable={true}
                    starred={true}
                    handleTagClick={handleTagClick}
                />
            </div>
        </div>
    );
};

export default Introduction;

