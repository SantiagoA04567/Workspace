
 function mostrarNombre() {
      document.getElementById('resultado').innerHTML = 'Tu nombre: Santiago Amariles';
    }
    function mostrarNumeros() {
      let numeros = '';
      for (let i = 90; i <= 100; i++) {
        numeros += i + ' ';
      }
      document.getElementById('resultado').innerHTML = 'Números: ' + numeros;
    }
    function cambiarColor() {
      const colores = ['#f84600ff', '#b2cc6aff', '#7438adff', '#b53471', '#222f3e'];
      const colorActual = document.body.style.backgroundColor;
      let nuevoColor = colores[Math.floor(Math.random() * colores.length)];
      while (nuevoColor === colorActual) {
        nuevoColor = colores[Math.floor(Math.random() * colores.length)];
      }
      document.body.style.backgroundColor = nuevoColor;
    }

