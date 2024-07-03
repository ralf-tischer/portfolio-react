import React, { useEffect } from 'react';
import Introduction from './Introduction.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';

const MainPageWrapper = ({ ids, tags, handleTagClick }) => {
    
    useEffect(() => {
      if (tags.length > 0 || ids.length > 0) {
        const element = document.getElementById('projects');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    }, [tags, ids]);

    return (
      <>
        <div id="introduction"><Introduction handleTagClick={handleTagClick} /></div>
        <div id="projects"><Projects tags={tags} ids={ids} handleTagClick={handleTagClick} /></div>
        <div id="contact"><Contact /></div>
      </>
    );
}

export default MainPageWrapper;
