import './App.css';
import { Link } from 'react-router-dom';

function App() {
  const sections = [
    {id: 1, title: "About", path: "/my-website/about", description: "A section to get to know me."},
    {id: 2, title: "Work Experience", path: "/my-website/experience", description: "A section highlighting my work experience."},
    {id: 3, title: "Skills", path: "/my-website/skills", description: "A section showcasing my skills."},
    {id: 4, title: "Coursework", path: "/my-website/courses", description: "A section presenting the courses I have taken."}
  ];

  return (
    <div className='App'>
      <div className='TextSection'>
        <h1>Elie Arja</h1>
      </div>
      <div className='GridContainer'>
        <div className='Grid'>
        {sections.map((section) => (
          <Link className='Item' to={section.path} key={section.id}>
            <div>
              <h2 className='Title'>{section.title}</h2>
              <strong className='Description'>{section.description}</strong>
            </div>
          </Link>
        ))}
        </div>
      </div>
    </div>
  );
}

export default App;
