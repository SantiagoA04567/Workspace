import './Estudiante.css';

function Estudiante({nombre, apellido}) {
      return( 
         <div className="container-nombre">
           <h1 className='nombre'>{nombre} {apellido}</h1> 
        </div>
        
        );
      
      
}

export default Estudiante;