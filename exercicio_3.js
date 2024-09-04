let alfabeto = [];
let mensagem = "";
let letra = [];
let cont = 0;

for (let a = 0; a < 10; a++) {
    alfabeto[a] = prompt("Informe as letras do alfabeto:");
}

for (let i = 0; i < 10; i++) {
    let letra = alfabeto[i].toUpperCase();
    if (!(letra == "A" ||
        letra == "E" ||
        letra == "I" ||
        letra == "O" ||
        letra == "U")) {
        mensagem += letra + "\n";
        cont++;
    }
}





alert(mensagem+cont+"Letras");