function generar_eleccion() {
  let eleccion = 'piedra';

  return eleccion;
}

function Jugar (eleccion_jugador) {
  let resultado;

  eleccion_maquina = generar_eleccion();

  if (eleccion_jugador === eleccion_maquina) {
    resultado = 'Empate';
  }
  else {

    if (eleccion_jugador === 'piedra') {

      if (eleccion_maquina === 'papel') {
        resultado = 'Gano la maquina';
      }
      else if (eleccion_maquina === 'tijera') {
        resultado = 'Gano el jugador';
      }
        
    }
    else if (eleccion_jugador === 'papel') {

      if (eleccion_maquina === 'tijera') {
        resultado = 'Gano la maquina';
      }
      else if (eleccion_maquina === 'piedra') {
        resultado = 'Gano el jugador';
      }

    }
    else if (eleccion_jugador === 'tijera') {

      if (eleccion_maquina === 'piedra') {
        resultado = 'Gano la maquina';
      }
      else if (eleccion_maquina === 'papel') {
        resultado = 'Gano el jugador';
      }

    }
    
  }

  return resultado;
}


let eleccion_jugador = prompt('Elige una opcion [piedra, papel o tijera]: ');

let resultado = Jugar(eleccion_jugador);

alert(resultado);