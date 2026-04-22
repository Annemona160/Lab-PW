import { useState } from 'react';
import Card from './Card';
import QuickNote from './QuickNote';
import TodoList from './TodoList';
import ContactForm from './ContactForm';
import ProjectList from './ProjectList';
function App() {
    const [count, setCount] = useState(0);

    const projects = [
  { title: "Proiect 1", description: "Pagina personala" },
  { title: "Proiect 2", description: "Calculator buget" },
  { title: "Proiect 3", description: "Dashboard React" },
  { title: "Proiect 4", description: "Magazin Online" }, //Cel adaugat in plus 
];

 return (
 <div>
 <h1>Laborator PW</h1>
  <h2>Gheorghe Annemona Gabriela</h2> 
      <p>Cateva lucruri despre mine:</p>
          <ul>
             <li>In prezent-studenta la Calculatoare</li>
             <li>Sunt pasionata de calatorii</li>
         </ul>
         
         <p>Ai apasat de {count} ori</p>
         <button onClick={() => setCount(count + 1)}>Click</button>
        
 {projects.map(function(item, index) {
  return <Card key={index} title={item.title} description={item.description} />;
})}
    
    <QuickNote />
    <TodoList />
    <ContactForm />
    <ProjectList />

 </div>
 );
}
export default App;