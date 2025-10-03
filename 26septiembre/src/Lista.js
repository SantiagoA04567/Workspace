import './lista.css'
import Estudiante from './Estudiante';

export function Lista({ listaestudiantes }) {
    return (
        <div className='lista'>
            <ol>
                {listaestudiantes.map((elemento, indice) => (
                    <li> <Estudiante nombre={elemento.nombre}
                        apellido={elemento.apellido} /></li>
                ))}
            </ol>
        </div>
    )
}

export default Lista;