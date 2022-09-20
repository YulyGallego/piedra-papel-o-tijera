const btnPiedra = document.querySelector(".btnPiedra");
const btnPapel = document.querySelector(".btnPapel");
const btnTijera = document.querySelector(".btnTijera");

const computadora = document.querySelector(".computadora");
const elegirCompu = document.querySelector(".elegirCompu");
const contadorCompu = document.querySelector(".contadorCompu");

const jugador = document.querySelector(".jugador");
const elegirJugador = document.querySelector(".elegirJugador");
const contadorJugador = document.querySelector(".contadorJugador");

const resultado = document.querySelector(".resultado");

btnPiedra.addEventListener("click", elegirpiedra);
btnPapel.addEventListener("click", elegirPapel);
btnTijera.addEventListener("click", elegirTijera);

let puntosJugador = 0;
let puntosComputadora = 0;

function elegirpiedra (){
  let min = 1; 
  let max = 3;
  let numero = Math.floor(Math.random()*(max-min +1) + min);
  elegirJugador.textContent = "Piedra"
  
  if (numero === 1){
    elegirCompu.textContent = "Piedra";
    resultado.textContent = "empate"
  }else if (numero === 2){
    elegirCompu.textContent = "Papel";
    resultado.textContent = "pierde"
    contadorCompu.textContent = (puntosComputadora += 1);
  }else if (numero === 3){
    elegirCompu.textContent = "Tijera";
    resultado.textContent = "gana"
    contadorJugador.textContent = (puntosJugador += 1);
  }
}



function elegirPapel (){
  let min = 1; 
  let max = 3;
  let numero = Math.floor(Math.random()*(max-min +1) + min);
  elegirJugador.textContent = "Papel"
  
  if (numero === 1){
    elegirCompu.textContent = "Piedra";
    resultado.textContent = "gana";
    contadorJugador.textContent = (puntosJugador += 1);
  }else if (numero === 2){
    elegirCompu.textContent = "Papel";
    resultado.textContent = "empate";
  }else if (numero === 3){
    elegirCompu.textContent = "Tijera";
    resultado.textContent = "pierde";
    contadorCompu.textContent = (puntosComputadora += 1);
  }
}

function elegirTijera (){
  let min = 1; 
  let max = 3;
  let numero = Math.floor(Math.random()*(max-min +1) + min);
  elegirJugador.textContent = "Tijera"
  
  if (numero === 1){
    elegirCompu.textContent = "Piedra";
    resultado.textContent = "pierde";
    contadorCompu.textContent = (puntosComputadora += 1);
  }else if (numero === 2){
    elegirCompu.textContent = "Papel";
    resultado.textContent = "gana";
    contadorJugador.textContent = (puntosJugador += 1);
  }else if (numero === 3){
    elegirCompu.textContent = "Tijera";
    resultado.textContent = "empate";
  }
}

