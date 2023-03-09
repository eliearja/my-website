import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About/About';
import Courses from './pages/Courses/Courses';
import Experience from './pages/Experience/Experience';
import Skills from './pages/Skills/Skills';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route 
          path="/my-website"
          element={ <App /> }
        />
        <Route 
          path="/my-website/about"
          element={ <About /> }
        />
        <Route 
          path="/my-website/courses"
          element={ <Courses /> }
        />
        <Route
          path="/my-website/experience"
          element={ <Experience /> }
        />
        <Route 
          path="/my-website/skills"
          element={ <Skills /> }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
