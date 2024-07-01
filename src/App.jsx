import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Projects from './components/Projects.jsx';
import ProjectPage from './components/ProjectPage.jsx';
import Contact from './components/Contact.jsx';
import Introduction from './components/Introduction.jsx';

//const baseUrl = process.env.PUBLIC_URL || (window.location.pathname.includes('portfolio-react') ? '/portfolio-react' : '/');
const baseUrl = "/";

console.log('window.location.pathname:', window.location.pathname);
console.log('process.env.PUBLIC_URL:', process.env.PUBLIC_URL);
console.log('baseUrl:', baseUrl);


const App = () => {
  const [target, setTarget] = useState(null);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  
    return () => clearTimeout(timer);
  }, [target]);

  const handleTagClick = (tag) => {
    console.log("Tag clicked:", tag); // Simulated use of 'tag'
    setTarget('projects');
  }

  const MainPageWrapper = ({ handleTagClick }) => {
    let { tags, ids } = useParams();
    tags = tags ? tags.split(',') : [];
    ids = ids ? ids.split(',').map(Number) : [];

    console.log('tags:', tags);
    console.log('ids:', ids);
    
    useEffect(() => {
      if (tags || ids) {
        const element = document.getElementById('projects');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    }, [tags, ids]);

    return (
      <>
        <div id="introduction"><Introduction handleTagClick={handleTagClick} /></div>
        <div id="projects"><Projects tags={tags} ids={ids} handleRoute={handleRoute} handleTagClick={handleTagClick} /></div>
        <div id="contact"><Contact /></div>
      </>
    );
  }

  const ProjectPageWrapper = ({ handleTagClick }) => {
    const { id } = useParams();
    return (
      <ProjectPage id={id} handleTagClick={handleTagClick} />
    );
  }

  const handleRoute = (route) => {
    setTarget(route);
  }

  return (
    <div className='container'>
      <Router basename={baseUrl}>
        <Navbar handleRoute={handleRoute} />
        <Routes>
          <Route path="/id/:id" element={<ProjectPageWrapper handleTagClick={handleTagClick} />} />
          <Route path="/tags/:tags" element={<MainPageWrapper target={'projects'} handleTagClick={handleTagClick} />} />
          <Route path="/ids/:ids" element={<MainPageWrapper target={'projects'} handleTagClick={handleTagClick} />} />
          <Route path="/contact" element={<MainPageWrapper target={'contact'} handleTagClick={handleTagClick} />} />
          <Route path="/" element={<MainPageWrapper target={'introduction'} handleTagClick={handleTagClick} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
