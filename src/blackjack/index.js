import { crearDeck, pedirCarta, turnoOrdenador, crearCarta, acumularPuntos} from './usecases';

let deck = [];

const tipos = ['C', 'D', 'H', 'S'],
    especiales = ['A', 'J', 'Q', 'K'];

let puntosJugadores = [];

const btnNuevo = document.querySelector("#btnNuevo"),
    btnPedir = document.querySelector("#btnPedir"),
    btnDetener = document.querySelector("#btnDetener");

const puntosHTML = document.querySelectorAll("small"),
    divCartasJugadores = document.querySelectorAll(".divCartas");

const inicializarBlackjack = (numJugadores = 2) => {
    deck = crearDeck(tipos, especiales);
    puntosJugadores = [];

    for (let i = 0; i < numJugadores; i++) {
        puntosJugadores.push(0);
    }

    puntosHTML.forEach(e => e.innerHTML = 0);
    divCartasJugadores.forEach(e => e.innerHTML = '');

    btnPedir.disabled = false;
    btnDetener.disabled = false;
}

btnPedir.addEventListener('click', () => {
    const carta = pedirCarta(deck);
    const puntosJugador = acumularPuntos(0, carta, puntosJugadores, puntosHTML);

    crearCarta(0, carta, divCartasJugadores);

    if (puntosJugador > 21) {
        console.warn('Lo siento mcuho, perdiste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoOrdenador(puntosJugadores, puntosJugador, puntosHTML, divCartasJugadores, deck);
    } else if (puntosJugador === 21) {
        console.info('¡21! Ganaste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoOrdenador(puntosJugadores, puntosJugador, puntosHTML, divCartasJugadores, deck);
    }
});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoOrdenador(puntosJugadores, puntosJugadores[0], puntosHTML, divCartasJugadores, deck);
});

btnNuevo.addEventListener('click', () => {
    inicializarBlackjack();
});