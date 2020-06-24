
//objeto calculadora
let calculadora = {};
calculadora.display = document.querySelector("#display");

let botaoUm = document.querySelector("#numeroUm");
let botaoSoma = document.querySelector("#soma");
let botaoIgual = document.querySelector("#igual");

let acumulador = "";

botaoUm.onclick = function() {
    calculadora.display.innerText += 1;
}

botaoSoma.onclick = function() {
    acumulador += calculadora.display.innerText;
    acumulador += " + ";
    console.log(acumulador)
     calculadora.display.innerText = "";
}

botaoIgual.onclick = function() {
    //TODO: checar se existe conteúdo dentro do display
    if(calculadora.display.length > 0){
        console.log(true)
    } console.log(false)
    //colocando conteúdo do display no acumulador
    acumulador += calculadora.display.innerText;
    //resolvendo conta (conteúdo acumulador)
    let resultado = eval(acumulador);
    //colocando no display o conteúdo do acumulador
    calculadora.display.innerText = resultado;
    // limpando o acumulador
    //acumulador = "";

}
