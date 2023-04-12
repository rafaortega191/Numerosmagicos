let numeroMagico;
let intentos = 0;

function comenzarJuego() {
  numeroMagico = Math.floor(Math.random() * 25) + 1;
  intentos = 0;
  alert("¡Comienza el juego! Adivina el número mágico entre 1 y 25.");
}

function adivinarNumero() {
  const numeroUsuario = parseInt(document.getElementById("numeroInput").value);

  if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 25) {
    alert("Por favor ingresa un número válido entre 1 y 25.");
    return;
  }

  intentos++;

  if (numeroUsuario === numeroMagico) {
    alert(
      `¡Felicitaciones! Adivinaste el número mágico ${numeroMagico} en ${intentos} intentos.`
    );
    comenzarJuego();
  } else if (numeroUsuario < numeroMagico) {
    alert("El número ingresado es menor al número mágico. ¡Sigue intentando!");
  } else {
    alert("El número ingresado es mayor al número mágico. ¡Sigue intentando!");
  }
}
