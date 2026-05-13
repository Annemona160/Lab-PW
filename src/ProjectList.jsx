import { useState, useEffect } from 'react';

function ProjectList() {

 const [projects, setProjects] = useState([]);
 const [loading, setLoading] = useState(true);

 const [error, setError] = useState(null);
 const [search, setSearch] = useState('');

 useEffect(function() {
 fetch('http://localhost:3000/api/projects')
   .then(function(response) {
    return response.json();
 })

 .then(function(data) {
  setProjects(data)
   setLoading(false);
 })

 .catch(function(err) {
 setError('Eroare la incarcarea datelor');
 setLoading(false);
})
 }, []);

 if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

 if (loading) {
   return <p>Se incarca...</p>;
 }
 

 return (
    <div>
       <h3>Proiecte</h3>
       <input 
           type="text" 
           placeholder="Cauta dupa titlu..." 
           value={search} 
           onChange={(e) => setSearch(e.target.value)} 
  />
 <ul>
        {projects
        .filter(function(p) { return p.title.toLowerCase().includes(search.toLowerCase());
        })
        
        .map(function(project) {
          return (
            <li key={project.id}>
              <strong>{project.title}</strong> - {project.tech}
              {project.done ? " (Finalizat)" : " (În lucru)"}
            </li>
          );
        })}
      </ul>
      <div>
        <h4>Statistici:</h4>
        <p>Total proiecte: {projects.length}</p>
        <p>Finalizate: {projects.filter(p => p.done).length}</p>
        <p>În lucru: {projects.filter(p => !p.done).length}</p>
      </div>
   </div>
 );
}
export default ProjectList;