let nome;
nome = prompt("Digite o seu nome:");
console.log(nome);
window.alert(`Olá ${nome}!`);
let numero = Number.parseInt(Math.random()*10 + 1);
let tentativas = 0;
let palpite = 0;

//&& -> operação lógica AND (E)
while((palpite != numero) && (tentativas < 5)){
    palpite = prompt("Digite um número: ");
    tentativas++;
    if(palpite > numero){
        window.alert(`Você errou! O número é menor que ${palpite}. Tente outra vez.`);
    } else {
        if(palpite < numero){
            window.alert(`Você errou! O número é maior que ${palpite}. Tente outra vez.`);
        }
    }
}

if(numero == palpite) {
    let palavraTentativa = tentativas==1 ? "tentativa" : "tentativas";
    // if(tentativas == 1)
    //     palavraTentativa = "tentativa";
    // else
    //     palavraTentativa = "tentativas";
    window.alert(`Parabéns ${nome}! O número era ${numero}, e você acertou com ${tentativas} ${palavraTentativa}!!`);
} else {
    window.alert(`Você esgotou suas tentativas e não acertou. O número era ${numero}!`);
}

// let numeroAleatorio = Math.random();
// numeroAleatorio = (numeroAleatorio * 10) + 1;
// numeroAleatorio = Number.parseInt(numeroAleatorio);

// console.log(numeroAleatorio);