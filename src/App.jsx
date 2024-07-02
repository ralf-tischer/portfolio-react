import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import MainPageWrapper from './components/MainPageWrapper.jsx';
import ProjectPage from './components/ProjectPage.jsx';

//const baseUrl = process.env.PUBLIC_URL || (window.location.pathname.includes('portfolio-react') ? '/portfolio-react' : '/');
const baseUrl = "/";

console.log('window.location.pathname:', window.location.pathname);
console.log('process.env.PUBLIC_URL:', process.env.PUBLIC_URL);
console.log('baseUrl:', baseUrl);

const App = () => {
  
  let { tags: tagsInitial, ids } = useParams();
  tagsInitial = tagsInitial ? tagsInitial.split(',') : [];
  ids = ids ? ids.split(',').map(Number) : [];

  const [target, setTarget] = useState(null);
  const [tags, setTags] = useState(tagsInitial);
  
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
    setTags([tag]);
    setTarget('projects');
  }

  const ProjectPageWrapper = ({ handleTagClick }) => {
    const { id } = useParams();
    return (
      <ProjectPage id={id} handleTagClick={handleTagClick} />
    );
  }

  const handleRoute = (route) => {
    if (route === 'projects') setTags([]);
    setTarget(route);
  }

  return (
    <div className='container'>
      <Router basename={baseUrl}>
        <Navbar handleRoute={handleRoute} />
        <Routes>
          <Route path="/id/:id" element={<ProjectPageWrapper handleTagClick={handleTagClick} />} />
          <Route path="/tags/:tags" element={<MainPageWrapper ids={ids} tags={tags} handleTagClick={handleTagClick} />} />
          <Route path="/ids/:ids" element={<MainPageWrapper ids={ids} tags={tags} handleTagClick={handleTagClick} />} />
          <Route path="/contact" element={<MainPageWrapper ids={ids} tags={tags} handleTagClick={handleTagClick} />} />
          <Route path="/" element={<MainPageWrapper ids={ids} tags={tags} handleTagClick={handleTagClick} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
