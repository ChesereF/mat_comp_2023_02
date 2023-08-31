function fatorial(n:number):number {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}

const numero: number = 5;
const resultado: number = fatorial(numero);
console.log(resultado);
