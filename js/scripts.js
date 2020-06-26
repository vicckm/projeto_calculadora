let calculadora = {
    display: document.querySelector("#display"),

};

let valorBotao; 

let botoes = document.querySelectorAll("div > button");

let botaoZero = document.querySelector("#numeroZero");
let botaoUm = document.querySelector("#numeroUm");
let botaoDois = document.querySelector("#numeroDois");
let botaoTres = document.querySelector("#numeroTres");
let botaoQuatro = document.querySelector("#numeroQuatro");
let botaoCinco = document.querySelector("#numeroCinco");
let botaoSeis = document.querySelector("#numeroSeis");
let botaoSete = document.querySelector("#numeroSete");
let botaoOito = document.querySelector("#numeroOito");
let botaoNove = document.querySelector("#numeroNove");

let botaoSoma = document.querySelector("#soma");
let botaoSubtracao = document.querySelector("#subtracao");
let botaoDivisao = document.querySelector("#divisao");
let botaoMultiplicacao = document.querySelector("#multiplicacao");
let botaoIgual = document.querySelector("#igual");
let botaoApagar = document.querySelector("#apagar");


botoes.forEach(function(botao){
    botao.addEventListener("click", function() {
        atribuirValorBotao(botao)
    });
});

function atribuirValorBotao(botao){
    valorBotao = botao.textContent;
    
    if(botao === botaoSoma){
        
    }
}







