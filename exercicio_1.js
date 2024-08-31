let num = [];
let mensagem = "";

for (let i = 0; i < 5; i += 1) {
    num.push(prompt("Informe um número:"));
}

for (let i = 0; i < num.length; i++) {
    mensagem += num[i] + ", ";

}
alert(mensagem);

