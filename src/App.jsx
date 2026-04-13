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
  const [target, setTarget] = useState(null);
  const [tags, setTags] = useState([]);
  const [ids, setIds] = useState([]);

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

  const ProjectPageWrapper = () => {
    return (
      <ProjectPage handleTagClick={handleTagClick} />
    );
  }

  const MainPageRoute = () => {
    const { tags: tagsParam, ids: idsParam } = useParams();
    const tagsToUse = tagsParam ? tagsParam.split(',') : tags;
    const idsToUse = idsParam ? idsParam.split(',').map(Number) : ids;
    return (
      <MainPageWrapper ids={idsToUse} tags={tagsToUse} handleTagClick={handleTagClick} />
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
          <Route path="/id/:id" element={<ProjectPageWrapper />} />
          <Route path="/tags/:tags" element={<MainPageRoute />} />
          <Route path="/ids/:ids" element={<MainPageRoute />} />
          <Route path="/contact" element={<MainPageRoute />} />
          <Route path="/" element={<MainPageRoute />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
