import _ from 'underscore';

/**
 * Función para crear un nuevo deck
 * @param {Array<string>} tipos Ejemplo ['C', 'D', 'H', 'S']
 * @param {Array<string>} especiales Ejemplo ['A', 'J', 'Q', 'K']
 * @returns {Array<string>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tipos, especiales) => {
    if (!tipos || tipos.length === 0) throw new Error("Tipos obligatorio como arreglo de string");
    if (!especiales || especiales.length === 0) throw new Error("Especiales obligatorio como arreglo de string");

    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tipos) {
        for (let especial of especiales) {
            deck.push(especial + tipo);
        }
    }

    return _.shuffle(deck);
}

// export default crearDeck;