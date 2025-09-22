
function MostrarNombre(){
    const nombre = document.getElementById("nombre");

    const primerNombre = document.createElement('span');
    const apellido = document.createElement('i');

    primerNombre.innerHTML = "Santiago ";
    apellido.innerHTML = "Amariles";

    nombre.appendChild(primerNombre);
    nombre.appendChild(apellido);
}


