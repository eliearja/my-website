import './App.css';

function App() {
  const sections = [
    {id: 1, title: "About", description: "A section to get to know me."},
    {id: 2, title: "Work Experience", description: "A section highlighting my work experience."},
    {id: 3, title: "Skills", description: "A section showcasing my technical and soft skills."},
    {id: 4, title: "Coursework", description: "A section presenting the different courses I have taken."}
  ];

  return (
    <div className='App'>
      <div className='TextSection'>
        <h1>Elie Arja</h1>
      </div>
      <div className='GridContainer'>
        <div className='Grid'>
        {sections.map((section) => (
            <div className='Item' key={section.id}>
              <h2 className='Title'>{section.title}</h2>
              <strong className='Description'>{section.description}</strong>
            </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default App;
