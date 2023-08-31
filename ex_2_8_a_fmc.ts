function aritmetica(n: number, a1: number, r: number): number {
    if (n === 1) {
        return a1;
    } else {
        return a1 + aritmetica(n - 1, a1 + r, r);
    }
}

const n = 100000;
const a1 = 1;
const r = 2;

console.log(aritmetica(n, a1, r));
