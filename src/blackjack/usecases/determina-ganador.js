
/**
 * Función para determinar el ganador
 * @param {Array[Number]} puntosJugadores 
 */

export const determinarGanador = (puntosJugadores) => {
    const [puntosMinimos, puntosOrdenador] = puntosJugadores;

    setTimeout(() => {
        if (puntosOrdenador == puntosMinimos) {
            alert('El juego finalizo en empate');
        } else if (puntosMinimos > 21) {
            alert('¡El ordenador gano!');
        } else if (puntosOrdenador > 21) {
            alert('¡Ganaste!');
        } else {
            alert('¡El ordenador gano!');
        }
    }, 100);
}