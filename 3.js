//Calculadora Simples 
let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));
let operacao = prompt("Escolha a operação (+, -, *, /)");

let resultado;

if (operacao === "+") {
    resultado = num1 + num2;
} else if (operacao === "-") {
    resultado = num1 - num2;
} else if (operacao === "*") {
    resultado = num1 * num2;
} else if (operacao === "/") {
    resultado = num1 / num2;
} else {
    alert("Operação inválida");
}

alert("Resultado: " + resultado);

