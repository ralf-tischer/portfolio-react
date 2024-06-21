// Import necessary hooks and components
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectPage from './components/ProjectPage';

// Define useQuery as a custom hook outside of App
function useQuery() {
  const location = useLocation();
  return new URLSearchParams(location.search);
}

function App() {
  const [tags, setTags] = useState([]);
  const [ids, setIds] = useState([]);

  // Move the useEffect hook to a new component or use it within existing child components

  const handleRoute = (bookmark) => {
    // Smooth scroll to the bookmark
  };

  return (
    <div className="App">
      <Router>
        <Navbar handleRoute={handleRoute} />
        <Routes>
          <Route path="/id/:id" element={<ProjectPageWrapper />} />
          <Route path="/" element={<MainPageWrapper />} />
        </Routes>
      </Router>
    </div>
  );
}

// Wrapper component for ProjectPage that uses useQuery
function ProjectPageWrapper() {
  const query = useQuery();
  // Logic to handle query parameters specific to ProjectPage
  return <ProjectPage />;
}

// Wrapper component for MainPage that uses useQuery
function MainPageWrapper() {
  const query = useQuery();
  useEffect(() => {
    // Extract tags or ids from URL and update state accordingly
  }, [query]);
  // Pass tags and ids as props to Projects or handle them here
  return (
    <>
      <Introduction />
      <Projects />
      <Contact />
    </>
  );
}

export default App;