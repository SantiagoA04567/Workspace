function pares(){
    let numeros = document.getElementById("numeros");

    for(let i = 2; i<=100; i= i + 2){
        console.log(i);
        let hrl = document.createElement("hr");
        let numero = document.createElement("h2");
        numero.innerHTML = i;

        numeros.appendChild(numero);
        numeros.appendChild(hrl);
    }
}