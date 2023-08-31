class Fibonacci {
    calculados: Record<number, number> = {};
    calcular(n: number): number {
        if (n <= 0) {
            return 0;
        } else if (n === 1 || n === 2) {
            return 1;
        } else {
            if (this.calculados[n]) {
                console.log(`Valor já calculado para F(${n}): ${this.calculados[n]}`);
                return this.calculados[n];
            }
            const resultado = this.calcular(n - 1) + this.calcular(n - 2);
            this.calculados[n] = resultado;
            console.log(`Calculando F(${n}) = ${resultado}`);
            return resultado;
        }
    }
}
const fibonacci = new Fibonacci();
console.log(fibonacci.calcular(12));
console.log(fibonacci.calcular(6))
