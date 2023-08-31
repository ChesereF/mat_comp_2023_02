class Progessao {
    primeiro: number;
    constante: number;

    constructor(primeiro: number, constante: number) {
        this.primeiro = primeiro;
        this.constante = constante;
    }

    gerar(n: number): number[] {
        const termos: number[] = [this.primeiro];

        for (let i = 1; i < n; i++) {
            const termo = termos[i - 1] * this.constante;
            termos.push(termo);
        }

        return termos;
    }
}

const primeiro = 1;
const constante = 2;
const quantidade = 50;

const progressao = new Progessao(primeiro, constante);
const termos = progressao.gerar(quantidade);

console.log(`Primeiros ${quantidade} termos da progressão geométrica:`);
console.log(termos.join(', '));
