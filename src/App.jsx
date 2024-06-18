import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Projects from './components/Projects.jsx';
import ProjectPage from './components/ProjectPage.jsx';
import Contact from './components/Contact.jsx';
import Introduction from './components/Introduction.jsx';

const baseUrl = "/portfolio-react";

const App = () => {
  const handleTagClick = (tag) => {
    console.log("Tagging not from here!");
  }

  const MainContent = () => {
    const { tags, ids } = useParams();

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

  const ContactRoute = () => {
    useEffect(() => {
      const element = document.getElementById('contact');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, []);

    return <Contact />;
  }

  const handleRoute = (route) => {
    console.log("Route: ", route);
    const element = document.getElementById(route);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <Router basename={baseUrl}>
      <div className='container'>
        <Navbar handleRoute={handleRoute} />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/tags/:tags" element={<MainContent />} />
          <Route path="/ids/:ids" element={<MainContent />} />
          <Route path="/id/:id" element={<ProjectPage handleTagClick={handleTagClick} />} />
          <Route path="/contact/" element={<ContactRoute />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;