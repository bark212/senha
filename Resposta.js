var primero;
var segundo;
var terceiro;
var quarto;

var resposta1 = 8; 
var resposta2 = 7; 
var resposta3 = 9; 
var resposta4 = 5; 

var tentativa = 5;
const chances = 5;
var acert = 0;

const re1 = document.getElementById("numero1");
const re2 = document.getElementById("numero2");
const re3 = document.getElementById("numero3");
const re4 = document.getElementById("numero4");
const kk = document.getElementById("id");

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gerarNumeros() {
    primero = numeroAleatorio(1, 9);
    segundo = numeroAleatorio(1, 9);
    terceiro = numeroAleatorio(1, 9);
    quarto = numeroAleatorio(1, 9);
    
    console.log(`Números gerados: ${primero}, ${segundo}, ${terceiro}, ${quarto}`);
}

gerarNumeros();

function Resposta(event) {
    event.preventDefault();

    if (tentativa > 0) {
        if (parseInt(re1.value) === primero || parseInt(re1.value) === resposta1) {
            acert += 1;
        }
        if (parseInt(re2.value) === segundo || parseInt(re2.value) === resposta2) {
            acert += 1;
        }
        if (parseInt(re3.value) === terceiro || parseInt(re3.value) === resposta3) {
            acert += 1;
        }
        if (parseInt(re4.value) === quarto || parseInt(re4.value) === resposta4) {
            acert += 1;
        }

        if (acert === 4) {
            alert("Parabéns! Você acertou todos os números!");
            window.location.href = "outra_pagina.html"; // Altere para a URL desejada
        } else {
            alert(`Acertos: ${acert}.`);
            kk.innerHTML = `Você tem <strong>${tentativa - 1} tentativas</strong> restantes para acertar os 4 números.`;
        }

        // Limpar os campos
        re1.value = '';
        re2.value = '';
        re3.value = '';
        re4.value = '';

        tentativa--;
        acert = 0;
    } else {
        window.location.href = "p2.html";
    }
}
