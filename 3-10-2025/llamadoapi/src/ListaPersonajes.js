import { useEffect } from 'react';
import './ListaPersonajes.css';

function ListaPersonajes(){
   const[personajes, setPersonajes] = useState(null);
   useEffect(()=>{
    fetch(`https://rickandmortyapi.com/api/character/25`)
    .then(res => res.json()) 
    .then(data => setRick(data)); 
   }, []);
    return (
         <div className="personajes">
             <h1>Lista de Personajes</h1>
             {personajes != null ? (
                personajes.map((per, index)=>{
                    <Personaje name={per.name} status={per.status}/>
                          

        })
    ):
    (<h2>Cargando....</h2>)}
    {JSON.stringify(personajes.results)}
      
     </div>
  );
}
