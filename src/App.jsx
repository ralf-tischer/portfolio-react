import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // was BrowserRouter
import { useParams } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Projects from './components/Projects.jsx';
import ProjectPage from './components/ProjectPage.jsx';
import Contact from './components/Contact.jsx';

const baseUrl = "/portfolio-react";
//const baseUrl = "/";

const App = () => {
  let { tags, ids } = useParams();

  const handleTagClick = (tag) => {
    console.log("Tagging not from here!");
  }

  return (
    <Router basename={baseUrl}>
      <div className='container'>
        <Navbar />
        <Routes>
          <Route path="/tags/:tags" element={<Projects tags={tags} />} />
          <Route path="/ids/:ids" element={<Projects ids={ids} />} />
          <Route path="/id/:id" element={<ProjectPage handleTagClick={handleTagClick} />}  />
          <Route path="/contact/" element={<Contact />} />
          <Route path="/" element={<Projects />} />    
        </Routes>
      </div>
    </Router>
  )
}

export default App;