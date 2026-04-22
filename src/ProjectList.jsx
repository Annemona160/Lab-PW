import { useState, useEffect } from 'react';


function ProjectList() {

 const [projects, setProjects] = useState([]);
 const [loading, setLoading] = useState(true);

 useEffect(function() {
 fetch('/data/projects.json')
   .then(function(response) {
    return response.json();
 })
 .then(function(data) {
   setProjects(data.projects);
   setLoading(false);
 });
 }, []);

 if (loading) {
   return <p>Se incarca...</p>;
 }

 return (
    <div>
       <h3>Proiecte</h3>
 <ul>
        {projects.map(function(project) {
          return (
            <li key={project.id}>
              <strong>{project.title}</strong> - {project.tech}
              {project.done ? " (Finalizat)" : " (În lucru)"}
            </li>
          );
        })}
      </ul>
   </div>
 );
}
export default ProjectList;