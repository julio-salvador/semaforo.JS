// Seleciona os elementos das luzes

const luzVermelha = document.getElementsById("vermelha");
const luzAmarelo = document.getElementsById("amarelo");
const luzVerde = document.getElementsById("verde");

// Botões

const btnVermelha = document.getElementsById("btnVermelha");
const btnAmarelo = document.getElementsById("btnAmarelo");
const btnVerde = document.getElementsById("btnVerde");
const btnAuto = document.getElementsById("btnAuto");
const btnParar = document.getElementsById("btnParar");

// Variável para o modo automático

let intervalo;

function limpar(){
    luzVermelha.className = 'luz';
    luzAmarelo.className =  'luz';
    luzVerde.className =    'luz';
}

function acenderVermelha(){
    limpar();
    luzVermelha.classList.add("acesa","vermelha");
}

function acenderAmarelo(){
    limpar();
    luzAmarelo.classList.add("acesa","amarelo");
}

function acenderVerde(){
    limpar();
    luzVerde.classList.add("acesa","verde");
}

function modoAutomático(){
    limpar();
    let estado =0;
    intervalo = setInterval(()=>{
        if(estado === 0 ) acenderVermelha();
        else if (estado === 1 ) acenderAmarelo();
        else if (estado === 2 ) acenderVerde();
        estado = (estado + 1) % 3;
    }, 1000)
}

function parar(){
    clearInterval(intervalo);
    limpar;
}

btnParar.onclick = parar;
btnAuto.onclick = modoAutomático;
btnVerde.onclick = acenderVerde;
btnAmarelo.onclick = acenderAmarelo;
btnVermelha.onclick = acenderVermelha;


    




