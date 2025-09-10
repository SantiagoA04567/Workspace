function negativo(){
    let esnumeronegativo = document.getElementById ("esNegativo");
    console.log;

    esnumeronegativo = parseInt(esnumeronegativo.value);

    if(esnumeronegativo <= 0){
         alert("es un numero negativo");   
         console.log(esnumeronegativo, "comprobante");
    } else {
        alert("es un numero positivo");
    }
       
    
}