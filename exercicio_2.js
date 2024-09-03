let nota = [];
nota[0] = parseFloat(prompt("Informe a primeira nota:"));
nota[1] = parseFloat(prompt("Informe a segunda nota:"));
nota[2] = parseFloat(prompt("Informe a terceira nota:"));
nota[3] = parseFloat(prompt("Informe a quarta nota:"));
const quantidadedenotas = 4;

let mensagem = "";
mensagem = `${nota[0]}, ${nota[1]}, ${nota[2]}, ${nota[3]}`;

let media = (nota[0] + nota[1] + nota[2] + nota[3]) / 4;
let mensagem2 = media;

alert(`${mensagem}, ${mensagem2}`);