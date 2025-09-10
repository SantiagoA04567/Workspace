function sumar(){
 let suma1 = document.getElementById("sumando1");
 let suma2 = document.getElementById("sumando2")

 let resultado = parseFloat(suma1.value) + parseFloat(suma2.value);

 let resultadohtml = document.getElementById("resultadoSuma");
 resultadohtml.innerHTML = resultado;
 alert("Mensaje deseado");
        alert(resultado);
 
}

 function restar(){
            let resta1 = document.getElementById("resta1");
            let resta2 = document.getElementById("resta2");

            let resultado = parseFloat(resta1.value) - parseFloat(resta2.value);

            let resultadohtml = document.getElementById("resultadoResta");
            resultadohtml.innerHTML = resultado;
            alert("Mensaje deseado");
            alert(resultado);
        }

        function multiplicar(){
            let multi1 = document.getElementById("multica1").value;
            let multi2 = document.getElementById("multica2").value;
            let resultado = parseFloat(multi1) * parseFloat(multi2);
            document.getElementById("resultadoMulti").innerHTML = resultado;
            alert("Mensaje deseado");
            alert(resultado);
        }

        function dividir(){
            let div1 = document.getElementById("divide1").value;
            let div2 = document.getElementById("divide2").value;
            let resultado;


            if (parseFloat(div2) === 0){
                resultado = "Error: división entre 0";
            } else {
                resultado = parseFloat(div1) / parseFloat(div2);
            }
            document.getElementById("resultadoDiv").innerHTML = resultado;
            alert("Mensaje deseado");
            alert(resultado);
        }

