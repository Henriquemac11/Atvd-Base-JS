//Sistema de Login
let tentativas = 0;

while (tentativas < 3) {

    let usuario = prompt("Digite o usuário:");
    let senha = prompt("Digite a senha:");

    if (usuario === "admin" && senha === "1234") {
        alert("Login realizado com sucesso!");
        break;
    } else {
        tentativas++;
        alert("Usuário ou senha incorretos.");
    }

    if (tentativas === 3) {
        alert("Acesso bloqueado!");
    }
}
