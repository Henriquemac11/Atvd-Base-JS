//Calculo Fatorial
let numero = Number(prompt("Digite um número:"));
let fatorial = 1;

for (let i = 1; i <= numero; i++) {
    fatorial *= i;
}

alert("Fatorial de " + numero + " é " + fatorial);
