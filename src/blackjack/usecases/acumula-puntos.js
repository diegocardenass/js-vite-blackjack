import { valorCarta } from './valor-carta';
/**
 * Función para acumular puntos
 * @param {Number} turno 
 * @param {String} carta 
 * @param {Array[Number]} puntosJugadores 
 * @param {HTMLElement} puntosHTML 
 * @returns {Number}
 */
export const acumularPuntos = (turno, carta, puntosJugadores, puntosHTML) => {
    puntosJugadores[turno] += valorCarta(carta);
    puntosHTML[turno].innerHTML = puntosJugadores[turno];

    return puntosJugadores[turno];
}