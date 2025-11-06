// Seleciona os elementos das luzes

const luzVermelha = document.getElementsById("vermelho");
const luzAmarela = document.getElementsById("amarelo");
const luzVerde = document.getElementsById("verde");

// Botões

const btnVermelho = document.getElementsById("btnVermelho");
const btnAmarelo = document.getElementsById("btnAmarelo");
const btnVeede = document.getElementsById("btnVerde");
const btnAuto = document.getElementsById("btnAuto");
const btnParar = document.getElementsById("btnParar");

// Variável para o modo automático

let intervalo;

function limpar(){
    luzVermelha.className = 'luz';
    luzAmarela.className = 'luz';
    luzVerde.className = 'luz';
}

function acenderVermelho(){
    limpar();
    luzVermelha.classList.add("acesa","vermelha");
}

function acenderAmarelo(){
    limpar();
    luzAmarela.classList.add("acesa","amarela");
}

function acenderVerde(){
    limpar();
    luzVerde.classList.add("acesa","verde");
}

function modoAutomático(){
    limpar();
    let estado =0;
    intervalo = setInterval(()=>{});
}


