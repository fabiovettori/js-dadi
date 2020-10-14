// Esercitazione 2: Gioco dei dadi
// Generare un numero casuale tra 1 e 6 per simulare il lancio di un dado (giocata 1).
// Generare un secondo numero casuale tra 1 e 6, che sarà la seconda giocata.
// Comunicare quali dei due utenti (tra giocatore 1 e giocatore 2) ha vinto.

var player1 = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
// console.log(player1);

var player2 = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
// console.log(player2);

if (player1 > player2) {
    document.getElementById('output').innerHTML = 'player 1 win';
} else if (player1 < player2) {
    document.getElementById('output').innerHTML = 'player 2 win';
} else {
    document.getElementById('output').innerHTML = 'draw';
}
