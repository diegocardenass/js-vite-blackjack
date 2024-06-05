/**
 * Función para asignar carta
 * @param {Number} turno 
 * @param {String} carta 
 * @param {HTMLElement} divCartasJugadores 
 */

export const crearCarta = (turno, carta, divCartasJugadores) => {
    if (!carta) throw new Error('La carta es obligatoria');
    // if (turno) throw new Error('El turno es obligatorio');

    const imgCarta = document.createElement('img');
    imgCarta.classList.add('carta');
    imgCarta.src = `assets/cartas/${carta}.png`;

    divCartasJugadores[turno].append(imgCarta);
}