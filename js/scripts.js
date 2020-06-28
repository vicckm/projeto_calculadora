// display

let display = document.querySelector("#display");

let tecla = "";

let historico = "";

// números

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

// operadores

let botaoOperadores = document.querySelectorAll("#lado-direito > button");

let botaoSoma = document.querySelector("#soma");
let botaoSubtracao = document.querySelector("#subtracao");
let botaoDivisao = document.querySelector("#divisao");
let botaoMultiplicacao = document.querySelector("#multiplicacao");
let botaoIgual = document.querySelector("#igual");
let botaoDecimal = document.querySelector("#decimal");


// teclado numérico

document.addEventListener("keyup", function(event){
    if(event.key == 0){ 
        mostrarTecla(event);
    } else if(event.key == 1) { 
        mostrarTecla(event);
    } else if(event.key == 2) { 
        mostrarTecla(event);
    } else if(event.key == 3) { 
        mostrarTecla(event);
    } else if(event.key == 4) { 
        mostrarTecla(event);
    } else if(event.key == 5) { 
        mostrarTecla(event);
    } else if(event.key == 6) { 
        mostrarTecla(event);
    } else if(event.key == 7) { 
        mostrarTecla(event);
    } else if(event.key == 8) { 
        mostrarTecla(event);
    } else if(event.key == 9) { 
        mostrarTecla(event);
    } else if(event.key == "+") { 
        mostrarTecla(event);
    } else if(event.key == "-") { 
        mostrarTecla(event);
    } else if(event.key == "*") { 
        mostrarTecla(event);
    } else if(event.key == "/") { 
        mostrarTecla(event);
    } else if(event.key == ",") { 
        mostrarTecla(event);
    } else if(event.key == "Enter") {
        console.log("teste")
    }
})

function mostrarTecla(event){
    tecla = event.key;
    if(tecla == ","){
        display.innerText = ".";
    } else {
        display.innerText = tecla;
    }
}
 







