import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Projects from './components/Projects.jsx';
import ProjectPage from './components/ProjectPage.jsx';
import Contact from './components/Contact.jsx';
import Introduction from './components/Introduction.jsx';

const pathParts = window.location.pathname.split('/');
const baseUrl = pathParts.length > 1 && pathParts[1] ? "/" : window.location.pathname;

const App = () => {
  const [target, setTarget] = useState(null);
  
  useEffect(() => {
    // Adding a slight delay to ensure the element is rendered, especially for dynamic content
    const timer = setTimeout(() => {
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150); // Adjust the delay as needed
  
    return () => clearTimeout(timer); // Cleanup the timer
  }, [target]);

  const handleTagClick = (tag) => {
    console.log("Tagging not from here!");
  }

  const MainPageWrapper = () => {
    let { tags, ids } = useParams();

    // Convert tags and ids from string to array
    tags = tags ? tags.split(',') : [];
    ids = ids ? ids.split(',').map(Number) : [];
    
    useEffect(() => {
      if (tags || ids) {
        const element = document.getElementById('projects');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    }, [tags, ids]);

    return (
      <>
        <div id="introduction"><Introduction /></div>
        <div id="projects"><Projects tags={tags} ids={ids} handleRoute={handleRoute} /></div>
        <div id="contact"><Contact /></div>
      </>
    );
  }

  const ProjectPageWrapper = () => {
    const { id } = useParams(); // Use useParams to get the id parameter from the URL.
    return (
      <ProjectPage id={id} handleTagClick={handleTagClick} />
    );
  }

  const handleRoute = (route) => {
    setTarget(route);
  }

  console.log('baseUrl:', baseUrl);

  return (
    <div className='container'>
      <Router basename={baseUrl}>
        <Navbar handleRoute={handleRoute} />
        <Routes>
          <Route path="/id/:id" element={<ProjectPageWrapper />} />
          <Route path="/tags/:tags" element={<MainPageWrapper target={'projects'}/>} />
          <Route path="/ids/:ids" element={<MainPageWrapper target={'projects'}/>} />
          <Route path="/contact" element={<MainPageWrapper target={'contact'}/>} />
          <Route path="/" element={<MainPageWrapper target={'introduction'}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;