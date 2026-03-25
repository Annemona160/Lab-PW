import Card from './Card';
function App() {
    const projects = [
  { title: "Proiect 1", description: "Pagina personala" },
  { title: "Proiect 2", description: "Calculator buget" },
  { title: "Proiect 3", description: "Dashboard React" },
  { title: "Proiect 4", description: "Magazin Online" }, 
];

 return (
 <div>
 <h1>Laborator PW</h1>
 {projects.map(function(item, index) {
  return <Card key={index} title={item.title} description={item.description} />;
})}
 </div>
 );
}
export default App;