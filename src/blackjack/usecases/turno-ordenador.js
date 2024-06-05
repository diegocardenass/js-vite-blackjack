import { pedirCarta, crearCarta, acumularPuntos, determinarGanador } from './';

/**
 * Función para el turno del ordenador
 * @param {Array} puntosJugadores
 * @param {Number} puntosMinimos 
 * @param {Array<string>} deck 
 */
export const turnoOrdenador = (puntosJugadores, puntosMinimos, puntosHTML, divCartasJugadores, deck = []) => {
    // if (!puntosMinimos) throw new Error('Puntos mínimos requeridos');
    if (!deck) throw new Error('Deck requerido');

    let puntosOrdenador = 0;

    do {
        const carta = pedirCarta(deck);
        puntosOrdenador = acumularPuntos(puntosJugadores.length - 1, carta, puntosJugadores, puntosHTML);

        crearCarta(puntosJugadores.length - 1, carta, divCartasJugadores);
    } while ((puntosOrdenador < puntosMinimos) && (puntosMinimos <= 21));

    determinarGanador(puntosJugadores);
}