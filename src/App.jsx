import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Projects from './components/Projects.jsx';
import ProjectPage from './components/ProjectPage.jsx';
import Contact from './components/Contact.jsx';
import Introduction from './components/Introduction.jsx';

const baseUrl = window.location.pathname;

const App = () => {
  const [target, setTarget] = useState(null);
  
  useEffect(() => {
    console.log("useEffect Route: ", target);
    const element = document.getElementById(target);
    if (element) { 
      console.log("useEffect Element: ", element);
      element.scrollIntoView({ behavior: 'smooth' })
    };
  }, [target]);

  const handleTagClick = (tag) => {
    console.log("Tagging not from here!");
  }

  const MainPageWrapper = () => {
    const { tags, ids } = useParams();

    /*
    useEffect(() => {
      if (tags || ids) {
        const element = document.getElementById('projects');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    }, [tags, ids]);
    */

    return (
      <>
        <div id="introduction"><Introduction /></div>
        <div id="projects"><Projects tags={tags} ids={ids} handleRoute={handleRoute} /></div>
        <div id="contact"><Contact /></div>
      </>
    );
  }

  const ProjectPageWrapper = () => {
    //<Route path="/id/:id" element={<ProjectPage handleTagClick={handleTagClick} />} />
    return (
      <ProjectPage handleTagClick={handleTagClick} />
    )
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
          <Route path="/tags/:tags" element={<MainPageWrapper target={'projects'}/>} />
          <Route path="/ids/:ids" element={<MainPageWrapper target={'projects'}/>} />
          <Route path="/contact" element={<MainPageWrapper target={'contact'}/>} />
          <Route path="/" element={<MainPageWrapper target={'introduction'}/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;

/*
          <Route path="/" element={<MainContent />} />
          <Route path="/tags/:tags" element={<MainContent />} />
          <Route path="/ids/:ids" element={<MainContent />} />
          <Route path="/id/:id" element={<ProjectPage handleTagClick={handleTagClick} />} />
          <Route path="/contact/" element={<ContactRoute />} />
*/