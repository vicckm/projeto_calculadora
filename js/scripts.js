// pegando display

let display = document.querySelector("#display");
let acumulador = "";
let resultado = "";

// pegando números

let botaoNumeros = document.querySelectorAll("#lado-esquerdo > button");

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

// pegando operadores

let botaoOperadores = document.querySelectorAll("#lado-direito > button");

let botaoApagar = document.querySelector("#apagar");
let botaoSoma = document.querySelector("#soma");
let botaoSubtracao = document.querySelector("#subtracao");
let botaoDivisao = document.querySelector("#divisao");
let botaoMultiplicacao = document.querySelector("#multiplicacao");
let botaoIgual = document.querySelector("#igual");
let botaoDecimal = document.querySelector("#decimal");

// apagar números

botaoApagar.addEventListener("click", function(){
    limpaDisplay();
})

function limpaDisplay(){
    display.innerText = "";
}

// eventos botões

botaoNumeros.forEach(function(botao){
    botao.addEventListener("click", function(){
        acrescentaNoDisplay(botao); 
    })
})

botaoDecimal.addEventListener("click", function(){
    decimal = botaoDecimal.innerText;
    display.innerText += decimal;
})


function acrescentaNoDisplay(botao){
    display.innerText += botao.innerText;
 }

// cálculo

botaoSoma.addEventListener("click", function(){
    acumulador += display.innerText;
    acumulador += " + "
    display.innerText = ""; 
})

botaoSubtracao.addEventListener("click", function(){
    acumulador += display.innerText;
    acumulador += " - "
    display.innerText = ""; 
})

botaoMultiplicacao.addEventListener("click", function(){
    acumulador += display.innerText;
    acumulador += " * "
    display.innerText = ""; 
})

botaoDivisao.addEventListener("click", function(){
    acumulador += display.innerText;
    acumulador += " / "
    display.innerText = ""; 
})

botaoIgual.addEventListener("click",function(){
    mostraResultado();
})

function mostraResultado(){
    acumulador += display.innerText;
    resultado = eval(acumulador);
    if(resultado == "Infinity"){
        display.innerText = "Conta inválida"
    } else {
        display.innerText = resultado;  
    }
    acumulador = "";
}











