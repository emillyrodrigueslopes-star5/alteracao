// Busca os elementos da página.
const jogador = document.getElementById("jogador");
const inimigo = document.getElementById("inimigo");
const placar = document.getElementById("pontos");
const textoNivel = document.getElementById("nivel");
const textoCarros = document.getElementById("carros");
const mensagem = document.getElementById("mensagem");


// Faixas: 0 = esquerda, 1 = meio, 2 = direita.
let faixaJogador = 1;
let faixaInimigo = 0;


// Situação inicial do jogo.
let posicaoInimigo = -70;
let pontos = 0;
let carrosDesviados = 0;
let nivel = 1;
let velocidade = 5;
let terminou = false;


// Move o jogador uma faixa.
function mover(direcao) {
  if (terminou) {
    return;
  }
