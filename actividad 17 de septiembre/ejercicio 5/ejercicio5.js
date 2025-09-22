
function mostrarNombres() {
  let nombres = ["Katerin", "Santiago", "Jose", "Gabriela", "Max", "Samantha", "Tomas"];
  let lista = document.getElementById("lista");
  lista.innerHTML = "";
  for (let i = 0; i < nombres.length; i++) {
    let item = document.createElement("li");
    item.textContent = nombres[i];
    lista.appendChild(item);
  }
}
