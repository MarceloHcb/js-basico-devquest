function somar(numero1, numero2) {
    let soma = numero1 + numero2;
    return ("A soma dos números é: " + soma)
}

function subtracao(numero1, numero2) {
    let subtrair = numero1 - numero2;
    return ("A subtração dos números é: " + subtrair)
}

function multiplicacao(numero1, numero2) {
    let multiplicar = numero1 * numero2;
    return ("A multiplicação dos números é: " + multiplicar)

}

function divisao(numero1, numero2) {
    let dividir = numero1 / numero2;
    return ("A divisão dos números é: " + dividir)
}

const somando = somar(3, 2);
console.log(somando)

const subtraindo = subtracao(3, 2);
console.log(subtraindo)

const multiplicando = multiplicacao(3, 2);
console.log(multiplicando)

const dividindo = divisao(3, 2);
console.log(dividindo)

