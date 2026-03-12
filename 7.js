//Soma até Digitar Zero
let soma = 0;
let numero;

do {
    numero = Number(prompt("Digite um número (0 para parar):"));
    soma += numero;
} while (numero !== 0);

alert("Soma total: " + soma);
