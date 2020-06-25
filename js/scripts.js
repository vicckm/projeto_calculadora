
//objeto calculadora
let calculadora = {
   display: document.querySelector("#display"),
   botoes: document.querySelectorAll("div > button"),
};



let botaoUm = document.querySelector("#numeroUm");
let botaoSoma = document.querySelector("#soma");
let botaoIgual = document.querySelector("#igual");

let acumulador = "";

let historico = "";

// botaoUm.onclick = function() {
//     let display = calculadora.display.innerText += 1;
// }



// botaoSoma.onclick = function() {
//     acumulador += calculadora.display.innerText;
//     acumulador += " + ";
//     console.log(acumulador)
//      calculadora.display.innerText = "";
// }

// botaoIgual.onclick = function() {
//     //TODO: checar se existe conteúdo dentro do display
  
//     //colocando conteúdo do display no acumulador
//     acumulador += calculadora.display.innerText;
//     //resolvendo conta (conteúdo acumulador)
//     let resultado = eval(acumulador);
//     //colocando no display o conteúdo do acumulador
//     calculadora.display.innerText = resultado;
//     // limpando o acumulador
//     //acumulador = "";

// }

let botoes = document.querySelectorAll("div > button");
 
botoes.forEach(function(botao){
    botao.addEventListener("click", function() {
        let btnSoma = document.querySelector("#soma");
        let btnDivisao = document.querySelector("#divisao");
        let btnMultiplicao = document.querySelector("#multiplicacao");
        let btnSubstracao = document.querySelector("#subtracao");
        let btnIgual = document.querySelector("#igual");

    

        let display = calculadora.display.innerText = this.innerHTML;
    })
})

botaoSoma.addEventListener("click", function(){
    historico += calculadora.display.innerText
    console.log(historico)
});

// function botaoSoma(operador){

// }

// function guardaDigitoDisplay(digito){


// }
