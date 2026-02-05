const listaDiv = document.getElementById("listaCartas");
const resultadoDiv = document.getElementById("deckResultado");

let favoritas = [];

// Mostrar todas cartas na tela
todasCartas.forEach(carta => {
    const btn = document.createElement("button");
    btn.textContent = `${carta.nome} (${carta.elixir})`;
    btn.onclick = () => adicionarFavorita(carta);
    listaDiv.appendChild(btn);
});

function adicionarFavorita(carta) {
    if (!favoritas.includes(carta)) {
        favoritas.push(carta);
        alert(carta.nome + " adicionada às favoritas!");
    }
}

// GERADOR INTELIGENTE
function gerarDeck() {
    let deck = [];

    const tipos = ["win","tanque","suporte","dano","defesa","feitiço","ciclo"];

    tipos.forEach(tipo => {
        let opcoes = todasCartas.filter(c => c.tipo === tipo);
        if (opcoes.length > 0) deck.push(random(opcoes));
    });

    while (deck.length < 8) {
        let carta = random(todasCartas);
        if (!deck.includes(carta)) deck.push(carta);
    }

    mostrarDeck(deck);
}

function random(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function mostrarDeck(deck) {
    resultadoDiv.innerHTML = "";
    let total = 0;

    deck.forEach(c => {
        total += c.elixir;
        resultadoDiv.innerHTML += `<div>${c.nome} - ${c.elixir}</div>`;
    });

    resultadoDiv.innerHTML += `<h3>Média de Elixir: ${(total / 8).toFixed(1)}</h3>`;
}

