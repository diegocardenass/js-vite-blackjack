/**
 * Función para pedir carta
 * @param {Array<string>} deck Es un arreglo de string
 * @returns {String} retorna la carta del deck
 */
export const pedirCarta = (deck) => {
    if (!deck || deck.length === 0) {
        throw 'No hay más cartas'
    }

    return deck.pop();
}